/**
 * Fetches meta title + description from staging WordPress for each React route
 * (using ROUTE_CANONICALS paths) and writes src/seo/routeSeo.js
 */
const fs = require('fs');
const path = require('path');

const STAGING = 'https://darkcyan-lion-250828.hostingersite.com';
const PRODUCTION = 'https://thewalkeradvisor.com';

const canonicalsSrc = fs.readFileSync(
  path.join(__dirname, '../src/seo/routeCanonicals.js'),
  'utf8'
);

const routes = {};
for (const m of canonicalsSrc.matchAll(
  /"(\/[^"]+)":\s*"https:\/\/thewalkeradvisor\.com([^"]*)"/g
)) {
  routes[m[1]] = `${STAGING}${m[2]}`;
}

function extractTitle(html) {
  const m = html.match(/<title[^>]*>([^<]*)<\/title>/i);
  return m ? m[1].replace(/\s+/g, ' ').trim() : '';
}

function extractDescription(html) {
  const patterns = [
    /<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)["']/i,
    /<meta[^>]+content=["']([^"']*)["'][^>]+name=["']description["']/i,
    /<meta[^>]+property=["']og:description["'][^>]+content=["']([^"']*)["']/i,
  ];
  for (const re of patterns) {
    const m = html.match(re);
    if (m && m[1].trim()) return m[1].replace(/\s+/g, ' ').trim();
  }
  return '';
}

const HOME_TITLE_MARKER = 'Best Walkers for Seniors | Unbiased Reviews';

function decodeHtmlEntities(str) {
  if (!str) return '';
  return str
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCharCode(parseInt(h, 16)))
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&nbsp;/g, ' ');
}

async function fetchSeo(url) {
  const res = await fetch(url, {
    headers: { 'User-Agent': 'WalkerAdvisorSeoBot/1.0' },
    redirect: 'follow',
  });
  const html = await res.text();
  return {
    title: decodeHtmlEntities(extractTitle(html)),
    description: decodeHtmlEntities(extractDescription(html)),
    finalUrl: res.url,
  };
}

async function main() {
  const seo = {};
  const failures = [];
  routes['/'] = `${STAGING}/`;
  const entries = Object.entries(routes);

  for (let i = 0; i < entries.length; i++) {
    const [route, url] = entries[i];
    const fetchUrl = url.endsWith('/') ? url : `${url}/`;
    try {
      const { title, description } = await fetchSeo(fetchUrl);
      if (!title) {
        failures.push({ route, reason: 'no title' });
        continue;
      }
      if (route !== '/' && title.includes(HOME_TITLE_MARKER)) {
        failures.push({ route, reason: 'homepage fallback (page may not exist on live)' });
        continue;
      }
      seo[route] = { title, description: description || '' };
      if ((i + 1) % 10 === 0) console.log(`  ${i + 1}/${entries.length}`);
      await new Promise((r) => setTimeout(r, 180));
    } catch (e) {
      failures.push({ route, reason: String(e.message || e) });
    }
  }

  const home = seo['/'] || {
    title: 'Best Walkers for Seniors | Unbiased Reviews – The Walker Advisor',
    description:
      'Unbiased reviews of the best walkers for seniors. Compare top brands and ratings to find the safest, most comfortable mobility aids',
  };
  delete seo['/'];

  const lines = Object.entries(seo)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([route, { title, description }]) => {
      return `  ${JSON.stringify(route)}: { title: ${JSON.stringify(title)}, description: ${JSON.stringify(description)} },`;
    });

  const out = `/** Auto-generated from live WordPress SEO (${new Date().toISOString().slice(0, 10)}). */
import { ROUTE_SEO_OVERRIDES } from './routeSeoOverrides';
export const HOME_ROUTE_SEO = { title: ${JSON.stringify(home.title)}, description: ${JSON.stringify(home.description)} };

export const ROUTE_SEO = {
${lines.join('\n')}
};

export function getSeoForRoute(pathname) {
  const path = (pathname || '/').replace(/\\/+$/, '') || '/';
  if (path === '/') return HOME_ROUTE_SEO;
  return ROUTE_SEO_OVERRIDES[path] ?? ROUTE_SEO[path] ?? null;
}
`;

  fs.writeFileSync(path.join(__dirname, '../src/seo/routeSeo.js'), out, 'utf8');
  console.log(`Wrote ${Object.keys(seo).length} entries to routeSeo.js`);
  if (failures.length) console.warn('Failures:', failures);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
