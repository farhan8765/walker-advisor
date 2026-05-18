/**
 * Fetches canonical URLs from the staging WordPress site and writes pageCanonicals.js
 * with thewalkeradvisor.com as the production domain.
 */
const fs = require('fs');
const path = require('path');

const STAGING = 'https://darkcyan-lion-250828.hostingersite.com';
const PRODUCTION = 'https://thewalkeradvisor.com';

function toProduction(url) {
  return url.replace(STAGING, PRODUCTION).replace('http://thewalkeradvisor.com', PRODUCTION);
}

function normalizePath(url) {
  try {
    const u = new URL(url);
    let p = u.pathname.replace(/\/+$/, '') || '/';
    return p;
  } catch {
    return null;
  }
}

async function fetchText(url) {
  const res = await fetch(url, {
    headers: { 'User-Agent': 'WalkerAdvisorCanonicalBot/1.0' },
    redirect: 'follow',
  });
  if (!res.ok) throw new Error(`${url} -> ${res.status}`);
  return res.text();
}

function extractLocUrls(xml) {
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
}

function extractCanonical(html) {
  const m =
    html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i) ||
    html.match(/<link[^>]+href=["']([^"']+)["'][^>]+rel=["']canonical["']/i);
  return m ? m[1].trim() : null;
}

async function main() {
  const indexXml = await fetchText(`${STAGING}/wp-sitemap.xml`);
  const subSitemaps = extractLocUrls(indexXml).filter(
    (u) => u.includes('post-sitemap') || u.includes('page-sitemap')
  );

  const allUrls = [];
  for (const sm of subSitemaps) {
    const xml = await fetchText(sm);
    allUrls.push(...extractLocUrls(xml));
  }

  console.log(`Found ${allUrls.length} URLs in sitemaps`);

  const byPath = {};
  const failures = [];

  for (let i = 0; i < allUrls.length; i++) {
    const pageUrl = allUrls[i];
    try {
      const html = await fetchText(pageUrl);
      let canonical = extractCanonical(html);
      if (!canonical) {
        canonical = pageUrl;
      }
      canonical = toProduction(canonical);
      const p = normalizePath(canonical);
      if (p) byPath[p] = canonical.endsWith('/') ? canonical : `${canonical}/`;
      if ((i + 1) % 10 === 0) console.log(`  ${i + 1}/${allUrls.length}`);
      await new Promise((r) => setTimeout(r, 150));
    } catch (e) {
      failures.push({ pageUrl, error: String(e.message || e) });
    }
  }

  const outPath = path.join(__dirname, '../src/seo/pageCanonicals.js');
  const lines = Object.entries(byPath)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([p, href]) => `  ${JSON.stringify(p)}: ${JSON.stringify(href)},`);

  const content = `/** Auto-generated from live WordPress canonicals (${new Date().toISOString().slice(0, 10)}). */
export const PAGE_CANONICALS = {
${lines.join('\n')}
};

export function getCanonicalForPath(pathname) {
  const path = (pathname || '/').replace(/\/+$/, '') || '/';
  const key = path === '' ? '/' : path;
  return PAGE_CANONICALS[key] ?? null;
}
`;

  fs.writeFileSync(outPath, content, 'utf8');
  console.log(`Wrote ${Object.keys(byPath).length} canonicals to ${outPath}`);
  if (failures.length) {
    console.warn(`Failures (${failures.length}):`, failures.slice(0, 5));
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
