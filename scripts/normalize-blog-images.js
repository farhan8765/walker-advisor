const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, '../src/pages');

function simplifyImgTag(img) {
  const src = img.match(/src=\{([^}]+)\}/)?.[1] || img.match(/src="([^"]+)"/)?.[1];
  const alt = img.match(/alt=\{([^}]+)\}/)?.[1] || img.match(/alt="([^"]*)"/)?.[1] || '""';
  if (!src) {
    return img.replace(/className="[^"]*"/, 'className="blog-content-image"');
  }
  return `<img className="blog-content-image" src={${src}} alt={${alt}} />`;
}

function unwrapImageContainers(content) {
  const wrapperRe =
    /<div className="(?![^"]*aria-label)([^"]*bg-\[#f3f3f3\][^"]*)">\s*(<img[\s\S]*?\/>)\s*<\/motion.div>/g;

  let prev;
  do {
    prev = content;
    content = content.replace(
      /<div className="(?![^"]*aria-label)([^"]*bg-\[#f3f3f3\][^"]*)">\s*(<img[\s\S]*?\/>)\s*<\/div>/g,
      (_, _cls, img) => simplifyImgTag(img),
    );
  } while (content !== prev);

  return content;
}

function replaceLocalBlogImage(content) {
  if (!content.includes('function BlogImage(')) return content;

  content = content.replace(/\nfunction BlogImage\([^)]*\) \{[\s\S]*?\n\}\n/g, '\n');

  if (!content.includes("from '../components/BlogImage'")) {
    content = content.replace(
      /import ArticleIconHeading from '\.\.\/components\/ArticleIconHeading';/,
      "import ArticleIconHeading from '../components/ArticleIconHeading';\nimport BlogImage from '../components/BlogImage';",
    );
  }

  return content;
}

function markRelatedThumbs(content) {
  return content.replace(
    /className="block h-\[260px\] w-full object-cover"/g,
    'className="blog-related-thumb block h-[260px] w-full object-cover"',
  );
}

for (const file of fs.readdirSync(pagesDir)) {
  if (!file.endsWith('Detail.jsx')) continue;
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;

  content = unwrapImageContainers(content);
  content = replaceLocalBlogImage(content);
  content = markRelatedThumbs(content);

  if (content !== original) {
    fs.writeFileSync(filePath, content);
    console.log('updated', file);
  }
}
