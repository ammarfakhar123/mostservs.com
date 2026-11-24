import React from 'react';
import { Link } from 'react-router-dom';
import { Award, ArrowRight } from 'lucide-react';
import { coursesData } from '../../data/coursesData';
import { getCourseImage } from '../../assets/courses';

export default function RelatedCourses({ currentSlug, categorySlug }) {
  // Deduplicate and filter related courses
  const seen = new Set();
  const related = Object.values(coursesData)
    .filter((c) => {
      if (c.slug === currentSlug) return false;
      if (seen.has(c.slug)) return false;
      seen.add(c.slug);
      return c.categorySlug === categorySlug;
    })
    .slice(0, 3);

  if (related.length === 0) return null;

  return (
    <section className="py-14 lg:py-18 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#0F7BFF]">
              Academic Progression
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Related Qualifications
            </h2>
          </div>
          <Link
            to={`/qualifications/${categorySlug}`}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0F7BFF] hover:underline"
          >
            <span>View All in this category</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {related.map((c, idx) => (
            <div
              key={c.slug}
              className="bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between overflow-hidden group hover:-translate-y-1"
            >
              <div>
                <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                  <img
                    src={getCourseImage(c.slug, c.categorySlug)}
                    alt={c.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-100 filter contrast-105 saturate-105"
                  />
                  {/* Astutis orange geometric curved corner accent */}
                  <div
                    className="absolute -bottom-1 -right-1 w-20 h-20 rounded-tl-full opacity-90 pointer-events-none"
                    style={{
                      background: 'radial-gradient(circle at bottom right, #F97316 0%, #EA580C 60%, transparent 70%)',
                    }}
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full bg-[#102A43] text-white text-[10px] font-bold uppercase tracking-wider shadow-sm">
                      {c.awardingBody}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3">
                    <span className="px-2 py-0.5 rounded-md bg-white/95 text-slate-900 text-[10px] font-bold shadow-xs">
                      98% Pass Rate
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[#0F7BFF] mb-1">
                    {c.level}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0F7BFF] transition-colors mb-2 line-clamp-2 leading-snug">
                    <Link to={`/qualifications/${c.categorySlug}/${c.slug}`}>
                      {c.title}
                    </Link>
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {c.overview}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="block text-[10px] text-slate-400 font-bold uppercase">Admissions</span>
                  <span className="text-xs font-bold text-slate-900">Contact for Fees</span>
                </div>
                <Link
                  to={`/qualifications/${c.categorySlug}/${c.slug}`}
                  className="px-3.5 py-1.5 rounded-full border border-slate-300 hover:border-[#0F7BFF] hover:bg-[#0F7BFF] text-slate-800 hover:text-white text-xs font-bold transition-all inline-flex items-center gap-1"
                >
                  <span>More Info</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
