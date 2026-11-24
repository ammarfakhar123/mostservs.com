import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, ChevronLeft, ChevronRight } from 'lucide-react';

import safetyInspectImg from '../assets/courses/course-safety-inspection.jpg';
import industrialHseImg from '../assets/courses/course-industrial-hse.jpg';
import hseBannerImg from '../assets/images/hse-banner.jpg';
import seminarImg from '../assets/images/hero-seminar.png';
import collabImg from '../assets/images/hero-collaboration.png';
import learningOnlineImg from '../assets/images/learning-online.png';
import cyberBannerImg from '../assets/images/cyber-banner.jpg';

const filterCategories = ['All Courses', 'OTHM', 'IOSH', 'AOSH', 'Short Courses'];

const catalogCards = [
  {
    id: 'course-ictqual',
    category: 'Short Courses',
    badgeLabel: 'Best Seller',
    eyebrow: 'PROFESSIONAL CERTIFICATION',
    title: 'ICTQual AB Qualifications',
    description:
      'ICTQual qualifications establish practical workplace competency in occupational health, safety protocols, and technical compliance across diverse commercial and industrial operations.',
    rating: '4.9',
    passRate: '98% Pass Rate',
    image: seminarImg,
    path: '/qualifications/hse/ictqual-ab',
  },
  {
    id: 'course-iosh',
    category: 'IOSH',
    badgeLabel: 'IOSH (INSTITUTION OF OCCUPATIONAL SAFETY AND HEALTH)',
    eyebrow: 'GLOBAL INDUSTRY BENCHMARK',
    title: 'IOSH Qualifications',
    description:
      'IOSH qualifications are the global gold standard in workplace risk management, empowering managers and staff at all levels to understand, evaluate, and control hazards proactively.',
    rating: '4.9',
    passRate: '98% Pass Rate',
    image: collabImg,
    path: '/qualifications/hse/iosh',
  },
  {
    id: 'course-aosh',
    category: 'AOSH',
    badgeLabel: 'AOSH AWARDING BODY',
    eyebrow: 'INTERNATIONAL SAFETY CERTIFICATION',
    title: 'AOSH Qualifications',
    description:
      'AOSH qualifications deliver comprehensive safety management training mapped to international standards, equipping professionals with preventative risk and safety methodologies.',
    rating: '5.0',
    passRate: '98% Pass Rate',
    image: safetyInspectImg,
    path: '/qualifications/hse/aosh',
  },
  {
    id: 'course-othm-6',
    category: 'OTHM',
    badgeLabel: 'OTHM Level 6 Diploma',
    eyebrow: 'UK OFQUAL LEVEL 6 DIPLOMA',
    title: 'OTHM Level 6 National Diploma in Occupational H&S',
    description:
      'The gold-standard for senior safety leaders. Equivalent to a UK Bachelor degree, opening direct routes to certified chartered safety practitioner membership.',
    rating: '4.9',
    passRate: '98% Pass Rate',
    image: hseBannerImg,
    path: '/qualifications/hse/othm-level-6',
  },
  {
    id: 'course-othm-7',
    category: 'OTHM',
    badgeLabel: 'OTHM Level 7 Diploma',
    eyebrow: 'POSTGRADUATE MASTER LEVEL',
    title: 'OTHM Level 7 Postgraduate Diploma in Occupational H&S',
    description:
      'Advanced strategic health, safety, and risk governance qualification for executive directors and enterprise safety leaders operating internationally.',
    rating: '4.9',
    passRate: '99% Pass Rate',
    image: industrialHseImg,
    path: '/qualifications/hse/othm-level-7',
  },
  {
    id: 'course-othm-3',
    category: 'OTHM',
    badgeLabel: 'OTHM Level 3 Certificate',
    eyebrow: 'FOUNDATION SAFETY CREDENTIAL',
    title: 'OTHM Level 3 Certificate in Occupational H&S',
    description:
      'Globally recognised foundation qualification for safety professionals seeking international compliance proficiency and career advancement.',
    rating: '4.8',
    passRate: '98% Pass Rate',
    image: learningOnlineImg,
    path: '/qualifications/hse/othm-level-3',
  },
];

