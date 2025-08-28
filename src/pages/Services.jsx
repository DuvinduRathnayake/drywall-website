// src/pages/Services.jsx
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Drywall Installation',
    slug: 'drywall-installation',
    lead: 'New builds, basements, and additions with clean lines and tight seams.',
    features: [
      'Framing-ready layouts',
      'Moisture/sound options',
      'Clean corner bead & trims',
    ],
    img: '/carasoual1.jpg',
    pricing: [
      ['Basement board only', '$2.00–$3.00 / sq ft'],
      ['Board + tape (Level 4)', '$3.50–$5.50 / sq ft'],
      ['Level 5 finish upgrade', '+$0.75–$1.25 / sq ft'],
    ],
  },
  {
    title: 'Taping & Finishing',
    slug: 'taping-finishing',
    lead: 'Level 4/5 finishes, dust-controlled sanding, paint-ready surfaces.',
    features: ['Crisp corners', 'Consistent texture', 'Fast, clean workflow'],
    img: '/carasoual2.jpg',
    pricing: [
      ['Level 4 finish', '$1.75–$2.75 / sq ft'],
      ['Level 5 (skim coat)', '$2.50–$4.00 / sq ft'],
      ['Ceiling smooth-out add-on', '+$0.75–$1.50 / sq ft'],
    ],
  },
  {
    title: 'Repairs & Patches',
    slug: 'repairs-patches',
    lead: 'Fast fixes for holes, water damage, and cracks — seamless blends.',
    features: ['Same-day small jobs', 'Texture match', 'Paint-ready handoff'],
    img: '/carasoual3.jpg',
    pricing: [
      ['Small patch (≤1 sq ft)', '$150–$250'],
      ['Medium patch (1–3 sq ft)', '$250–$450'],
      ['Larger repair (site visit)', 'Quote'],
    ],
  },
  {
    title: 'Ceilings & Texture',
    slug: 'ceilings-texture',
    lead: 'Popcorn removal, knockdown/orange-peel, and full smooth-out.',
    features: ['Dust control', 'Lighting flaw scan', 'Even texture'],
    img: '/carasoual1.jpg',
    pricing: [
      ['Popcorn removal', '$2.50–$4.00 / sq ft'],
      ['Knockdown/orange-peel', '$1.50–$2.75 / sq ft'],
      ['Full smooth finish', '$3.50–$5.50 / sq ft'],
    ],
  },
  {
    title: 'Framing & Boarding',
    slug: 'framing-boarding',
    lead: 'Metal/wood studs, insulation, vapour barrier, and clean boarding.',
    features: ['Straight walls', 'Proper fasteners', 'Acoustic options'],
    img: '/carasoual2.jpg',
    pricing: [
      ['Basic framing (stud walls)', '$18–$28 / linear ft'],
      ['Insulation & vapour', '$1.25–$2.25 / sq ft'],
      ['Boarding (labour)', '$1.00–$1.75 / sq ft'],
    ],
  },
  {
    title: 'Water Damage & Reno',
    slug: 'water-damage-reno',
    lead: 'Cut-out, dry, replace, and blend — mould-aware workflow.',
    features: ['Source check', 'Clean demo', 'Seamless blending'],
    img: '/carasoual3.jpg',
    pricing: [
      ['Minor cut-out & patch', '$250–$450'],
      ['Room-scale repair', '$650–$1,200+'],
      ['Complex/multi-room', 'Site visit'],
    ],
  },
];

