import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

export default function TopContactBar() {
  return (
    <div className="bg-[#070E1A] text-slate-300 text-xs border-b border-white/[0.08] hidden lg:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-10 flex items-center justify-between">
        {/* Left: Location & Hours */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#F37021] shrink-0" />
            <span className="text-slate-300">{siteConfig.contact.address.line2}, {siteConfig.contact.address.city}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-[#008AD2] shrink-0" />
            <span className="text-slate-400">{siteConfig.contact.businessHours.full}</span>
          </div>
        </div>

        {/* Right: Phone, Email, WhatsApp */}
        <div className="flex items-center gap-6">
          <a
            href={`tel:${siteConfig.contact.phone}`}
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#008AD2]" />
            <span>{siteConfig.contact.phoneDisplay}</span>
          </a>
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-[#F37021]" />
            <span>{siteConfig.contact.email}</span>
          </a>
          <a
            href={`https://wa.me/${siteConfig.contact.whatsAppPrimary}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-500/15 border border-blue-500/30 text-[#0098D4] hover:bg-blue-500/25 transition-all text-[11px] font-semibold"
          >
            <MessageSquare className="w-3 h-3" />
            <span>WhatsApp: {siteConfig.contact.whatsAppPrimaryDisplay}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
