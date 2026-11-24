import React, { useRef, useEffect } from 'react';

export default function MagneticButton({
  children,
  className = '',
  strength = 10, // Subtle, refined 4-8px magnetic displacement
  onClick,
  href,
  target,
  rel,
  type = 'button',
  ...props
}) {
  const btnRef = useRef(null);
  const isDesktopRef = useRef(false);

  useEffect(() => {
    const isFine = window.matchMedia('(pointer: fine)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    isDesktopRef.current = isFine && !reduced;
  }, []);

  const handleMouseMove = (e) => {
    if (!isDesktopRef.current || !btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - centerX) * (strength / 100);
    const deltaY = (e.clientY - centerY) * (strength / 100);

    btnRef.current.style.transform = `translate3d(${deltaX}px, ${deltaY}px, 0)`;
    btnRef.current.style.transition = 'transform 0.12s cubic-bezier(0.16, 1, 0.3, 1)';
  };

  const handleMouseLeave = () => {
    if (!btnRef.current) return;
    btnRef.current.style.transform = 'translate3d(0, 0, 0)';
    btnRef.current.style.transition = 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)';
  };

  if (href) {
    return (
      <a
        ref={btnRef}
        href={href}
        target={target}
        rel={rel}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`inline-block will-change-transform ${className}`}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      ref={btnRef}
      type={type}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`inline-block will-change-transform ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
