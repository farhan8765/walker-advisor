const defaultHashHref = (label) =>
  `#${label.toLowerCase().replaceAll(' ', '-')}`;

const footerColumns = [
  {
    title: 'Authors',
    links: [
      { label: 'Amir Abbasi', href: `${process.env.PUBLIC_URL}/amir-abbasi` },
      { label: 'Robin Dolan', href: `${process.env.PUBLIC_URL}/robin-dolan` },
      { label: 'Syed Ali', href: `${process.env.PUBLIC_URL}/syed-ali` },
    ],
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
  { label: 'Contact Us', href: `${process.env.PUBLIC_URL}/contact` },
  { label: 'Disclaimer', href: `${process.env.PUBLIC_URL}/disclaimer` },
  { label: 'Terms & Conditions', href: `${process.env.PUBLIC_URL}/terms-and-conditions` },
  { label: 'Privacy Policy', href: `${process.env.PUBLIC_URL}/privacy-policy` },
  { label: 'Cookies Policy', href: `${process.env.PUBLIC_URL}/cookies-policy` },
];

function SocialIcon({ label, children }) {
  const socialLinks = {
    Pinterest: 'https://www.pinterest.com/walkeradvisor2/',
    Facebook: 'https://www.facebook.com/people/The-Walker-Advisor/61570872987227/',
    Instagram: 'https://www.instagram.com/thewalkeradvisor/',
    Medium: 'https://medium.com/@walkeradvisor2',
    YouTube: 'https://www.youtube.com/@WalkerAdvisor',
    Quora: 'https://www.quora.com/profile/The-Walker-Advisor-1',
  };

  return (
    <a
      className="flex h-5 w-5 items-center justify-center text-white transition-colors duration-150 hover:text-[#ffc400] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffc400]"
      href={socialLinks[label] || '#'}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
    >
      {children}
    </a>
  );
}

function Footer() {
  return (
    <footer className="w-full px-4 py-12 md:px-8 lg:px-20">
      <div className="mx-auto flex min-h-[430px] max-w-[1280px] flex-col rounded-lg bg-[#111111] px-7 py-10 md:px-12">
        <div className="grid gap-8 md:grid-cols-[1.15fr_0.8fr_1fr_0.8fr]">
          <div>
            <a className="inline-flex" href="/" aria-label="The Walker Advisor home">
              <img
                className="h-auto w-[184px] object-contain brightness-0 invert"
                src={`${process.env.PUBLIC_URL}/images/TWA-logo.webp`}
                alt="The Walker Advisor"
              />
            </a>
            <p className="mt-6 max-w-[360px] font-manrope text-base font-normal leading-6 text-white">
              The Walker Advisor is committed to helping seniors and their
              families find the best mobility aids for safe and independent
              living.
            </p>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-base font-normal leading-5 text-white">
                {column.title}
              </h3>
              <ul className="mt-6 space-y-4">
                {column.links.map((link) => {
                  const label = typeof link === 'string' ? link : link.label;
                  const href =
                    typeof link === 'string' ? defaultHashHref(label) : link.href;
                  return (
                    <li key={label}>
                      <a
                        className="font-manrope text-base font-normal text-white no-underline transition-colors hover:text-[#ffc400] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffc400]"
                        href={href}
                      >
                        {label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-auto flex flex-col items-start justify-between gap-6 pt-12 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <SocialIcon label="Pinterest">
              <span className="flex h-5 w-5 items-center justify-center rounded-full border border-current text-[13px] font-black leading-none">
                P
              </span>
            </SocialIcon>
            <SocialIcon label="Facebook">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-current text-[14px] font-black leading-none">
                <span className="text-[#111111]">f</span>
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
            <SocialIcon label="Medium">
              <span className="flex h-4 w-4 items-center justify-center bg-current text-[11px] font-black leading-none">
                <span className="text-[#111111]">M</span>
              </span>
            </SocialIcon>
            <SocialIcon label="YouTube">
              <span className="flex h-[14px] w-5 items-center justify-center rounded-[3px] bg-current text-[9px] font-black leading-none">
                <span className="text-[#111111]">▶</span>
              </span>
            </SocialIcon>
            <SocialIcon label="Quora">
              <span className="text-[20px] font-bold leading-none">Q</span>
            </SocialIcon>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-3" aria-label="Footer links">
            {footerLinks.map((link) => {
              const label = typeof link === 'string' ? link : link.label;
              const href =
                typeof link === 'string' ? defaultHashHref(label) : link.href;
              return (
                <a
                  className="font-manrope text-base font-normal text-white no-underline transition-colors hover:text-[#ffc400] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffc400]"
                  href={href}
                  key={label}
                >
                  {label}
                </a>
              );
            })}
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
