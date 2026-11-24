import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, CheckCircle2, ChevronLeft, ChevronRight, Quote, ArrowRight } from 'lucide-react';
import RevealOnScroll from './animation/RevealOnScroll';

const featuredReviews = [
  {
    id: 1,
    courseTag: 'ISEP Foundation Cert.',
    rating: 5,
    quote:
      'The ISEP Foundation Certificate gave me exactly the grounding I needed to lead our environmental compliance programme. The tutor feedback was detailed and genuinely helped me improve before the final assessment.',
    author: 'Marcus Webb',
    role: 'Safety Culture Lead',
    company: 'Co-op',
    initials: 'MW',
    avatarBg: 'bg-[#F37021]',
  },
  {
    id: 2,
    courseTag: 'OTHM Level 6 Diploma',
    rating: 5,
    quote:
      'Completing the OTHM Level 6 with MOST Services completely transformed my international career trajectory. The study portal and prompt faculty guidance were second to none.',
    author: 'Tariq Al-Mansoor',
    role: 'HSE Director',
    company: 'Petrofac Middle East',
    initials: 'TM',
    avatarBg: 'bg-[#0F7BFF]',
  },
  {
    id: 3,
    courseTag: 'IOSH Managing Safely',
    rating: 5,
    quote:
      'Practical, high impact, and directly applicable on the factory floor. Our supervisors now proactively identify hazards before they cause downtime.',
    author: 'Hamza Khan',
    role: 'Plant Operations Manager',
    company: 'Engro Polymers',
    initials: 'HK',
    avatarBg: 'bg-[#0098D4]',
  },
];

const sideReviews = [
  {
    id: 1,
    initials: 'SM',
    avatarBg: 'bg-[#0098D4]',
    name: 'Sarah Mitchell',
    company: 'Northern Rail',
    badge: 'NEBOSH General Certificate',
    review:
      'The NEBOSH General Certificate course exceeded every expectation — the platform is intuitive, tutors are world-class, and the support team resolved every query within minutes.',
  },
  {
    id: 2,
    initials: 'JO',
    avatarBg: 'bg-[#8B5CF6]',
    name: 'James Okonkwo',
    company: 'Ferrero Group',
    badge: 'In-Company Training',
    review:
      'We needed bespoke in-company training delivered at pace. The team designed a fully tailored programme in under two weeks. Compliance scores across our UK sites jumped noticeably.',
  },
  {
    id: 3,
    initials: 'PS',
    avatarBg: 'bg-[#0F7BFF]',
    name: 'Priya Sharma',
    company: 'HelloFresh',
    badge: 'Pathways to Net Zero',
    review:
      'Pathways to Net Zero was a revelation — practical, data-driven and directly applicable to our ESG reporting obligations. The virtual classroom format made it easy to balance with busy shifts.',
  },
];

