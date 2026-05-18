/**
 * Imports SEO from Walkers Advisors Tracking Sheet (gid=69327920).
 * Maps live WordPress paths -> React routes; domain = thewalkeradvisor.com
 */
const fs = require('fs');
const path = require('path');

const PRODUCTION = 'https://thewalkeradvisor.com';
const STAGING = 'https://darkcyan-lion-250828.hostingersite.com';

function normalizeUrl(url) {
  if (!url || typeof url !== 'string') return '';
  return url
    .trim()
    .replace(STAGING, PRODUCTION)
    .replace(/([^:]\/)\/+/g, '$1');
}

function pathFromUrl(url) {
  try {
    const u = new URL(normalizeUrl(url));
    return u.pathname.replace(/\/+$/, '') || '/';
  } catch {
    return '';
  }
}

/** React route -> live WordPress path (when slugs differ) */
const REACT_TO_LIVE = {
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
    '/how-to-use-walker-large-wheels-seniors-safely',
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
    '/important-safety-features-walkers-for-seniors',
  '/most-people-use-walkers-wrong-are-you-making-these-mistakes':
    '/what-is-the-proper-way-to-use-a-walker',
  '/struggling-with-a-walker-in-a-small-home-try-these-space-saving-hacks':
    '/tips-using-walker-small-homes',
  '/replacement-walker-hand-grips-for-all-sizes-at-walmart':
    '/replacement-walker-hand-grips-for-all-kinds-of-walkers',
  '/best-travel-walkers-for-seniors-2025': '/best-travel-walkers-for-seniors-2025',
  '/16-best-christmas-gifts-for-seniors-amazon-2026':
    '/16-best-christmas-gifts-for-seniors-amazon-2025',
  '/christmas-gift-ideas-for-elderly-ladies-this-december-2026':
    '/christmas-gift-ideas-for-elderly-ladies-december-2025',
  '/elenker-vs-nova-upright-walkers-2026': '/elenker-vs-nova-upright-walkers-2025',
  '/senior-safety-how-to-use-a-walker-on-stairs':
    '/senior-safety-how-to-use-a-walker-on-stairs',
};

const LIVE_TO_REACT = Object.fromEntries(
  Object.entries(REACT_TO_LIVE).map(([react, live]) => [live, react])
);

