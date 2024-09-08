import { useState, useEffect, useRef } from 'react';

export default function useIntersectionObserver(options, delay = 0) {
  const [inView, setInView] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        ...options,
        rootMargin: '0px 0px -15% 0px', // Reduced margin for smoother detection
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
      setInView(false);
    }

    return () => clearTimeout(timer);
  }, [isVisible, delay]);

  return { ref, inView };
}
