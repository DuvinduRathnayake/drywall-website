import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/Logo1.png';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false); // ✅ fix

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 2);
    onScroll(); // ✅ set initial state on mount
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur bg-[color:var(--light)]/90
        border-b ${
          scrolled
            ? 'shadow-md border-[color:var(--dark)]/15'
            : 'border-[color:var(--dark)]/10'
        }`}
    >
      <div className='mx-auto max-w-7xl h-16 px-4 sm:px-6 lg:px-8 flex items-center'>
        {/* Logo on left */}
        <Link
          to='/'
          className='order-2 md:order-1 flex items-center focus:outline-none'
        >
          <img
            src={logo}
            alt='Dimitry Drywall Solution logo'
            className='h-12 md:h-14 lg:h-16 w-auto object-contain'
          />
        </Link>

        {/* Centered nav */}
        <nav className='hidden md:flex md:order-2 flex-1 justify-center items-center gap-7 text-sm md:text-base lg:text-lg font-semibold tracking-tight'>
          {[
            { to: '/', label: 'Home' },
            { to: '/services', label: 'Services' },
            { to: '/projects', label: 'Projects' },
            { to: '/about', label: 'About' },
            { to: '/contact', label: 'Contact' },
          ].map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                [
                  'transition-colors',
                  isActive
                    ? 'text-[color:var(--secondary)]'
                    : 'text-[color:var(--primary)] hover:text-[color:var(--secondary)]',
                ].join(' ')
              }
              end={item.to === '/'}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <Link
          to='/contact'
          className='hidden md:inline-flex md:order-3 items-center gap-2 px-4 py-2 rounded-xl
             bg-[color:var(--secondary)] text-[color:var(--dark)]
             hover:opacity-90 transition shadow-sm ring-1 ring-black/5'
        >
          Get a Quote
        </Link>

        {/* Mobile menu button on right */}
        <button
          className='order-1 md:order-3 md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-[color:var(--dark)]/10 text-[color:var(--primary)] hover:text-[color:var(--secondary)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[color:var(--secondary)]'
          aria-label='Toggle menu'
          aria-expanded={open}
          aria-controls='mobile-menu'
          type='button'
          onClick={() => setOpen((v) => !v)}
        >
          <span className='sr-only'>Toggle menu</span>
          {open ? (
            // X icon
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              aria-hidden='true'
            >
              <path
                d='M6 6l12 12M18 6L6 18'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
              />
            </svg>
          ) : (
            // Hamburger icon
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              aria-hidden='true'
            >
              <path
                d='M4 7h16M4 12h16M4 17h16'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu panel — keep mounted for smooth transitions */}
      <div
        id='mobile-menu'
        aria-hidden={!open}
        className={[
          'md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out',
          'bg-[color:var(--light)] border-t border-[color:var(--dark)]/10',
          open ? 'max-h-96 opacity-100 shadow-sm' : 'max-h-0 opacity-0',
        ].join(' ')}
      >
        <div className='mx-auto max-w-7xl'>
          {/* CTA row */}
          <div className='px-4 pt-3 pb-2'>
            <Link
              to='/contact'
              onClick={() => setOpen(false)}
              className='block w-full text-center px-4 py-2 rounded-xl
                 bg-[color:var(--secondary)] text-[color:var(--dark)]
                 hover:opacity-90 transition shadow-sm ring-1 ring-black/5'
            >
              Get a Quote
            </Link>
          </div>

          {/* Links */}
          <nav className='px-2 pb-3 flex flex-col space-y-1'>
            {[
              { to: '/', label: 'Home' },
              { to: '/services', label: 'Services' },
              { to: '/projects', label: 'Projects' },
              { to: '/about', label: 'About' },
              { to: '/contact', label: 'Contact' },
            ].map((item, index) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  [
                    'block rounded-lg px-3 py-3 transition-all duration-200',
                    open
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 -translate-y-1',
                    isActive
                      ? 'text-[color:var(--dark)] bg-[color:var(--secondary)]/15'
                      : 'text-[color:var(--primary)] hover:text-[color:var(--secondary)] hover:bg-[color:var(--dark)]/5',
                  ].join(' ')
                }
                style={{ transitionDelay: `${index * 40}ms` }}
                end={item.to === '/'}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
