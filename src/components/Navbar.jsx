import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className='sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200'>
      <div className='mx-auto max-w-7xl px-4 py-3 flex items-center justify-between'>
        <Link to='/' className='font-bold tracking-tight'>
          Drywall Co.
        </Link>
        <nav className='hidden md:flex gap-6 text-sm'>
          <NavLink
            to='/services'
            className={({ isActive }) =>
              `text-sm transition-colors ${
                isActive
                  ? 'text-slate-900 font-medium'
                  : 'text-slate-600 hover:text-slate-900'
              }`
            }
          >
            Services
          </NavLink>
          <NavLink
            to='/projects'
            className={({ isActive }) =>
              `text-sm transition-colors ${
                isActive
                  ? 'text-slate-900 font-medium'
                  : 'text-slate-600 hover:text-slate-900'
              }`
            }
          >
            Projects
          </NavLink>
          <NavLink
            to='/about'
            className={({ isActive }) =>
              `text-sm transition-colors ${
                isActive
                  ? 'text-slate-900 font-medium'
                  : 'text-slate-600 hover:text-slate-900'
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to='/contact'
            className={({ isActive }) =>
              `text-sm transition-colors ${
                isActive
                  ? 'text-slate-900 font-medium'
                  : 'text-slate-600 hover:text-slate-900'
              }`
            }
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
