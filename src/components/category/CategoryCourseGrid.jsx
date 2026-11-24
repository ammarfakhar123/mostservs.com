import React from 'react';
import { Link } from 'react-router-dom';
import { Award, ArrowRight, Star, Clock } from 'lucide-react';
import { coursesData } from '../../data/coursesData';
import { getCourseImage } from '../../assets/courses';

export default function CategoryCourseGrid({ categorySlug, categoryTitle }) {
  // Filter distinct courses for this category
  const seen = new Set();
  const categoryCourses = Object.values(coursesData).filter((c) => {
    if (c.categorySlug !== categorySlug) return false;
    if (seen.has(c.slug)) return false;
    seen.add(c.slug);
    return true;
  });

  return (
    <section id="courses-grid" className="py-14 lg:py-20 bg-slate-50 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {categoryTitle} Courses
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Explore our accredited catalogue of regulated qualifications and professional certifications below.
          </p>
        </div>

        {/* Astutis 3-Column Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryCourses.map((c, idx) => {
            const isEager = idx < 6;

            return (
              <div
                key={c.slug}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1"
              >
                <div>
                  {/* Astutis Card Image Header with Orange Corner Accent */}
                  <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                    <img
                      src={getCourseImage(c.slug, c.categorySlug)}
                      alt={c.title}
                      loading={isEager ? "eager" : "lazy"}
                      fetchPriority={isEager ? "high" : "auto"}
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-100 filter contrast-105 saturate-105"
                    />
                  {/* Astutis orange geometric curved corner accent */}
                  <div
                    className="absolute -bottom-1 -right-1 w-24 h-24 rounded-tl-full opacity-90 pointer-events-none"
                    style={{
                      background: 'radial-gradient(circle at bottom right, #F97316 0%, #EA580C 60%, transparent 70%)',
                    }}
                  />

                  {/* Astutis "Best Seller" or "Ofqual" Top-Left Badge */}
                  <div className="absolute top-3.5 left-3.5">
                    <span className="px-3 py-1 rounded-full bg-[#102A43] text-white text-[10px] font-bold uppercase tracking-wider shadow-sm">
                      {idx === 0 ? 'Best Seller' : c.awardingBody}
                    </span>
                  </div>

                  {/* Astutis "Pass Rate" Pill on bottom-left of photo */}
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

              {/* Astutis Bottom Row: Price & "More Info" Button */}
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
  );
}
