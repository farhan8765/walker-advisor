/**
 * Restore corrupted blog image src attributes (normalize script bug).
 */
const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, '../src/pages');

const altToFile = {
  '4-wheel rollator walker': 'TWA2-682x1024.webp',
  '3-wheel hemi walker': 'TWA-3-751x1024.webp',
  'Side-style reciprocal walker': 'TWA-4-683x1024.webp',
  'Quad cane': 'TWA-5-751x1024.webp',
  'Single-point cane': 'TWA-6-768x768.webp',
  "Signs you're ready for next mobility stage": 'TWA-7-683x1024.webp',
  'Correct walker height adjustment sequence': 'TWA-blog25-1-683x1024.webp',
  'Common walker height mistakes': 'twa-blog25-2-683x1024.webp',
  'Safe walker stair method using a handrail': 'twa-info32.webp',
  'Caregiver assisting with gait belt near stairs': 'twa-info3.webp',
  'Smartwatch worn by a walker user': 'twa-26-2.webp',
  'Medical alert button worn on the wrist': 'twa-26-3-768x403.webp',
  'Fitness style wristband with emergency features': 'twa-26-4.webp',
  'Walking aid comparison': 'twa28-2-1-768x362.webp',
  'Walker height fitting guide': 'twa-blog26-2-683x1024.webp',
  'Clip-on walker light attachment for better visibility': 'blog-27-6-683x1024.webp',
  'Walker comfort upgrade accessory': 'blog-27-8-683x1024.webp',
};

const travelImages = [
  { file: 'twa-1-2-683x1024.webp', alt: 'Senior traveler planning trip with walker' },
  { file: 'twa-1-3-683x1024.webp', alt: 'Walker user navigating transit' },
];

function ensureBlogImageImport(content) {
  if (!content.includes('<BlogImage')) return content;
  if (content.includes("from '../components/BlogImage'")) return content;
  const importLine = "import BlogImage from '../components/BlogImage';\n";
  if (content.includes("from '../components/ArticleIconHeading'")) {
    return content.replace(
      /import ArticleIconHeading from '\.\.\/components\/ArticleIconHeading';\n/,
      `import ArticleIconHeading from '../components/ArticleIconHeading';\n${importLine}`
    );
  }
  const end = content.indexOf('\n', content.indexOf('import '));
  return content.slice(0, end + 1) + importLine + content.slice(end + 1);
}

function removeLocalBlogImage(content) {
  return content.replace(
    /\nfunction BlogImage\(\{[^}]+\}\) \{\n\s*return <img[^;]+;\n\}\n/g,
    '\n'
  );
}

function fixBrokenTags(content, base) {
  let travelIndex = 0;

  return content.replace(
    /<img className="blog-content-image" src=\{\`\$\{process\.env\.PUBLIC_URL\} alt=\{([^}]*)\} \/>/g,
    (match, altExpr) => {
      const trimmed = altExpr.trim();
      if (trimmed === 'item.alt') {
        if (base === 'MustHaveWalkerAccessoriesDetail.jsx') {
          return '<img className="blog-product-thumb mx-auto h-[80px] w-full object-contain" src={`${process.env.PUBLIC_URL}/images/${item.image}`} alt={item.alt} />';
        }
        return '<BlogImage src={item.image} alt={item.alt} />';
      }
      if (trimmed === 'product.alt') return '<BlogImage src={product.image} alt={product.alt} />';
      if (trimmed === 'imageAlt') return '<BlogImage src={image} alt={imageAlt} />';
      if (trimmed === 'alt') return '<BlogImage src={src} alt={alt} />';
      if (trimmed === '""' && base === 'TravelWithWalkerDetail.jsx') {
        const row = travelImages[travelIndex++];
        if (!row) return match;
        return `<BlogImage src="${row.file}" alt="${row.alt}" />`;
      }
      const file = altToFile[trimmed];
      if (!file) {
        console.warn('no mapping for alt:', trimmed, 'in', base);
        return match;
      }
      const altText = trimmed.replace(/"/g, '&quot;');
      return `<BlogImage src="${file}" alt="${altText}" />`;
    }
  );
}

function fixFile(filePath) {
  const base = path.basename(filePath);
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;

  content = fixBrokenTags(content, base);
  content = removeLocalBlogImage(content);
  content = ensureBlogImageImport(content);

  if (content !== original) {
    fs.writeFileSync(filePath, content);
    console.log('fixed', base);
  }
}

for (const name of fs.readdirSync(pagesDir)) {
  if (!name.endsWith('Detail.jsx')) continue;
  const full = path.join(pagesDir, name);
  const text = fs.readFileSync(full, 'utf8');
  if (
    text.includes('PUBLIC_URL} alt=') ||
    /\nfunction BlogImage\(\{/.test(text)
  ) {
    fixFile(full);
  }
}
