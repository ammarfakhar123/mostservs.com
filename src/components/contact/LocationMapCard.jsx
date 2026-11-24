import React from 'react';
import { MapPin, Navigation, Building2, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

export default function LocationMapCard() {
  return (
    <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-xs flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-orange-100 text-[#F37021] flex items-center justify-center">
            <Building2 className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900">Head Office Location</h3>
            <p className="text-xs text-slate-500">I-8 Markaz Islamabad</p>
          </div>
        </div>

        <div className="space-y-3 text-xs sm:text-sm text-slate-700 mb-6">
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <strong className="block text-slate-900 mb-1">Office Address:</strong>
            <span>Suite 30, 3rd Floor, Twin City Plaza, I-8 Markaz, Islamabad 44000, Pakistan</span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <strong className="block text-slate-900 mb-1">Key Landmarks:</strong>
            <span>Located centrally in I-8 Markaz commercial district, easily accessible from Islamabad Expressway and Faizabad Interchange.</span>
          </div>
        </div>

        <div className="space-y-2 text-xs text-slate-600 mb-6">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#0098D4] shrink-0" />
            <span>Dedicated customer parking available at Twin City Plaza</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#0098D4] shrink-0" />
            <span>5 minutes drive from Faizabad Metro Bus Station</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#0098D4] shrink-0" />
            <span>Wheelchair accessible elevator to 3rd Floor</span>
          </div>
        </div>
      </div>

      <div className="pt-4 border-t border-slate-100">
        <a
          href="https://maps.google.com/?q=Twin+City+Plaza+I-8+Markaz+Islamabad"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-900 hover:bg-[#F37021] text-white text-xs font-bold transition-colors"
        >
          <Navigation className="w-4 h-4" />
          <span>Open Directions on Google Maps</span>
        </a>
      </div>
    </div>
  );
}
