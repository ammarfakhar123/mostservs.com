import React from 'react';
import { Award, CheckCircle2 } from 'lucide-react';

export default function CategoryEditorialWhatIs({ category }) {
  if (!category) return null;

  const categoryName = category.shortTitle || category.title;

  return (
    <section className="py-14 lg:py-18 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-8">
          What is {categoryName} Training?
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 text-sm sm:text-base text-slate-700 leading-relaxed">
          {/* Left Column */}
          <div className="space-y-4">
            <p>
              Professional qualifications in {categoryName} are internationally benchmarked frameworks designed to equip supervisors, engineers, and corporate leaders with the technical competencies required to manage operational risks, protect personnel, and maintain compliance with statutory legislation.
            </p>
            <p>
              These qualifications support the role of modern risk management, enabling enterprises to reduce lost-time incidents and comply with labor and environmental obligations. Courses combine rigorous academic foundations with practical, assignment-based workplace evidence.
            </p>
            <p className="text-xs sm:text-sm text-slate-500">
              MOST Services Pvt Ltd provides accredited syllabus delivery, dedicated tutor mentoring, and complete assignment guidance across all approved modules.
            </p>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            <p>
              Awarding organisations and regulatory authorities operate rigorous quality assurance criteria. Training centres that meet demanding verification benchmarks and learner support standards are granted approved centre delivery status.
            </p>
            <p className="font-semibold text-slate-900">
              MOST Services Pvt Ltd delivers accredited qualifications mapped to UK Ofqual frameworks, ensuring verifiable credentials and seamless academic progression.
            </p>
            <p>
              Our courses are available across multiple flexible formats: <strong>Online Self-Paced</strong>, <strong>Live Virtual Classrooms</strong>, <strong>Distance Learning</strong>, and <strong>On-Site Corporate Cohorts</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
