import { useState, useEffect, useRef } from 'react';

export default function useIntersectionObserver(options, delay = 0) {
  const [inView, setInView] = useState(false);
  const [isVisible, setIsVisible] = useState(false); // To track visibility
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Check if the element is intersecting the viewport
        setIsVisible(entry.isIntersecting);
      },
      {
        ...options,
        rootMargin: '0px 0px -28% 0px' // Adjust the rootMargin to trigger closer to center
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  useEffect(() => {
    let timer;
    if (isVisible) {
      timer = setTimeout(() => {
        setInView(true);
      }, delay);
    } else {
      // Reset inView if the element is no longer visible
      setInView(false);
    }

    return () => clearTimeout(timer);
  }, [isVisible, delay]);

  return { ref, inView };
}
