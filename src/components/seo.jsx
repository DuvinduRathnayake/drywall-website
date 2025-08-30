import { useEffect } from 'react';

function setTag(selector, attr, value) {
  let el = document.querySelector(selector);
  if (!el) {
    el = document.createElement('meta');
    // figure out which kind of tag to make
    if (selector.startsWith('meta[name=')) {
      el.setAttribute('name', selector.match(/meta\[name="([^"]+)/)[1]);
    } else if (selector.startsWith('meta[property=')) {
      el.setAttribute('property', selector.match(/meta\[property="([^"]+)/)[1]);
    }
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
}

function setLink(rel, href) {
  let el = document.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

export default function Seo({
  title = 'Dimitry Drywall Solution',
  description = 'Licensed & insured drywall specialists serving Cambridge, Kitchener, Waterloo & Guelph. Smooth finishes, tidy sites, on-time delivery.',
  url = 'https://yourdrywall.ca/',
  image = '/og.jpg', // put a 1200×630 image at public/og.jpg
  type = 'website',
  jsonLd = null, // pass an object for LocalBusiness etc.
  canonical = url,
}) {
  useEffect(() => {
    // Title
    document.title = title;

    // Basic
    setTag('meta[name="description"]', 'content', description);
    setLink('canonical', canonical);

    // Open Graph
    setTag('meta[property="og:title"]', 'content', title);
    setTag('meta[property="og:description"]', 'content', description);
    setTag('meta[property="og:type"]', 'content', type);
    setTag('meta[property="og:url"]', 'content', url);
    setTag('meta[property="og:image"]', 'content', image);

    // Twitter
    setTag('meta[name="twitter:card"]', 'content', 'summary_large_image');
    setTag('meta[name="twitter:title"]', 'content', title);
    setTag('meta[name="twitter:description"]', 'content', description);
    setTag('meta[name="twitter:image"]', 'content', image);

    // JSON-LD
    const id = 'seo-jsonld';
    let script = document.getElementById(id);
    if (script) script.remove();
    if (jsonLd) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = id;
      script.text = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }
  }, [title, description, url, image, type, canonical, jsonLd]);

  return null;
}
