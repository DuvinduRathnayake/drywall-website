export default function WhyChooseUs() {
  const items = [
    {
      title: 'Quality Craftsmanship',
      desc: 'Level 5 finishes, crisp corners, and consistent texture. We treat every wall like it’s our own home.',
      icon: (
        <svg viewBox='0 0 24 24' className='h-6 w-6' aria-hidden='true'>
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
      title: 'Fast & Reliable',
      desc: 'Clear schedules, daily progress updates, and on-time delivery for residential and light commercial work.',
      icon: (
        <svg viewBox='0 0 24 24' className='h-6 w-6' aria-hidden='true'>
          <path
            d='M3 13h5l3 7 4-14 3 7h3'
            stroke='currentColor'
            strokeWidth='1.8'
            fill='none'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      ),
    },
    {
      title: 'Clean Worksites',
      desc: 'We protect floors and furniture, minimize dust, and leave the job site neat at the end of each day.',
      icon: (
        <svg viewBox='0 0 24 24' className='h-6 w-6' aria-hidden='true'>
          <path
            d='M4 17h16M6 10h12M9 3h6'
            stroke='currentColor'
            strokeWidth='1.8'
            fill='none'
            strokeLinecap='round'
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
      title: 'Fair, Transparent Pricing',
      desc: 'Free estimates, written scope, and no surprises. You see exactly what you’re paying for.',
      icon: (
        <svg viewBox='0 0 24 24' className='h-6 w-6' aria-hidden='true'>
          <path
            d='M12 1v22M7 6h6.5a3.5 3.5 0 1 1 0 7H9a3 3 0 0 0 0 6h8'
            stroke='currentColor'
            strokeWidth='1.8'
            fill='none'
            strokeLinecap='round'
          />
        </svg>
      ),
    },
  ];

  return (
    <section className='bg-white py-12 sm:py-16'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <header className='max-w-2xl'>
          <p className='text-sm font-semibold tracking-wide text-[color:var(--secondary)]'>
            Why Choose Us
          </p>
          <h2 className='mt-2 text-2xl sm:text-3xl font-extrabold text-[color:var(--primary)]'>
            Drywall done right — every time
          </h2>
          <p className='mt-3 text-[color:var(--dark)]/80'>
            From small repairs to full renovations, our team delivers smooth
            finishes, tight timelines, and tidy sites. No fuss, just quality.
          </p>
        </header>

        {/* Value cards */}
        <ul className='mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
          {items.map(({ title, desc, icon }) => (
            <li
              key={title}
              className='group rounded-2xl border border-[color:var(--dark)]/10 bg-[color:var(--light)]/30 p-5 shadow-sm hover:shadow-md transition'
            >
              <div className='flex items-center gap-3'>
                <span className='inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[color:var(--secondary)]/30 text-[color:var(--primary)]'>
                  {icon}
                </span>
                <h3 className='text-base font-bold text-[color:var(--primary)]'>
                  {title}
                </h3>
              </div>
              <p className='mt-3 text-sm text-[color:var(--dark)]/80'>{desc}</p>
            </li>
          ))}
        </ul>

        {/* Mini stats strip (optional) */}
        <div className='mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4'>
          {[
            ['10+', 'Years Experience'],
            ['400+', 'Projects Completed'],
            ['24–48h', 'Estimate Turnaround'],
            ['100%', 'Satisfaction Focus'],
          ].map(([num, label]) => (
            <div
              key={label}
              className='rounded-2xl border border-[color:var(--dark)]/10 bg-white p-4 text-center'
            >
              <div className='text-2xl font-extrabold text-[color:var(--primary)]'>
                {num}
              </div>
              <div className='text-xs text-[color:var(--dark)]/70'>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