// [pageUrl, title, description, canonical] from tracking sheet
const SHEET_ROWS = [
  ['https://darkcyan-lion-250828.hostingersite.com/can-heart-issues-increase-fall-risk-in-seniors/', 'Can Heart Issues Increase Fall Risk in Seniors?', 'Discover how heart conditions like arrhythmia, low blood pressure, and heart failure can increase fall risk in seniors, and what you can do to stay safe', 'https://darkcyan-lion-250828.hostingersite.com/can-heart-issues-increase-fall-risk-in-seniors/'],
  ['https://darkcyan-lion-250828.hostingersite.com/understanding-upright-walkers-senior-posture/', 'Upright Walkers for Seniors, Improve Posture & Mobility', 'Learn how upright walkers improve senior posture, enhance balance, and reduce strain. Explore benefits, tips, and top features for healthier walking.', 'https://darkcyan-lion-250828.hostingersite.com/understanding-upright-walkers-senior-posture/'],
  ['https://darkcyan-lion-250828.hostingersite.com/how-to-choose-walking-shoes-for-balance-and-stability/', 'How to Choose Walking Shoes for Stability', 'Learn how to choose walking shoes for better balance and stability with expert tips on support, cushioning, grip, and proper fit.', 'https://darkcyan-lion-250828.hostingersite.com/how-to-choose-walking-shoes-for-balance-and-stability/'],
  ['https://darkcyan-lion-250828.hostingersite.com/why-seniors-need-proper-walking-shoes/', 'Why Seniors Need Walking Shoes', 'Learn how proper walking shoes keep seniors safe, reduce joint pain, and prevent falls.', 'https://darkcyan-lion-250828.hostingersite.com/why-seniors-need-proper-walking-shoes/'],
  ['https://darkcyan-lion-250828.hostingersite.com/mental-health-in-old-age/', 'Mental Health in Old Age: Causes, Signs & Practical Support Guide', 'Discover the causes, warning signs, and proven strategies to protect mental health in old age. A complete expert guide for seniors, caregivers, and families by The Walker Advisor.', 'https://darkcyan-lion-250828.hostingersite.com/mental-health-in-old-age/'],
  ['https://darkcyan-lion-250828.hostingersite.com/valentines-day-ideas/', "Valentine's Day Ideas for Seniors", "Simple, heartfelt Valentine's Day gifts and moments seniors will cherish, love that grows stronger with time.", 'https://darkcyan-lion-250828.hostingersite.com/valentines-day-ideas/'],
  ['https://darkcyan-lion-250828.hostingersite.com/how-to-use-a-walker-with-wheels/', 'How To Use A Walker With Wheels Safely – Complete Guide', 'Learn how to use a walker with wheels safely and effectively. Step-by-step instructions, tips for seniors, and safety precautions to improve mobility and independence.', 'https://darkcyan-lion-250828.hostingersite.com/how-to-use-a-walker-with-wheels/'],
  ['https://darkcyan-lion-250828.hostingersite.com/best-mobility-devices-for-seniors/', 'Best Mobility Devices for Seniors (2026 Guide)', 'Discover the best mobility devices for seniors to improve safety, comfort, and independence. Compare walkers, canes, wheelchairs, and scooters.', 'https://darkcyan-lion-250828.hostingersite.com/best-mobility-devices-for-seniors/'],
  ['https://darkcyan-lion-250828.hostingersite.com/can-osteoarthritis-lead-to-more-falls-in-seniors/', 'Osteoarthritis and Fall Risk in Seniors', 'Learn how osteoarthritis increases fall risk in seniors and discover simple ways to improve balance, mobility, and safety.', 'https://darkcyan-lion-250828.hostingersite.com/can-osteoarthritis-lead-to-more-falls-in-seniors/'],
  ['https://darkcyan-lion-250828.hostingersite.com/holiday-safety-tips-for-seniors/', 'Holiday Safety Tips for Seniors', 'Keep seniors safe this holiday with tips on falls, fire, décor, and wellness for a joyful, worry-free season.', 'https://darkcyan-lion-250828.hostingersite.com/holiday-safety-tips-for-seniors/'],
  ['https://darkcyan-lion-250828.hostingersite.com/holiday-safety-tips-seniors-using-walkers/', 'Holiday Safety Tips for Seniors Using Walkers', 'Merry and safe holidays for walker users! Clear paths, crowd navigation, gift safety, winter weather tips, and more to help seniors enjoy Christmas confidently.', 'https://darkcyan-lion-250828.hostingersite.com/holiday-safety-tips-seniors-using-walkers/'],
  ['https://darkcyan-lion-250828.hostingersite.com/senior-safety-how-to-use-a-walker-on-stairs/', 'Safe Ways to Use a Walker on Stairs – Senior Guide', 'Can seniors safely use a walker on stairs? The Walker Advisor reveals why most walkers are dangerous on stairs, the only safe techniques, and smarter long-term solutions.', 'https://darkcyan-lion-250828.hostingersite.com/senior-safety-how-to-use-a-walker-on-stairs/'],
  ['https://darkcyan-lion-250828.hostingersite.com/free-amazon-returns-guide/', 'Free Amazon Returns: Complete Hassle-Free Guide', 'Discover all ways to return Amazon orders for free with this step-by-step guide. Save time and money with hassle-free returns!', 'https://darkcyan-lion-250828.hostingersite.com/free-amazon-returns-guide/'],
  ['https://darkcyan-lion-250828.hostingersite.com/the-secret-amazon-shopping-hack-to-get-a-deal-on-just-about-anything/', 'Secret Amazon Hack to Save on Anything', 'Learn how to save big with Amazon Warehouse deals and coupons, get discounts on almost any product without waiting for sales.', 'https://darkcyan-lion-250828.hostingersite.com/the-secret-amazon-shopping-hack-to-get-a-deal-on-just-about-anything/'],
  ['https://darkcyan-lion-250828.hostingersite.com/how-to-travel-with-a-walker/', 'Travel Safely with a Walker: Senior Tips', 'Discover expert travel tips for seniors using walkers. Learn how to pack, plan, and move with confidence. Start your safe journey today!', 'https://darkcyan-lion-250828.hostingersite.com/how-to-travel-with-a-walker/'],
  ['https://darkcyan-lion-250828.hostingersite.com/the-side-effects-of-using-a-cane/', 'Cane Side Effects & Safer Alternatives', 'Learn cane side effects, prevention tips, and smart alternatives like walkers. Expert insights from The Walker Advisor.', 'https://darkcyan-lion-250828.hostingersite.com/the-side-effects-of-using-a-cane/'],
  ['https://darkcyan-lion-250828.hostingersite.com/replacement-walker-hand-grips-for-all-kinds-of-walkers/', 'Replacement Walker Hand Grips for All Kinds of Walkers', 'Discover the best replacement walker hand grips for seniors. Learn who needs them, types available, and top Amazon picks. Find comfort & stability, learn more today.', 'https://darkcyan-lion-250828.hostingersite.com/replacement-walker-hand-grips-for-all-kinds-of-walkers/'],
  ['https://darkcyan-lion-250828.hostingersite.com/an-easy-guide-on-how-to-fit-a-walker-for-seniors/', 'How to Fit a Walker for Seniors Safely', 'Step-by-step guide to fitting a walker for seniors. Learn types, adjustments, and tips to boost safety, comfort, and independence today.', 'https://darkcyan-lion-250828.hostingersite.com/an-easy-guide-on-how-to-fit-a-walker-for-seniors/'],
  ['https://darkcyan-lion-250828.hostingersite.com/must-have-walker-accessories-to-make-life-easier-and-safer/', 'Essential Walker Accessories for Safety & Comfort', 'Discover must-have walker accessories that boost safety, comfort, and independence. Learn how to customize your walker with expert-approved add-ons.', 'https://darkcyan-lion-250828.hostingersite.com/must-have-walker-accessories-to-make-life-easier-and-safer/'],
  ['https://darkcyan-lion-250828.hostingersite.com/emergency-preparedness-for-walker-users/', 'Top Medical Alert Devices for Walker Users Stay Safe Now', 'Ensure safety with top medical alert systems for walker users. Discover smart tech, wearable devices, and emergency preparedness tips. Learn more inside!', 'https://darkcyan-lion-250828.hostingersite.com/emergency-preparedness-for-walker-users/'],
  ['https://darkcyan-lion-250828.hostingersite.com/how-to-adjust-a-walker-to-the-correct-height/', 'Walker Height Guide: Safe Use for Seniors', 'Learn how to set the correct walker height for seniors to improve posture, ensure comfort, and reduce fall risks with easy expert tips.', 'https://darkcyan-lion-250828.hostingersite.com/how-to-adjust-a-walker-to-the-correct-height/'],
  ['https://darkcyan-lion-250828.hostingersite.com/how-to-transition-from-a-walker-to-walking-independently/', 'Transitioning From Walker to Walking Alone', 'Ready to walk without a walker? Follow expert tips, step-by-step guidance, and therapy exercises to safely regain independent mobility.', 'https://darkcyan-lion-250828.hostingersite.com/how-to-transition-from-a-walker-to-walking-independently/'],
  ['https://darkcyan-lion-250828.hostingersite.com/caregivers-guide-to-senior-walker-selection-and-usage/', "Caregiver's Guide to Senior Walker Selection & Usage", 'Discover how caregivers can assist seniors in choosing, fitting, and safely using walkers. Practical tips for improving mobility and independence. Read now!', 'https://darkcyan-lion-250828.hostingersite.com/caregivers-guide-to-senior-walker-selection-and-usage/'],
  ['https://darkcyan-lion-250828.hostingersite.com/how-do-supportive-grips-on-walkers-help-seniors-with-mobility/', "How Supportive Grips on Walkers Help Seniors' Mobility", 'Learn how supportive grips on walkers improve mobility, safety, and comfort for seniors, enhancing their quality of life and independence.', 'https://darkcyan-lion-250828.hostingersite.com/how-do-supportive-grips-on-walkers-help-seniors-with-mobility/'],
  ['https://darkcyan-lion-250828.hostingersite.com/types-of-medical-walkers-and-rollators-a-comprehensive-guide/', 'Types of Medical Walkers and Rollators: A Comprehensive Guide', 'Explore the different types of medical walkers and rollators. Understand their features, benefits, and how to choose the right one for mobility needs.', 'https://darkcyan-lion-250828.hostingersite.com/types-of-medical-walkers-and-rollators-a-comprehensive-guide/'],
  ['https://darkcyan-lion-250828.hostingersite.com/tips-for-choosing-and-using-walkers-a-comprehensive-guide/', 'Tips for Choosing and Using Walkers | The Walker Advisor', 'Learn how to choose the right walker and use it safely. This complete guide offers tips on types, features, and safety to enhance mobility and independence.', 'https://darkcyan-lion-250828.hostingersite.com/tips-for-choosing-and-using-walkers-a-comprehensive-guide/'],
  ['https://darkcyan-lion-250828.hostingersite.com/walker-safety-tips-for-all-weather-conditions/', 'Walker Safety Tips for All Weather Conditions', 'Stay safe in rain, snow or heat with essential walker safety tips. Learn weather-specific strategies for stability & confidence outdoors. Keep moving in any season!', 'https://darkcyan-lion-250828.hostingersite.com/walker-safety-tips-for-all-weather-conditions/'],
  ['https://darkcyan-lion-250828.hostingersite.com/important-safety-features-walkers-for-seniors/', 'Essential Safety Features in Walkers for Seniors | Best Options', 'Discover key safety features in walkers for seniors, including sturdy frames, ergonomic grips, and reliable brakes, to enhance mobility, stability, and confidence.', 'https://darkcyan-lion-250828.hostingersite.com/important-safety-features-walkers-for-seniors/'],
  ['https://darkcyan-lion-250828.hostingersite.com/how-to-use-walker-large-wheels-seniors-safely/', 'Helpful Suggestions for Using a New Walker with Larger Wheels', 'Explore useful tips for seniors on using a new walker with larger wheels. These expert suggestions will enhance safety, stability, and mobility.', 'https://darkcyan-lion-250828.hostingersite.com/how-to-use-walker-large-wheels-seniors-safely/'],
  ['https://darkcyan-lion-250828.hostingersite.com/does-medicare-pay-for-walkers-for-seniors/', 'Does Medicare Cover Walkers for Seniors? | The Walker Advisor', 'Uncover how Medicare covers walkers for seniors. Explore eligibility, coverage details, types of walkers, and expert tips at The Walker Advisor—your trusted mobility guide.', 'https://darkcyan-lion-250828.hostingersite.com/does-medicare-pay-for-walkers-for-seniors/'],
  ['https://darkcyan-lion-250828.hostingersite.com/what-is-the-proper-way-to-use-a-walker/', 'What Is the Proper Way to Use a Walker | The Walker Advisor', 'Learn the proper way to use a walker for safety and stability. Discover tips for adjusting height, walking posture, and navigating steps with confidence.', 'https://darkcyan-lion-250828.hostingersite.com/what-is-the-proper-way-to-use-a-walker/'],
  ['https://darkcyan-lion-250828.hostingersite.com/where-to-buy-walkers-for-seniors-top-brands-reviews/', 'Where to Buy Walkers for Seniors - Best Options & Tips', 'Find the best places to buy walkers for seniors. Explore trusted stores, compare prices, and learn tips to choose the best mobility aid for their needs.', 'https://darkcyan-lion-250828.hostingersite.com/where-to-buy-walkers-for-seniors-top-brands-reviews/'],
  ['https://darkcyan-lion-250828.hostingersite.com/tips-using-walker-small-homes/', 'The Ultimate Guide to Using a Walker in Small Homes', 'Learn space-saving strategies for safe walker use in small homes. Optimize your home layout and choose the right walker for enhanced mobility.', 'https://darkcyan-lion-250828.hostingersite.com/tips-using-walker-small-homes/'],
  ['https://darkcyan-lion-250828.hostingersite.com/best-wheel-size-for-walkers/', 'Best Wheel Size for a Walker: What Seniors Should Know', 'Wondering what size wheels are best for a walker? Get expert advice and safety tips to help seniors choose the perfect walker wheels confidently.', 'https://darkcyan-lion-250828.hostingersite.com/best-wheel-size-for-walkers/'],
  ['https://darkcyan-lion-250828.hostingersite.com/best-4-wheel-walkers-with-seats/', 'Top Options to Consider in a 4-Wheel Walker with Seats', 'Shopping for a 4-wheel walker with a seat? Discover what features to look for, safety tips, expert-backed insights, and product comparison. Learn more now.', 'https://darkcyan-lion-250828.hostingersite.com/best-4-wheel-walkers-with-seats/'],
  ['https://darkcyan-lion-250828.hostingersite.com/walking-sticks-vs-walker-for-seniors-safety/', 'Two Walking Sticks or a Walker — Which Is Safer?', 'Not sure if two walking sticks or a walker is safer. Learn the pros, cons, and expert advice to help you or your loved one make the right mobility choice.', 'https://darkcyan-lion-250828.hostingersite.com/walking-sticks-vs-walker-for-seniors-safety/'],
  ['https://darkcyan-lion-250828.hostingersite.com/wheeled-vs-nonwheeled-walkers/', 'Wheeled vs Non-Wheeled Walkers: Which Is Better?', 'Discover whether wheeled or non-wheeled walkers are better for seniors. Learn the pros, cons, and expert tips. Make the right choice today!', 'https://darkcyan-lion-250828.hostingersite.com/wheeled-vs-nonwheeled-walkers/'],
  ['https://darkcyan-lion-250828.hostingersite.com/time-to-switch-cane-to-walker/', "How to Know It's Time to Use a Walker Instead Cane?", 'Struggling with balance or fatigue? Find out if it\'s time to upgrade to a walker. Take control of your mobility—read our expert guide now!', 'https://darkcyan-lion-250828.hostingersite.com/time-to-switch-cane-to-walker/'],
  ['https://darkcyan-lion-250828.hostingersite.com/when-to-upgrade-cane-to-walker/', 'When Should Seniors Switch from a Cane to a Walker?', 'Is it time to upgrade from a cane to a walker? Discover the signs, benefits, and expert tips to make the right choice for senior safety and mobility. Learn more.', 'https://darkcyan-lion-250828.hostingersite.com/when-to-upgrade-cane-to-walker/'],
  ['https://darkcyan-lion-250828.hostingersite.com/lightweight-folding-walker-benefits/', 'What Are the Benefits of Using a Lightweight Walker?', 'Explore how lightweight folding walkers improve mobility, safety, and independence for seniors. Discover key features and expert tips for choosing the best one.', 'https://darkcyan-lion-250828.hostingersite.com/lightweight-folding-walker-benefits/'],
  ['https://darkcyan-lion-250828.hostingersite.com/should-seniors-use-walking-sticks/', 'Should Seniors Use Walking Sticks? Key Benefits', 'Walking sticks help seniors improve balance, reduce fall risks, ease joint pain, and stay active. Learn when and how to use one for the best support.', 'https://darkcyan-lion-250828.hostingersite.com/should-seniors-use-walking-sticks/'],
  ['https://darkcyan-lion-250828.hostingersite.com/best-walking-shoes-for-seniors-2026/', 'Best Walking Shoes for Seniors 2026: A Comprehensive Guide', 'Top walking shoes for seniors in 2026 comfortable, stable, and supportive picks with pros, cons, and Amazon links to stay active pain-free and safe daily.', 'https://darkcyan-lion-250828.hostingersite.com/best-walking-shoes-for-seniors-2026/'],
  ['https://darkcyan-lion-250828.hostingersite.com/valentines-day-gift-ideas-for-seniors/', "Valentine's Day Gifts for Senior Couples", "Discover meaningful Valentine's Day gift ideas for senior couples focused on comfort, memories, and lasting love.", 'https://darkcyan-lion-250828.hostingersite.com/valentines-day-gift-ideas-for-seniors/'],
  ['https://darkcyan-lion-250828.hostingersite.com/compact-walkers-for-seniors/', 'Best Compact Walkers for Seniors', 'Explore top compact walkers for seniors: lightweight, foldable aids for better mobility. Reviews, Amazon links, pros/cons, and tips to choose the right one for independence', 'https://darkcyan-lion-250828.hostingersite.com/compact-walkers-for-seniors/'],
  ['https://darkcyan-lion-250828.hostingersite.com/heavy-duty-walkers-for-tall-people/', 'Best Walkers for Tall People', 'Discover top heavy-duty walkers for tall individuals with adjustable heights, high weight capacities, and comfort features. Reviews, pros, cons, and Amazon links included for easy shopping.', 'https://darkcyan-lion-250828.hostingersite.com/heavy-duty-walkers-for-tall-people/'],
  ['https://darkcyan-lion-250828.hostingersite.com/best-heavy-duty-walkers-for-obese-seniors/', 'Best Heavy-Duty Walkers for Obese Seniors (2025)', 'Discover the 5 best heavy-duty walkers for obese seniors in 2025. Safe, durable, and Amazon-available picks with up to 500 lb capacity.', 'https://darkcyan-lion-250828.hostingersite.com/best-heavy-duty-walkers-for-obese-seniors/'],
  ['https://darkcyan-lion-250828.hostingersite.com/best-holiday-gifts-for-seniors-who-have-everything/', 'Best Holiday Gifts for Seniors Who Have Everything', 'Discover thoughtful and unique holiday gifts for seniors who have everything. Perfect options to surprise and delight your loved ones.', 'https://darkcyan-lion-250828.hostingersite.com/best-holiday-gifts-for-seniors-who-have-everything/'],
  ['https://darkcyan-lion-250828.hostingersite.com/best-upright-walkers-for-outdoor-use-2025/', 'Best Upright Walkers for Outdoor Use 2025', 'Discover the top 5 upright walkers for outdoor use in 2025 on Amazon. All-terrain wheels, shock absorption, lightweight & stable, perfect for seniors!', 'https://darkcyan-lion-250828.hostingersite.com/best-upright-walkers-for-outdoor-use-2025/'],
  ['https://darkcyan-lion-250828.hostingersite.com/inexpensive-christmas-gift-ideas-for-senior-citizens/', 'Gifts for Seniors Under $20: 20 Affordable Ideas', 'Find 20 thoughtful, inexpensive gifts for seniors under $20, useful, safe, and meaningful options for older adults.', 'https://darkcyan-lion-250828.hostingersite.com/inexpensive-christmas-gift-ideas-for-senior-citizens/'],
  ['https://darkcyan-lion-250828.hostingersite.com/christmas-gift-ideas-for-elderly-ladies-december-2026/', 'Christmas Gifts for Elderly Ladies 2025', 'Discover thoughtful Christmas gift ideas for elderly ladies this December 2025, practical, heartwarming, and perfect for your loved ones.', 'https://darkcyan-lion-250828.hostingersite.com/christmas-gift-ideas-for-elderly-ladies-december-2025/'],
  ['https://darkcyan-lion-250828.hostingersite.com/16-best-christmas-gifts-for-seniors-amazon-2026/', 'Best Christmas Gifts for Elderly Women & Seniors 2025', 'Discover 16 thoughtful Christmas gifts for elderly women and seniors in 2025, practical, heartwarming, and perfect for your older loved ones, all available on Amazon.', 'https://darkcyan-lion-250828.hostingersite.com/16-best-christmas-gifts-for-seniors-amazon-2025/'],
  ['https://darkcyan-lion-250828.hostingersite.com/best-travel-walkers-for-seniors-2026/', 'Best Travel Walkers for Seniors 2025', "Discover 2025's top travel walkers for seniors,lightweight, foldable, and perfect for comfort, mobility, and independence on the go.", 'https://darkcyan-lion-250828.hostingersite.com/best-travel-walkers-for-seniors-2025/'],
  ['https://darkcyan-lion-250828.hostingersite.com/top-4-walkers-with-seats-for-seniors-find-your-perfect-fit/', 'Top 4 Walkers With Seats for Seniors—Perfect Fit Guide', 'Discover the top 4 walkers with seats for seniors. Find the perfect fit for comfort, safety, and mobility. Compare features and make the right choice today!', 'https://darkcyan-lion-250828.hostingersite.com/top-4-walkers-with-seats-for-seniors-find-your-perfect-fit/'],
  ['https://darkcyan-lion-250828.hostingersite.com/safest-walkers-for-seniors-top-5-choices/', 'Safest Walkers for Seniors: Top 5 Sturdy & Secure Picks', 'Top 5 safest walkers for seniors! Unmatched stability, comfort & support for worry-free mobility. Find your perfect walker today!', 'https://darkcyan-lion-250828.hostingersite.com/safest-walkers-for-seniors-top-5-choices/'],
  ['https://darkcyan-lion-250828.hostingersite.com/5-best-upright-walkers-for-seniors-find-the-right-one/', '5 Best Upright Walkers for Seniors – Find the Right One', 'Discover the 5 best upright walkers for seniors. Find the right one for stability, comfort, and mobility. See our top pick and key features!', 'https://darkcyan-lion-250828.hostingersite.com/5-best-upright-walkers-for-seniors-find-the-right-one/'],
  ['https://darkcyan-lion-250828.hostingersite.com/best-small-walkers-for-seniors-top-4-options/', 'Top 4 Small Walkers for Seniors: Best Compact Options', 'Discover the top 4 small walkers for seniors! Find the perfect compact, lightweight, foldable walker to enhance mobility and independence.', 'https://darkcyan-lion-250828.hostingersite.com/best-small-walkers-for-seniors-top-4-options/'],
  ['https://darkcyan-lion-250828.hostingersite.com/elenker-vs-nova-upright-walkers-2026/', 'Elenker vs Nova Upright Walkers: 2025 Comparison', 'Compare Elenker and Nova upright walkers in 2025. Discover key differences, features, pros, cons, and which brand best suits your senior mobility needs.', 'https://darkcyan-lion-250828.hostingersite.com/elenker-vs-nova-upright-walkers-2025/'],
  ['https://darkcyan-lion-250828.hostingersite.com/contact-us/', 'Contact Us - The Walker Advisor', 'Get in touch with The Walker Advisor for expert guidance on mobility aids. We\'re here to answer your questions and help you find the best solutions.', 'https://darkcyan-lion-250828.hostingersite.com/contact-us/'],
  ['https://darkcyan-lion-250828.hostingersite.com/about-us/', 'About Us - The Walker Advisor', 'Learn about The Walker Advisor, your trusted source for expert reviews on walkers, rollators, and mobility aids, helping seniors find reliable solutions.', 'https://darkcyan-lion-250828.hostingersite.com/about-us/'],
];

