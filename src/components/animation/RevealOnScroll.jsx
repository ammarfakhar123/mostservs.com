import React, { useEffect, useRef, useState } from 'react';

export default function RevealOnScroll({
  children,
  animation = 'fade-up', // 'fade-up' | 'fade-in' | 'slide-right' | 'zoom-in'
  delay = 0,
  duration = 550,
  threshold = 0.15,
  className = '',
}) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    const currentEl = domRef.current;
    if (currentEl) {
      observer.observe(currentEl);
    }

    return () => {
      if (currentEl) observer.unobserve(currentEl);
    };
  }, [threshold]);

  const getAnimationStyles = () => {
    const baseTransition = `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`;

    if (isVisible) {
      return {
        opacity: 1,
        transform: 'none',
        transition: baseTransition,
      };
    }

    switch (animation) {
      case 'fade-up':
        return {
          opacity: 0,
          transform: 'translate3d(0, 24px, 0)',
          transition: baseTransition,
        };
      case 'fade-in':
        return {
          opacity: 0,
          transform: 'none',
          transition: baseTransition,
        };
      case 'slide-right':
        return {
          opacity: 0,
          transform: 'translate3d(-24px, 0, 0)',
          transition: baseTransition,
        };
      case 'zoom-in':
        return {
          opacity: 0,
          transform: 'scale(0.95)',
          transition: baseTransition,
        };
      default:
        return {
          opacity: 0,
          transform: 'translate3d(0, 20px, 0)',
          transition: baseTransition,
        };
    }
  };

  return (
    <div
      ref={domRef}
      style={getAnimationStyles()}
      className={`will-change-[opacity,transform] ${className}`}
    >
      {children}
    </div>
  );
}
