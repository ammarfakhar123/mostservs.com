import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function DesktopMegaMenu({ isOpen, onMouseEnter, onMouseLeave, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      className="absolute top-full left-0 w-full z-50 pt-2 pointer-events-auto"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Invisible Hover Bridge to eliminate any gap between navbar and dropdown */}
      <div className="absolute -top-3 left-0 w-full h-5 bg-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-slate-200/90 rounded-2xl shadow-[0_20px_50px_rgba(15,23,42,0.12)] overflow-hidden p-8 lg:p-9 animate-in fade-in slide-in-from-top-1 duration-150">
          {/* Pure 4-Column Structured Course Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Column 1: HSE (Health & Safety) */}
            <div className="space-y-3">
              <div className="pb-2 border-b border-slate-100">
                <div className="w-8 h-0.5 bg-[#0F7BFF] rounded-full mb-2" />
                <h4 className="text-[12px] font-extrabold uppercase tracking-[0.14em] text-[#0098D4]">
                  Health &amp; Safety (HSE)
                </h4>
              </div>

              <ul className="space-y-2">
                <li>
                  <Link
                    to="/qualifications/hse/othm-level-7"
                    onClick={onClose}
                    className="group block py-1 transition-all"
                  >
                    <span className="text-[13px] font-semibold text-slate-800 group-hover:text-[#0F7BFF] group-hover:translate-x-1 inline-block transition-transform">
                      OTHM Level 7 Diploma in HSE
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/qualifications/hse/othm-level-6"
                    onClick={onClose}
                    className="group block py-1 transition-all"
                  >
                    <span className="text-[13px] font-semibold text-slate-800 group-hover:text-[#0F7BFF] group-hover:translate-x-1 inline-block transition-transform">
                      OTHM Level 6 Diploma in HSE
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/qualifications/hse/othm-level-3"
                    onClick={onClose}
                    className="group block py-1 transition-all"
                  >
                    <span className="text-[13px] font-semibold text-slate-800 group-hover:text-[#0F7BFF] group-hover:translate-x-1 inline-block transition-transform">
                      OTHM Level 3 Certificate in HSE
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/qualifications/hse/iosh"
                    onClick={onClose}
                    className="group block py-1 transition-all"
                  >
                    <span className="text-[13px] font-semibold text-slate-800 group-hover:text-[#0F7BFF] group-hover:translate-x-1 inline-block transition-transform">
                      IOSH Managing &amp; Working Safely
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/qualifications/hse/ictqual-ab"
                    onClick={onClose}
                    className="group block py-1 transition-all"
                  >
                    <span className="text-[13px] font-semibold text-slate-800 group-hover:text-[#0F7BFF] group-hover:translate-x-1 inline-block transition-transform">
                      ICTQual AB Qualifications
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/qualifications/hse/aosh"
                    onClick={onClose}
                    className="group block py-1 transition-all"
                  >
                    <span className="text-[13px] font-semibold text-slate-800 group-hover:text-[#0F7BFF] group-hover:translate-x-1 inline-block transition-transform">
                      AOSH Awarding Body Credentials
                    </span>
                  </Link>
                </li>
              </ul>

              <div className="pt-2">
                <Link
                  to="/qualifications/hse"
                  onClick={onClose}
                  className="text-xs font-bold text-[#0F7BFF] hover:underline inline-flex items-center gap-1 group"
                >
                  <span>View All HSE Qualifications</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Column 2: Information Technology */}
            <div className="space-y-3">
              <div className="pb-2 border-b border-slate-100">
                <div className="w-8 h-0.5 bg-[#0F7BFF] rounded-full mb-2" />
                <h4 className="text-[12px] font-extrabold uppercase tracking-[0.14em] text-[#0098D4]">
                  Information Technology
                </h4>
              </div>

              <ul className="space-y-2">
                <li>
                  <Link
                    to="/qualifications/information-technology/othm-level-7-diploma-in-data-science"
                    onClick={onClose}
                    className="group block py-1 transition-all"
                  >
                    <span className="text-[13px] font-semibold text-slate-800 group-hover:text-[#0F7BFF] group-hover:translate-x-1 inline-block transition-transform">
                      OTHM Level 7 Diploma in Data Science
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/qualifications/information-technology/othm-level-6-diploma-in-information-technology"
                    onClick={onClose}
                    className="group block py-1 transition-all"
                  >
                    <span className="text-[13px] font-semibold text-slate-800 group-hover:text-[#0F7BFF] group-hover:translate-x-1 inline-block transition-transform">
                      OTHM Level 6 Diploma in IT
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/qualifications/information-technology/othm-level-5-extended-diploma-in-information-technology"
                    onClick={onClose}
                    className="group block py-1 transition-all"
                  >
                    <span className="text-[13px] font-semibold text-slate-800 group-hover:text-[#0F7BFF] group-hover:translate-x-1 inline-block transition-transform">
                      OTHM Level 5 Extended Diploma in IT
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/qualifications/information-technology/othm-level-5-diploma-in-information-technology"
                    onClick={onClose}
                    className="group block py-1 transition-all"
                  >
                    <span className="text-[13px] font-semibold text-slate-800 group-hover:text-[#0F7BFF] group-hover:translate-x-1 inline-block transition-transform">
                      OTHM Level 5 Diploma in IT
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/qualifications/information-technology/othm-level-4-diploma-in-information-technology"
                    onClick={onClose}
                    className="group block py-1 transition-all"
                  >
                    <span className="text-[13px] font-semibold text-slate-800 group-hover:text-[#0F7BFF] group-hover:translate-x-1 inline-block transition-transform">
                      OTHM Level 4 Diploma in IT
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/qualifications/information-technology/othm-level-3-foundation-diploma-in-information-technology"
                    onClick={onClose}
                    className="group block py-1 transition-all"
                  >
                    <span className="text-[13px] font-semibold text-slate-800 group-hover:text-[#0F7BFF] group-hover:translate-x-1 inline-block transition-transform">
                      OTHM Level 3 Foundation Diploma in IT
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/qualifications/information-technology/othm-level-6-certificate-in-python"
                    onClick={onClose}
                    className="group block py-1 transition-all"
                  >
                    <span className="text-[13px] font-semibold text-slate-800 group-hover:text-[#0F7BFF] group-hover:translate-x-1 inline-block transition-transform">
                      OTHM Level 3 &amp; 6 Certificate in Python
                    </span>
                  </Link>
                </li>
              </ul>

              <div className="pt-2">
                <Link
                  to="/qualifications/information-technology"
                  onClick={onClose}
                  className="text-xs font-bold text-[#0F7BFF] hover:underline inline-flex items-center gap-1 group"
                >
                  <span>View All IT Qualifications</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Column 3: Cyber Security */}
            <div className="space-y-3">
              <div className="pb-2 border-b border-slate-100">
                <div className="w-8 h-0.5 bg-[#0F7BFF] rounded-full mb-2" />
                <h4 className="text-[12px] font-extrabold uppercase tracking-[0.14em] text-[#0098D4]">
                  Cyber Security
                </h4>
              </div>

              <ul className="space-y-2">
                <li>
                  <Link
                    to="/qualifications/cyber-security/othm-level-4-diploma-in-cyber-security"
                    onClick={onClose}
                    className="group block py-1 transition-all"
                  >
                    <span className="text-[13px] font-semibold text-slate-800 group-hover:text-[#0F7BFF] group-hover:translate-x-1 inline-block transition-transform">
                      OTHM Level 4 Diploma in Cyber Security
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/qualifications/cyber-security/othm-level-5-diploma-in-cyber-security"
                    onClick={onClose}
                    className="group block py-1 transition-all"
                  >
                    <span className="text-[13px] font-semibold text-slate-800 group-hover:text-[#0F7BFF] group-hover:translate-x-1 inline-block transition-transform">
                      OTHM Level 5 Diploma in Cyber Security
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/qualifications/cyber-security/othm-level-5-extended-diploma-in-cyber-security"
                    onClick={onClose}
                    className="group block py-1 transition-all"
                  >
                    <span className="text-[13px] font-semibold text-slate-800 group-hover:text-[#0F7BFF] group-hover:translate-x-1 inline-block transition-transform">
                      OTHM Level 5 Extended Diploma
                    </span>
                  </Link>
                </li>
              </ul>

              <div className="pt-2">
                <Link
                  to="/qualifications/cyber-security"
                  onClick={onClose}
                  className="text-xs font-bold text-[#0F7BFF] hover:underline inline-flex items-center gap-1 group"
                >
                  <span>View All Cyber Security</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Column 4: Artificial Intelligence */}
            <div className="space-y-3">
              <div className="pb-2 border-b border-slate-100">
                <div className="w-8 h-0.5 bg-[#0F7BFF] rounded-full mb-2" />
                <h4 className="text-[12px] font-extrabold uppercase tracking-[0.14em] text-[#0098D4]">
                  Artificial Intelligence
                </h4>
              </div>

              <ul className="space-y-2">
                <li>
                  <Link
                    to="/qualifications/artificial-intelligence/othm-level-7-diploma-in-artificial-intelligence"
                    onClick={onClose}
                    className="group block py-1 transition-all"
                  >
                    <span className="text-[13px] font-semibold text-slate-800 group-hover:text-[#0F7BFF] group-hover:translate-x-1 inline-block transition-transform">
                      OTHM Level 7 Diploma in Artificial Intelligence
                    </span>
                  </Link>
                </li>
              </ul>

              <div className="pt-2">
                <Link
                  to="/qualifications/artificial-intelligence"
                  onClick={onClose}
                  className="text-xs font-bold text-[#0F7BFF] hover:underline inline-flex items-center gap-1 group"
                >
                  <span>View All AI Qualifications</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Quick All Courses Link at the bottom of Column 4 */}
              <div className="mt-6 pt-4 border-t border-slate-100">
                <Link
                  to="/qualifications"
                  onClick={onClose}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-[#0F7BFF] text-white text-xs font-bold transition-all hover:scale-102"
                >
                  <span>All 60+ Qualifications</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
