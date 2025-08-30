import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop({ smooth = false }) {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there’s a hash (#section), scroll to that element
    if (hash) {
      // small delay to ensure the element exists after render
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el)
          el.scrollIntoView({
            behavior: smooth ? 'smooth' : 'auto',
            block: 'start',
          });
        else
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: smooth ? 'smooth' : 'auto',
          });
      }, 0);
      return;
    }
    // otherwise scroll to the very top on route change
    window.scrollTo({ top: 0, left: 0, behavior: smooth ? 'smooth' : 'auto' });
  }, [pathname, hash, smooth]);

  return null;
}
