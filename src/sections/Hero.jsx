import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section
      className='bg-[color:var(--light)]'
      aria-label='Drywall company hero section'
    >
      <div
        className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16
               grid lg:grid-cols-2 gap-10 items-center'
      >
        {/* LEFT COLUMN */}
        <div>
          <h1 className='text-3xl sm:text-4xl font-extrabold tracking-tight text-[color:var(--primary)]'>
            Professional Drywall & Finishing
          </h1>

          <p className='mt-4 text-base sm:text-lg text-[color:var(--dark)]/80 max-w-2xl'>
            Clean lines, smooth walls, and on-time delivery. We handle
            residential and light commercial projects with care and precision.
          </p>

          {/* CTAs */}
          <div className='mt-6 flex flex-col sm:flex-row gap-3'>
            <Link
              to='/contact'
              className='inline-flex items-center justify-center px-5 py-3 rounded-xl
                     bg-[color:var(--secondary)] text-[color:var(--dark)]
                     font-semibold shadow-sm ring-1 ring-black/5
                     hover:opacity-90 transition'
            >
              Get a Quote
            </Link>
            <a
              href='tel:+15195551234'
              className='inline-flex items-center justify-center px-5 py-3 rounded-xl font-semibold
                     border border-[color:var(--primary)]/20
                     text-[color:var(--primary)]
                     hover:text-[color:var(--secondary)]
                     hover:border-[color:var(--secondary)]/40
                     transition'
            >
              Call Now (519) 555-1234
            </a>
          </div>

          {/* Trust badges */}
          <ul className='mt-6 grid grid-cols-2 sm:flex sm:flex-wrap gap-3 text-sm text-[color:var(--primary)]/80'>
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

        {/* RIGHT COLUMN (visual placeholder / carousel later) */}
        <div className='mt-8 lg:mt-0'>
          <div className='aspect-[4/3] w-full rounded-2xl shadow-lg ring-1 ring-black/5 overflow-hidden grid place-items-center bg-gradient-to-br from-white to-[color:var(--secondary)]/10'>
            {/* If you have an image, put it here */}
            <img
              src='/carasoual1.jpg'
              alt='Drywall installation in progress'
              className='w-full h-full object-cover'
            />

            {/* TEMPORARY fallback text */}
            <div className='text-center px-6'>
              <div className='text-5xl'>🧰</div>
              <p className='mt-2 text-[color:var(--primary)]/70'>
                Project photos coming soon
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
