import { Link } from 'react-router-dom';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className='bg-white border-t border-[color:var(--dark)]/10'
      aria-label='Site footer'
    >
      {/* slim top CTA inside the footer */}
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6'>
        <div className='rounded-xl bg-[color:var(--light)]/60 border border-[color:var(--dark)]/10 p-4 sm:p-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between'>
          <p className='text-[color:var(--dark)]/80'>
            Serving{' '}
            <span className='font-semibold text-[color:var(--primary)]'>
              Cambridge, Kitchener, Waterloo &amp; Guelph
            </span>
          </p>
          <div className='flex flex-wrap gap-2'>
            <a
              href='tel:+15195551234'
              className='inline-flex items-center justify-center rounded-lg px-3 py-2 bg-[color:var(--secondary)] text-[color:var(--dark)] font-semibold ring-1 ring-black/5 hover:opacity-90 transition'
            >
              Call (519) 555-1234
            </a>
            <Link
              to='/contact'
              className='inline-flex items-center justify-center rounded-lg px-3 py-2 border border-[color:var(--primary)]/25 text-[color:var(--primary)] hover:text-[color:var(--secondary)] hover:border-[color:var(--secondary)]/40 transition'
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>

      {/* middle: 3 compact columns */}
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8'>
        <div className='grid gap-8 sm:grid-cols-3'>
          {/* Brand */}
          <div>
            <h3 className='text-lg font-extrabold text-[color:var(--primary)]'>
              Your Drywall Co.
            </h3>
            <p className='mt-2 text-sm text-[color:var(--dark)]/80'>
              Licensed &amp; insured drywall specialists. Smooth finishes, tidy
              sites, on-time delivery.
            </p>
            <ul className='mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm text-[color:var(--dark)]/70'>
              <li>
                <Link
                  to='/services'
                  className='hover:text-[color:var(--secondary)]'
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to='/projects'
                  className='hover:text-[color:var(--secondary)]'
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to='/about'
                  className='hover:text-[color:var(--secondary)]'
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to='/contact'
                  className='hover:text-[color:var(--secondary)]'
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className='text-sm font-semibold text-[color:var(--primary)]'>
              Service Areas
            </h4>
            <ul className='mt-3 grid grid-cols-2 gap-2 text-sm text-[color:var(--dark)]/80'>
              <li>Cambridge</li>
              <li>Kitchener</li>
              <li>Waterloo</li>
              <li>Guelph</li>
              <li>Hespeler</li>
              <li>Preston</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className='text-sm font-semibold text-[color:var(--primary)]'>
              Contact
            </h4>
            <ul className='mt-3 space-y-2 text-sm text-[color:var(--dark)]/80'>
              <li className='flex items-center gap-2'>
                <svg viewBox='0 0 24 24' className='h-4 w-4' aria-hidden='true'>
                  <path
                    d='M6.6 10.2c1.2 2.3 3 4.1 5.3 5.3l2-2a1 1 0 0 1 1-.25c1.1.37 2.3.57 3.5.6a1 1 0 0 1 1 1V19a1 1 0 0 1-1 1C9.2 20 4 14.8 4 8a1 1 0 0 1 1-1h3.1a1 1 0 0 1 1 1c.03 1.2.23 2.4.6 3.5a1 1 0 0 1-.25 1l-2 2Z'
                    fill='currentColor'
                  />
                </svg>
                <a
                  href='tel:+15195551234'
                  className='hover:text-[color:var(--secondary)]'
                >
                  (519) 555-1234
                </a>
              </li>
              <li className='flex items-center gap-2'>
                <svg viewBox='0 0 24 24' className='h-4 w-4' aria-hidden='true'>
                  <path d='M4 6h16v12H4z' stroke='currentColor' fill='none' />
                  <path d='M4 6l8 6 8-6' stroke='currentColor' fill='none' />
                </svg>
                <a
                  href='mailto:info@yourdrywall.ca'
                  className='hover:text-[color:var(--secondary)]'
                >
                  info@yourdrywall.ca
                </a>
              </li>
              <li className='flex items-center gap-2'>
                <svg viewBox='0 0 24 24' className='h-4 w-4' aria-hidden='true'>
                  <path
                    d='M12 8v8M8 12h8'
                    stroke='currentColor'
                    strokeWidth='1.5'
                  />
                  <circle
                    cx='12'
                    cy='12'
                    r='9'
                    stroke='currentColor'
                    fill='none'
                  />
                </svg>
                <span>Mon–Sat 8:00–18:00</span>
              </li>
              {/* optional: reviews link */}
              <li>
                <a
                  href='#'
                  className='inline-flex items-center gap-2 rounded-full bg-[color:var(--secondary)]/30 px-3 py-1 font-semibold text-[color:var(--primary)] ring-1 ring-black/5 hover:bg-[color:var(--secondary)]/40'
                >
                  ⭐ Read our Google reviews
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* bottom bar */}
      <div className='border-t border-[color:var(--dark)]/10'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs sm:text-sm text-[color:var(--dark)]/70'>
          <p>© {year} Your Drywall Co. All rights reserved.</p>
          <div className='flex items-center gap-4'>
            <Link to='/privacy' className='hover:text-[color:var(--secondary)]'>
              Privacy
            </Link>
            <Link to='/terms' className='hover:text-[color:var(--secondary)]'>
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
