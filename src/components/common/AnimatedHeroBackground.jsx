import React from 'react';

export default function AnimatedHeroBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
      {/* 1. Deep Obsidian Multi-Angle Gradient Base */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 90% 70% at 50% 0%, #0D213F 0%, #071120 45%, #040914 100%)',
        }}
      />

      {/* 2. Precision Geometric Grid Mesh */}
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(0, 152, 212, 0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 152, 212, 0.15) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse 80% 65% at 50% 35%, #000 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 65% at 50% 35%, #000 40%, transparent 100%)',
        }}
      />

      {/* 3. Glowing Gradient Light Auras */}
      <div className="absolute -top-32 -right-24 w-[600px] h-[600px] bg-gradient-to-br from-[#0098D4]/25 via-[#0F7BFF]/20 to-transparent rounded-full blur-[110px] animate-drift pointer-events-none" />
      <div className="absolute top-1/3 -left-32 w-[520px] h-[520px] bg-gradient-to-tr from-[#F37021]/20 via-[#0098D4]/15 to-transparent rounded-full blur-[100px] animate-shape-b pointer-events-none" />

      {/* 4. Large Animated SVG Geometric Framework: Dual Technical Rings */}
      <div className="absolute -top-16 right-[-5%] w-[480px] h-[480px] opacity-35 hidden md:block animate-spin-slow">
        <svg viewBox="0 0 400 400" className="w-full h-full fill-none stroke-current text-[#0098D4]">
          <circle cx="200" cy="200" r="190" strokeWidth="1" strokeDasharray="6 8" />
          <circle cx="200" cy="200" r="160" strokeWidth="1.5" strokeDasharray="14 12" className="text-[#0F7BFF]" />
          <circle cx="200" cy="200" r="120" strokeWidth="1" strokeDasharray="4 6" opacity="0.6" />
        </svg>
      </div>

      <div className="absolute -top-6 right-[2%] w-[380px] h-[380px] opacity-25 hidden md:block animate-spin-reverse-slow">
        <svg viewBox="0 0 400 400" className="w-full h-full fill-none stroke-current text-[#F37021]">
          <circle cx="200" cy="200" r="175" strokeWidth="1" strokeDasharray="12 16" />
          <circle cx="200" cy="200" r="135" strokeWidth="1.5" strokeDasharray="8 8" />
        </svg>
      </div>

      {/* 5. Floating Isometric Geometric Prism (Top Left) */}
      <div className="absolute top-12 left-[8%] hidden lg:block animate-shape-a">
        <div className="relative w-32 h-32">
          {/* Outer Rotating Square */}
          <div className="absolute inset-0 rounded-2xl border border-[#0098D4]/40 rotate-12 backdrop-blur-xs bg-[#0098D4]/5" />
          {/* Inner Counter-rotated Square */}
          <div className="absolute inset-3 rounded-xl border border-[#F37021]/40 -rotate-12 bg-white/5" />
          {/* Center glowing node */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#0098D4] shadow-[0_0_12px_#0098D4]" />
        </div>
      </div>

      {/* 6. Floating Diagonal Diamond with Technical Corner Ticks (Bottom Right) */}
      <div className="absolute bottom-16 right-[12%] hidden sm:block animate-shape-b">
        <div className="relative w-28 h-28">
          <div className="absolute inset-0 rotate-45 rounded-xl border border-white/20 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-xs shadow-[0_0_20px_rgba(0,152,212,0.15)]" />
          <div className="absolute inset-2 rotate-45 rounded-lg border border-[#0F7BFF]/50" />
          <div className="absolute -top-1 -left-1 w-2 h-2 bg-[#0098D4] rounded-full" />
          <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-[#F37021] rounded-full" />
        </div>
      </div>

      {/* 7. Constellation Technical Grid Nodes */}
      <div className="absolute top-28 right-[32%] hidden xl:flex flex-col gap-3 opacity-30 animate-pulse-glow">
        <div className="flex items-center gap-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0098D4]" />
          <span className="w-12 h-px bg-gradient-to-r from-[#0098D4] to-transparent" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#0F7BFF]" />
        </div>
        <div className="flex items-center gap-4 ml-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#F37021]" />
          <span className="w-8 h-px bg-gradient-to-r from-[#F37021] to-transparent" />
        </div>
      </div>

      {/* 8. Bottom Angled Glow Transition Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0098D4]/40 to-transparent" />
    </div>
  );
}
