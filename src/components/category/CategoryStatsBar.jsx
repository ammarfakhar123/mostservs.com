import React from 'react';
import { Award, ShieldCheck, CheckCircle2, Clock } from 'lucide-react';

export default function CategoryStatsBar() {
  return (
    <div className="bg-[#0B0D16] text-white py-3.5 border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center md:text-left items-center">
          <div className="flex items-center justify-center md:justify-start gap-2.5">
            <CheckCircle2 className="w-5 h-5 text-[#0098D4] shrink-0" />
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-200">
              98.4% PASS RATE
            </span>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-2.5">
            <ShieldCheck className="w-5 h-5 text-[#0F7BFF] shrink-0" />
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-200">
              NO HIDDEN FEES
            </span>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-2.5">
            <Award className="w-5 h-5 text-[#F37021] shrink-0" />
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-200">
              UK OFQUAL REGULATED
            </span>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-2.5">
            <Clock className="w-5 h-5 text-[#0098D4] shrink-0" />
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-200">
              DEDICATED TUTOR SUPPORT
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
