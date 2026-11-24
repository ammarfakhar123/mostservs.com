import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, MessageCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import Breadcrumb from '../layout/Breadcrumb';
import { siteConfig } from '../../data/siteConfig';
import verificationImg from '../../assets/courses/course-digital-learning.png';

export default function VerificationHero({ onOpenEnquiry }) {
  const whatsappUrl = siteConfig.getWhatsAppInquiryLink('Certificate Verification Assistance');

  return (
    <section className="relative text-white overflow-hidden bg-[#0E1017] border-b border-white/[0.08]">
      {/* Right-Positioned Natural Photograph with Horizontal Gradient Fade */}
      <div className="absolute top-0 right-0 bottom-0 w-full lg:w-[60%] overflow-hidden pointer-events-none">
        <img
          src={verificationImg}
          alt="Official Certificate and Transcript Verification Registry"
          fetchPriority="high"
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover object-center lg:object-right filter contrast-105 saturate-110 brightness-95"
        />
        {/* Subtle Warm Amber Industrial Glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(circle at 80% 45%, rgba(245, 158, 11, 0.18) 0%, rgba(243, 112, 33, 0.10) 45%, transparent 75%)',
          }}
        />
      </div>

      {/* Seamless Horizontal Gradient: Solid Dark Charcoal on left, Fading into photo on right */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(90deg, #0E1017 0%, #0E1017 40%, rgba(14, 16, 23, 0.92) 54%, rgba(14, 16, 23, 0.50) 72%, rgba(14, 16, 23, 0.10) 95%, transparent 100%)',
        }}
      />

      {/* Vertical gradient for mobile */}
      <div
        className="absolute inset-0 lg:hidden pointer-events-none"
        style={{
          background:
            'linear-gradient(180deg, rgba(14, 16, 23, 0.75) 0%, rgba(14, 16, 23, 0.96) 50%, #0E1017 100%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 relative z-10 w-full">
        {/* Breadcrumb with High Contrast Crisp Styling */}
        <div className="mb-6">
          <Breadcrumb isDark={true} items={[{ label: 'Certificate Verification' }]} />
        </div>

        <div className="max-w-2xl lg:max-w-xl space-y-5">
          {/* Pill Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-slate-200 text-xs font-semibold border border-white/15">
            <span className="w-2 h-2 rounded-full bg-[#0098D4]" />
            <span>Academic Integrity &amp; Official Verification</span>
          </div>

          {/* Main H1 Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-white tracking-tight leading-[1.08]">
            Certificate Verification Gateway
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            Verify the authenticity of professional certificates, transcripts, and diplomas issued by MOST Services Pvt Ltd and our affiliated UK awarding bodies. Protect against counterfeit credentials.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#verification-form"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#0098D4] to-[#0F7BFF] hover:from-[#0085BA] hover:to-[#0066EB] text-white font-bold text-xs sm:text-sm shadow-md transition-all hover:scale-102 cursor-pointer"
            >
              <span>Verify Certificate Now</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs sm:text-sm border border-white/20 transition-all hover:scale-102"
            >
              <MessageCircle className="w-4 h-4 text-[#0098D4]" />
              <span>Talk to an Advisor</span>
            </a>
          </div>

          {/* Trust Points */}
          <div className="flex flex-wrap items-center gap-5 pt-3 text-xs font-semibold text-slate-400 border-t border-white/10">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#0098D4]" />
              <span>Tamper-Evident Anti-Fraud</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#0098D4]" />
              <span>Awarding Body Aligned</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#0098D4]" />
              <span>100% Verifiable Credentials</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
