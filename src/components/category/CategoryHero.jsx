import React from 'react';
import { Award, MessageCircle, ArrowRight, ShieldCheck, Trophy, Star } from 'lucide-react';
import Breadcrumb from '../layout/Breadcrumb';
import { siteConfig } from '../../data/siteConfig';

import hseBannerImg from '../../assets/images/hse-banner.jpg';
import aiBannerImg from '../../assets/images/ai-banner.jpg';
import cyberBannerImg from '../../assets/images/cyber-banner.jpg';
import itBannerImg from '../../assets/images/hero-collaboration.png';

const categoryImages = {
  hse: hseBannerImg,
  'artificial-intelligence': aiBannerImg,
  'cyber-security': cyberBannerImg,
  'information-technology': itBannerImg,
};

export default function CategoryHero({ category }) {
  if (!category) return null;

  const bgImage = categoryImages[category.id] || categoryImages[category.slug] || hseBannerImg;
  const whatsappUrl = siteConfig.getWhatsAppInquiryLink(`${category.shortTitle || category.title} Qualifications`);

  // Concise Astutis-style title
  const displayTitle = category.id === 'hse'
    ? 'HSE Qualifications'
    : (category.shortTitle || category.title);

  return (
    <section className="relative text-white overflow-hidden bg-[#0E1017] border-b border-white/[0.08]">
      {/* Main Hero Area with Photographic Right Side and Natural Blending */}
      <div className="relative min-h-[460px] lg:min-h-[520px] flex items-center">
        {/* Right-Positioned Natural Photograph with Warm Industrial Astutis Lighting */}
        <div className="absolute top-0 right-0 bottom-0 w-full lg:w-[62%] overflow-hidden pointer-events-none">
          <img
            src={bgImage}
            alt={displayTitle}
            className="w-full h-full object-cover object-center lg:object-right filter contrast-105 saturate-110 brightness-95"
          />
          {/* Astutis Signature Warm Amber Industrial Glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(circle at 82% 45%, rgba(245, 158, 11, 0.22) 0%, rgba(243, 112, 33, 0.12) 45%, transparent 75%)',
            }}
          />
        </div>

        {/* Horizontal Gradient Overlay: Solid Dark Charcoal on left, Seamless fade revealing natural photo on right */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(90deg, #0E1017 0%, #0E1017 38%, rgba(14, 16, 23, 0.92) 52%, rgba(14, 16, 23, 0.50) 72%, rgba(14, 16, 23, 0.10) 95%, transparent 100%)',
          }}
        />

        {/* Vertical gradient for mobile screens */}
        <div
          className="absolute inset-0 lg:hidden pointer-events-none"
          style={{
            background:
              'linear-gradient(180deg, rgba(14, 16, 23, 0.75) 0%, rgba(14, 16, 23, 0.96) 50%, #0E1017 100%)',
          }}
        />

        {/* Foreground Editorial Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 relative z-10 w-full">
          {/* Breadcrumb with High Contrast Crisp Styling */}
          <div className="mb-6">
            <Breadcrumb
              isDark={true}
              items={[
                { label: 'Qualifications', href: '/qualifications' },
                { label: displayTitle },
              ]}
            />
          </div>

          <div className="max-w-2xl lg:max-w-xl space-y-5">
            {/* Main H1 Title (Bold white typography matching Astutis Image 2) */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-white tracking-tight leading-[1.08]">
              {displayTitle}
            </h1>

            {/* Editorial Description Paragraph 1 */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              {category.intro ||
                'Companies and professionals continue to utilise the knowledge gained from accredited safety and technical qualifications around the world to improve workplace standards.'}
            </p>

            {/* Editorial Description Paragraph 2 */}
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Explore our catalogue of accredited {category.id === 'hse' ? 'Health, Safety & Environmental' : displayTitle} qualifications and professional certifications below.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#0098D4] to-[#0F7BFF] hover:from-[#0085BA] hover:to-[#0066EB] text-white font-bold text-xs sm:text-sm shadow-md transition-all hover:scale-102"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp Academic Advisor</span>
              </a>

              <a
                href="#courses-grid"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs sm:text-sm border border-white/20 transition-all hover:scale-102"
              >
                <span>Explore Qualifications</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
