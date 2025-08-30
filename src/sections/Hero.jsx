import { Link } from 'react-router-dom';
import { useEffect, useMemo, useRef, useState } from 'react';

export default function Hero() {
  // === Carousel config ===
  const images = useMemo(
    () => ['/carasoual1.jpg', '/carasoual2.jpg', '/carasoual3.jpg'],
    []
  );
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  const next = () => setIndex((i) => (i + 1) % images.length);

  useEffect(() => {
    if (paused || images.length <= 1) return;
    if (timerRef.current) window.clearInterval(timerRef.current);
    timerRef.current = window.setInterval(next, 4000);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [paused, images.length]);

  // === Simple page-enter animation (staggered) ===
  const rootRef = useRef(null);
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const reduce = window.matchMedia?.(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    const nodes = Array.from(root.querySelectorAll('[data-animate]'));
    nodes.sort(
      (a, b) =>
        (Number(a.dataset.animate) || 0) - (Number(b.dataset.animate) || 0)
    );

    nodes.forEach((el, i) => {
      if (reduce) {
        el.classList.remove('opacity-0', 'translate-y-2');
        el.classList.add('opacity-100', 'translate-y-0');
        return;
      }
      const delay = Number(el.dataset.delay || i * 90); // 90ms stagger
      el.style.transitionDelay = `${delay}ms`;
      requestAnimationFrame(() => {
        el.classList.remove('opacity-0', 'translate-y-2');
        el.classList.add('opacity-100', 'translate-y-0');
      });
    });

    return () => nodes.forEach((el) => (el.style.transitionDelay = ''));
  }, []);

  return (
    <section
      className='bg-[color:var(--light)]'
      aria-label='Drywall company hero section'
    >
      <div
        ref={rootRef}
        className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 grid lg:grid-cols-2 gap-10 items-center'
      >
        {/* LEFT COLUMN */}
        <div>
          <h1
            data-animate='1'
            className='opacity-0 translate-y-2 transition-all duration-700 text-3xl sm:text-4xl font-extrabold tracking-tight text-[color:var(--primary)]'
          >
            Professional Drywall & Finishing
          </h1>

          <p
            data-animate='2'
            className='opacity-0 translate-y-2 transition-all duration-700 mt-4 text-base sm:text-lg text-[color:var(--dark)]/80 max-w-2xl'
          >
            Clean lines, smooth walls, and on-time delivery. We handle
            residential and light commercial projects with care and precision.
          </p>

          {/* CTAs */}
          <div
            data-animate='3'
            className='opacity-0 translate-y-2 transition-all duration-700 mt-6 flex flex-col sm:flex-row gap-3'
          >
            <Link
              to='/contact'
              className='inline-flex items-center justify-center px-5 py-3 rounded-xl bg-[color:var(--secondary)] text-[color:var(--dark)] font-semibold shadow-sm ring-1 ring-black/5 hover:opacity-90 transition'
            >
              Get a Quote
            </Link>
            <a
              href='tel:+15195551234'
              className='inline-flex items-center justify-center px-5 py-3 rounded-xl font-semibold border border-[color:var(--primary)]/20 text-[color:var(--primary)] hover:text-[color:var(--secondary)] hover:border-[color:var(--secondary)]/40 transition'
            >
              Call Now (519) 555-1234
            </a>
          </div>

          {/* Trust badges */}
          <ul
            data-animate='4'
            className='opacity-0 translate-y-2 transition-all duration-700 mt-6 grid grid-cols-2 sm:flex sm:flex-wrap gap-3 text-sm text-[color:var(--primary)]/80'
          >
            <li className='flex items-center gap-2'>
              <span className='inline-block h-2 w-2 rounded-full bg-[color:var(--secondary)]' />
              Licensed & Insured
            </li>
            <li className='flex items-center gap-2'>
              <span className='inline-block h-2 w-2 rounded-full bg-[color:var(--secondary)]' />
              Free Estimates
            </li>
            <li className='flex items-center gap-2'>
              <span className='inline-block h-2 w-2 rounded-full bg-[color:var(--secondary)]' />
              Drywall • Taping • Texture
            </li>
            <li className='flex items-center gap-2'>
              <span className='inline-block h-2 w-2 rounded-full bg-[color:var(--secondary)]' />
              Repairs & Renovations
            </li>
          </ul>
        </div>

        {/* RIGHT COLUMN (auto carousel only, no buttons) */}
        <div
          data-animate='5'
          className='opacity-0 translate-y-2 transition-all duration-700 mt-8 lg:mt-0'
        >
          <div
            className='relative aspect-[4/3] w-full rounded-2xl shadow-lg ring-1 ring-black/5 overflow-hidden bg-gradient-to-br from-white to-[color:var(--secondary)]/10'
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* Slides */}
            {images.map((src, i) => (
              <img
                key={src}
                src={src}
                alt={`Project photo ${i + 1}`}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                  i === index ? 'opacity-100' : 'opacity-0'
                }`}
                aria-hidden={i === index ? 'false' : 'true'}
              />
            ))}

            {/* Dots */}
            {images.length > 1 && (
              <div className='absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2'>
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`h-2.5 w-2.5 rounded-full border border-white/70 transition-all ${
                      i === index ? 'bg-white' : 'bg-white/30'
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                    aria-current={i === index}
                  />
                ))}
              </div>
            )}

            {/* Live region for screen readers */}
            <span className='sr-only' aria-live='polite'>
              Slide {index + 1} of {images.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
