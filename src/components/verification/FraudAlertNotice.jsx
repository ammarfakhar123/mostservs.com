import React from 'react';
import { AlertTriangle, ShieldAlert, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

export default function FraudAlertNotice() {
  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-3xl p-8 sm:p-10">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-md">
              <ShieldAlert className="w-6 h-6" />
            </div>

            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
                Integrity & Public Advisory
              </span>
              <h2 className="text-2xl font-extrabold text-amber-950 tracking-tight">
                Protecting Learners Against Unaccredited & Counterfeit Credentials
              </h2>
              <p className="text-sm sm:text-base text-amber-900/90 leading-relaxed max-w-4xl">
                MOST Services Pvt Ltd is committed to the highest standards of academic integrity. We warn learners and employers against fraudulent agents or unauthorized institutes offering unverified, fake, or "instant" certificates without assessment.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs sm:text-sm text-amber-950">
                <div className="p-3.5 bg-white/70 rounded-xl border border-amber-200/80">
                  <strong className="block text-amber-900 mb-1">Zero Instant Diplomas:</strong>
                  All genuine UK and international qualifications require rigorous assessment, assignments, and external verification.
                </div>
                <div className="p-3.5 bg-white/70 rounded-xl border border-amber-200/80">
                  <strong className="block text-amber-900 mb-1">Approved Centre Status:</strong>
                  Always verify center authorization directly with the awarding body before paying fees.
                </div>
                <div className="p-3.5 bg-white/70 rounded-xl border border-amber-200/80">
                  <strong className="block text-amber-900 mb-1">Report Suspicious Activity:</strong>
                  If you suspect counterfeit documentation or unverified claims, report to <span className="font-semibold">{siteConfig.email}</span>.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
