export default function ServicesTeaser() {
  const services = [
    {
      title: 'Drywall Installation',
      desc: 'New builds, basements, and additions with clean lines and tight seams.',
      img: '/carasoual1.jpg',
      badge: 'New Builds',
    },
    {
      title: 'Taping & Finishing',
      desc: 'Level 4/5 finishes. Smooth, paint‑ready surfaces with crisp corners.',
      img: '/carasoual2.jpg',
      badge: 'Level 5',
    },
    {
      title: 'Repairs & Patches',
      desc: 'Fast fixes for holes, water damage, and cracks — seamless blends.',
      img: '/carasoual3.jpg',
      badge: 'Quick Turn',
    },
  ];

  return (
    <section className='bg-white' aria-label='Our drywall services'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-center'>
        <h2 className='text-2xl sm:text-3xl font-bold tracking-tight text-[color:var(--primary)]'>
          Our Services
        </h2>

        <p className='mt-2 text-[color:var(--dark)]/80 max-w-2xl mx-auto'>
          From new installs to seamless finishes and quick repairs — we’ve got
          you covered.
        </p>

        {/* ======= Grid for cards ======= */}
        <div className='mt-10 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {services.map((s) => (
            <article
              key={s.title}
              className='group relative rounded-2xl overflow-hidden shadow-lg ring-1 ring-black/5 transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5'
              aria-label={s.title}
            >
              {/* Image layer */}
              <div
                className='aspect-[4/3] bg-center bg-cover'
                style={{ backgroundImage: `url(${s.img})` }}
                role='img'
                aria-label={s.title}
              />

              {/* Overlay (darker on hover) */}
              <div className='pointer-events-none absolute inset-0 bg-black/45 transition-opacity duration-300 group-hover:bg-black/55' />

              {/* Content */}
              <div className='absolute inset-0 p-8 flex flex-col items-center justify-center text-center'>
                {/* Optional badge */}
                {s.badge && (
                  <span className='mb-4 inline-flex items-center rounded-full border border-white/30 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white/90 backdrop-blur'>
                    {s.badge}
                  </span>
                )}

                <div className='w-12 h-1 bg-indigo-500 rounded-full mb-4' />
                <h3 className='text-xl font-bold text-white mb-2'>{s.title}</h3>
                <p className='text-gray-200 text-sm max-w-sm'>{s.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
