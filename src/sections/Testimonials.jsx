// src/sections/Testimonials.jsx
import { useEffect, useRef } from 'react';

const getInitials = (name = '') =>
  name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

function InitialAvatar({ name }) {
  return (
    <div className='h-10 w-10 rounded-full bg-[color:var(--secondary)]/30 text-[color:var(--primary)] flex items-center justify-center font-semibold'>
      {getInitials(name)}
    </div>
  );
}

export default function Testimonials() {
  const itemsRef = useRef([]);

  const quotes = [
    {
      quote:
        'They finished our basement with a smooth Level 5 finish. On time, no mess — exactly what we wanted.',
      name: 'Mark Roberts',
      place: 'Kitchener, ON',
      rating: 5,
      avatar: '/avatars/customer1.jpeg', // put a 200x200 jpg in /public/avatars
      source: 'Google',
    },
    {
      quote:
        'Popcorn ceiling removal in two rooms — fast and super clean. We were paint-ready the next day.',
      name: 'Alisha Pereira',
      place: 'Cambridge, ON',
      rating: 5,
      avatar: '/avatars/customer2.jpg',
      source: 'Facebook',
    },
    {
      quote:
        'Water-damage patch blended perfectly. Couldn’t see where the hole ever was. Highly recommend.',
      name: 'Daniel Smith',
      place: 'Guelph, ON',
      rating: 5,
      avatar: '/avatars/customer3.jpg', // no photo? we’ll show initials
      source: 'Email',
    },
  ];

  useEffect(() => {
    const els = itemsRef.current.filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting)
            e.target.classList.add('opacity-100', 'translate-y-0');
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section
      className='bg-[color:var(--light)]/40'
      aria-label='Customer testimonials'
    >
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16'>
        <header className='text-center max-w-2xl mx-auto'>
          <p className='text-sm font-semibold tracking-wide text-[color:var(--secondary)]'>
            Testimonials
          </p>
          <h2 className='mt-1 text-2xl sm:text-3xl font-bold tracking-tight text-[color:var(--primary)]'>
            Homeowners across Waterloo Region trust us
          </h2>
        </header>

        <ul className='mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
          {quotes.map((t, i) => (
            <li
              key={t.name + i}
              ref={(el) => (itemsRef.current[i] = el)}
              className='opacity-0 translate-y-3 transition-all duration-700'
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <figure className='h-full rounded-2xl border border-[color:var(--dark)]/10 bg-white p-5 shadow-sm'>
                {/* stars */}
                <div
                  className='flex gap-1 text-[color:var(--secondary)]'
                  aria-label={`${t.rating} out of 5 stars`}
                >
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <svg
                      key={s}
                      viewBox='0 0 24 24'
                      className='h-4 w-4'
                      aria-hidden='true'
                    >
                      <path
                        d='M12 3.2l2.7 5.47 6.03.88-4.36 4.25 1.03 6.02L12 17.6l-5.4 2.92 1.03-6.02L3.27 9.55l6.03-.88L12 3.2z'
                        fill='currentColor'
                      />
                    </svg>
                  ))}
                </div>

                <blockquote className='mt-3 text-[color:var(--dark)]/90'>
                  “{t.quote}”
                </blockquote>

                <figcaption className='mt-4 flex items-center gap-3'>
                  {t.avatar ? (
                    <img
                      src={t.avatar}
                      alt={`${t.name} portrait`}
                      className='h-10 w-10 rounded-full object-cover ring-2 ring-white shadow'
                      loading='lazy'
                      decoding='async'
                      width='40'
                      height='40'
                    />
                  ) : (
                    <InitialAvatar name={t.name} />
                  )}

                  <div>
                    <div className='font-semibold text-[color:var(--primary)]'>
                      {t.name}
                    </div>
                    <div className='text-sm text-[color:var(--dark)]/70'>
                      {t.place}
                      {t.source && (
                        <>
                          {' · '}
                          <span className='text-[color:var(--dark)]/60'>
                            {t.source}
                          </span>
                        </>
                      )}
                    </div>
                    {t.url && (
                      <a
                        href={t.url}
                        className='text-xs text-[color:var(--primary)] underline underline-offset-4 hover:text-[color:var(--secondary)]'
                      >
                        Read full review
                      </a>
                    )}
                  </div>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
