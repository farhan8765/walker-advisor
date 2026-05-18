const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const redirectsSrc = fs.readFileSync(path.join(ROOT, 'src/seo/routeRedirects.js'), 'utf8');
const OLD_TO_NEW = {};
for (const m of redirectsSrc.matchAll(/"(\/[^"]+)":\s*"(\/[^"]+)"/g)) {
  OLD_TO_NEW[m[1]] = m[2];
}

function replaceInContent(content) {
  let n = 0;
  for (const [oldP, newP] of Object.entries(OLD_TO_NEW).sort((a, b) => b[0].length - a[0].length)) {
    const pairs = [
      [`href: '${oldP}'`, `href: '${newP}'`],
      [`href: "${oldP}"`, `href: "${newP}"`],
      [`href: '${oldP}/'`, `href: '${newP}/'`],
      [`href: "${oldP}/"`, `href: "${newP}/"`],
      [`'${oldP}'`, `'${newP}'`],
      [`"${oldP}"`, `"${newP}"`],
      [`${oldP}/`, `${newP}/`],
    ];
    for (const [from, to] of pairs) {
      if (content.includes(from)) {
        const parts = content.split(from);
        n += parts.length - 1;
        content = parts.join(to);
      }
    }
  }
  return { content, n };
}

function walkDir(dir, files = []) {
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    if (name === 'node_modules' || name === 'build') continue;
    const stat = fs.statSync(full);
    if (stat.isDirectory()) walkDir(full, files);
    else if (/\.(js|jsx|html|xml)$/.test(name)) files.push(full);
  }
  return files;
}

let total = 0;
for (const file of [...walkDir(path.join(ROOT, 'src')), ...walkDir(path.join(ROOT, 'public'))]) {
  if (file.includes('routeRedirects.js')) continue;
  const { content, n } = replaceInContent(fs.readFileSync(file, 'utf8'));
  if (n) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(n, path.relative(ROOT, file));
    total += n;
  }
}
console.log('total replacements:', total);
