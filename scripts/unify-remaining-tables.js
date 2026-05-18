/**
 * Apply unified blog table styling to remaining custom layouts.
 */
const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, '../src/pages');

function read(file) {
  return fs.readFileSync(path.join(pagesDir, file), 'utf8');
}

function write(file, content) {
  fs.writeFileSync(path.join(pagesDir, file), content);
  console.log('patched', file);
}

function ensureImport(content, importLine, after = "import ArticleIconHeading from '../components/ArticleIconHeading';") {
  if (content.includes(importLine)) return content;
  return content.replace(after, `${after}\n${importLine}`);
}

// SmallWalkers detailColumns
{
  let c = read('SmallWalkersDetail.jsx');
  c = ensureImport(c, "import { BlogProsCons } from '../components/BlogTable';");
  const re =
    /              <div className="mt-6 overflow-hidden rounded-\[10px\] border border-\[#d8dde2\] md:grid md:grid-cols-2">[\s\S]*?              <\/div>\n\n              <h4 className="mt-7 text-\[15px\] font-black text-black">/;
  if (re.test(c)) {
    c = c.replace(
      re,
      `              <BlogProsCons
                className="mt-6"
                prosLabel={product.detailColumns[0].title}
                consLabel={product.detailColumns[1].title}
                pros={product.detailColumns[0].items}
                cons={product.detailColumns[1].items}
              />

              <h4 className="mt-7 text-[15px] font-black text-black">`
    );
    write('SmallWalkersDetail.jsx', c);
  }
}

// HeavyDutyTallWalkers pros/cons boxes
{
  let c = read('HeavyDutyTallWalkersDetail.jsx');
  c = ensureImport(c, "import { BlogProsCons } from '../components/BlogTable';");
  const re =
    /              <div className="mt-4 grid gap-4 sm:grid-cols-2">[\s\S]*?              <\/div>\n            <\/section>/;
  if (re.test(c)) {
    c = c.replace(
      re,
      `              <BlogProsCons
                className="mt-4"
                prosLabel={product.bestLabel || "Why It's Best for Tall Persons"}
                consLabel="Cons"
                pros={product.best}
                cons={product.cons}
              />
            </section>`
    );
    // Use literal title from file - product doesn't have bestLabel
    c = c.replace('prosLabel={product.bestLabel || "Why It\'s Best for Tall Persons"}', 'prosLabel="Why It\u2019s Best for Tall Persons"');
    write('HeavyDutyTallWalkersDetail.jsx', c);
  }
}

// Normalize HTML tables
for (const name of fs.readdirSync(pagesDir)) {
  if (!name.endsWith('Detail.jsx')) continue;
  let c = read(name);
  if (!c.includes('<table')) continue;
  const orig = c;
  c = c.replace(/<table className="(?!blog-data-table)([^"]*)">/g, '<table className="blog-data-table $1">');
  c = c.replace(/<thead className="[^"]*">/g, '<thead>');
  c = c.replace(/<tr className="(?:odd:bg-white even:bg-\[#f7f7f7\]|odd:bg-white even:bg-\[#f3f3f3\]|border-t border-\[#d8dde2\])"[^>]*>/g, '<tr>');
  c = c.replace(/<th className="[^"]*">/g, '<th>');
  c = c.replace(/<td className="[^"]*">/g, '<td>');
  if (c !== orig) write(name, c);
}
