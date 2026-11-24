import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { coursesData } from '../data/coursesData';
import CourseHero from '../components/course/CourseHero';
import CourseLearningOptions from '../components/course/CourseLearningOptions';
import CourseExplainedSection from '../components/course/CourseExplainedSection';
import CourseOverviewSection from '../components/course/CourseOverviewSection';
import CourseModulesAccordion from '../components/course/CourseModulesAccordion';
import CourseAssessmentInfo from '../components/course/CourseAssessmentInfo';
import CourseCareerProgression from '../components/course/CourseCareerProgression';
import CourseFAQsAccordion from '../components/course/CourseFAQsAccordion';
import RelatedCourses from '../components/course/RelatedCourses';
import CourseInquiryCTA from '../components/course/CourseInquiryCTA';
import { AlertCircle, ArrowLeft } from 'lucide-react';

export default function CourseDetailPage({ onOpenEnquiry }) {
  const { categorySlug, courseSlug } = useParams();
  const slug = courseSlug || categorySlug; // handles both /qualifications/:slug and /qualifications/:cat/:slug

  const course = coursesData[slug];

  useEffect(() => {
    if (course) {
      document.title = `${course.title} | MOST Services Pvt Ltd`;
    } else {
      document.title = 'Qualification Not Found | MOST Services Pvt Ltd';
    }
  }, [course]);

  if (!course) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-slate-50 py-20 px-4">
        <div className="max-w-md w-full bg-white rounded-2xl border border-slate-200 p-8 text-center shadow-lg">
          <div className="w-14 h-14 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <AlertCircle className="w-7 h-7" />
          </div>
          <h1 className="text-2xl font-bold text-slate-900 mb-2">
            Qualification Not Found
          </h1>
          <p className="text-sm text-slate-600 mb-6 leading-relaxed">
            The requested course could not be located or may have moved to an updated curriculum code.
          </p>
          <Link
            to="/qualifications"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#F37021] text-white text-sm font-bold hover:bg-[#E05E10] transition-colors"
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
      {/* 1. Sub-component: Course Hero */}
      <CourseHero course={course} onOpenEnquiry={onOpenEnquiry} />

      {/* 2. Sub-component: Astutis Learning Options (4 Cards) */}
      <CourseLearningOptions courseTitle={course.title} onOpenEnquiry={onOpenEnquiry} />

      {/* 3. Sub-component: Astutis [Course] Explained with Preview Card */}
      <CourseExplainedSection course={course} onOpenEnquiry={onOpenEnquiry} />

      {/* 4. Sub-component: Astutis Course Overview Table (Units, Assessments, Length) */}
      <CourseOverviewSection course={course} />

      {/* 4. Sub-component: Syllabus & Units Accordion */}
      <CourseModulesAccordion modules={course.modules} courseTitle={course.title} />

      {/* 5. Sub-component: Assessment & Awarding Body QA */}
      <CourseAssessmentInfo
        assessmentMethod={course.assessmentMethod}
        awardingBody={course.awardingBody}
      />

      {/* 6. Sub-component: Career Opportunities & Progression Pathway */}
      <CourseCareerProgression
        careerOpportunities={course.careerOpportunities}
        level={course.level}
        categoryName={course.categoryName}
      />

      {/* 7. Sub-component: Interactive Course FAQs */}
      <CourseFAQsAccordion faqs={course.faqs} courseTitle={course.title} />

      {/* 8. Sub-component: Related Pathway Courses */}
      <RelatedCourses currentSlug={course.slug} categorySlug={course.categorySlug} />

      {/* 9. Sub-component: Direct Consultation CTA Banner */}
      <CourseInquiryCTA courseTitle={course.title} onOpenEnquiry={onOpenEnquiry} />
    </div>
  );
}
