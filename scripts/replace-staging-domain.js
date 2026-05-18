const fs = require('fs');
const path = require('path');

const STAGING = 'https://darkcyan-lion-250828.hostingersite.com';
const PRODUCTION = 'https://thewalkeradvisor.com';
const root = path.join(__dirname, '../src');

function walk(dir, files = []) {
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name);
    if (fs.statSync(p).isDirectory()) walk(p, files);
    else if (/\.(jsx?|css)$/.test(name)) files.push(p);
  }
  return files;
}

let count = 0;
for (const file of walk(root)) {
  const text = fs.readFileSync(file, 'utf8');
  if (!text.includes(STAGING)) continue;
  fs.writeFileSync(file, text.split(STAGING).join(PRODUCTION), 'utf8');
  count++;
}
console.log('Updated', count, 'files');
