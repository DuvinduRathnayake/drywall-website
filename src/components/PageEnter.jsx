import { useEffect, useRef } from 'react';

export default function PageEnter({
  children,
  selector = '[data-animate]',
  stagger = 80, // ms between items
  startDelay = 0, // ms before first item
}) {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduce = window.matchMedia?.(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    const nodes = Array.from(root.querySelectorAll(selector));

    // Sort by data-animate (1,2,3...) if provided
    nodes.sort((a, b) => {
      const ai = Number(a.dataset.animate || 0);
      const bi = Number(b.dataset.animate || 0);
      return ai - bi;
    });

    nodes.forEach((el, i) => {
      if (reduce) {
        // No animation: just show
        el.classList.remove('opacity-0', 'translate-y-2');
        el.classList.add('opacity-100', 'translate-y-0');
        return;
      }
      const delay = Number(el.dataset.delay || startDelay + i * stagger);
      // ensure transitions will run
      el.style.willChange = 'opacity, transform';
      el.style.transitionDelay = `${delay}ms`;

      // next tick so the browser registers the initial state
      requestAnimationFrame(() => {
        el.classList.remove('opacity-0', 'translate-y-2');
        el.classList.add('opacity-100', 'translate-y-0');
      });
    });

    return () => {
      // cleanup any inline delay
      nodes.forEach((el) => {
        el.style.transitionDelay = '';
        el.style.willChange = '';
      });
    };
  }, [selector, stagger, startDelay]);

  return <div ref={rootRef}>{children}</div>;
}