function SingleCourseCard({ card, onOpenEnquiry }) {
  return (
    <div
      data-cursor="explore"
      className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1 h-full cursor-pointer"
    >
      <div>
        {/* Astutis Card Image Header with Orange Corner Accent */}
        <div className="relative h-52 w-full overflow-hidden bg-slate-900">
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-100 filter contrast-105 saturate-105"
          />
          {/* Astutis orange geometric curved corner accent */}
          <div
            className="absolute -bottom-1 -right-1 w-24 h-24 rounded-tl-full opacity-90 pointer-events-none"
            style={{
              background:
                'radial-gradient(circle at bottom right, #F97316 0%, #EA580C 60%, transparent 70%)',
            }}
          />

          {/* Top-Left Badge (Dark Navy Pill matching Image 2) */}
          <div className="absolute top-3.5 left-3.5">
            <span className="px-3 py-1 rounded-full bg-[#102A43] text-white text-[10px] font-bold uppercase tracking-wider shadow-sm">
              {card.badgeLabel}
            </span>
          </div>

          {/* Pass Rate Pill on bottom-left of photo */}
          <div className="absolute bottom-3.5 left-3.5">
            <span className="px-2.5 py-1 rounded-md bg-white/95 text-slate-900 text-[10px] font-bold shadow-xs">
              {card.passRate}
            </span>
          </div>
        </div>

        {/* Course Content */}
        <div className="p-6">
          <div className="text-[11px] font-bold uppercase tracking-wider text-[#0F7BFF] mb-1.5">
            {card.eyebrow}
          </div>

          <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#0F7BFF] transition-colors leading-snug mb-2.5">
            <Link to={card.path}>
              {card.title}
            </Link>
          </h3>

          <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
            {card.description}
          </p>
        </div>
      </div>

      {/* Bottom Row: Admissions / Intake & "More Info" Button */}
      <div className="p-6 pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
        <div>
          <span className="block text-[10px] text-slate-400 uppercase tracking-wider font-bold">
            ADMISSIONS / INTAKE
          </span>
          <span className="text-xs sm:text-sm font-extrabold text-slate-900">
            Contact for Fees
          </span>
        </div>

        <Link
          to={card.path}
          className="px-4 py-2 rounded-full border-2 border-slate-300 hover:border-[#0F7BFF] hover:bg-[#0F7BFF] text-slate-800 hover:text-white text-xs font-bold transition-all inline-flex items-center gap-1.5 shadow-2xs"
        >
          <span>More Info</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}

export default function ProgrammesSection({ onOpenEnquiry }) {
  const [selectedFilter, setSelectedFilter] = useState('All Courses');
  const [activeMobileIndex, setActiveMobileIndex] = useState(0);
  const scrollRef = useRef(null);

  const visibleCards =
    selectedFilter === 'All Courses'
      ? catalogCards
      : catalogCards.filter(
          (c) =>
            c.category.toLowerCase() === selectedFilter.toLowerCase() ||
            (selectedFilter === 'Short Courses' && c.category === 'Short Courses')
        );

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    const cardWidth = clientWidth * 0.84 + 16;
    const newIdx = Math.round(scrollLeft / cardWidth);
    if (newIdx !== activeMobileIndex && newIdx >= 0 && newIdx < visibleCards.length) {
      setActiveMobileIndex(newIdx);
    }
  };

  const scrollToIndex = (idx) => {
    if (!scrollRef.current) return;
    const { clientWidth } = scrollRef.current;
    const cardWidth = clientWidth * 0.84 + 16;
    scrollRef.current.scrollTo({
      left: idx * cardWidth,
      behavior: 'smooth',
    });
    setActiveMobileIndex(idx);
  };

  return (
    <section id="programmes" className="py-14 lg:py-22 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-3">
          <span className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#0098D4]">
            COURSES CATALOGUE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#070E1A]">
            Industry-Accredited Programmes
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-3xl">
            Expert-designed qualifications validated against the latest regulatory frameworks — from awareness courses to diplomas.
          </p>
        </div>

        {/* Filter Pills and "View All 60+ Courses" */}
        <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            {filterCategories.map((cat) => {
              const active = selectedFilter === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => {
                    setSelectedFilter(cat);
                    setActiveMobileIndex(0);
                    if (scrollRef.current) scrollRef.current.scrollLeft = 0;
                  }}
                  className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    active
                      ? 'bg-gradient-to-r from-[#0098D4] to-[#0F7BFF] text-white'
                      : 'bg-[#070E1A] text-slate-300 hover:text-white hover:bg-slate-900'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          <Link
            to="/qualifications"
            className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-[#070E1A] hover:bg-slate-900 text-white text-xs sm:text-sm font-bold inline-flex items-center gap-1.5 transition-all self-start sm:self-auto shrink-0"
          >
            <span>View All 60+ Courses</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Desktop & Tablet: Multi-Column Responsive Grid (3 Cols on Desktop, 2 on Tablet) */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {visibleCards.map((card) => (
            <SingleCourseCard
              key={card.id}
              card={card}
              onOpenEnquiry={onOpenEnquiry}
            />
          ))}
        </div>

        {/* Mobile: Horizontal Touch Swipe Carousel with Preview Peek & Pagination */}
        <div className="block md:hidden mt-6">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-3 -mx-4 px-4 scroll-smooth"
          >
            {visibleCards.map((card) => (
              <div
                key={card.id}
                className="w-[84vw] max-w-[320px] shrink-0 snap-center"
              >
                <SingleCourseCard
                  card={card}
                  onOpenEnquiry={onOpenEnquiry}
                />
              </div>
            ))}
          </div>

          {/* Carousel Pagination Dots & Arrow Controls */}
          <div className="flex items-center justify-between pt-3 px-1">
            <div className="flex items-center gap-1.5">
              {visibleCards.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => scrollToIndex(i)}
                  className={`h-1.5 rounded-full transition-all cursor-pointer ${
                    activeMobileIndex === i
                      ? 'w-6 bg-[#0098D4]'
                      : 'w-1.5 bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Go to course ${i + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => scrollToIndex(Math.max(0, activeMobileIndex - 1))}
                disabled={activeMobileIndex === 0}
                aria-label="Previous course"
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() =>
                  scrollToIndex(
                    Math.min(visibleCards.length - 1, activeMobileIndex + 1)
                  )
                }
                disabled={activeMobileIndex === visibleCards.length - 1}
                aria-label="Next course"
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-colors cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Banner: Group Discounts */}
        <div className="mt-10 rounded-2xl bg-[#070E1A] p-5 sm:p-6 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#0098D4]/20 text-[#0098D4] flex items-center justify-center shrink-0 border border-[#0098D4]/30">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">
                Training a team of 4 or more?
              </div>
              <div className="text-xs text-slate-400">
                Group discounts and bespoke in-company cohorts available — speak to our enterprise team.
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => onOpenEnquiry && onOpenEnquiry('Group Training Quote')}
            className="text-xs sm:text-sm font-bold text-[#0F7BFF] hover:text-[#4B9EFF] inline-flex items-center gap-1 transition-colors self-start sm:self-auto cursor-pointer shrink-0"
          >
            <span>Get a Group Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
