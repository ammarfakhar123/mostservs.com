import React, { useState } from 'react';
import { Menu, Search, PhoneCall, X, ArrowRight } from 'lucide-react';
import { navLinks } from '../data/mockData';

export default function Navbar({ onOpenEnquiry }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[72px] flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <a href="#" className="flex items-center shrink-0 group">
          <img
            src="/images/most-logo.png"
            alt="MOST Services Pvt Ltd."
            className="h-9 sm:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]"
          />
        </a>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-semibold text-slate-600 hover:text-[#0F7BFF] transition-all relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#0F7BFF] hover:after:w-full after:transition-all after:duration-300"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#programmes"
            aria-label="Search courses"
            className="w-9 h-9 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 flex items-center justify-center transition-all hover:scale-105"
            title="Search courses"
          >
            <Search className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            aria-label="Contact support"
            className="w-9 h-9 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 flex items-center justify-center transition-all hover:scale-105"
            title="Call Support"
          >
            <PhoneCall className="w-4 h-4" />
          </a>
          <button
            type="button"
            onClick={() => onOpenEnquiry('Learner Portal Login')}
            className="px-3 py-2 text-sm font-bold text-slate-700 hover:text-slate-950 transition-colors"
          >
            Log in
          </button>
          <button
            type="button"
            onClick={() => onOpenEnquiry('Get Started with MOST Services')}
            className="btn-primary px-4 py-2.5 text-sm inline-flex items-center gap-1.5 cursor-pointer"
          >
            <span>Get Started</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100"
          aria-label="Toggle Menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-5 py-5 space-y-4 shadow-xl animate-fade-in">
          <div className="flex flex-col space-y-2">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="px-3.5 py-2.5 rounded-lg text-sm font-semibold text-slate-700 hover:bg-blue-50 hover:text-[#0F7BFF] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-slate-100 flex items-center gap-3">
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                onOpenEnquiry('Learner Portal Login');
              }}
              className="flex-1 py-2.5 rounded-lg border border-slate-300 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              Log in
            </button>
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                onOpenEnquiry('Get Started with MOST Services');
              }}
              className="flex-1 btn-primary py-2.5 text-sm"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