const appJs = fs.readFileSync(path.join(__dirname, '../src/App.js'), 'utf8');
const routes = [...appJs.matchAll(/"(\/[^"]+)":/g)].map((m) => m[1]);

const seoByLivePath = {};
for (const [pageUrl, title, description, canonical] of SHEET_ROWS) {
  const entry = {
    title: title.trim(),
    description: description.trim(),
    canonical: normalizeUrl(canonical || pageUrl),
  };
  const pagePath = pathFromUrl(pageUrl);
  const canonPath = pathFromUrl(canonical || pageUrl);
  if (pagePath) seoByLivePath[pagePath] = entry;
  if (canonPath) seoByLivePath[canonPath] = entry;
}

const ROUTE_SEO = {};
const ROUTE_CANONICALS = { '/': `${PRODUCTION}/` };

for (const route of routes) {
  const livePath = REACT_TO_LIVE[route] || route;
  const entry = seoByLivePath[livePath];
  if (entry) {
    ROUTE_SEO[route] = { title: entry.title, description: entry.description };
    ROUTE_CANONICALS[route] = entry.canonical.endsWith('/')
      ? entry.canonical
      : `${entry.canonical}/`;
  } else {
    const fallbackPath = REACT_TO_LIVE[route] || route;
    ROUTE_CANONICALS[route] = `${PRODUCTION}${fallbackPath}/`;
  }
}

