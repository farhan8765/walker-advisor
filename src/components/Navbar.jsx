const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about-us' },
  { label: 'Articles', href: '#articles' },
  { label: "Caregiver's Corner", href: '/caregivers-corner' },
  { label: 'Tools', href: '#tools' },
  { label: 'Contact Us', href: '/contact' },
];

function Navbar() {
  const currentPath = window.location.pathname;

  return (
    <header className="flex min-h-[126px] w-full items-start bg-[#fbf6e6] px-6 pt-5 md:px-[114px]">
      <a
        className="inline-flex shrink-0 items-center"
        href="/"
        aria-label="The Walker Advisor home"
      >
        <img
          className="block h-[82px] w-[146px] object-contain"
          src={`${process.env.PUBLIC_URL}/images/TWA-logo.webp`}
          alt="The Walker Advisor"
        />
      </a>

      <nav
        className="mx-auto mt-3 flex min-h-[70px] items-center gap-2 rounded-full bg-white px-2 shadow-[0_14px_32px_rgba(235,198,120,0.18)]"
        aria-label="Primary navigation"
      >
        {navItems.map((item) => {
          const isActive =
            item.href === '/'
              ? currentPath === '/'
              : currentPath === item.href;

          return (
            <a
              className={`whitespace-nowrap rounded-full px-6 py-[18px] text-[22px] font-normal leading-none no-underline transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffc400] ${
                isActive
                  ? 'bg-[#ffc400] text-black'
                  : 'text-[#5f6870] hover:text-black'
              }`}
              key={item.label}
              href={item.href}
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
