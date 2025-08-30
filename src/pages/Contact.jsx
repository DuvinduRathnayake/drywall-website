// src/pages/Contact.jsx
import { useState, useRef, useMemo } from 'react';

export default function Contact() {
  const PHONE = '+15195551234';
  const EMAIL = 'info@yourdrywall.ca';
  // OPTIONAL: add your Formspree form ID (e.g., 'xzzaeevz') or the full URL
  const FORMSPREE_ID = 'xzzaeevz';

  const INITIAL_FORM = {
    name: '',
    email: '',
    phone: '',
    subject: 'Quote request',
    message: '',
    services: [],
    preferred: 'email', // 'email' | 'phone' | 'text'
    company: '', // honeypot
  };

  const [form, setForm] = useState(INITIAL_FORM);
  const [files, setFiles] = useState([]); // File[]
  const [errors, setErrors] = useState({});
  const [state, setState] = useState({
    sending: false,
    sent: false,
    error: '',
  });
  const dropRef = useRef(null);

  const resetForm = () => {
    setForm(INITIAL_FORM);
    setFiles([]);
    setErrors({});
  };

  const smsBody = useMemo(
    () =>
      encodeURIComponent(
        `Hi! I’d like a drywall quote.\n\nName: ${form.name}\nService(s): ${
          form.services.join(', ') || '—'
        }\nDetails: ${form.message}`
      ),
    [form.name, form.services, form.message]
  );

  const SERVICE_OPTIONS = [
    'Drywall Installation',
    'Taping & Finishing',
    'Repairs & Patches',
    'Ceilings & Texture',
    'Framing & Boarding',
    'Water Damage & Reno',
  ];

  const toggleService = (s) =>
    setForm((f) => ({
      ...f,
      services: f.services.includes(s)
        ? f.services.filter((x) => x !== s)
        : [...f.services, s],
    }));

  const onFiles = (list) => {
    const arr = Array.from(list || []);
    // keep up to 6 files, ~10MB each (soft guard)
    const next = [...files, ...arr]
      .slice(0, 6)
      .filter((f) => f.size <= 10 * 1024 * 1024);
    setFiles(next);
  };

  const removeFile = (idx) => setFiles((fs) => fs.filter((_, i) => i !== idx));

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Please enter your name';
    if (!form.email.trim() && !form.phone.trim())
      e.contact = 'Add an email or phone';
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = 'Enter a valid email';
    if (!form.message.trim()) e.message = 'Tell us a bit about the job';
    if (form.company) e.company = 'Bot detected';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submitFormspree = async () => {
    const endpoint = FORMSPREE_ID.startsWith('http')
      ? FORMSPREE_ID
      : `https://formspree.io/f/${FORMSPREE_ID}`;

    const data = new FormData();
    data.append('name', form.name);
    data.append('email', form.email);
    data.append('phone', form.phone);
    data.append('subject', form.subject);
    data.append('preferred', form.preferred);
    data.append('services', form.services.join(', '));
    data.append('message', form.message);
    files.forEach((f) => data.append('files', f, f.name));

    const res = await fetch(endpoint, {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' },
    });
    if (!res.ok) throw new Error('Submission failed');
    const json = await res.json();
    if (json?.ok !== true) throw new Error('Submission error');
  };

  const onSubmit = async (ev) => {
    ev.preventDefault();
    if (!validate()) return;

    // direct submission if a Formspree ID/URL is present
    if (FORMSPREE_ID) {
      try {
        setState({ sending: true, sent: false, error: '' });
        await submitFormspree();
        resetForm(); // ✅ clears textarea and all fields
        setState({ sending: false, sent: true, error: '' });
        return;
      } catch (err) {
        setState({
          sending: false,
          sent: false,
          error: 'Could not submit. Try again or email us directly.',
        });
      }
    }

    // fallback: open email client
    const subject = encodeURIComponent(`${form.subject} – ${form.name}`);
    const body = encodeURIComponent(
      [
        `Name: ${form.name}`,
        `Email: ${form.email || '—'}`,
        `Phone: ${form.phone || '—'}`,
        `Preferred: ${form.preferred}`,
        `Services: ${form.services.join(', ') || '—'}`,
        '',
        'Project details:',
        form.message,
        '',
        files.length
          ? '(Attachments: please add selected photos/videos to this email)'
          : '',
      ].join('\n')
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    resetForm(); // ✅ clears textarea and all fields
    setState({ sending: false, sent: true, error: '' });
  };

  const onDragOver = (e) => {
    e.preventDefault();
    dropRef.current?.classList.add('ring-2', 'ring-[color:var(--secondary)]');
  };
  const onDragLeave = () =>
    dropRef.current?.classList.remove(
      'ring-2',
      'ring-[color:var(--secondary)]'
    );
  const onDrop = (e) => {
    e.preventDefault();
    onDragLeave();
    onFiles(e.dataTransfer.files);
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

      {/* Quick actions */}
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
              {/* contact fields */}
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
              </div>
              {errors.contact && (
                <p className='mt-1 text-sm text-red-600'>{errors.contact}</p>
              )}

              {/* service chips */}
              <div className='mt-4'>
                <label className='block text-sm font-medium text-[color:var(--primary)]'>
                  Service(s)
                </label>
                <div className='mt-2 flex flex-wrap gap-2'>
                  {SERVICE_OPTIONS.map((s) => {
                    const active = form.services.includes(s);
                    return (
                      <button
                        type='button'
                        key={s}
                        onClick={() => toggleService(s)}
                        className={[
                          'rounded-full px-3 py-1 text-sm transition',
                          active
                            ? 'bg-[color:var(--secondary)]/40 text-[color:var(--primary)]'
                            : 'border border-[color:var(--dark)]/15 text-[color:var(--primary)] hover:text-[color:var(--secondary)] hover:border-[color:var(--secondary)]/40',
                        ].join(' ')}
                        aria-pressed={active}
                      >
                        {s}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* preferred contact */}
              <fieldset className='mt-4'>
                <legend className='text-sm font-medium text-[color:var(--primary)]'>
                  Preferred contact
                </legend>
                <div className='mt-2 flex gap-4 text-sm'>
                  {['email', 'phone', 'text'].map((opt) => (
                    <label key={opt} className='inline-flex items-center gap-2'>
                      <input
                        type='radio'
                        name='preferred'
                        value={opt}
                        checked={form.preferred === opt}
                        onChange={(e) =>
                          setForm({ ...form, preferred: e.target.value })
                        }
                      />
                      <span className='capitalize'>{opt}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              {/* message */}
              <div className='mt-4'>
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
                  placeholder='Room(s), ceiling height, texture, timing…'
                />
                {errors.message && (
                  <p className='mt-1 text-sm text-red-600'>{errors.message}</p>
                )}
              </div>

              {/* uploader */}
              <div className='mt-4'>
                <label className='block text-sm font-medium text-[color:var(--primary)]'>
                  Photos / video (optional)
                </label>
                <div
                  ref={dropRef}
                  onDragOver={onDragOver}
                  onDragLeave={onDragLeave}
                  onDrop={onDrop}
                  className='mt-2 rounded-xl border border-dashed border-[color:var(--dark)]/20 bg-[color:var(--light)]/40 p-4 text-sm text-[color:var(--dark)]/80'
                >
                  <input
                    id='file-input'
                    type='file'
                    accept='image/*,video/*'
                    multiple
                    onChange={(e) => onFiles(e.target.files)}
                    className='hidden'
                  />
                  <label
                    htmlFor='file-input'
                    className='cursor-pointer underline underline-offset-4 text-[color:var(--primary)] hover:text-[color:var(--secondary)]'
                  >
                    Click to upload
                  </label>
                  <span className='mx-1'>
                    or drag & drop (up to 6 files, ~10MB each).
                  </span>

                  {files.length > 0 && (
                    <ul className='mt-3 grid grid-cols-2 sm:grid-cols-3 gap-2'>
                      {files.map((f, i) => (
                        <li
                          key={i}
                          className='relative rounded-lg overflow-hidden border border-[color:var(--dark)]/10'
                        >
                          {f.type.startsWith('image/') ? (
                            <img
                              src={URL.createObjectURL(f)}
                              alt={f.name}
                              className='h-28 w-full object-cover'
                            />
                          ) : (
                            <div className='h-28 w-full flex items-center justify-center text-xs text-[color:var(--dark)]/70'>
                              {f.name}
                            </div>
                          )}
                          <button
                            type='button'
                            onClick={() => removeFile(i)}
                            className='absolute right-1 top-1 rounded-md bg-white/90 p-1 text-[color:var(--primary)] hover:bg-white'
                            aria-label='Remove file'
                          >
                            ✕
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                {!FORMSPREE_ID && files.length > 0 && (
                  <p className='mt-1 text-xs text-[color:var(--dark)]/60'>
                    Tip: mailto can’t attach files — after your email app opens,
                    add these photos/videos before sending.
                  </p>
                )}
              </div>

              {/* honeypot */}
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

              {/* actions */}
              <div className='mt-5 flex flex-wrap gap-3'>
                <button
                  type='submit'
                  disabled={state.sending}
                  className='inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-[color:var(--primary)] text-white font-semibold shadow hover:shadow-md transition disabled:opacity-60'
                >
                  {FORMSPREE_ID
                    ? state.sending
                      ? 'Sending…'
                      : 'Send Message'
                    : 'Open Email to Send'}
                </button>
                <a
                  href={`sms:${PHONE}?&body=${smsBody}`}
                  className='inline-flex items-center justify-center px-5 py-2.5 rounded-xl border border-[color:var(--primary)]/25 text-[color:var(--primary)] hover:text-[color:var(--secondary)] hover:border-[color:var(--secondary)]/40 transition'
                >
                  Or text us instead
                </a>
              </div>

              {state.sent && (
                <p className='mt-3 text-sm text-[color:var(--dark)]/70'>
                  Thanks!{' '}
                  {FORMSPREE_ID
                    ? 'We received your message.'
                    : 'Your email client should have opened with the message prefilled.'}
                </p>
              )}
              {state.error && (
                <p className='mt-3 text-sm text-red-600'>{state.error}</p>
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
