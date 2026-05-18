const fs = require('fs');
const p = require('path').join(__dirname, '../src/pages/SmallWalkersDetail.jsx');
let c = fs.readFileSync(p, 'utf8');
const pat =
  /              <div className="mt-6 overflow-hidden rounded-\[10px\] border border-\[#d8dde2\] md:grid md:grid-cols-2">[\s\S]*?              <\/div>\n\n              <h4 className="mt-7 text-\[15px\] font-black text-black">/;
const rep = `              <BlogProsCons
                className="mt-6"
                prosLabel={product.detailColumns[0].title}
                consLabel={product.detailColumns[1].title}
                pros={product.detailColumns[0].items}
                cons={product.detailColumns[1].items}
              />

              <h4 className="mt-7 text-[15px] font-black text-black">`;
const n = pat.test(c);
if (!n) {
  console.log('NO MATCH');
  process.exit(1);
}
c = c.replace(pat, rep);
fs.writeFileSync(p, c);
console.log('OK');