export default function Services() {
  return (
    <main>
      {/* Strap header */}
      <section className='bg-[color:var(--light)] py-8'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <h1 className='text-2xl sm:text-3xl font-extrabold text-[color:var(--primary)]'>
            Our Services
          </h1>
          <p className='mt-2 text-[color:var(--dark)]/80'>
            Clear scope, tidy sites, and smooth finishes. Example ranges below —
            final pricing depends on on-site conditions.
          </p>
        </div>
      </section>

      {/* Sticky in-page nav */}
      <div className='sticky top-16 z-30 bg-white/90 backdrop-blur border-y border-[color:var(--dark)]/10'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 overflow-x-auto'>
          <ul className='flex gap-2 py-3 text-sm'>
            {services.map((s) => (
              <li key={s.slug}>
                <a
                  href={`#${s.slug}`}
                  className='inline-flex items-center rounded-full px-3 py-1 border border-[color:var(--dark)]/10
                             text-[color:var(--primary)] hover:text-[color:var(--secondary)] hover:border-[color:var(--secondary)]/40 transition'
                >
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Sections */}
      {services.map((s, idx) => (
        <section
          key={s.slug}
          id={s.slug}
          className={`scroll-mt-28 py-12 sm:py-16 ${idx % 2 ? 'bg-white' : ''}`}
          aria-label={s.title}
        >
          <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-8 items-center'>
            {/* Text */}
            <div className='lg:col-span-6'>
              <p className='text-sm font-semibold tracking-wide text-[color:var(--secondary)]'>
                {s.title}
              </p>
              <h2 className='mt-1 text-xl sm:text-2xl font-extrabold text-[color:var(--primary)]'>
                {s.lead}
              </h2>

              <ul className='mt-4 grid sm:grid-cols-2 gap-2 text-[color:var(--dark)]/85'>
                {s.features.map((f) => (
                  <li key={f} className='flex items-center gap-2'>
                    <span className='h-1.5 w-1.5 rounded-full bg-[color:var(--secondary)] inline-block' />
                    {f}
                  </li>
                ))}
              </ul>

              {/* Pricing chips */}
              <div className='mt-6 grid sm:grid-cols-2 gap-3'>
                {s.pricing.map(([label, price]) => (
                  <div
                    key={label}
                    className='rounded-xl border border-[color:var(--dark)]/10 bg-[color:var(--light)]/40 p-4'
                  >
                    <div className='text-sm text-[color:var(--dark)]/70'>
                      {label}
                    </div>
                    <div className='text-lg font-bold text-[color:var(--primary)]'>
                      {price}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA row */}
              <div className='mt-6 flex flex-wrap gap-3'>
                <Link
                  to='/contact'
                  className='inline-flex items-center justify-center px-5 py-2.5 rounded-xl
                             bg-[color:var(--secondary)] text-[color:var(--dark)] font-semibold
                             ring-1 ring-black/5 hover:opacity-90 transition'
                >
                  Get a Free Quote
                </Link>
                <a
                  href='tel:+15195551234'
                  className='inline-flex items-center justify-center px-5 py-2.5 rounded-xl
                             border border-[color:var(--primary)]/25 text-[color:var(--primary)]
                             hover:text-[color:var(--secondary)] hover:border-[color:var(--secondary)]/40 transition'
                >
                  Call (519) 555-1234
                </a>
              </div>
            </div>

            {/* Image */}
            <div className='lg:col-span-6'>
              <div className='relative overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5'>
                <div className='aspect-[4/3] w-full'>
                  <img
                    src={s.img}
                    alt={`${s.title} example`}
                    className='h-full w-full object-cover'
                    loading='lazy'
                    decoding='async'
                  />
                </div>
                <div className='absolute inset-x-0 top-0 h-1 bg-[color:var(--secondary)]/40' />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* FAQ */}
      <section
        className='bg-[color:var(--light)]/50 py-12 sm:py-16'
        aria-label='Service FAQs'
      >
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <p className='text-sm font-semibold tracking-wide text-[color:var(--secondary)]'>
            FAQs
          </p>
          <h2 className='mt-1 text-2xl font-extrabold text-[color:var(--primary)]'>
            Common questions
          </h2>

          <div className='mt-6 grid gap-3'>
            {[
              [
                'How fast can you provide an estimate?',
                'Typically 24–48 hours after we see photos/video or complete a site visit.',
              ],
              [
                'Do you handle small repairs?',
                'Yes. Small holes and cracks are common — we can often fit them in same-day or next-day.',
              ],
              [
                'Do you work while we’re home?',
                'Yes — we protect floors/furniture and keep dust down. We tidy at the end of each day.',
              ],
              [
                'What finish level should I choose?',
                'Level 4 is standard for most walls. Level 5 adds a skim coat for ultra-smooth, critical lighting or dark paint colors.',
              ],
            ].map(([q, a]) => (
              <details
                key={q}
                className='group rounded-xl border border-[color:var(--dark)]/10 bg-white p-4 open:shadow-sm'
              >
                <summary className='cursor-pointer list-none font-semibold text-[color:var(--primary)] flex items-center justify-between'>
                  {q}
                  <span className='ml-3 text-[color:var(--primary)]/70 group-open:rotate-45 transition'>
                    +
                  </span>
                </summary>
                <p className='mt-2 text-[color:var(--dark)]/85'>{a}</p>
              </details>
            ))}
          </div>

          <div className='mt-8 text-center'>
            <Link
              to='/contact'
              className='inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-[color:var(--primary)] text-white font-semibold shadow hover:shadow-md transition'
            >
              Still have questions? Contact us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
