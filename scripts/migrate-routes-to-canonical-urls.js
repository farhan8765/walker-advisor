/**
 * Migrates React routes + internal links to match canonical URL paths.
 * Old paths are kept in routeRedirects.js for client-side redirects.
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const PRODUCTION = 'https://thewalkeradvisor.com';

function pathFromCanonicalUrl(url) {
  try {
    const u = new URL(url);
    return u.pathname.replace(/\/+$/, '') || '/';
  } catch {
    return '';
  }
}

function walkDir(dir, ext, files = []) {
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    if (name === 'node_modules' || name === 'build') continue;
    const stat = fs.statSync(full);
    if (stat.isDirectory()) walkDir(full, ext, files);
    else if (ext.some((e) => name.endsWith(e))) files.push(full);
  }
  return files;
}

function escapeRegExp(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Parse current routeCanonicals: reactPath -> canonicalPath
const canonSrc = fs.readFileSync(path.join(ROOT, 'src/seo/routeCanonicals.js'), 'utf8');
const OLD_TO_NEW = {};
for (const m of canonSrc.matchAll(
  /"(\/[^"]+)":\s*"https:\/\/thewalkeradvisor\.com([^"]*)"/g
)) {
  const oldPath = m[1];
  const newPath = pathFromCanonicalUrl(`${PRODUCTION}${m[2]}`);
  if (oldPath !== newPath) OLD_TO_NEW[oldPath] = newPath;
}

// When two old routes share one canonical, redirect the longer/duplicate to canonical once
const newToOlds = {};
for (const [oldP, newP] of Object.entries(OLD_TO_NEW)) {
  if (!newToOlds[newP]) newToOlds[newP] = [];
  newToOlds[newP].push(oldP);
}

console.log(`Migrating ${Object.keys(OLD_TO_NEW).length} route paths to canonical URLs`);

// --- routeRedirects.js ---
const redirectsOut = `/** Legacy React paths → canonical URL paths (301-style via replaceState in App). */
export const ROUTE_REDIRECTS = {
${Object.entries(OLD_TO_NEW)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([oldP, newP]) => `  ${JSON.stringify(oldP)}: ${JSON.stringify(newP)},`)
  .join('\n')}
};

export function resolveRoutePath(pathname) {
  const path = (pathname || '/').replace(/\\/+$/, '') || '/';
  return ROUTE_REDIRECTS[path] ?? path;
}
`;
fs.writeFileSync(path.join(ROOT, 'src/seo/routeRedirects.js'), redirectsOut, 'utf8');

// --- routeCanonicals.js (self-referencing) ---
const appJs = fs.readFileSync(path.join(ROOT, 'src/App.js'), 'utf8');
const routeKeys = [...appJs.matchAll(/"(\/[^"]+)":/g)].map((m) => m[1]);

const ROUTE_CANONICALS = { '/': `${PRODUCTION}/` };
for (const oldKey of routeKeys) {
  const newKey = OLD_TO_NEW[oldKey] ?? oldKey;
  ROUTE_CANONICALS[newKey] = `${PRODUCTION}${newKey}/`;
}

const canonOut = `/** Canonical URLs match browser paths (thewalkeradvisor.com). */
export const ROUTE_CANONICALS = {
${Object.entries(ROUTE_CANONICALS)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([r, h]) => `  ${JSON.stringify(r)}: ${JSON.stringify(h)},`)
  .join('\n')}
};

const SITE_ORIGIN = '${PRODUCTION}';

