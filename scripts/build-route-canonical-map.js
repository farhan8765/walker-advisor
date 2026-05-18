/**
 * Maps every React App route to the live WordPress canonical (thewalkeradvisor.com).
 */
const fs = require('fs');
const path = require('path');

const PRODUCTION = 'https://thewalkeradvisor.com';

const appJs = fs.readFileSync(path.join(__dirname, '../src/App.js'), 'utf8');
const routes = [...appJs.matchAll(/"(\/[^"]+)":/g)].map((m) => m[1]);

const canonicalsFile = fs.readFileSync(
  path.join(__dirname, '../src/seo/pageCanonicals.js'),
  'utf8'
);
const canonicals = {};
for (const m of canonicalsFile.matchAll(/"(\/[^"]+)":\s*"([^"]+)"/g)) {
  canonicals[m[1]] = m[2];
}

/** React route path -> live WordPress path (when slugs differ) */
const LIVE_PATH_ALIASES = {
  '/amir-abbasi': '/author-amir-abbasi',
  '/robin-dolan': '/author-robin-dolan',
  '/syed-ali': '/author-syed-ali',
  '/contact': '/contact-us',
  '/cookies-policy': '/cookies',
  '/tools': '/best-tools',
  '/3-foods-for-seniors-to-avoid': '/3-foods-seniors-should-avoid',
  '/compact-walkers-for-seniors-a-comprehensive-guide': '/compact-walkers-for-seniors',
  '/best-walking-shoes-for-seniors-in-2026': '/best-walking-shoes-for-seniors-2026',
  '/best-upright-walkers-for-outdoor-use-top-5-picks-from-amazon-2026-edition':
    '/best-upright-walkers-for-outdoor-use-2025',
  '/best-heavy-duty-walkers-for-obese-seniors-top-5-picks-for-2026':
    '/best-heavy-duty-walkers-for-obese-seniors',
  '/heavy-duty-walkers-for-tall-people-top-picks': '/heavy-duty-walkers-for-tall-people',
  '/stop-the-struggle-the-ultimate-easy-guide-to-fitting-a-walker-for-seniors':
    '/an-easy-guide-on-how-to-fit-a-walker-for-seniors',
  '/caregivers-guide-to-helping-seniors-pick-and-use-the-perfect-walker':
    '/caregivers-guide-to-senior-walker-selection-and-usage',
  '/emergency-preparedness-for-walker-users-top-medical-alert-devices-smart-tech':
    '/emergency-preparedness-for-walker-users',
  '/how-to-adjust-a-walker-to-the-correct-height-a-safety-checklist':
    '/how-to-adjust-a-walker-to-the-correct-height',
  '/top-4-walkers-with-seats-for-seniors-find-your-perfect-fit':
    '/best-4-wheel-walkers-with-seats',
  '/valentines-day-gift-ideas-for-seniors-to-give-to-each-other':
    '/valentines-day-gift-ideas-for-seniors',
  '/20-thoughtful-inexpensive-christmas-gift-ideas-for-senior-citizens-under-20':
    '/inexpensive-christmas-gift-ideas-for-senior-citizens',
  '/will-medicare-really-pay-for-your-walker-the-truth-every-senior-should-know':
    '/does-medicare-pay-for-walkers-for-seniors',
  '/got-a-walker-with-large-wheels-try-these-game-changing-tips-for-seniors':
    '/best-wheel-size-for-walkers',
  '/the-7-best-places-to-buy-walkers-for-seniors':
    '/where-to-buy-walkers-for-seniors-top-brands-reviews',
  '/mental-health-in-old-age-a-complete-guide-for-seniors-caregivers':
    '/mental-health-in-old-age',
  '/holiday-safety-tips-for-seniors-using-walkers':
    '/holiday-safety-tips-seniors-using-walkers',
  '/holiday-safety-tips-for-seniors-prevent-falls-fires-seasonal-risks':
    '/holiday-safety-tips-for-seniors',
  '/the-best-holiday-gifts-for-seniors-who-have-everything':
    '/best-holiday-gifts-for-seniors-who-have-everything',
  '/how-to-travel-with-a-walker-tips-for-seniors': '/how-to-travel-with-a-walker',
  '/social-activities-for-older-adults-the-best-ways-to-stay-connected-active-and-happy':
    '/social-activities-for-older-adults',
  '/valentines-day-ideas-what-seniors-can-give-each-other': '/valentines-day-ideas',
  '/every-way-to-return-amazon-orders-for-free': '/free-amazon-returns-guide',
  '/understanding-upright-walkers-how-they-improve-senior-posture':
    '/understanding-upright-walkers-senior-posture',
  '/the-complete-guide-to-walker-and-rollator-types-which-one-fits-you-best':
    '/types-of-medical-walkers-and-rollators-a-comprehensive-guide',
  '/buying-a-walker-dont-make-a-move-until-you-read-this':
    '/tips-for-choosing-and-using-walkers-a-comprehensive-guide',
  '/rain-snow-or-shine-how-to-stay-safe-with-your-walker':
    '/walker-safety-tips-for-all-weather-conditions',
  '/the-must-have-walker-safety-features-every-senior-should-know-about':
    '/safest-walkers-for-seniors-top-5-choices',
  '/most-people-use-walkers-wrong-are-you-making-these-mistakes':
    '/what-is-the-proper-way-to-use-a-walker',
  '/struggling-with-a-walker-in-a-small-home-try-these-space-saving-hacks':
    '/tips-using-walker-small-homes',
  '/replacement-walker-hand-grips-for-all-sizes-at-walmart':
    '/replacement-walker-hand-grips-for-all-kinds-of-walkers',
};

/** Fetched directly from live (not in sitemap export) */
const LIVE_FETCHED = {
  '/best-travel-walkers-for-seniors-2025':
    'https://thewalkeradvisor.com/best-travel-walkers-for-seniors-2025/',
  '/best-small-walkers-for-seniors-top-4-options':
    'https://thewalkeradvisor.com/best-small-walkers-for-seniors-top-4-options/',
  '/christmas-gift-ideas-for-elderly-ladies-this-december-2026':
    'https://thewalkeradvisor.com/christmas-gift-ideas-for-elderly-ladies-this-december-2026/',
  '/16-best-christmas-gifts-for-seniors-amazon-2026':
    'https://thewalkeradvisor.com/16-best-christmas-gifts-for-seniors-amazon-2025/',
};

function resolve(route) {
  if (LIVE_FETCHED[route]) return LIVE_FETCHED[route];
  const livePath = LIVE_PATH_ALIASES[route] || route;
  if (canonicals[livePath]) return canonicals[livePath];
  if (canonicals[route]) return canonicals[route];
  return `${PRODUCTION}${route}/`;
}

const map = { '/': canonicals['/'] || `${PRODUCTION}/` };
for (const route of routes) {
  map[route] = resolve(route);
}

const out = `/** Maps React router paths to production canonical URLs from live WordPress. */
export const ROUTE_CANONICALS = {
${Object.entries(map)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([r, h]) => `  ${JSON.stringify(r)}: ${JSON.stringify(h)},`)
  .join('\n')}
};

export function getCanonicalForRoute(pathname) {
  const path = (pathname || '/').replace(/\\/+$/, '') || '/';
  return ROUTE_CANONICALS[path] ?? null;
}
`;

fs.writeFileSync(path.join(__dirname, '../src/seo/routeCanonicals.js'), out, 'utf8');
console.log('Wrote', Object.keys(map).length, 'route canonicals');
