// src/sections/PrimaryCTA.jsx
import { Link } from 'react-router-dom';

export default function PrimaryCTA() {
  const phone = '+15195551234'; // match the Hero number
  const smsBody = encodeURIComponent('Hi! I’d like a drywall quote.');

  return (
    <section aria-label='Get a quote' className='bg-white'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-10'>
        <div className='rounded-2xl border border-[color:var(--dark)]/10 bg-gradient-to-r from-[color:var(--secondary)]/25 to-transparent p-6 sm:p-8 shadow-sm'>
          <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4'>
            <div>
              <p className='text-sm font-semibold tracking-wide text-[color:var(--secondary)]'>
                Ready in 24–48h
              </p>
              <h3 className='mt-1 text-xl sm:text-2xl font-extrabold text-[color:var(--primary)]'>
                Get a fast, fair quote today
              </h3>
              <p className='mt-1 text-[color:var(--dark)]/80'>
                Send a photo or short video and we’ll recommend the cleanest
                fix.
              </p>
            </div>

            <div className='flex flex-wrap gap-3'>
              <a
                href={`tel:${phone}`}
                className='inline-flex items-center justify-center px-4 py-2 rounded-xl bg-[color:var(--secondary)] text-[color:var(--dark)] font-semibold ring-1 ring-black/5 hover:opacity-90 transition'
                aria-label='Call now'
              >
                Call (519) 555-1234
              </a>

              <a
                href={`sms:${phone}?&body=${smsBody}`}
                className='inline-flex items-center justify-center px-4 py-2 rounded-xl border border-[color:var(--primary)]/25 text-[color:var(--primary)] hover:text-[color:var(--secondary)] hover:border-[color:var(--secondary)]/40 transition'
                aria-label='Text us'
              >
                Text Us
              </a>

              <Link
                to='/contact'
                className='inline-flex items-center justify-center px-4 py-2 rounded-xl bg-[color:var(--primary)] text-white font-semibold shadow hover:shadow-md transition'
                aria-label='Open contact form'
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
