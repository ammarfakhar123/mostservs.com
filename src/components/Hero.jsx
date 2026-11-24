import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';
import heroSeminarImg from '../assets/images/hero-seminar.png';
import { MagneticButton, RevealOnScroll } from './animation';
import { siteConfig } from '../data/siteConfig';

export default function Hero({ onOpenEnquiry }) {
  const whatsappUrl = siteConfig.getWhatsAppInquiryLink('General Academic Advisory');

  return (
    <section className="relative bg-white pt-8 pb-6 lg:pt-14 lg:pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Heading, Subtitle & Eyebrow */}
          <div className="lg:col-span-7 space-y-6">
            <RevealOnScroll animation="fade-up" delay={0}>
              {/* Pill Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#070E1A] text-white text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#0098D4] animate-pulse" />
                <span>Trusted by 5,000+ organisations worldwide</span>
              </div>
            </RevealOnScroll>

            <RevealOnScroll animation="fade-up" delay={60}>
              {/* Main H1 Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight text-[#070E1A] leading-[1.08]">
                Health, Safety &amp;{' '}
                <span className="bg-gradient-to-r from-[#0098D4] to-[#0F7BFF] bg-clip-text text-transparent">
                  Environmental
                </span>{' '}
                Training Programmes
              </h1>
            </RevealOnScroll>

            <RevealOnScroll animation="fade-up" delay={120}>
              {/* Subtitle */}
              <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
                Where every lesson is a chance to make a difference. Industry-accredited courses delivered by expert tutors — online, virtual, or at your premises.
              </p>
            </RevealOnScroll>

            {/* Desktop Magnetic Action Buttons */}
            <RevealOnScroll animation="fade-up" delay={180}>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <MagneticButton strength={15}>
                  <Link
                    to="/qualifications"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#0098D4] to-[#0F7BFF] hover:from-[#0085BA] hover:to-[#0066EB] text-white font-bold text-xs sm:text-sm shadow-md transition-all hover:scale-102"
                  >
                    <span>Explore Qualifications</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </MagneticButton>

                <MagneticButton strength={12}>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm transition-all hover:scale-102"
                  >
                    <MessageCircle className="w-4 h-4 text-[#0098D4]" />
                    <span>WhatsApp Advisor</span>
                  </a>
                </MagneticButton>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right Column: Rounded Photographic Card with Reveal & Cursor Context */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <RevealOnScroll animation="zoom-in" delay={100} className="w-full max-w-[480px]">
              <div
                data-cursor="explore"
                className="relative w-full rounded-3xl overflow-hidden bg-[#070E1A] border border-slate-800 group hover:border-slate-700 transition-colors shadow-lg"
              >
                {/* Photo */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                  <img
                    src={heroSeminarImg}
                    alt="NEBOSH and OTHM Classroom Training"
                    className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Gradient vignette */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        'linear-gradient(180deg, rgba(7,14,26,0.1) 0%, rgba(7,14,26,0.92) 85%, rgba(7,14,26,0.98) 100%)',
                    }}
                  />

                  {/* Card overlay content */}
                  <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3">
                    <div>
                      <h3 className="text-white font-bold text-base sm:text-lg leading-snug">
                        NEBOSH / OTHM Qualifications
                      </h3>
                      <p className="text-xs text-[#0098D4] font-medium mt-1">
                        92% pass rate · UK Ofqual Regulated
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => onOpenEnquiry && onOpenEnquiry('NEBOSH & OTHM Qualifications')}
                      className="shrink-0 px-4 py-2 rounded-xl bg-gradient-to-r from-[#0098D4] to-[#0F7BFF] hover:from-[#0085BA] hover:to-[#0066EB] text-white text-xs font-bold transition-all hover:scale-105 cursor-pointer uppercase tracking-wider"
                    >
                      Enquire
                    </button>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