export function getCanonicalForRoute(pathname) {
  const path = (pathname || '/').replace(/\\/+$/, '') || '/';
  return ROUTE_CANONICALS[path] ?? (path === '/' ? \`\${SITE_ORIGIN}/\` : \`\${SITE_ORIGIN}\${path}/\`);
}
`;
fs.writeFileSync(path.join(ROOT, 'src/seo/routeCanonicals.js'), canonOut, 'utf8');

// --- routeSeo.js key remap ---
const seoSrc = fs.readFileSync(path.join(ROOT, 'src/seo/routeSeo.js'), 'utf8');
let newSeoSrc = seoSrc;
for (const [oldP, newP] of Object.entries(OLD_TO_NEW).sort((a, b) => b[0].length - a[0].length)) {
  newSeoSrc = newSeoSrc.replace(
    new RegExp(`${escapeRegExp(JSON.stringify(oldP))}:`),
    `${JSON.stringify(newP)}:`
  );
}
fs.writeFileSync(path.join(ROOT, 'src/seo/routeSeo.js'), newSeoSrc, 'utf8');

// --- routeSeoOverrides.js key remap ---
const overridesPath = path.join(ROOT, 'src/seo/routeSeoOverrides.js');
let overridesSrc = fs.readFileSync(overridesPath, 'utf8');
for (const [oldP, newP] of Object.entries(OLD_TO_NEW).sort((a, b) => b[0].length - a[0].length)) {
  overridesSrc = overridesSrc.replace(
    new RegExp(`${escapeRegExp(JSON.stringify(oldP))}:`),
    `${JSON.stringify(newP)}:`
  );
}
fs.writeFileSync(overridesPath, overridesSrc, 'utf8');

// --- App.js route keys ---
let newAppJs = appJs;
for (const [oldP, newP] of Object.entries(OLD_TO_NEW).sort((a, b) => b[0].length - a[0].length)) {
  newAppJs = newAppJs.replace(
    new RegExp(`${escapeRegExp(JSON.stringify(oldP))}:`),
    `${JSON.stringify(newP)}:`
  );
}
if (!newAppJs.includes('resolveRoutePath')) {
  newAppJs = newAppJs.replace(
    'import { applyRouteDocumentSeo } from "./seo/siteDocument";',
    'import { applyRouteDocumentSeo } from "./seo/siteDocument";\nimport { resolveRoutePath } from "./seo/routeRedirects";'
  );
  newAppJs = newAppJs.replace(
    /useEffect\(\(\) => \{\s*const path = window\.location\.pathname;/,
    `useEffect(() => {
    const raw = window.location.pathname;
    const resolved = resolveRoutePath(raw);
    if (resolved !== (raw.replace(/\\/+$/, '') || '/')) {
      window.history.replaceState(null, '', resolved + window.location.search + window.location.hash);
    }
    const path = resolved;`
  );
  newAppJs = newAppJs.replace(
    'const Page = routes[window.location.pathname] || Home;',
    'const Page = routes[resolveRoutePath(window.location.pathname)] || Home;'
  );
}
fs.writeFileSync(path.join(ROOT, 'src/App.js'), newAppJs, 'utf8');

// --- Replace hrefs across src + public ---
const files = [
  ...walkDir(path.join(ROOT, 'src'), ['.js', '.jsx']),
  ...walkDir(path.join(ROOT, 'public'), ['.html', '.xml']),
];

let totalReplacements = 0;
for (const file of files) {
  if (file.includes('routeRedirects.js') || file.includes('routeCanonicals.js')) continue;
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;
  for (const [oldP, newP] of Object.entries(OLD_TO_NEW).sort((a, b) => b[0].length - a[0].length)) {
    const patterns = [
      [`href="${oldP}"`, `href="${newP}"`],
      [`href='${oldP}'`, `href='${newP}'`],
      [`href="${oldP}/"`, `href="${newP}/"`],
      [`href='${oldP}/'`, `href='${newP}/'`],
      [`"${oldP}"`, `"${newP}"`], // only in migration context - too broad?
    ];
    for (const [from, to] of patterns.slice(0, 4)) {
      if (content.includes(from)) {
        const count = content.split(from).length - 1;
        content = content.split(from).join(to);
        totalReplacements += count;
        changed = true;
      }
    }
  }
  if (changed) fs.writeFileSync(file, content, 'utf8');
}

// Duplicate route: walmart grips -> same page as all-kinds (remove duplicate App route key if exists)
const dupOld = '/replacement-walker-hand-grips-for-all-sizes-at-walmart';
const dupNew = OLD_TO_NEW[dupOld];
if (dupNew && newAppJs.includes(`"${dupNew}": WalmartWalkerGripsDetail`)) {
  // After migration both might map to same key - second wins in object literal
  console.log('Note: walmart grips route merged into', dupNew);
}

console.log(`Done. ${totalReplacements} href/string replacements in source files.`);
console.log('Redirects:', Object.keys(OLD_TO_NEW).length);
