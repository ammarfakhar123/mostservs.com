import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, ChevronDown, ChevronRight, Phone, Mail, MapPin, MessageSquare } from 'lucide-react';
import { navigationData } from '../../data/navigationData';
import { siteConfig } from '../../data/siteConfig';
import mostLogoImg from '../../assets/images/most-logo.png';

export default function MobileNavDrawer({ isOpen, onClose, onOpenPortal }) {
  const [qualificationsExpanded, setQualificationsExpanded] = useState(true);
  const [activeCategory, setActiveCategory] = useState('hse');
  const [workplaceExpanded, setWorkplaceExpanded] = useState(false);

  // Prevent background scrolling while mobile drawer is open & support Escape key
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const qualificationsNav = navigationData.find((n) => n.label === 'Qualifications');
  const workplaceNav = navigationData.find((n) => n.label === 'Workplace Training');

  return (
    <div className="fixed inset-0 z-50 lg:hidden flex">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="relative ml-auto w-full max-w-sm bg-white h-full shadow-2xl flex flex-col justify-between overflow-y-auto z-10 animate-in slide-in-from-right duration-250">
        <div>
          {/* Header */}
          <div className="p-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
            <img
              src={mostLogoImg}
              alt="MOST Services"
              className="h-9 w-auto object-contain"
            />
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-200"
              aria-label="Close Menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="p-4 space-y-2">
            {/* 1. Qualifications Accordion */}
            <div className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50">
              <button
                type="button"
                onClick={() => setQualificationsExpanded(!qualificationsExpanded)}
                className="w-full p-3.5 flex items-center justify-between text-left font-bold text-sm text-slate-900 hover:text-[#F37021]"
              >
                <span>Qualifications</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    qualificationsExpanded ? 'rotate-180 text-[#F37021]' : 'text-slate-400'
                  }`}
                />
              </button>

              {qualificationsExpanded && qualificationsNav && (
                <div className="p-3 bg-white border-t border-slate-200 space-y-3">
                  {/* Category switcher pills */}
                  <div className="grid grid-cols-2 gap-1.5 pb-2 border-b border-slate-100">
                    {qualificationsNav.categories.map((cat) => (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => setActiveCategory(cat.id)}
                        className={`px-2.5 py-1.5 rounded-lg text-xs font-bold text-center transition-all ${
                          activeCategory === cat.id
                            ? 'bg-[#008AD2] text-white shadow-xs'
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                        }`}
                      >
                        {cat.title.split(' ')[0]}
                      </button>
                    ))}
                  </div>

                  {/* Category Items */}
                  {qualificationsNav.categories
                    .filter((c) => c.id === activeCategory)
                    .map((cat) => (
                      <div key={cat.id} className="space-y-2">
                        <Link
                          to={cat.href}
                          onClick={onClose}
                          className="text-xs font-extrabold text-[#F37021] flex items-center justify-between p-1 hover:underline"
                        >
                          <span>View {cat.title} Category</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </Link>

                        <div className="space-y-1.5 max-h-60 overflow-y-auto pr-1">
                          {cat.items.map((item) => {
                            if (item.hasFlyout && item.flyoutItems) {
                              return item.flyoutItems.map((sub) => (
                                <Link
                                  key={sub.title}
                                  to={sub.href}
                                  onClick={onClose}
                                  className="block p-2 rounded-lg bg-slate-50 hover:bg-[#FFF7ED] text-xs font-medium text-slate-800 hover:text-[#F37021] border border-slate-100"
                                >
                                  <div className="font-bold">{sub.title}</div>
                                  <div className="text-[10px] text-slate-500">{sub.level}</div>
                                </Link>
                              ));
                            }
                            return (
                              <Link
                                key={item.title}
                                to={item.href}
                                onClick={onClose}
                                className="block p-2 rounded-lg bg-slate-50 hover:bg-[#FFF7ED] text-xs font-medium text-slate-800 hover:text-[#F37021] border border-slate-100"
                              >
                                <div className="font-bold line-clamp-1">{item.title}</div>
                                {item.level && (
                                  <div className="text-[10px] text-[#008AD2] font-semibold">{item.level}</div>
                                )}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                </div>
              )}
            </div>

            {/* 2. Workplace Training Accordion */}
            <div className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50">
              <button
                type="button"
                onClick={() => setWorkplaceExpanded(!workplaceExpanded)}
                className="w-full p-3.5 flex items-center justify-between text-left font-bold text-sm text-slate-900 hover:text-[#F37021]"
              >
                <span>Workplace Training</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    workplaceExpanded ? 'rotate-180 text-[#F37021]' : 'text-slate-400'
                  }`}
                />
              </button>
              {workplaceExpanded && workplaceNav && (
                <div className="p-3 bg-white border-t border-slate-200 space-y-1.5">
                  {workplaceNav.items.map((item) => (
                    <Link
                      key={item.title}
                      to={item.href}
                      onClick={onClose}
                      className="block p-2 rounded-lg hover:bg-slate-100 text-xs font-bold text-slate-800 hover:text-[#F37021]"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Other direct links */}
            <Link
              to="/services"
              onClick={onClose}
              className="block p-3 rounded-xl text-sm font-bold text-slate-800 hover:bg-slate-100 hover:text-[#008AD2]"
            >
              Services
            </Link>
            <Link
              to="/tax-secp"
              onClick={onClose}
              className="block p-3 rounded-xl text-sm font-bold text-slate-800 hover:bg-slate-100 hover:text-[#008AD2]"
            >
              Tax &amp; SECP
            </Link>
            <Link
              to="/certificate-verification"
              onClick={onClose}
              className="block p-3 rounded-xl text-sm font-bold text-slate-800 hover:bg-slate-100 hover:text-[#008AD2]"
            >
              Certificate Verification
            </Link>
            <Link
              to="/about-us"
              onClick={onClose}
              className="block p-3 rounded-xl text-sm font-bold text-slate-800 hover:bg-slate-100 hover:text-[#008AD2]"
            >
              About
            </Link>
            <Link
              to="/contact"
              onClick={onClose}
              className="block p-3 rounded-xl text-sm font-bold text-slate-800 hover:bg-slate-100 hover:text-[#008AD2]"
            >
              Contact
            </Link>

            {/* Portal Login Button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  onClose();
                  if (onOpenPortal) onOpenPortal();
                }}
                className="w-full p-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#0098D4] to-[#0F7BFF] text-center shadow-md hover:from-[#0085BA] hover:to-[#0066EB] transition-all"
              >
                Portal Login
              </button>
            </div>
          </div>
        </div>

        {/* Footer Contact Info */}
        <div className="p-4 border-t border-slate-200 bg-slate-50 space-y-2 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <Phone className="w-3.5 h-3.5 text-[#008AD2]" />
            <a href={`tel:${siteConfig.contact.phone}`} className="hover:underline">
              {siteConfig.contact.phoneDisplay}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-3.5 h-3.5 text-[#F37021]" />
            <a href={`mailto:${siteConfig.contact.email}`} className="hover:underline">
              {siteConfig.contact.email}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#F37021]" />
            <span>I-8 Markaz, Islamabad</span>
          </div>
        </div>
      </div>
    </div>
  );
}
