function barePath(pathname: string): string {
  if (pathname === '/' || pathname === '') return '/';
  return pathname.endsWith('/') ? pathname : `${pathname}/`;
}

/** One descriptive alt per audited URL so the logo is not an empty image. */
export function logoAltForPath(pathname: string): string {
  const path = barePath(pathname);

  if (path === '/') return 'BO7 Cheats – logo';
  if (path === '/product/') return 'BO7 Cheats – logo';
  if (path === '/product/bo7-cheat/') return 'BO7 Cheats – logo';
  if (path === '/blog/') return 'Guides – logo';
  if (path === '/forum/') return 'Forum – logo';
  if (path === '/faq/') return 'Faq – logo';
  if (path === '/support/') return 'Support – logo';
  return 'BO7 Cheats logo';
}
