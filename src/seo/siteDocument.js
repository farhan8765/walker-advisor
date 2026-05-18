import { getSeoForRoute, HOME_ROUTE_SEO } from './routeSeo';

/** Production site origin — used for canonical and Open Graph URLs. */
export const SITE_ORIGIN = 'https://thewalkeradvisor.com';

/** Staging WordPress host (for content migration scripts). */
export const STAGING_ORIGIN = 'https://darkcyan-lion-250828.hostingersite.com';

export function toProductionUrl(url) {
  if (!url || typeof url !== 'string') return url;
  return url.replace(STAGING_ORIGIN, SITE_ORIGIN);
}

export const HOME_TITLE = HOME_ROUTE_SEO.title;

export const HOME_DESCRIPTION = HOME_ROUTE_SEO.description;

const HOME_CANONICAL = `${SITE_ORIGIN}/`;

/** Canonical matches the page URL the app serves (self-referencing). */
export function getCanonicalUrlForPath(pathname) {
  const pathPart = (pathname || '/').replace(/\/+$/, '') || '/';
  return pathPart === '/' ? HOME_CANONICAL : `${SITE_ORIGIN}${pathPart}/`;
}

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

function removeMetaByName(name) {
  document.querySelector(`meta[name="${name}"]`)?.remove();
}

function removeMetaProperty(property) {
  document.querySelector(`meta[property="${property}"]`)?.remove();
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

/** Canonical = current page URL on thewalkeradvisor.com */
export function setCanonicalToCurrentPath() {
  const href = getCanonicalUrlForPath(window.location.pathname);
  upsertLinkRel('canonical', href);
  upsertMetaProperty('og:url', href);
  return href;
}

function applyDocumentSeo(title, description, canonicalUrl) {
  document.title = title;
  upsertMetaByName('robots', 'index, follow');

  upsertMetaProperty('og:type', 'website');
  upsertMetaProperty('og:site_name', 'The Walker Advisor');
  upsertMetaProperty('og:title', title);
  upsertMetaProperty('og:url', canonicalUrl);

  upsertMetaByName('twitter:card', 'summary_large_image');
  upsertMetaByName('twitter:title', title);

  if (description) {
    upsertMetaByName('description', description);
    upsertMetaProperty('og:description', description);
    upsertMetaByName('twitter:description', description);
  } else {
    removeMetaByName('description');
    removeMetaProperty('og:description');
    removeMetaByName('twitter:description');
  }
}

/** Title + meta description from live WordPress for the current React route. */
export function applyRouteDocumentSeo(pathname) {
  const pathPart = (pathname || '/').replace(/\/+$/, '') || '/';
  if (pathPart === '/') {
    applyHomePageDocumentSeo();
    setCanonicalToCurrentPath();
    return;
  }

  const seo = getSeoForRoute(pathPart);
  const canonicalUrl = getCanonicalUrlForPath(pathPart);

  if (seo?.title) {
    applyDocumentSeo(seo.title, seo.description || '', canonicalUrl);
    upsertLinkRel('canonical', canonicalUrl);
    return;
  }

  applyDocumentSeo(
    document.title || 'The Walker Advisor',
    '',
    canonicalUrl
  );
  upsertLinkRel('canonical', canonicalUrl);
}
