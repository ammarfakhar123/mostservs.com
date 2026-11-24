import React from 'react';
import { Target, Compass, Award } from 'lucide-react';

export default function MissionVision() {
  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          {/* Mission */}
          <div className="bg-slate-50 rounded-3xl border border-slate-200 p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-orange-100 text-[#F37021] flex items-center justify-center mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 mb-4">
                Our Mission
              </h2>
              <p className="text-base text-slate-700 leading-relaxed">
                To equip Pakistani professionals, engineers, and organizations with internationally recognized, regulated qualifications and practical capabilities that drive career advancement, workplace safety, and corporate excellence.
              </p>
            </div>
            <div className="pt-6 border-t border-slate-200 text-xs text-slate-500 font-medium mt-6">
              Empowering human potential through rigorous, accredited frameworks.
            </div>
          </div>

          {/* Vision */}
          <div className="bg-slate-50 rounded-3xl border border-slate-200 p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-[#008AD2] flex items-center justify-center mb-6">
                <Compass className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 mb-4">
                Our Vision
              </h2>
              <p className="text-base text-slate-700 leading-relaxed">
                To be the most trusted corporate education, workplace health & safety, and statutory advisory institution in Pakistan, renowned for unwavering academic integrity, student satisfaction, and measurable enterprise value.
              </p>
            </div>
            <div className="pt-6 border-t border-slate-200 text-xs text-slate-500 font-medium mt-6">
              Setting the national benchmark in regulated vocational higher education.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
