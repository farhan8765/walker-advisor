/**
 * Adds trailing slashes to internal href paths (matches canonical URLs).
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');

const IMG_EXT_RE = /\.(webp|png|jpg|jpeg|svg|gif|avif)$/i;

function isPagePath(p) {
  return p === '/' || (!IMG_EXT_RE.test(p) && !p.includes('/images/'));
}

function addSlashToHrefs(content) {
  let n = 0;
  const patterns = [
    [/href:\s*'(\/[^'#?]*?)'/g, (m, p) => {
      if (!isPagePath(p) || p.endsWith('/')) return m;
      n += 1;
      return `href: '${p}/'`;
    }],
    [/href:\s*"(\/[^"#?]*?)"/g, (m, p) => {
      if (!isPagePath(p) || p.endsWith('/')) return m;
      n += 1;
      return `href: "${p}/"`;
    }],
    [/href="(\/[^"#?]*?)"/g, (m, p) => {
      if (!isPagePath(p) || p.endsWith('/')) return m;
      n += 1;
      return `href="${p}/"`;
    }],
    [/href='(\/[^'#?]*?)'/g, (m, p) => {
      if (!isPagePath(p) || p.endsWith('/')) return m;
      n += 1;
      return `href='${p}/'`;
    }],
    [/\$\{process\.env\.PUBLIC_URL\}(\/[^`'")\s#?]*?)(?=['"`\s)>])/g, (m, p) => {
      if (!isPagePath(p) || p.endsWith('/')) return m;
      n += 1;
      return `\${process.env.PUBLIC_URL}${p}/`;
    }],
    [/buyHref="(\/[^"]*?)"/g, (m, p) => {
      if (p === '/' || p.endsWith('/')) return m;
      n += 1;
      return `buyHref="${p}/"`;
    }],
  ];
  for (const [re, fn] of patterns) {
    content = content.replace(re, fn);
  }
  return { content, n };
}

function walkDir(dir, files = []) {
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    if (name === 'node_modules' || name === 'build') continue;
    const stat = fs.statSync(full);
    if (stat.isDirectory()) walkDir(full, files);
    else if (/\.(js|jsx)$/.test(name)) files.push(full);
  }
  return files;
}

let total = 0;
for (const file of walkDir(path.join(ROOT, 'src'))) {
  if (file.includes('pathUtils.js')) continue;
  const { content, n } = addSlashToHrefs(fs.readFileSync(file, 'utf8'));
  if (n) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(n, path.relative(ROOT, file));
    total += n;
  }
}
console.log('total:', total);
