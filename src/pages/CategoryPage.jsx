import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { categoriesData } from '../data/categoriesData';
import CategoryHero from '../components/category/CategoryHero';
import CategoryStatsBar from '../components/category/CategoryStatsBar';
import CategoryEditorialWhatIs from '../components/category/CategoryEditorialWhatIs';
import CategoryCourseGrid from '../components/category/CategoryCourseGrid';
import CategoryPathwayExplainer from '../components/category/CategoryPathwayExplainer';
import CategoryWhyMost from '../components/category/CategoryWhyMost';
import CategoryFAQs from '../components/category/CategoryFAQs';
import CourseInquiryCTA from '../components/course/CourseInquiryCTA';
import { AlertCircle, ArrowLeft } from 'lucide-react';

export default function CategoryPage({ onOpenEnquiry }) {
  const { categorySlug } = useParams();
  const category = categoriesData[categorySlug];

  useEffect(() => {
    if (category) {
      document.title = `${category.title} Courses | MOST Services Pvt Ltd`;
    } else {
      document.title = 'Category Not Found | MOST Services Pvt Ltd';
    }
  }, [category]);

  if (!category) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-slate-50 py-20 px-4">
        <div className="max-w-md w-full bg-white rounded-2xl border border-slate-200 p-8 text-center shadow-lg">
          <div className="w-14 h-14 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <AlertCircle className="w-7 h-7" />
          </div>
          <h1 className="text-2xl font-bold text-slate-900 mb-2">
            Category Not Found
          </h1>
          <p className="text-sm text-slate-600 mb-6 leading-relaxed">
            The requested qualifications discipline could not be found.
          </p>
          <Link
            to="/qualifications"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#0F7BFF] text-white text-sm font-bold hover:bg-[#0066E6] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Browse All Qualifications</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* 1. Astutis Sub-component: Category Hero with Badges & Right Photo */}
      <CategoryHero category={category} />

      {/* 2. Astutis Sub-component: Full-Width Blue Value Strip */}
      <CategoryStatsBar />

      {/* 3. Astutis Sub-component: What is [Category] Training? Editorial Section */}
      <CategoryEditorialWhatIs category={category} />

      {/* 4. Astutis Sub-component: 3-Column Course Catalogue Cards Grid */}
      <CategoryCourseGrid
        categorySlug={category.slug}
        categoryTitle={category.shortTitle || category.title}
      />

      {/* 5. Sub-component: Qualification Progression Ladder */}
      <CategoryPathwayExplainer pathway={category.pathway} />

      {/* 6. Sub-component: Why Choose MOST Services */}
      <CategoryWhyMost
        whyMost={category.whyMost}
        categoryTitle={category.shortTitle}
      />

      {/* 7. Sub-component: Category FAQs */}
      <CategoryFAQs
        faqs={category.faqs}
        categoryTitle={category.shortTitle}
      />

      {/* 8. Sub-component: Direct Consultation CTA */}
      <CourseInquiryCTA
        courseTitle={`${category.shortTitle} Qualifications`}
        onOpenEnquiry={onOpenEnquiry}
      />
    </div>
  );
}
