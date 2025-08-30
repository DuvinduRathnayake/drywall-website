import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

export default function Layout() {
  return (
    <div className='min-h-screen bg-slate-50 text-slate-900 flex flex-col'>
      <ScrollToTop smooth />
      <Navbar />
      <main className='flex-1'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
