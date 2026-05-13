/** Production site origin — used for canonical and Open Graph URLs. */
export const SITE_ORIGIN = 'https://thewalkeradvisor.com';

export const HOME_TITLE =
  'Best Walkers for Seniors | Unbiased Reviews – The Walker Advisor';

export const HOME_DESCRIPTION =
  'Unbiased reviews of the best walkers for seniors. Compare top brands and ratings to find the safest, most comfortable mobility aids';

const HOME_CANONICAL = `${SITE_ORIGIN}/`;

function upsertMetaByName(name, content) {
  let el = document.querySelector(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('name', name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertMetaProperty(property, content) {
  let el = document.querySelector(`meta[property="${property}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('property', property);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertLinkRel(rel, href) {
  let el = document.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

/**
 * Applies homepage SEO to document.head (title, description, robots, Open Graph, Twitter).
 * Canonical is set globally in App via setCanonicalToCurrentPath().
 */
export function applyHomePageDocumentSeo() {
  document.title = HOME_TITLE;
  upsertMetaByName('description', HOME_DESCRIPTION);
  upsertMetaByName('robots', 'index, follow');

  upsertMetaProperty('og:type', 'website');
  upsertMetaProperty('og:site_name', 'The Walker Advisor');
  upsertMetaProperty('og:title', HOME_TITLE);
  upsertMetaProperty('og:description', HOME_DESCRIPTION);
  upsertMetaProperty('og:url', HOME_CANONICAL);

  upsertMetaByName('twitter:card', 'summary_large_image');
  upsertMetaByName('twitter:title', HOME_TITLE);
  upsertMetaByName('twitter:description', HOME_DESCRIPTION);
}

/** Self-referencing canonical for the current URL (helps crawlers on every route). */
export function setCanonicalToCurrentPath() {
  const path = window.location.pathname || '/';
  const pathPart = path === '/' ? '/' : path.replace(/\/+$/, '') || '/';
  const href = pathPart === '/' ? HOME_CANONICAL : `${SITE_ORIGIN}${pathPart}`;
  upsertLinkRel('canonical', href);
}
