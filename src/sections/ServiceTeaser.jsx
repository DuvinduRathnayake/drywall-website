export default function ServicesTeaser() {
  return (
    <section className='bg-white' aria-label='Our drywall services'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16'>
        <h2 className='text-2xl sm:text-3xl font-bold tracking-tight text-[color:var(--primary)]'>
          Our Services
        </h2>

        <p className='mt-2 text-[color:var(--dark)]/80 max-w-2xl'>
          From new installs to seamless finishes and quick repairs — we’ve got
          you covered.
        </p>

        {/* ======= Grid for cards ======= */}
        <div className='mt-10 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {/* Card 1 */}
          <div
            className='relative p-8 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300
    bg-cover bg-center flex flex-col items-center text-center'
            style={{ backgroundImage: "url('/carasoual1.jpg')" }}
          >
            {/* Dark overlay */}
            <div className='absolute inset-0 bg-black/50 rounded-2xl'></div>

            {/* Card content */}
            <div className='relative z-10 flex flex-col items-center text-center'>
              {/* Accent line */}
              <div className='w-12 h-1 bg-indigo-500 rounded-full mb-4'></div>

              <h3 className='text-xl font-bold text-white mb-2'>
                Drywall Installation
              </h3>
              <p className='text-gray-200 text-sm'>
                Seamless, high-quality drywall installation for residential and
                commercial projects.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          {/* <div className='p-8 rounded-2xl bg-slate-800 shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-300'>
            <div className='w-12 h-12 mb-4 flex items-center justify-center rounded-full bg-gray-700 text-white'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={2}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M12 4v16m8-8H4'
                />
              </svg>
            </div>
            <h3 className='text-xl font-bold text-white mb-2'>
              Wall Finishing
            </h3>
            <p className='text-gray-300 text-sm mb-4'>
              Smooth, flawless finishes that give your walls a polished,
              professional look.
            </p>
            <a
              href='/services'
              className='text-indigo-400 hover:underline font-medium'
            >
              Learn More →
            </a>
          </div> */}

          <div
            className='relative p-8 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300
    bg-cover bg-center flex flex-col items-center text-center'
            style={{ backgroundImage: "url('/carasoual1.jpg')" }}
          >
            {/* Dark overlay */}
            <div className='absolute inset-0 bg-black/50 rounded-2xl'></div>

            {/* Card content */}
            <div className='relative z-10 flex flex-col items-center text-center'>
              {/* Accent line */}
              <div className='w-12 h-1 bg-indigo-500 rounded-full mb-4'></div>

              <h3 className='text-xl font-bold text-white mb-2'>
                Drywall Installation
              </h3>
              <p className='text-gray-200 text-sm'>
                Seamless, high-quality drywall installation for residential and
                commercial projects.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          {/* <div className='p-8 rounded-2xl bg-slate-800 shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-300'>
            <div className='w-12 h-12 mb-4 flex items-center justify-center rounded-full bg-gray-700 text-white'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={2}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            </div>
            <h3 className='text-xl font-bold text-white mb-2'>
              Repairs & Maintenance
            </h3>
            <p className='text-gray-300 text-sm mb-4'>
              Quick, reliable drywall repairs and maintenance to keep your walls
              perfect.
            </p>
            <a
              href='/services'
              className='text-indigo-400 hover:underline font-medium'
            >
              Learn More →
            </a>
          </div> */}

          <div
            className='relative p-8 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300
    bg-cover bg-center flex flex-col items-center text-center'
            style={{ backgroundImage: "url('/carasoual1.jpg')" }}
          >
            {/* Dark overlay */}
            <div className='absolute inset-0 bg-black/50 rounded-2xl'></div>

            {/* Card content */}
            <div className='relative z-10 flex flex-col items-center text-center'>
              {/* Accent line */}
              <div className='w-12 h-1 bg-indigo-500 rounded-full mb-4'></div>

              <h3 className='text-xl font-bold text-white mb-2'>
                Drywall Installation
              </h3>
              <p className='text-gray-200 text-sm'>
                Seamless, high-quality drywall installation for residential and
                commercial projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
