import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Award, ArrowRight, ShieldCheck, HardHat, Cpu, ShieldAlert, Laptop } from 'lucide-react';
import Breadcrumb from '../components/layout/Breadcrumb';
import CategoryStatsBar from '../components/category/CategoryStatsBar';
import CourseInquiryCTA from '../components/course/CourseInquiryCTA';
import { categoriesData } from '../data/categoriesData';
import { coursesData } from '../data/coursesData';
import { getCourseImage } from '../assets/courses';
import hseBannerImg from '../assets/images/hse-banner.jpg';

const categoryIcons = {
  hse: HardHat,
  'artificial-intelligence': Cpu,
  'cyber-security': ShieldAlert,
  'information-technology': Laptop
};

export default function QualificationsHubPage({ onOpenEnquiry }) {
  useEffect(() => {
    document.title = 'Regulated Professional Qualifications | MOST Services Pvt Ltd';
  }, []);

  const allCourses = Object.values(coursesData);
  const categoriesList = Object.values(categoriesData);

  return (
    <div className="bg-white">
      {/* Hero Section: Dark Photographic Theme Matching Astutis Category Banner */}
      <section className="relative text-white overflow-hidden bg-[#0E1017] border-b border-white/[0.08]">
        {/* Right-Positioned Natural Photograph with Horizontal Gradient Fade */}
        <div className="absolute top-0 right-0 bottom-0 w-full lg:w-[60%] overflow-hidden pointer-events-none">
          <img
            src={hseBannerImg}
            alt="Regulated UK &amp; International Qualifications"
            className="w-full h-full object-cover object-center lg:object-right filter contrast-105 saturate-110 brightness-95"
          />
          {/* Subtle Warm Amber Industrial Glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(circle at 80% 45%, rgba(245, 158, 11, 0.20) 0%, rgba(243, 112, 33, 0.10) 45%, transparent 75%)',
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
            <Breadcrumb isDark={true} items={[{ label: 'Qualifications' }]} />
          </div>

          <div className="max-w-2xl lg:max-w-xl space-y-5">
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-white tracking-tight leading-[1.08]">
              Regulated Qualifications
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              Advance your professional and corporate career with accredited qualifications from Ofqual-regulated UK awarding bodies and global safety institutes — from foundation certificates to Level 7 postgraduate diplomas.
            </p>

            <div className="flex flex-wrap gap-2.5 pt-2">
              {categoriesList.map((cat) => (
                <Link
                  key={cat.id}
                  to={`/qualifications/${cat.slug}`}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-gradient-to-r hover:from-[#0098D4] hover:to-[#0F7BFF] text-white text-xs sm:text-sm font-semibold transition-all border border-white/20 hover:scale-102"
                >
                  <span>{cat.shortTitle}</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-80" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <CategoryStatsBar />

      {/* 4 Main Categories Grid */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F37021]">
              Discipline Areas
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Explore by Qualification Category
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categoriesList.map((cat) => {
              const Icon = categoryIcons[cat.id] || Award;
              const count = allCourses.filter((c) => c.categorySlug === cat.id).length;

              return (
                <Link
                  key={cat.id}
                  to={`/qualifications/${cat.slug}`}
                  className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:shadow-xl hover:border-[#F37021]/60 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-900 group-hover:bg-[#F37021] group-hover:text-white transition-colors flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#F37021] transition-colors mb-2">
                      {cat.title}
                    </h3>

                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-6">
                      {cat.intro}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500">
                    <span>{count} Courses</span>
                    <span className="inline-flex items-center gap-1 text-[#F37021] font-bold group-hover:translate-x-1 transition-transform">
                      View Directory <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* All Qualifications Detailed Grid */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#008AD2]">
                Comprehensive Directory
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
                All Accredited Qualifications ({allCourses.length})
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md">
              Filterable curriculum frameworks verified by international awarding organizations including OTHM, IOSH, and AOSH.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {allCourses.map((c, idx) => {
              const courseImg = getCourseImage(c.slug, c.categorySlug);

              return (
                <div
                  key={c.slug}
                  className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1"
                >
                  <div>
                    {/* Astutis Card Image Header with Orange Corner Accent */}
                    <div className="relative h-52 w-full overflow-hidden bg-slate-900">
                      <img
                        src={courseImg}
                        alt={c.title}
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
                          {idx === 0 ? 'Best Seller' : (c.awardingBody || 'Regulated')}
                        </span>
                      </div>

                      {/* Pass Rate Pill on bottom-left of photo */}
                      <div className="absolute bottom-3.5 left-3.5">
                        <span className="px-2.5 py-1 rounded-md bg-white/95 text-slate-900 text-[10px] font-bold shadow-xs">
                          98% Pass Rate
                        </span>
                      </div>
                    </div>

                    {/* Course Content */}
                    <div className="p-6">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-[#0F7BFF] mb-1.5">
                        {c.level}
                      </div>

                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#0F7BFF] transition-colors leading-snug mb-2.5">
                        <Link to={`/qualifications/${c.categorySlug}/${c.slug}`}>
                          {c.title}
                        </Link>
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                        {c.overview}
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
                      to={`/qualifications/${c.categorySlug}/${c.slug}`}
                      className="px-4 py-2 rounded-full border-2 border-slate-300 hover:border-[#0F7BFF] hover:bg-[#0F7BFF] text-slate-800 hover:text-white text-xs font-bold transition-all inline-flex items-center gap-1.5 shadow-2xs"
                    >
                      <span>More Info</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Direct Consultation CTA */}
      <CourseInquiryCTA courseTitle="Regulated Qualifications" onOpenEnquiry={onOpenEnquiry} />
    </div>
  );
}
