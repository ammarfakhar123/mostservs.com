import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

export default function DirectWhatsAppCard() {
  return (
    <div className="bg-gradient-to-br from-slate-900 to-[#0A1628] rounded-3xl p-8 text-white relative overflow-hidden border border-slate-800 shadow-xl">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#25D366]/10 rounded-full blur-3xl pointer-events-none" />

      <span className="text-xs uppercase tracking-wider font-bold text-[#F37021] block mb-2">
        Instant Admissions Helpdesk
      </span>
      <h3 className="text-2xl font-bold text-white mb-4">
        Connect Directly via WhatsApp
      </h3>
      <p className="text-sm text-slate-300 leading-relaxed mb-6">
        Need rapid answers on entry requirements, fee schedules, or syllabus details? Our academic advisors are online to assist.
      </p>

      <div className="space-y-3.5 mb-8">
        <a
          href="https://wa.me/923365555683?text=Hello%20MOST%20Services,%20I%20would%20like%20to%20enquire%20about%20admissions."
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-between group transition-all"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#25D366]/20 text-[#25D366] flex items-center justify-center font-bold text-sm">
              <MessageCircle className="w-5 h-5 fill-current" />
            </div>
            <div>
              <div className="text-xs text-slate-400">Admissions & Student Advisory</div>
              <div className="text-sm font-bold text-white">0336 5555683</div>
            </div>
          </div>
          <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
        </a>

        <a
          href="https://wa.me/923365555628?text=Hello%20MOST%20Services,%20I%20would%20like%20to%20enquire%20about%20corporate%20training%20or%20SECP%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-between group transition-all"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#008AD2]/20 text-[#008AD2] flex items-center justify-center font-bold text-sm">
              <MessageCircle className="w-5 h-5 fill-current" />
            </div>
            <div>
              <div className="text-xs text-slate-400">Corporate & SECP Advisory</div>
              <div className="text-sm font-bold text-white">0336 5555628</div>
            </div>
          </div>
          <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
        </a>
      </div>

      <div className="pt-4 border-t border-slate-800 text-xs text-slate-400">
        Office Landline: <strong className="text-white">{siteConfig.phoneDisplay}</strong>
      </div>
    </div>
  );
}
