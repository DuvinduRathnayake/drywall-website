import { useEffect, useRef } from 'react';

export default function FeaturedProjects() {
  const itemsRef = useRef([]);

  const projects = [
    { title: 'Basement Finish', sub: 'Kitchener, ON', img: '/carasoual1.jpg' },
    {
      title: 'Ceiling Smooth-Out',
      sub: 'Cambridge, ON',
      img: '/carasoual2.jpg',
    },
    { title: 'Water Damage Repair', sub: 'Guelph, ON', img: '/carasoual3.jpg' },
    {
      title: 'New Build Boarding',
      sub: 'Waterloo, ON',
      img: '/carasoual1.jpg',
    },
    { title: 'Level 5 Finish', sub: 'Hespeler, ON', img: '/carasoual2.jpg' },
    {
      title: 'Patch & Paint-Ready',
      sub: 'Preston, ON',
      img: '/carasoual3.jpg',
    },
  ];

  // simple reveal on scroll (same pattern as ServicesTeaser)
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
    <section className='bg-white' aria-label='Featured drywall projects'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16'>
        <header className='text-center max-w-2xl mx-auto'>
          <p className='text-sm font-semibold tracking-wide text-[color:var(--secondary)]'>
            Featured Projects
          </p>
          <h2 className='mt-1 text-2xl sm:text-3xl font-bold tracking-tight text-[color:var(--primary)]'>
            Recent work we’re proud of
          </h2>
          <p className='mt-2 text-[color:var(--dark)]/80'>
            A quick look at finishes, repairs, and ceilings we’ve completed
            around Waterloo Region.
          </p>
        </header>

        <ul className='mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
          {projects.map((p, i) => (
            <li
              key={p.title + i}
              ref={(el) => (itemsRef.current[i] = el)}
              className='opacity-0 translate-y-3 transition-all duration-700'
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <article className='group relative overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5'>
                {/* image */}
                <div className='aspect-[4/3] w-full'>
                  <img
                    src={p.img}
                    alt={`${p.title} – ${p.sub}`}
                    loading='lazy'
                    className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]'
                  />
                </div>

                {/* gradient overlay */}
                <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-90' />

                {/* caption */}
                <div className='absolute inset-x-0 bottom-0 p-5'>
                  <div className='flex items-center justify-between'>
                    <div>
                      <h3 className='text-white font-semibold'>{p.title}</h3>
                      <p className='text-white/80 text-sm'>{p.sub}</p>
                    </div>
                    <span className='rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[color:var(--primary)] opacity-0 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0'>
                      View
                    </span>
                  </div>
                </div>

                {/* subtle top accent */}
                <div className='absolute inset-x-0 top-0 h-1 bg-[color:var(--secondary)]/40' />
              </article>
            </li>
          ))}
        </ul>

        {/* optional: view-all link */}
        <div className='mt-8 text-center'>
          <a
            href='/projects'
            className='text-[color:var(--primary)] underline underline-offset-4 hover:text-[color:var(--secondary)]'
          >
            View all projects
          </a>
        </div>
      </div>
    </section>
  );
}
