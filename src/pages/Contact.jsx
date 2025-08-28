import { useState } from 'react';

export default function Contact() {
  const PHONE = '+15195551234';
  const EMAIL = 'info@yourdrywall.ca';

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Quote request',
    message: '',
    company: '', // honeypot (leave blank)
  });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const smsBody = encodeURIComponent(
    'Hi! I’d like a drywall quote. Here are some details:'
  );

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Please enter your name';
    if (!form.email.trim() && !form.phone.trim()) {
      e.contact = 'Add an email or phone';
    }
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = 'Enter a valid email';
    }
    if (!form.message.trim()) e.message = 'Tell us a bit about the job';
    if (form.company) e.company = 'Bot detected';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = (ev) => {
    ev.preventDefault();
    if (!validate()) return;

    // MVP: open user's email client with prefilled message
    const subject = encodeURIComponent(`${form.subject} – ${form.name}`);
    const body = encodeURIComponent(
      [
        `Name: ${form.name}`,
        `Email: ${form.email || '—'}`,
        `Phone: ${form.phone || '—'}`,
        '',
        'Project details:',
        form.message,
      ].join('\n')
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <main>
      {/* Header */}
      <section className='bg-[color:var(--light)] py-8'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <h1 className='text-2xl sm:text-3xl font-extrabold text-[color:var(--primary)]'>
            Contact
          </h1>
          <p className='mt-2 text-[color:var(--dark)]/80'>
            Send a photo or short video — we’ll recommend the cleanest fix and
            get you a fast, fair quote.
          </p>
        </div>
      </section>

      {/* Cards: Call / Text / Email */}
      <section className='bg-white py-8'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-4 sm:grid-cols-3'>
          <a
            href={`tel:${PHONE}`}
            className='rounded-2xl border border-[color:var(--dark)]/10 bg-[color:var(--light)]/40 p-5 shadow-sm hover:shadow-md transition'
          >
            <div className='text-sm font-semibold text-[color:var(--secondary)]'>
              Call us
            </div>
            <div className='mt-1 text-xl font-extrabold text-[color:var(--primary)]'>
              (519) 555-1234
            </div>
            <p className='mt-1 text-[color:var(--dark)]/80'>
              Mon–Sat 8:00–18:00
            </p>
          </a>

          <a
            href={`sms:${PHONE}?&body=${smsBody}`}
            className='rounded-2xl border border-[color:var(--dark)]/10 bg-[color:var(--light)]/40 p-5 shadow-sm hover:shadow-md transition'
          >
            <div className='text-sm font-semibold text-[color:var(--secondary)]'>
              Text us
            </div>
            <div className='mt-1 text-xl font-extrabold text-[color:var(--primary)]'>
              Quick photo = faster quote
            </div>
            <p className='mt-1 text-[color:var(--dark)]/80'>iMessage/SMS</p>
          </a>

          <a
            href={`mailto:${EMAIL}`}
            className='rounded-2xl border border-[color:var(--dark)]/10 bg-[color:var(--light)]/40 p-5 shadow-sm hover:shadow-md transition'
          >
            <div className='text-sm font-semibold text-[color:var(--secondary)]'>
              Email
            </div>
            <div className='mt-1 text-xl font-extrabold text-[color:var(--primary)]'>
              {EMAIL}
            </div>
            <p className='mt-1 text-[color:var(--dark)]/80'>
              Attach photos if you can
            </p>
          </a>
        </div>
      </section>

      {/* Form + Map */}
      <section className='bg-white pb-12 sm:pb-16'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-8'>
          {/* Form */}
          <div className='lg:col-span-7'>
            <form
              onSubmit={onSubmit}
              noValidate
              className='rounded-2xl border border-[color:var(--dark)]/10 p-6 shadow-sm'
            >
              <div className='grid gap-4 sm:grid-cols-2'>
                <div className='sm:col-span-2'>
                  <label className='block text-sm font-medium text-[color:var(--primary)]'>
                    Name *
                  </label>
                  <input
                    type='text'
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className='mt-1 w-full rounded-xl border border-[color:var(--dark)]/15 bg-[color:var(--light)]/40 px-3 py-2 outline-none focus:ring-2 focus:ring-[color:var(--secondary)]'
                  />
                  {errors.name && (
                    <p className='mt-1 text-sm text-red-600'>{errors.name}</p>
                  )}
                </div>

                <div>
                  <label className='block text-sm font-medium text-[color:var(--primary)]'>
                    Email
                  </label>
                  <input
                    type='email'
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    className='mt-1 w-full rounded-xl border border-[color:var(--dark)]/15 bg-[color:var(--light)]/40 px-3 py-2 outline-none focus:ring-2 focus:ring-[color:var(--secondary)]'
                  />
                  {errors.email && (
                    <p className='mt-1 text-sm text-red-600'>{errors.email}</p>
                  )}
                </div>

                <div>
                  <label className='block text-sm font-medium text-[color:var(--primary)]'>
                    Phone
                  </label>
                  <input
                    type='tel'
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                    className='mt-1 w-full rounded-xl border border-[color:var(--dark)]/15 bg-[color:var(--light)]/40 px-3 py-2 outline-none focus:ring-2 focus:ring-[color:var(--secondary)]'
                  />
                </div>

                <div className='sm:col-span-2'>
                  <label className='block text-sm font-medium text-[color:var(--primary)]'>
                    Subject
                  </label>
                  <input
                    type='text'
                    value={form.subject}
                    onChange={(e) =>
                      setForm({ ...form, subject: e.target.value })
                    }
                    className='mt-1 w-full rounded-xl border border-[color:var(--dark)]/15 bg-[color:var(--light)]/40 px-3 py-2 outline-none focus:ring-2 focus:ring-[color:var(--secondary)]'
                  />
                </div>

                <div className='sm:col-span-2'>
                  <label className='block text-sm font-medium text-[color:var(--primary)]'>
                    Project details *
                  </label>
                  <textarea
                    rows={6}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    className='mt-1 w-full rounded-xl border border-[color:var(--dark)]/15 bg-[color:var(--light)]/40 px-3 py-2 outline-none focus:ring-2 focus:ring-[color:var(--secondary)]'
                    placeholder='Room(s), ceiling height, texture, photos, timing…'
                  />
                  {errors.message && (
                    <p className='mt-1 text-sm text-red-600'>
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Honeypot (hidden from humans) */}
                <div className='hidden'>
                  <label>Company</label>
                  <input
                    type='text'
                    tabIndex={-1}
                    autoComplete='off'
                    value={form.company}
                    onChange={(e) =>
                      setForm({ ...form, company: e.target.value })
                    }
                  />
                  {errors.company && (
                    <p className='text-sm text-red-600'>{errors.company}</p>
                  )}
                </div>
              </div>

              <div className='mt-5 flex flex-wrap gap-3'>
                <button
                  type='submit'
                  className='inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-[color:var(--primary)] text-white font-semibold shadow hover:shadow-md transition'
                >
                  Send Message
                </button>
                <a
                  href={`sms:${PHONE}?&body=${smsBody}`}
                  className='inline-flex items-center justify-center px-5 py-2.5 rounded-xl border border-[color:var(--primary)]/25 text-[color:var(--primary)] hover:text-[color:var(--secondary)] hover:border-[color:var(--secondary)]/40 transition'
                >
                  Or text us instead
                </a>
              </div>

              {sent && (
                <p className='mt-3 text-sm text-[color:var(--dark)]/70'>
                  Thanks! Your email client should have opened with the message
                  prefilled.
                </p>
              )}
            </form>
          </div>

          {/* Map / Areas */}
          <div className='lg:col-span-5'>
            <div className='rounded-2xl overflow-hidden border border-[color:var(--dark)]/10 shadow-sm'>
              <iframe
                title='Service Area Map'
                src='https://www.google.com/maps?q=Cambridge,ON&z=10&output=embed'
                loading='lazy'
                className='w-full h-64'
              />
            </div>
            <ul className='mt-4 grid grid-cols-2 gap-2 text-sm text-[color:var(--dark)]/80'>
              <li>Cambridge</li>
              <li>Kitchener</li>
              <li>Waterloo</li>
              <li>Guelph</li>
              <li>Hespeler</li>
              <li>Preston</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
