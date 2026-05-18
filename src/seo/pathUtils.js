import { resolveRoutePath } from './routeRedirects';

export function stripTrailingSlash(pathname) {
  return (pathname || '/').replace(/\/+$/, '') || '/';
}

/** Browser URL + internal links — matches canonical trailing slash. */
export function withTrailingSlash(pathname) {
  const path = stripTrailingSlash(pathname);
  return path === '/' ? '/' : `${path}/`;
}

/** Route key for App routes / SEO lookup (no trailing slash). */
export function normalizeRoutePath(pathname) {
  return resolveRoutePath(stripTrailingSlash(pathname));
}

/** Full browser pathname after redirects + trailing slash. */
export function toBrowserPath(pathname) {
  return withTrailingSlash(normalizeRoutePath(pathname));
}

export function pathHref(path) {
  return withTrailingSlash(path);
}
