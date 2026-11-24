import React, { useEffect, createContext, useContext } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AnimationContext = createContext({ lenis: null });

export const useAnimation = () => useContext(AnimationContext);

export default function AnimationProvider({ children }) {
  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    // Check if device is touch-primary (mobile/tablet)
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;

    // We keep native scroll on touch devices or reduced motion to prevent any mobile jank
    if (prefersReducedMotion || isTouchDevice) {
      return;
    }

    // Initialize Lenis with refined, natural desktop easing
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.5,
    });

    // Synchronize Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);
    window.__lenis = lenis;

    const updateLenis = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateLenis);
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);

  return (
    <AnimationContext.Provider value={{}}>
      {children}
    </AnimationContext.Provider>
  );
}
