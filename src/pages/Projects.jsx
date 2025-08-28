import { useEffect, useMemo, useRef, useState } from 'react';

const CATEGORIES = ['All', 'Installation', 'Finishing', 'Repairs', 'Ceilings'];

// MVP data — swap images/titles later
const PROJECTS = [
  {
    title: 'Basement Finish',
    place: 'Kitchener, ON',
    cat: 'Installation',
    img: '/carasoual1.jpg',
    scope: ['Framing-ready boarding', 'Acoustic options', 'Clean seams'],
    result: 'Paint-ready in 5 days.',
  },
  {
    title: 'Level 5 Walls',
    place: 'Waterloo, ON',
    cat: 'Finishing',
    img: '/carasoual2.jpg',
    scope: ['Full skim coat', 'Crisp corners', 'Dust control'],
    result: 'Ultra-smooth finish.',
  },
  {
    title: 'Water Damage Patch',
    place: 'Cambridge, ON',
    cat: 'Repairs',
    img: '/carasoual3.jpg',
    scope: ['Cut-out & replace', 'Dry & seal', 'Texture match'],
    result: 'Seamless blend.',
  },
  {
    title: 'Popcorn Removal',
    place: 'Guelph, ON',
    cat: 'Ceilings',
    img: '/carasoual1.jpg',
    scope: ['Containment', 'Scrape & skim', 'Lighting flaw scan'],
    result: 'Flat, modern ceiling.',
  },
  {
    title: 'New Build Boarding',
    place: 'Hespeler, ON',
    cat: 'Installation',
    img: '/carasoual2.jpg',
    scope: ['Board & screws', 'Beads & trims', 'Tight lines'],
    result: 'Ready for taping.',
  },
  {
    title: 'Repair + Texture',
    place: 'Preston, ON',
    cat: 'Repairs',
    img: '/carasoual3.jpg',
    scope: ['Patch holes', 'Blend texture', 'Sand & tidy'],
    result: 'Invisible fix.',
  },
  {
    title: 'Ceiling Smooth-Out',
    place: 'Kitchener, ON',
    cat: 'Ceilings',
    img: '/carasoual1.jpg',
    scope: ['Skim coat', 'Level 5 on ceiling', 'Feathered edges'],
    result: 'Flawless under light.',
  },
  {
    title: 'Feature Wall L5',
    place: 'Waterloo, ON',
    cat: 'Finishing',
    img: '/carasoual2.jpg',
    scope: ['Full skim', 'Corner bead', 'Dust collection'],
    result: 'Dark paint approved.',
  },
  {
    title: 'Renovation Boarding',
    place: 'Cambridge, ON',
    cat: 'Installation',
    img: '/carasoual3.jpg',
    scope: ['Insulation & vapour', 'Boarding', 'Tidy site'],
    result: 'Clean handoff to paint.',
  },
];

