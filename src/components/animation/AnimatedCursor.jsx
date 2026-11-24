import React, { useEffect, useRef, useState } from 'react';

export default function AnimatedCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const labelRef = useRef(null);

  const [cursorState, setCursorState] = useState('default');
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const stateRef = useRef('default');
  const textRef = useRef('');
  const isVisibleRef = useRef(false);

  useEffect(() => {
    // Only enable on desktop pointer devices with fine control
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!isFinePointer || prefersReducedMotion) {
      return;
    }

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let rafId = null;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisibleRef.current) {
        isVisibleRef.current = true;
        setIsVisible(true);
      }

      // Direct 1:1 hardware translation for the central dot (no latency)
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }

      // Context-aware state detection without unnecessary re-renders
      const target = e.target;
      if (!target) return;

      const interactiveBtn = target.closest('button, .btn-primary, [role="button"]');
      const interactiveLink = target.closest('a, [role="link"]');
      const exploreCard = target.closest('[data-cursor="explore"], [data-cursor="card"]');

      let nextState = 'default';
      let nextText = '';

      if (interactiveBtn) {
        nextState = 'button';
      } else if (exploreCard) {
        nextState = 'card';
        nextText = 'Explore';
      } else if (interactiveLink) {
        nextState = 'link';
      }

      if (nextState !== stateRef.current || nextText !== textRef.current) {
        stateRef.current = nextState;
        textRef.current = nextText;
        setCursorState(nextState);
        setCursorText(nextText);
      }
    };

    const onMouseLeave = () => {
      isVisibleRef.current = false;
      setIsVisible(false);
    };

    const onMouseEnter = () => {
      isVisibleRef.current = true;
      setIsVisible(true);
    };

    // Smooth trailing outer ring with linear interpolation
    const render = () => {
      const lerp = 0.16;
      ringX += (mouseX - ringX) * lerp;
      ringY += (mouseY - ringY) * lerp;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }

      rafId = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    rafId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      className={`fixed inset-0 pointer-events-none z-50 transition-opacity duration-200 hidden lg:block ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      aria-hidden="true"
    >
      {/* 1. Precise Inner Dot - direct translation with no transition fighting pointer */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 -ml-1 -mt-1 rounded-full bg-[#0098D4] pointer-events-none will-change-transform shadow-xs"
      />

      {/* 2. Refined Trailing Outer Ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 -ml-4 -mt-4 rounded-full pointer-events-none transition-all duration-200 ease-out flex items-center justify-center will-change-transform ${
          cursorState === 'button'
            ? 'w-11 h-11 -ml-[22px] -mt-[22px] border-2 border-[#0F7BFF] bg-[#0F7BFF]/10 scale-105'
            : cursorState === 'card'
            ? 'w-16 h-16 -ml-8 -mt-8 border border-[#0098D4]/60 bg-slate-900/85 backdrop-blur-xs scale-100 shadow-md'
            : cursorState === 'link'
            ? 'w-9 h-9 -ml-[18px] -mt-[18px] border border-[#F37021] bg-[#F37021]/10 scale-105'
            : 'w-7 h-7 -ml-3.5 -mt-3.5 border border-slate-400/40 bg-transparent'
        }`}
      >
        {cursorState === 'card' && cursorText && (
          <span
            ref={labelRef}
            className="text-[10px] font-black uppercase tracking-wider text-[#0098D4] select-none"
          >
            {cursorText}
          </span>
        )}
      </div>
    </div>
  );
}
