import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Trophy, ShieldCheck, Globe, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

import oshtreeLogo from '../assets/accreditors/oshtree.webp';
import othmLogo from '../assets/accreditors/othm.webp';
import dscferLogo from '../assets/accreditors/dscfer.webp';
import ictqualLogo from '../assets/accreditors/ictqual.webp';
import aoshLogo from '../assets/accreditors/aosh.webp';
import ioshLogo from '../assets/accreditors/iosh.webp';

const baseAccreditors = [
  { name: 'OSHTREE', src: oshtreeLogo, alt: 'OSHTREE Health Safety Environment' },
  { name: 'OTHM Qualifications', src: othmLogo, alt: 'OTHM Qualifications UK' },
  { name: 'DSCFER', src: dscferLogo, alt: 'DSCFER Research & Training' },
  { name: 'ICTQual AB', src: ictqualLogo, alt: 'ICTQual Awarding Body' },
  { name: 'AOSH', src: aoshLogo, alt: 'AOSH Awarding Body' },
  { name: 'IOSH', src: ioshLogo, alt: 'Institution of Occupational Safety and Health' },
];

// Quadrupled to create completely seamless, infinite gliding marquee
const accreditorLogos = [
  ...baseAccreditors,
  ...baseAccreditors,
  ...baseAccreditors,
  ...baseAccreditors,
];

export default function AccreditationStrip({ onOpenEnquiry }) {
  const scrollRef = useRef(null);
  const isHoveredRef = useRef(false);

  // Smooth continuous auto-glide ticker
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animId;
    const speed = 0.75; // steady, gentle glide speed

    const step = () => {
      if (!isHoveredRef.current && el) {
        el.scrollLeft += speed;

        // Loop seamlessly once scrolled past 2 sets
        const setWidth = el.scrollWidth / 4;
        if (el.scrollLeft >= setWidth * 2) {
          el.scrollLeft -= setWidth;
        }
      }
      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(animId);
    };
  }, []);

  const handleManualScroll = (direction) => {
    const el = scrollRef.current;
    if (!el) return;
    const delta = direction === 'left' ? -180 : 180;
    el.scrollBy({ left: delta, behavior: 'smooth' });
  };

  return (
    <section className="bg-white pt-2 pb-10 lg:pt-3 lg:pb-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 lg:gap-12">
          {/* Left Side: Buttons (Matching User Reference) */}
          <div className="space-y-4 shrink-0">
            {/* Top row: All Courses button + Talk to an Advisor */}
            <div className="flex items-center gap-5">
              <Link
                to="/qualifications"
                className="px-7 py-3.5 rounded-[18px] bg-[#070E1A] hover:bg-slate-900 text-white text-[15px] font-bold transition-all hover:scale-[1.02] inline-flex items-center justify-center tracking-tight"
              >
                All Courses
              </Link>

              <button
                type="button"
                onClick={() => onOpenEnquiry && onOpenEnquiry('Advisor Consultation')}
                className="text-[15px] font-bold text-slate-900 hover:text-[#0F7BFF] inline-flex items-center gap-2 transition-colors cursor-pointer group"
              >
                <span>Talk to an Advisor</span>
                <ArrowRight className="w-4 h-4 text-slate-900 group-hover:text-[#0F7BFF] group-hover:translate-x-1 transition-transform stroke-[2.5]" />
              </button>
            </div>

            {/* Bottom row: Exactly styled buttons like All Courses */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Platinum Customer Support */}
              <button
                type="button"
                onClick={() => onOpenEnquiry && onOpenEnquiry('Platinum Customer Support')}
                className="px-5 py-3.5 rounded-[18px] bg-[#070E1A] hover:bg-slate-900 text-white text-[13.5px] font-bold transition-all hover:scale-[1.02] inline-flex items-center gap-2.5 cursor-pointer"
              >
                <Trophy className="w-[18px] h-[18px] text-[#0098D4] stroke-[2.2] shrink-0" />
                <span>Platinum Customer Support</span>
              </button>

              {/* NEBOSH Accredited Provider */}
              <button
                type="button"
                onClick={() => onOpenEnquiry && onOpenEnquiry('NEBOSH & OTHM Accreditations')}
                className="px-5 py-3.5 rounded-[18px] bg-[#070E1A] hover:bg-slate-900 text-white text-[13.5px] font-bold transition-all hover:scale-[1.02] inline-flex items-center gap-2.5 cursor-pointer"
              >
                <ShieldCheck className="w-[18px] h-[18px] text-[#0098D4] stroke-[2.2] shrink-0" />
                <span>NEBOSH Accredited Provider</span>
              </button>

              {/* World Wide */}
              <button
                type="button"
                onClick={() => onOpenEnquiry && onOpenEnquiry('Worldwide Online & Distance Training')}
                className="px-5 py-3.5 rounded-[18px] bg-[#070E1A] hover:bg-slate-900 text-white text-[13.5px] font-bold transition-all hover:scale-[1.02] inline-flex items-center gap-2.5 cursor-pointer"
              >
                <Globe className="w-[18px] h-[18px] text-[#0098D4] stroke-[2.2] shrink-0" />
                <span>World Wide</span>
              </button>
            </div>
          </div>

          {/* Right Side: Official Accreditors Auto-Scrolling Marquee */}
          <div className="flex-1 lg:max-w-xl">
            <div className="text-[14px] font-bold text-[#008AD2] mb-3 text-left">
              Official Accreditors
            </div>

            <div
              className="relative flex items-center gap-2"
              onMouseEnter={() => {
                isHoveredRef.current = true;
              }}
              onMouseLeave={() => {
                isHoveredRef.current = false;
              }}
            >
              {/* Left arrow */}
              <button
                type="button"
                onClick={() => handleManualScroll('left')}
                aria-label="Previous accreditor"
                className="p-1 text-[#008AD2] hover:text-[#0F7BFF] transition-colors shrink-0 cursor-pointer"
              >
                <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
              </button>

              {/* Scrollable Logos Container with Auto-Glide */}
              <div
                ref={scrollRef}
                className="flex items-center gap-6 sm:gap-8 overflow-x-hidden py-2 px-1 select-none cursor-grab active:cursor-grabbing"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {accreditorLogos.map((acc, index) => (
                  <div
                    key={index}
                    className="shrink-0 flex items-center justify-center h-12 px-3 hover:opacity-100 opacity-90 transition-opacity"
                  >
                    <img
                      src={acc.src}
                      alt={acc.alt}
                      title={acc.name}
                      className="max-h-10 sm:max-h-11 w-auto object-contain filter grayscale-0 contrast-105 pointer-events-none"
                    />
                  </div>
                ))}
              </div>

              {/* Right arrow */}
              <button
                type="button"
                onClick={() => handleManualScroll('right')}
                aria-label="Next accreditor"
                className="p-1 text-[#008AD2] hover:text-[#0F7BFF] transition-colors shrink-0 cursor-pointer"
              >
                <ChevronRight className="w-6 h-6 stroke-[2.5]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