export default function Testimonials({ onOpenEnquiry }) {
  const [activeSlide, setActiveSlide] = useState(0);

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? featuredReviews.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === featuredReviews.length - 1 ? 0 : prev + 1));
  };

  const featured = featuredReviews[activeSlide];

  return (
    <section id="reviews" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll animation="fade-up">
        {/* Section Header with Ratings on Right */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="space-y-3">
            <span className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#0098D4]">
              LEARNER REVIEWS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#070E1A]">
              What Our Learners Say
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl">
              Genuine reviews from professionals who have advanced their careers with MostServs — across every level and industry.
            </p>
          </div>

          {/* Right Rating Badges (Trustpilot, Google, Feefo) */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Trustpilot */}
            <div className="px-4 py-3 rounded-2xl bg-[#070E1A] border border-slate-800 text-center min-w-[100px]">
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                TRUSTPILOT
              </div>
              <div className="text-xl font-extrabold text-[#0098D4] mt-0.5">
                4.9<span className="text-xs text-slate-400 font-normal">/5</span>
              </div>
              <div className="text-[10px] text-slate-400">3,241 reviews</div>
            </div>

            {/* Google */}
            <div className="px-4 py-3 rounded-2xl bg-[#070E1A] border border-slate-800 text-center min-w-[100px]">
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                GOOGLE
              </div>
              <div className="text-xl font-extrabold text-[#0F7BFF] mt-0.5">
                4.8<span className="text-xs text-slate-400 font-normal">/5</span>
              </div>
              <div className="text-[10px] text-slate-400">1,876 reviews</div>
            </div>

            {/* Feefo */}
            <div className="px-4 py-3 rounded-2xl bg-[#070E1A] border border-slate-800 text-center min-w-[100px]">
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                FEEFO
              </div>
              <div className="text-xl font-extrabold text-[#F59E0B] mt-0.5">
                98%
              </div>
              <div className="text-[10px] text-slate-400">Positive reviews</div>
            </div>
          </div>
        </div>

        {/* Reviews Layout: 1 Featured on Left + 3 Stacked on Right (No heavy shadow) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Large Featured Card */}
          <div className="lg:col-span-7 rounded-3xl bg-[#070E1A] p-8 sm:p-12 border border-slate-800 flex flex-col justify-between relative overflow-hidden">
            {/* Subtle background quote mark */}
            <Quote className="absolute top-6 right-8 w-28 h-28 text-white/[0.03] pointer-events-none rotate-180" />

            <div>
              {/* Badges on top */}
              <div className="flex items-center gap-2 mb-6">
                <span className="px-3.5 py-1 rounded-full bg-[#0098D4]/20 border border-[#0098D4]/40 text-[#0098D4] text-xs font-bold">
                  {featured.courseTag}
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-500/10 text-[#0098D4] text-xs font-bold border border-blue-500/20">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified</span>
                </span>
              </div>

              {/* 5 Stars */}
              <div className="flex items-center gap-1.5 text-amber-400 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>

              {/* Large Quote */}
              <p className="text-lg sm:text-xl lg:text-2xl text-slate-200 font-medium leading-relaxed mb-8">
                &ldquo;{featured.quote}&rdquo;
              </p>
            </div>

            {/* Bottom Author & Slider Controls */}
            <div className="pt-6 border-t border-slate-800/80 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div
                  className={`w-12 h-12 rounded-full ${featured.avatarBg} text-white flex items-center justify-center font-bold text-sm`}
                >
                  {featured.initials}
                </div>
                <div>
                  <div className="text-base font-bold text-white">
                    {featured.author}
                  </div>
                  <div className="text-xs text-slate-400">
                    {featured.role} · <span className="text-[#0098D4]">{featured.company}</span>
                  </div>
                </div>
              </div>

              {/* Slide controls */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={prevSlide}
                  aria-label="Previous review"
                  className="w-9 h-9 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Next review"
                  className="w-9 h-9 rounded-full bg-[#0F7BFF] hover:bg-[#0066EB] text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Stacked 3 Review Cards */}
          <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
            {sideReviews.map((rev) => (
              <div
                key={rev.id}
                className="rounded-3xl bg-[#070E1A] p-6 border border-slate-800"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-full ${rev.avatarBg} text-white flex items-center justify-center font-bold text-xs shrink-0`}
                    >
                      {rev.initials}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white leading-tight">
                        {rev.name}
                      </div>
                      <div className="text-[11px] text-slate-400">
                        {rev.company}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center text-amber-400 shrink-0">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed mb-3">
                  {rev.review}
                </p>

                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#0F7BFF]/20 text-[#0F7BFF] text-[10px] font-bold">
                    {rev.badge}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[10px] text-[#0098D4] font-semibold">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Verified</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Trust Strip */}
        <div className="mt-8 rounded-2xl bg-[#070E1A] p-4 sm:p-5 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-slate-300">
            <div className="flex items-center gap-1 text-amber-400 font-bold">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
              <span className="text-white ml-1.5 font-bold">4.9/5</span>
              <span className="text-slate-400 font-normal">across 8,000+ verified reviews</span>
            </div>

            <div className="hidden md:block w-px h-4 bg-slate-700" />

            <div className="text-slate-300">
              <span className="font-bold text-white">98%</span> of learners rated their experience good or outstanding
            </div>
          </div>

          <button
            type="button"
            onClick={() => onOpenEnquiry && onOpenEnquiry('Learner Reviews & Case Studies')}
            className="text-xs font-bold text-[#0F7BFF] hover:text-[#4B9EFF] inline-flex items-center gap-1 transition-colors self-start sm:self-auto cursor-pointer"
          >
            <span>Read all reviews</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
