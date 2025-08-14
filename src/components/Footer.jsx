export default function Footer() {
  return (
    <footer className='border-t border-slate-200 bg-white'>
      <div className='mx-auto max-w-7xl px-4 py-6 text-sm text-slate-600'>
        © {new Date().getFullYear()} Drywall Co. All rights reserved.
      </div>
    </footer>
  );
}
