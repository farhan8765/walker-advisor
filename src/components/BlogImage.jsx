/** Inline blog content image (not hero/title). Styling via .blog-content-image in index.css */
export default function BlogImage({ src, alt, narrow = false }) {
  const resolvedSrc = src.startsWith('http') ? src : `${process.env.PUBLIC_URL}/images/${src}`;
  const className = narrow ? 'blog-content-image blog-content-image--narrow' : 'blog-content-image';

  return <img className={className} src={resolvedSrc} alt={alt} />;
}
