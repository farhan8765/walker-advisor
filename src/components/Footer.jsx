const footerColumns = [
  {
    title: 'Authors',
    links: ['Amir Abbasi', 'Robin Dolan', 'Syed Ali'],
  },
  {
    title: 'Walkers by categories',
    links: ['Without Wheels', 'Two Wheels', 'Rollator'],
  },
  {
    title: 'Walkers by brands',
    links: ['Winlove', 'Helavo', 'Elenker', 'Carex', 'Nova'],
  },
];

const footerLinks = [
  'Contact Us',
  'Disclaimer',
  'Terms & Conditions',
  'Privacy Policy',
  'Cookies Policy',
];

function SocialIcon({ label, children }) {
  return (
    <a
      className="flex h-5 w-5 items-center justify-center text-[#17232b] transition-colors duration-150 hover:text-[#002f49] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#002f49]"
      href={`#${label.toLowerCase()}`}
      aria-label={label}
    >
      {children}
    </a>
  );
}

function Footer() {
  return (
    <footer className="w-full  px-6 py-20 md:px-20">
      <div className="mx-auto flex min-h-[504px] max-w-[1280px] flex-col rounded-xl bg-[#fff4bd] px-8 py-16 md:px-16">
        <div className="grid gap-12 md:grid-cols-[1.25fr_1fr_1.15fr_1fr]">
          <a href="/" aria-label="The Walker Advisor home">
            <img
              className="h-auto w-[184px] object-contain"
              src={`${process.env.PUBLIC_URL}/images/TWA-logo.webp`}
              alt="The Walker Advisor"
            />
          </a>

          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-xs font-normal text-black">{column.title}</h3>
              <ul className="mt-8 space-y-5">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      className="text-base font-normal text-black no-underline hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#002f49]"
                      href={`#${link.toLowerCase().replaceAll(' ', '-')}`}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-auto flex flex-col items-start justify-between gap-8 pt-16 md:flex-row md:items-center">
          <div className="flex items-center gap-4">
            <SocialIcon label="Facebook">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-current text-[14px] font-black leading-none">
                <span className="text-[#fff4bd]">f</span>
              </span>
            </SocialIcon>
            <SocialIcon label="Instagram">
              <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                <rect
                  x="5"
                  y="5"
                  width="14"
                  height="14"
                  rx="4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                />
                <circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="2.2" />
                <circle cx="16.7" cy="7.4" r="1.2" fill="currentColor" />
              </svg>
            </SocialIcon>
            <SocialIcon label="X">
              <span className="text-[22px] font-normal leading-none">X</span>
            </SocialIcon>
            <SocialIcon label="LinkedIn">
              <span className="flex h-4 w-4 items-center justify-center rounded-sm bg-current text-[11px] font-black leading-none">
                <span className="text-[#fff4bd]">in</span>
              </span>
            </SocialIcon>
            <SocialIcon label="YouTube">
              <span className="flex h-[14px] w-5 items-center justify-center rounded-[3px] bg-current text-[9px] font-black leading-none">
                <span className="text-[#fff4bd]">▶</span>
              </span>
            </SocialIcon>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-4" aria-label="Footer links">
            {footerLinks.map((link) => (
              <a
                className="text-base font-normal text-black no-underline hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#002f49]"
                href={`#${link.toLowerCase().replaceAll(' ', '-')}`}
                key={link}
              >
                {link}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
