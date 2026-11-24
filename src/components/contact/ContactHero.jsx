import React from 'react';
import { Link } from 'react-router-dom';
import { PhoneCall, MessageCircle, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import Breadcrumb from '../layout/Breadcrumb';
import { siteConfig } from '../../data/siteConfig';
import contactHeroImg from '../../assets/images/hero-seminar.png';

export default function ContactHero({ onOpenEnquiry }) {
  const whatsappUrl = siteConfig.getWhatsAppInquiryLink('Contact Page General Inquiry');

  return (
    <section className="relative text-white overflow-hidden bg-[#0E1017] border-b border-white/[0.08]">
      {/* Right-Positioned Natural Photograph with Horizontal Gradient Fade */}
      <div className="absolute top-0 right-0 bottom-0 w-full lg:w-[60%] overflow-hidden pointer-events-none">
        <img
          src={contactHeroImg}
          alt="MOST Services Islamabad Admissions and Student Support"
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
          <Breadcrumb isDark={true} items={[{ label: 'Contact Us' }]} />
        </div>

        <div className="max-w-2xl lg:max-w-xl space-y-5">
          {/* Pill Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-slate-200 text-xs font-semibold border border-white/15">
            <span className="w-2 h-2 rounded-full bg-[#0098D4]" />
            <span>Admissions &amp; Corporate Advisory Support Desk</span>
          </div>

          {/* Main H1 Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-white tracking-tight leading-[1.08]">
            Get in Touch with Us
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            Whether you are an individual learner seeking qualification eligibility and syllabus specifications, or a corporate client planning customized workforce training, our senior advisors are available to guide you.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#contact-form"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#0098D4] to-[#0F7BFF] hover:from-[#0085BA] hover:to-[#0066EB] text-white font-bold text-xs sm:text-sm shadow-md transition-all hover:scale-102 cursor-pointer"
            >
              <span>Send Online Inquiry</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs sm:text-sm border border-white/20 transition-all hover:scale-102"
            >
              <MessageCircle className="w-4 h-4 text-[#0098D4]" />
              <span>WhatsApp Admissions</span>
            </a>
          </div>

          {/* Trust Points */}
          <div className="flex flex-wrap items-center gap-5 pt-3 text-xs font-semibold text-slate-400 border-t border-white/10">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#0098D4]" />
              <span>Rapid Admissions Response</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#0098D4]" />
              <span>Headquarters Campus</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#0098D4]" />
              <span>Direct WhatsApp Hotline</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
