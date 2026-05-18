const fs = require('fs');
const path = require('path');
const pagesDir = path.join(__dirname, '../src/pages');

function patch(file, fn) {
  const full = path.join(pagesDir, file);
  let c = fs.readFileSync(full, 'utf8');
  const next = fn(c);
  if (next !== c) {
    fs.writeFileSync(full, next);
    console.log('OK', file);
  } else {
    console.log('SKIP', file);
  }
}

function addImport(c, line) {
  if (c.includes(line)) return c;
  return c.replace(
    "import ArticleIconHeading from '../components/ArticleIconHeading';",
    `import ArticleIconHeading from '../components/ArticleIconHeading';\n${line}`
  );
}

patch('SmallWalkersDetail.jsx', (c) => {
  c = addImport(c, "import { BlogProsCons } from '../components/BlogTable';");
  const start = c.indexOf('              <motion.div className="mt-6 overflow-hidden');
  if (start === -1) {
    const start2 = c.indexOf('              <div className="mt-6 overflow-hidden rounded-[10px] border border-[#d8dde2] md:grid md:grid-cols-2">');
    if (start2 === -1) return c;
    const end = c.indexOf('              <h4 className="mt-7 text-[15px] font-black text-black">', start2);
    const rep = `              <BlogProsCons
                className="mt-6"
                prosLabel={product.detailColumns[0].title}
                consLabel={product.detailColumns[1].title}
                pros={product.detailColumns[0].items}
                cons={product.detailColumns[1].items}
              />

              `;
    return c.slice(0, start2) + rep + c.slice(end);
  }
  return c;
});

patch('HeavyDutyTallWalkersDetail.jsx', (c) => {
  c = addImport(c, "import { BlogProsCons } from '../components/BlogTable';");
  const start = c.indexOf('              <div className="mt-4 grid gap-4 sm:grid-cols-2">');
  if (start === -1) return c;
  const end = c.indexOf('            </section>', start);
  const rep = `              <BlogProsCons
                className="mt-4"
                prosLabel="Why It\u2019s Best for Tall Persons"
                consLabel="Cons"
                pros={product.best}
                cons={product.cons}
              />
`;
  return c.slice(0, start) + rep + c.slice(end);
});

patch('FittingWalkerDetail.jsx', (c) => {
  const start = c.indexOf('          <div className="mt-5 grid grid-cols-2 border-y border-[#d8dde2]');
  if (start === -1) return c;
  const end = c.indexOf('          <Paragraph>By avoiding these mistakes', start);
  const rep = '          <BlogGridTable className="mt-5" headers={[\'Mistake\', \'Why It Matters\']} rows={mistakes} />\n';
  return c.slice(0, start) + rep + c.slice(end);
});

patch('ProperWalkingShoesDetail.jsx', (c) => {
  c = addImport(c, "import { BlogGridTable } from '../components/BlogTable';");
  const start = c.indexOf('          <div className="mt-5 grid grid-cols-2 border-y border-[#d8dde2] font-manrope text-[11px]');
  if (start === -1) return c;
  const end = c.indexOf('          <SectionHeading id="section-8">', start);
  const rep =
    '          <BlogGridTable className="mt-5" headers={[\'Walking Shoes\', \'Regular Sneakers\']} rows={shoeComparison} />\n\n          ';
  return c.slice(0, start) + rep + c.slice(end);
});

patch('MentalHealthDetail.jsx', (c) => {
  c = addImport(c, "import { BlogGridTable } from '../components/BlogTable';");
  const start = c.indexOf('          <div className="mt-5 grid grid-cols-2 border-y border-[#d8dde2] font-manrope text-[11px]');
  if (start === -1) return c;
  const end = c.indexOf('          <SectionHeading id="section-7">', start);
  const rep = '          <BlogGridTable className="mt-5" headers={[\'Myth\', \'Reality\']} rows={myths} />\n\n          ';
  return c.slice(0, start) + rep + c.slice(end);
});

patch('BlogDetail.jsx', (c) => {
  c = addImport(c, "import { BlogGridTable } from '../components/BlogTable';");
  const start = c.indexOf('          <div className="mt-5 grid grid-cols-2 border-y border-[#d8dde2] font-manrope text-[11px]');
  if (start === -1) return c;
  const end = c.indexOf('          <SectionHeading id="section-5">', start);
  const rep =
    '          <BlogGridTable className="mt-5" headers={[\'Strategy\', \'How It Helps\']} rows={riskReducers} />\n\n          ';
  return c.slice(0, start) + rep + c.slice(end);
});

patch('AdjustWalkerHeightDetail.jsx', (c) => {
  c = addImport(c, "import { BlogGridTable } from '../components/BlogTable';");
  const start = c.indexOf('          <motion.div className="blog-table-wrap mt-4 overflow-x-auto">');
  if (start === -1) {
    const start2 = c.indexOf('          <div className="blog-table-wrap mt-4 overflow-x-auto">');
    if (start2 === -1) return c;
    const end = c.indexOf('          <Paragraph><strong>Note:</strong>', start2);
    const rep =
      '          <BlogGridTable className="mt-4" headers={[\'User Height (Feet)\', \'Recommended Walker Height (Inches)\']} rows={heightRows} />\n          ';
    return c.slice(0, start2) + rep + c.slice(end);
  }
  return c;
});

patch('LargeWheelWalkerTipsDetail.jsx', (c) => {
  c = addImport(c, "import { BlogTwoColumnContent } from '../components/BlogTable';");
  const fnStart = c.indexOf('function ExerciseBox()');
  if (fnStart === -1) return c;
  const fnEnd = c.indexOf('function TipBox', fnStart);
  const newFn = `function ExerciseBox() {
  return (
    <BlogTwoColumnContent
      leftTitle="Leg Strengthening Exercises"
      rightTitle="Arm & Grip Strengthening"
      left={
        <>
          <p className="text-[12px] font-medium leading-6">
            Seated Marches — Lift your knees while sitting to improve mobility.
          </p>
          <p className="text-[12px] font-medium leading-6">
            Heel-to-Toe Walks — Helps with balance and coordination.
          </p>
        </>
      }
      right={
        <>
          <p className="text-[12px] font-medium leading-6">
            Hand Squeeze Exercises — Improves walker grip strength.
          </p>
          <p className="text-[12px] font-medium leading-6">
            Wall Push-Ups — Strengthen arms for better support.
          </p>
        </>
      }
    />
  );
}

`;
  return c.slice(0, fnStart) + newFn + c.slice(fnEnd);
});
