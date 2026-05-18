const fs = require('fs');
const path = require('path');
const pagesDir = path.join(__dirname, '../src/pages');

const patches = [
  {
    file: 'FittingWalkerDetail.jsx',
    find: /          <div className="mt-5 grid grid-cols-2 border-y border-\[#d8dde2\] font-manrope text-\[#1f2930\]">[\s\S]*?          <\/div>\n          <Paragraph>By avoiding these mistakes/,
    replace: `          <BlogGridTable className="mt-5" headers={['Mistake', 'Why It Matters']} rows={mistakes} />\n          <Paragraph>By avoiding these mistakes`,
    import: "import { BlogGridTable } from '../components/BlogTable';",
    hasBlogGrid: true,
  },
  {
    file: 'ProperWalkingShoesDetail.jsx',
    find: /          <div className="mt-5 grid grid-cols-2 border-y border-\[#d8dde2\] font-manrope text-\[11px\] text-\[#1f2930\]">[\s\S]*?          <\/motion.div>\n\n          <SectionHeading id="section-8">/,
    replace: `          <BlogGridTable className="mt-5" headers={['Walking Shoes', 'Regular Sneakers']} rows={shoeComparison} />\n\n          <SectionHeading id="section-8">`,
    import: "import { BlogGridTable } from '../components/BlogTable';",
  },
  {
    file: 'MentalHealthDetail.jsx',
    find: /          <div className="mt-5 grid grid-cols-2 border-y border-\[#d8dde2\] font-manrope text-\[11px\] text-\[#1f2930\]">[\s\S]*?          <\/div>\n\n          <SectionHeading id="section-7">/,
    replace: `          <BlogGridTable className="mt-5" headers={['Myth', 'Reality']} rows={myths} />\n\n          <SectionHeading id="section-7">`,
    import: "import { BlogGridTable } from '../components/BlogTable';",
  },
  {
    file: 'BlogDetail.jsx',
    find: /          <div className="mt-5 grid grid-cols-2 border-y border-\[#d8dde2\] font-manrope text-\[11px\] text-\[#1f2930\]">[\s\S]*?          <\/div>\n\n          <SectionHeading id="section-5">/,
    replace: `          <BlogGridTable className="mt-5" headers={['Strategy', 'How It Helps']} rows={riskReducers} />\n\n          <SectionHeading id="section-5">`,
    import: "import { BlogGridTable } from '../components/BlogTable';",
  },
  {
    file: 'AdjustWalkerHeightDetail.jsx',
    find: /          <div className="blog-table-wrap mt-4 overflow-x-auto">\n            <div className="grid grid-cols-2 bg-\[#ffc400\] font-manrope text-base font-black text-black">[\s\S]*?          <\/div>\n          <Paragraph><strong>Note:<\/strong>/,
    replace: `          <BlogGridTable className="mt-4" headers={['User Height (Feet)', 'Recommended Walker Height (Inches)']} rows={heightRows} />\n          <Paragraph><strong>Note:</strong>`,
    import: "import { BlogGridTable } from '../components/BlogTable';",
  },
  {
    file: 'HeavyDutyTallWalkersDetail.jsx',
    find: /              <div className="mt-4 grid gap-4 sm:grid-cols-2">[\s\S]*?              <\/div>\n            <\/section>/,
    replace: `              <BlogProsCons
                className="mt-4"
                prosLabel="Why It\u2019s Best for Tall Persons"
                consLabel="Cons"
                pros={product.best}
                cons={product.cons}
              />
            </section>`,
    import: "import { BlogProsCons } from '../components/BlogTable';",
  },
];

for (const patch of patches) {
  const full = path.join(pagesDir, patch.file);
  let c = fs.readFileSync(full, 'utf8');
  if (patch.import && !c.includes(patch.import)) {
    c = c.replace(
      "import ArticleIconHeading from '../components/ArticleIconHeading';",
      `import ArticleIconHeading from '../components/ArticleIconHeading';\n${patch.import}`
    );
  }
  patch.find = patch.find.toString().includes('/') ? patch.find : new RegExp(patch.find);
  if (!patch.find.test(c)) {
    console.log('SKIP', patch.file);
    continue;
  }
  c = c.replace(patch.find, patch.replace);
  fs.writeFileSync(full, c);
  console.log('OK', patch.file);
}