export default function Projects() {
  const [activeCat, setActiveCat] = useState('All');
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0); // index within filtered list
  const itemsRef = useRef([]);
  const overlayRef = useRef(null);
  const firstFocusRef = useRef(null);

  const list = useMemo(
    () =>
      activeCat === 'All'
        ? PROJECTS
        : PROJECTS.filter((p) => p.cat === activeCat),
    [activeCat]
  );

  // simple reveal on scroll for cards
  useEffect(() => {
    const els = itemsRef.current.filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach(
          (e) =>
            e.isIntersecting &&
            e.target.classList.add('opacity-100', 'translate-y-0')
        );
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [activeCat]); // re-run when filter changes

  // modal: lock scroll + keyboard controls + focus trap
  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
      if (e.key === 'ArrowRight') setIdx((i) => (i + 1) % list.length);
      if (e.key === 'ArrowLeft')
        setIdx((i) => (i - 1 + list.length) % list.length);
      if (e.key === 'Tab') {
        // focus trap
        const modal = overlayRef.current?.querySelector('[data-dialog]');
        if (!modal) return;
        const focusables = modal.querySelectorAll(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          last.focus();
          e.preventDefault();
        } else if (!e.shiftKey && document.activeElement === last) {
          first.focus();
          e.preventDefault();
        }
      }
    };
    window.addEventListener('keydown', onKey);
    // focus first control
    setTimeout(() => firstFocusRef.current?.focus(), 0);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [open, list.length]);

  const openAt = (i) => {
    setIdx(i);
    setOpen(true);
  };

  return (
    <main>
      {/* Header */}
      <section className='bg-[color:var(--light)] py-8'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <h1 className='text-2xl sm:text-3xl font-extrabold text-[color:var(--primary)]'>
            Projects
          </h1>
          <p className='mt-2 text-[color:var(--dark)]/80'>
            A look at recent installs, finishes, repairs, and ceilings across
            Waterloo Region.
          </p>
        </div>
      </section>

      {/* Filters */}
      <div className='sticky top-16 z-30 bg-white/90 backdrop-blur border-y border-[color:var(--dark)]/10'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 overflow-x-auto'>
          <ul role='tablist' className='flex gap-2 py-3 text-sm'>
            {CATEGORIES.map((cat) => {
              const active = activeCat === cat;
              return (
                <li key={cat}>
                  <button
                    role='tab'
                    aria-selected={active}
                    onClick={() => setActiveCat(cat)}
                    className={[
                      'rounded-full px-3 py-1 transition',
                      active
                        ? 'bg-[color:var(--secondary)]/40 text-[color:var(--primary)]'
                        : 'border border-[color:var(--dark)]/10 text-[color:var(--primary)] hover:text-[color:var(--secondary)] hover:border-[color:var(--secondary)]/40',
                    ].join(' ')}
                  >
                    {cat}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Grid */}
      <section className='bg-white py-12 sm:py-16' aria-label='Project gallery'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          {/* count */}
          <p className='text-sm text-[color:var(--dark)]/70'>
            {list.length} result{list.length !== 1 ? 's' : ''}
          </p>

          <ul className='mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
            {list.map((p, i) => (
              <li
                key={`${p.title}-${i}`}
                ref={(el) => (itemsRef.current[i] = el)}
                className='opacity-0 translate-y-3 transition-all duration-700'
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <article className='group relative overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5'>
                  <div className='aspect-[4/3] w-full'>
                    <img
                      src={p.img}
                      alt={`${p.title} – ${p.place}`}
                      loading='lazy'
                      decoding='async'
                      className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]'
                    />
                  </div>

                  {/* overlay label */}
                  <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-90' />
                  <div className='absolute inset-x-0 bottom-0 p-5'>
                    <div className='flex items-center justify-between'>
                      <div>
                        <h3 className='text-white font-semibold'>{p.title}</h3>
                        <p className='text-white/80 text-sm'>
                          {p.place} · {p.cat}
                        </p>
                      </div>
                      <span className='rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[color:var(--primary)] opacity-0 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0'>
                        View
                      </span>
                    </div>
                  </div>

                  {/* clickable layer */}
                  <button
                    onClick={() => openAt(i)}
                    className='absolute inset-0'
                    aria-label={`Open ${p.title} project`}
                  />
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Modal / Lightbox */}
      {open && (
        <div
          ref={overlayRef}
          className='fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4'
          onMouseDown={(e) => {
            if (e.target === overlayRef.current) setOpen(false);
          }}
          aria-modal='true'
          role='dialog'
          aria-labelledby='project-title'
          data-overlay
        >
          <div
            data-dialog
            className='relative w-full max-w-3xl rounded-2xl bg-white shadow-xl ring-1 ring-black/5 overflow-hidden'
          >
            {/* image */}
            <div className='aspect-[4/3] w-full bg-[color:var(--light)]/50'>
              <img
                src={list[idx].img}
                alt={`${list[idx].title} large preview`}
                className='h-full w-full object-cover'
              />
            </div>

            {/* content */}
            <div className='p-5 sm:p-6'>
              <h3
                id='project-title'
                className='text-lg sm:text-xl font-extrabold text-[color:var(--primary)]'
              >
                {list[idx].title}
              </h3>
              <p className='text-sm text-[color:var(--dark)]/70'>
                {list[idx].place} · {list[idx].cat}
              </p>

              <ul className='mt-3 grid sm:grid-cols-2 gap-2 text-sm text-[color:var(--dark)]/85'>
                {list[idx].scope.map((s) => (
                  <li key={s} className='flex items-center gap-2'>
                    <span className='h-1.5 w-1.5 rounded-full bg-[color:var(--secondary)] inline-block' />
                    {s}
                  </li>
                ))}
              </ul>

              <p className='mt-3 text-[color:var(--dark)]/85'>
                {list[idx].result}
              </p>

              <div className='mt-5 flex flex-wrap gap-3'>
                <a
                  ref={firstFocusRef}
                  href='/contact'
                  className='inline-flex items-center justify-center px-4 py-2 rounded-xl bg-[color:var(--secondary)] text-[color:var(--dark)] font-semibold ring-1 ring-black/5 hover:opacity-90 transition'
                >
                  Get a Quote
                </a>
                <button
                  type='button'
                  onClick={() => setOpen(false)}
                  className='inline-flex items-center justify-center px-4 py-2 rounded-xl border border-[color:var(--primary)]/25 text-[color:var(--primary)] hover:text-[color:var(--secondary)] hover:border-[color:var(--secondary)]/40 transition'
                >
                  Close
                </button>
              </div>
            </div>

            {/* controls */}
            <button
              type='button'
              onClick={() => setIdx((i) => (i - 1 + list.length) % list.length)}
              className='absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow ring-1 ring-black/5 hover:bg-white'
              aria-label='Previous project'
            >
              <svg viewBox='0 0 24 24' className='h-5 w-5' aria-hidden='true'>
                <path
                  d='M15 6l-6 6 6 6'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                />
              </svg>
            </button>
            <button
              type='button'
              onClick={() => setIdx((i) => (i + 1) % list.length)}
              className='absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow ring-1 ring-black/5 hover:bg-white'
              aria-label='Next project'
            >
              <svg viewBox='0 0 24 24' className='h-5 w-5' aria-hidden='true'>
                <path
                  d='M9 6l6 6-6 6'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                />
              </svg>
            </button>

            {/* close corner */}
            <button
              type='button'
              onClick={() => setOpen(false)}
              className='absolute right-3 top-3 rounded-lg p-2 text-[color:var(--primary)] hover:bg-[color:var(--secondary)]/30'
              aria-label='Close dialog'
            >
              <svg viewBox='0 0 24 24' className='h-5 w-5' aria-hidden='true'>
                <path
                  d='M6 6l12 12M18 6L6 18'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
