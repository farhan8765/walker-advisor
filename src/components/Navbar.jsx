import { useEffect, useState } from 'react';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about-us' },
  { label: 'Articles', href: '/articles' },
  { label: "Caregiver's Corner", href: '/caregivers-corner' },
  { label: 'Tools', href: '/tools' },
  { label: 'Contact Us', href: '/contact' },
];

function MenuIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const currentPath = window.location.pathname;

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    const handleChange = () => setMenuOpen(false);
    mq.addEventListener('change', handleChange);
    return () => mq.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  const desktopNav = (
    <nav
      className="flex min-h-[64px] max-w-[1200px] shrink-0 items-center gap-0 rounded-full bg-white px-1 py-1 shadow-[0_14px_32px_rgba(235,198,120,0.18)]"
      aria-label="Primary navigation"
    >
      {navItems.map((item) => {
        const isActive =
          item.href === '/'
            ? currentPath === '/'
            : currentPath === item.href;

        return (
          <a
            className={`whitespace-nowrap rounded-full px-3 py-[14px] text-base font-normal leading-none no-underline transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffc400] lg:px-4 lg:py-4 lg:text-[22px] ${
              isActive
                ? 'bg-[#ffc400] text-black'
                : 'text-[#5f6870] hover:text-black'
            }`}
            href={item.href}
            key={item.label}
          >
            {item.label}
          </a>
        );
      })}
    </nav>
  );

  return (
    <header className="sticky top-0 z-50 w-full bg-[#fbf6e6] px-4 pt-4 pb-3 shadow-[0_8px_28px_rgba(95,104,112,0.08)] md:px-[114px] lg:min-h-[126px] lg:pt-5 lg:pb-5">
      {/* Mobile: logo + menu */}
      <div className="grid w-full grid-cols-[1fr_auto] items-center gap-3 lg:hidden">
        <a
          className="inline-flex shrink-0 items-center"
          href="/"
          aria-label="The Walker Advisor home"
        >
          <img
            className="block h-12 w-auto object-contain sm:h-[68px] sm:w-[122px]"
            src={`${process.env.PUBLIC_URL}/images/TWA-logo.webp`}
            alt="The Walker Advisor"
          />
        </a>

        <button
          type="button"
          className="inline-flex shrink-0 items-center justify-center rounded-full border border-black/10 bg-white p-3 text-[#1c2730] shadow-[0_14px_32px_rgba(235,198,120,0.12)] transition-colors hover:bg-[#fafafa] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffc400]"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav-panel"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((o) => !o)}
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Desktop: logo left, pill nav centered in header, balanced right column */}
      <div className="mt-6 hidden w-full grid-cols-[1fr_auto_1fr] items-center gap-x-3 lg:mt-3 lg:grid">
        <div className="flex min-w-0 justify-start">
          <a
            className="relative z-10 inline-flex shrink-0 items-center"
            href="/"
            aria-label="The Walker Advisor home"
          >
            <img
              className="block h-[82px] w-[146px] max-w-none object-contain"
              src={`${process.env.PUBLIC_URL}/images/TWA-logo.webp`}
              alt="The Walker Advisor"
            />
          </a>
        </div>

        <div className="flex shrink-0 justify-center self-center pt-2 lg:pt-0">
          {desktopNav}
        </div>

        <div className="min-w-0" aria-hidden="true" />
      </div>

      <nav
        className={`absolute left-0 right-0 top-full z-20 mx-4 mt-2 flex flex-col gap-1 rounded-2xl border border-black/5 bg-white p-3 shadow-[0_24px_48px_rgba(0,0,0,0.12)] lg:hidden ${
          menuOpen ? '' : 'hidden'
        }`}
        aria-label="Primary navigation mobile"
        id="mobile-nav-panel"
      >
        {navItems.map((item) => {
          const isActive =
            item.href === '/'
              ? currentPath === '/'
              : currentPath === item.href;

          return (
            <a
              className={`block rounded-xl px-4 py-3 text-base font-medium leading-snug no-underline transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffc400] ${
                isActive
                  ? 'bg-[#ffc400] text-black'
                  : 'text-[#5f6870] hover:bg-[#fbf6e6] hover:text-black'
              }`}
              href={item.href}
              key={item.label}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          );
        })}
      </nav>
    </header>
  );
}

export default Navbar;
