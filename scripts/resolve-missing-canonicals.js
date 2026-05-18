const STAGING = 'https://darkcyan-lion-250828.hostingersite.com';
const PRODUCTION = 'https://thewalkeradvisor.com';

const paths = [
  '/every-way-to-return-amazon-orders-for-free',
  '/best-travel-walkers-for-seniors-2025',
  '/christmas-gift-ideas-for-elderly-ladies-this-december-2026',
  '/16-best-christmas-gifts-for-seniors-amazon-2026',
  '/understanding-upright-walkers-how-they-improve-senior-posture',
  '/replacement-walker-hand-grips-for-all-sizes-at-walmart',
  '/the-complete-guide-to-walker-and-rollator-types-which-one-fits-you-best',
  '/buying-a-walker-dont-make-a-move-until-you-read-this',
  '/rain-snow-or-shine-how-to-stay-safe-with-your-walker',
  '/the-must-have-walker-safety-features-every-senior-should-know-about',
  '/most-people-use-walkers-wrong-are-you-making-these-mistakes',
  '/struggling-with-a-walker-in-a-small-home-try-these-space-saving-hacks',
  '/best-small-walkers-for-seniors-top-4-options',
  '/lightweight-folding-walker-benefits',
  '/best-travel-walkers-for-seniors',
];

async function main() {
  for (const p of paths) {
    try {
      const res = await fetch(`${STAGING}${p}/`, { redirect: 'follow' });
      const html = await res.text();
      const m =
        html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i) ||
        html.match(/<link[^>]+href=["']([^"']+)["'][^>]+rel=["']canonical["']/i);
      const c = m ? m[1].replace(STAGING, PRODUCTION) : `NO (${res.status}) ${res.url}`;
      console.log(p, '->', c);
    } catch (e) {
      console.log(p, '-> ERR', e.message);
    }
    await new Promise((r) => setTimeout(r, 200));
  }
}
main();
