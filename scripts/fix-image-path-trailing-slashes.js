/**
 * Removes erroneous trailing slashes added to image file paths
 * (e.g. /images/logo.webp/ → /images/logo.webp)
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const IMG_EXT = 'webp|png|jpg|jpeg|svg|gif|avif';

function fixImagePaths(content) {
  let n = 0;
  const before = content;

  // Any /images/...file.ext/ (with or without PUBLIC_URL prefix)
  content = content.replace(
    new RegExp(`((?:\\$\\{process\\.env\\.PUBLIC_URL\\})?/images/[^\\s\`'"]+?\\.(?:${IMG_EXT}))/`, 'gi'),
    (m, p) => {
      n += 1;
      return p;
    }
  );

  // ${PUBLIC_URL}/images/${var}/  — dynamic image filenames (no extension in path)
  content = content.replace(
    /(\$\{process\.env\.PUBLIC_URL\}\/images\/\$\{[^}]+\})\//g,
    (m, p) => {
      n += 1;
      return p;
    }
  );

  return { content, n, changed: content !== before };
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
  const { content, n, changed } = fixImagePaths(fs.readFileSync(file, 'utf8'));
  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(n, path.relative(ROOT, file));
    total += n;
  }
}
console.log('fixed:', total);