// Homepage from sheet row 1 equivalent - use first informational or keep existing
const homeEntry = seoByLivePath['/can-heart-issues-increase-fall-risk-in-seniors'];
// Keep HOME from current or use site default - sheet doesn't list homepage explicitly

const seoOut = `/** From Walkers Advisors Tracking Sheet – ${new Date().toISOString().slice(0, 10)} */
import { ROUTE_SEO_OVERRIDES } from './routeSeoOverrides';

export const HOME_ROUTE_SEO = {
  title: 'Best Walkers for Seniors | Unbiased Reviews – The Walker Advisor',
  description: 'Unbiased reviews of the best walkers for seniors. Compare top brands and ratings to find the safest, most comfortable mobility aids',
};

export const ROUTE_SEO = {
${Object.entries(ROUTE_SEO)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([r, { title, description }]) => `  ${JSON.stringify(r)}: { title: ${JSON.stringify(title)}, description: ${JSON.stringify(description)} },`)
  .join('\n')}
};

export function getSeoForRoute(pathname) {
  const path = (pathname || '/').replace(/\\/+$/, '') || '/';
  if (path === '/') return HOME_ROUTE_SEO;
  return ROUTE_SEO_OVERRIDES[path] ?? ROUTE_SEO[path] ?? null;
}
`;

const canonOut = `/** From Walkers Advisors Tracking Sheet – ${new Date().toISOString().slice(0, 10)} */
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

fs.writeFileSync(path.join(__dirname, '../src/seo/routeSeo.js'), seoOut, 'utf8');
fs.writeFileSync(path.join(__dirname, '../src/seo/routeCanonicals.js'), canonOut, 'utf8');

const matched = Object.keys(ROUTE_SEO).length;
const missing = routes.filter((r) => r !== '/' && !ROUTE_SEO[r]);
console.log(`Updated SEO for ${matched} routes`);
if (missing.length) console.log('No sheet row for:', missing);
