import { useEffect, useRef } from 'react';

export function useScrollAnimation(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { el.classList.add('visible'); obs.unobserve(el); }
    }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return ref;
}

export function useStaggerAnimation(count: number, threshold = 0.1) {
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  useEffect(() => {
    const elements = refs.current.filter(Boolean) as HTMLDivElement[];
    const observers: IntersectionObserver[] = [];
    elements.forEach((el, i) => {
      const obs = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add('visible'), i * 130);
          obs.unobserve(el);
        }
      }, { threshold });
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach(o => o.disconnect());
  }, [count]);
  const setRef = (index: number) => (el: HTMLDivElement | null) => { refs.current[index] = el; };
  return setRef;
}
