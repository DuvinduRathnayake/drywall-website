import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  const refs = useRef([]);

  // simple reveal on scroll (same pattern you used)
  useEffect(() => {
    const els = refs.current.filter(Boolean);
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) =>
            e.isIntersecting &&
            e.target.classList.add('opacity-100', 'translate-y-0')
        ),
      { threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const values = [
    {
      title: 'Craftsmanship',
      desc: 'Level 5 when it matters, clean corners, consistent texture.',
      icon: (
        <svg viewBox='0 0 24 24' className='h-6 w-6'>
          <path
            d='M9 12.75 11.25 15l3.75-4.5'
            stroke='currentColor'
            strokeWidth='1.8'
            fill='none'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z'
            stroke='currentColor'
            strokeWidth='1.2'
            fill='none'
          />
        </svg>
      ),
    },
    {
      title: 'Communication',
      desc: 'Clear scope, daily updates, on-time starts & finishes.',
      icon: (
        <svg viewBox='0 0 24 24' className='h-6 w-6'>
          <path
            d='M4 5h16v10H7l-3 3V5z'
            stroke='currentColor'
            strokeWidth='1.6'
            fill='none'
            strokeLinecap='round'
          />
        </svg>
      ),
    },
    {
      title: 'Clean Sites',
      desc: 'Protection, dust control, tidy at the end of each day.',
      icon: (
        <svg viewBox='0 0 24 24' className='h-6 w-6'>
          <path
            d='M4 17h16M6 10h12M9 3h6'
            stroke='currentColor'
            strokeWidth='1.6'
            fill='none'
          />
          <rect
            x='3'
            y='17'
            width='18'
            height='4'
            rx='1'
            stroke='currentColor'
            strokeWidth='1.2'
            fill='none'
          />
        </svg>
      ),
    },
    {
      title: 'Fair Pricing',
      desc: 'Written estimates, no surprises, photo/video quotes welcomed.',
      icon: (
        <svg viewBox='0 0 24 24' className='h-6 w-6'>
          <path
            d='M12 1v22M7 6h6.5a3.5 3.5 0 1 1 0 7H9a3 3 0 0 0 0 6h8'
            stroke='currentColor'
            strokeWidth='1.6'
            fill='none'
            strokeLinecap='round'
          />
        </svg>
      ),
    },
  ];

  const steps = [
    [
      'Share details',
      'Send photos/video. We can often estimate within 24–48h.',
    ],
    [
      'On-site prep',
      'Protect floors & furniture, plan dust control, confirm scope.',
    ],
    ['Work & updates', 'Clear milestones; you’ll know what’s next and when.'],
    ['Walkthrough', 'Final touch-ups + clean handoff. Paint-ready surfaces.'],
  ];

  return (
    <main>
      {/* Strap header */}
      <section className='bg-[color:var(--light)] py-8'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <h1 className='text-2xl sm:text-3xl font-extrabold text-[color:var(--primary)]'>
            About Us
          </h1>
          <p className='mt-2 text-[color:var(--dark)]/80'>
            Licensed & insured drywall specialists serving Cambridge, Kitchener,
            Waterloo & Guelph.
          </p>
        </div>
      </section>

      {/* Intro: owner + blurb */}
      <section className='bg-white py-12 sm:py-16'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-8 items-center'>
          <div
            ref={(el) => (refs.current[0] = el)}
            className='lg:col-span-7 opacity-0 translate-y-3 transition-all duration-700'
          >
            <p className='text-sm font-semibold tracking-wide text-[color:var(--secondary)]'>
              Our Promise
            </p>
            <h2 className='mt-1 text-xl sm:text-2xl font-extrabold text-[color:var(--primary)]'>
              Smooth finishes, tidy sites, on-time delivery.
            </h2>
            <p className='mt-3 text-[color:var(--dark)]/85'>
              We handle new installs, finishing, repairs, and ceilings with the
              same care we’d want in our own homes. Expect clear communication,
              predictable schedules, and paint-ready results.
            </p>

            {/* mini stats */}
            <div className='mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3'>
              {[
                ['10+', 'Years experience'],
                ['400+', 'Projects completed'],
                ['4.9★', 'Avg. homeowner rating'],
                ['24–48h', 'Typical estimate time'],
              ].map(([num, label], i) => (
                <div
                  key={i}
                  className='rounded-2xl border border-[color:var(--dark)]/10 bg-[color:var(--light)]/40 p-4 text-center'
                >
                  <div className='text-2xl font-extrabold text-[color:var(--primary)]'>
                    {num}
                  </div>
                  <div className='text-xs text-[color:var(--dark)]/70'>
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            ref={(el) => (refs.current[1] = el)}
            className='lg:col-span-5 opacity-0 translate-y-3 transition-all duration-700'
            style={{ transitionDelay: '100ms' }}
          >
            <div className='relative overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5 bg-[color:var(--light)]/50 p-6 flex flex-col items-center'>
              <img
                src='/avatars/owner.jpg' /* put a 600x600 headshot in public/avatars/owner.jpg */
                alt='Owner headshot'
                className='h-28 w-28 rounded-full object-cover ring-2 ring-white shadow'
                loading='lazy'
              />
              <h3 className='mt-3 text-lg font-extrabold text-[color:var(--primary)]'>
                Dimitry
              </h3>
              <p className='text-sm text-[color:var(--dark)]/70'>
                Owner & Lead Finisher
              </p>

              <ul className='mt-4 space-y-2 text-sm text-[color:var(--dark)]/80 self-stretch'>
                <li className='flex items-center gap-2'>
                  <span className='inline-block h-1.5 w-1.5 rounded-full bg-[color:var(--secondary)]' />
                  WSIB & Liability Insurance
                </li>
                <li className='flex items-center gap-2'>
                  <span className='inline-block h-1.5 w-1.5 rounded-full bg-[color:var(--secondary)]' />
                  Written estimates & clear scope
                </li>
                <li className='flex items-center gap-2'>
                  <span className='inline-block h-1.5 w-1.5 rounded-full bg-[color:var(--secondary)]' />
                  Dust-controlled sanding
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values grid */}
      <section className='bg-white py-8'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <h2 className='text-xl sm:text-2xl font-extrabold text-[color:var(--primary)]'>
            What we stand for
          </h2>
          <ul className='mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
            {values.map((v, i) => (
              <li
                key={v.title}
                ref={(el) => (refs.current[2 + i] = el)}
                className='opacity-0 translate-y-3 transition-all duration-700'
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className='rounded-2xl border border-[color:var(--dark)]/10 bg-[color:var(--light)]/30 p-5 shadow-sm hover:shadow-md transition'>
                  <div className='flex items-center gap-3'>
                    <span className='inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[color:var(--secondary)]/30 text-[color:var(--primary)]'>
                      {v.icon}
                    </span>
                    <h3 className='text-base font-bold text-[color:var(--primary)]'>
                      {v.title}
                    </h3>
                  </div>
                  <p className='mt-3 text-sm text-[color:var(--dark)]/80'>
                    {v.desc}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Process / How we work */}
      <section className='bg-[color:var(--light)]/40 py-12'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <h2 className='text-xl sm:text-2xl font-extrabold text-[color:var(--primary)]'>
            How we work
          </h2>
          <ol className='mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
            {steps.map(([t, d], i) => (
              <li
                key={t}
                ref={(el) => (refs.current[6 + i] = el)}
                className='opacity-0 translate-y-3 transition-all duration-700'
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className='rounded-2xl border border-[color:var(--dark)]/10 bg-white p-5 shadow-sm'>
                  <div className='flex items-center gap-2'>
                    <span className='h-7 w-7 rounded-full bg-[color:var(--secondary)]/30 flex items-center justify-center text-sm font-bold text-[color:var(--primary)]'>
                      {i + 1}
                    </span>
                    <h3 className='font-semibold text-[color:var(--primary)]'>
                      {t}
                    </h3>
                  </div>
                  <p className='mt-2 text-sm text-[color:var(--dark)]/80'>
                    {d}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}
