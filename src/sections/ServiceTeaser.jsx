// src/sections/ServicesTeaser.jsx
import { useEffect, useRef } from 'react';

export default function ServicesTeaser() {
  const itemsRef = useRef([]);

  const services = [
    {
      title: 'Drywall Installation',
      bullets: ['Basements & additions', 'Moisture / sound options'],
      icon: (
        <svg viewBox='0 0 24 24' className='h-6 w-6' aria-hidden='true'>
          <rect
            x='3'
            y='4'
            width='18'
            height='14'
            rx='2'
            stroke='currentColor'
            fill='none'
            strokeWidth='1.6'
          />
          <path d='M12 4v14M3 11h18' stroke='currentColor' strokeWidth='1.2' />
        </svg>
      ),
    },
    {
      title: 'Taping & Finishing',
      bullets: ['Level 4/5 finish', 'Dust-controlled sanding'],
      icon: (
        <svg viewBox='0 0 24 24' className='h-6 w-6' aria-hidden='true'>
          <path
            d='M4 16l6-6 4 4 6-6'
            stroke='currentColor'
            strokeWidth='1.8'
            fill='none'
            strokeLinecap='round'
          />
          <rect
            x='3'
            y='3'
            width='18'
            height='18'
            rx='3'
            stroke='currentColor'
            fill='none'
            strokeWidth='1.2'
          />
        </svg>
      ),
    },
    {
      title: 'Repairs & Patches',
      bullets: ['Same-day small jobs', 'Texture match'],
      icon: (
        <svg viewBox='0 0 24 24' className='h-6 w-6' aria-hidden='true'>
          <path d='M5 12h14M12 5v14' stroke='currentColor' strokeWidth='1.8' />
          <rect
            x='3'
            y='3'
            width='18'
            height='18'
            rx='2'
            stroke='currentColor'
            fill='none'
            strokeWidth='1.2'
          />
        </svg>
      ),
    },
    {
      title: 'Ceilings & Texture',
      bullets: ['Popcorn removal', 'Knockdown/orange peel'],
      icon: (
        <svg viewBox='0 0 24 24' className='h-6 w-6' aria-hidden='true'>
          <path
            d='M4 7h16M6 12h12M8 17h8'
            stroke='currentColor'
            strokeWidth='1.6'
          />
        </svg>
      ),
    },
    {
      title: 'Framing & Boarding',
      bullets: ['Metal/wood studs', 'Insulation & vapour'],
      icon: (
        <svg viewBox='0 0 24 24' className='h-6 w-6' aria-hidden='true'>
          <path
            d='M4 20V6l8-4 8 4v14'
            stroke='currentColor'
            strokeWidth='1.6'
            fill='none'
          />
          <path d='M12 2v18' stroke='currentColor' strokeWidth='1.2' />
        </svg>
      ),
    },
    {
      title: 'Water Damage & Reno',
      bullets: ['Cut-out & replace', 'Mould-safe workflow'],
      icon: (
        <svg viewBox='0 0 24 24' className='h-6 w-6' aria-hidden='true'>
          <path
            d='M12 3c4 3.5 7 7.5 7 10.5A7 7 0 1 1 5 13.5C5 10.5 8 6.5 12 3z'
            stroke='currentColor'
            strokeWidth='1.2'
            fill='none'
          />
        </svg>
      ),
    },
  ];

  // simple scroll-in reveal (no extra libs)
  useEffect(() => {
    const els = itemsRef.current.filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting)
            e.target.classList.add('opacity-100', 'translate-y-0');
        });
      },
      { threshold: 0.2 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section className='bg-white' aria-label='Our drywall services'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16'>
        <header className='text-center max-w-2xl mx-auto'>
          <p className='text-sm font-semibold tracking-wide text-[color:var(--secondary)]'>
            Our Services
          </p>
          <h2 className='mt-1 text-2xl sm:text-3xl font-bold tracking-tight text-[color:var(--primary)]'>
            Fast, clean, paint-ready results
          </h2>
        </header>

        {/* Compact tiles */}
        <ul className='mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
          {services.map((s, i) => (
            <li
              key={s.title}
              ref={(el) => (itemsRef.current[i] = el)}
              className='opacity-0 translate-y-3 transition-all duration-700'
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div
                className='group h-36 rounded-2xl border border-[color:var(--dark)]/10 bg-[color:var(--light)]/30 p-5 shadow-sm 
                              hover:shadow-md hover:-translate-y-0.5 transition-all'
              >
                <div className='flex items-start gap-3'>
                  <span
                    className='inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl 
                                   bg-[color:var(--secondary)]/30 text-[color:var(--primary)]
                                   group-hover:scale-105 transition'
                  >
                    {s.icon}
                  </span>
                  <div className='min-w-0'>
                    <h3 className='text-base font-bold text-[color:var(--primary)] truncate'>
                      {s.title}
                    </h3>
                    <ul className='mt-1 text-sm text-[color:var(--dark)]/80 space-y-0.5'>
                      {s.bullets.map((b) => (
                        <li key={b} className='flex items-center gap-2'>
                          <span className='h-1.5 w-1.5 rounded-full bg-[color:var(--secondary)] inline-block' />
                          <span className='truncate'>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* hover reveal line */}
                <div className='mt-3 h-1 rounded-full bg-transparent group-hover:bg-[color:var(--secondary)]/40 transition' />
              </div>
            </li>
          ))}
        </ul>

        {/* slim CTA band */}
        <div className='mt-8 rounded-xl border border-[color:var(--dark)]/10 p-4 sm:flex items-center justify-between'>
          <p className='text-[color:var(--dark)]/80'>
            Not sure what to pick? Send a photo — we’ll tell you the fastest,
            cleanest fix.
          </p>
          <a
            href='/contact'
            className='mt-3 sm:mt-0 inline-flex items-center justify-center px-4 py-2 rounded-lg 
                       bg-[color:var(--secondary)] text-[color:var(--dark)] font-semibold ring-1 ring-black/5 
                       hover:opacity-90 transition'
          >
            Get a Free Quote
          </a>
        </div>
      </div>
    </section>
  );
}
