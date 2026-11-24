import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Youtube,
  Instagram,
  Facebook,
  CheckCircle2,
} from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';
import mostLogoImg from '../../assets/images/most-logo.png';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
  };

  return (
    <footer className="bg-white text-slate-700 border-t border-slate-200/80 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top 5-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12">
          {/* Column 1: Brand Info & Contact */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-block">
              <img
                src={mostLogoImg}
                alt="MOST Services Pvt Ltd"
                className="h-11 w-auto object-contain"
              />
            </Link>

            <p className="text-sm text-slate-600 leading-relaxed max-w-sm">
              Professional health, safety and environmental training — accredited, expert-led, and delivered your way across 130+ countries.
            </p>

            {/* Contact Details */}
            <div className="space-y-2.5 text-xs sm:text-sm text-slate-600 pt-1">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                <span>Islamabad, Pakistan</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                <a href="tel:+923365555683" className="hover:text-[#0F7BFF] transition-colors">
                  +923365555683
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                <a href="mailto:info@mostservices.com" className="hover:text-[#0F7BFF] transition-colors">
                  info@mostservices.com
                </a>
              </div>
            </div>

            {/* Follow Us Social Icons */}
            <div className="pt-3">
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                FOLLOW US
              </div>
              <div className="flex items-center gap-2">
                {/* LinkedIn */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-8 h-8 rounded-lg border border-slate-300 flex items-center justify-center text-slate-600 hover:text-[#0A66C2] hover:border-[#0A66C2] transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                {/* X */}
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X"
                  className="w-8 h-8 rounded-lg border border-slate-300 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:border-slate-900 transition-colors"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-8 h-8 rounded-lg border border-slate-300 flex items-center justify-center text-slate-600 hover:text-[#FF0000] hover:border-[#FF0000] transition-colors"
                >
                  <Youtube className="w-4 h-4" />
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-8 h-8 rounded-lg border border-slate-300 flex items-center justify-center text-slate-600 hover:text-[#E4405F] hover:border-[#E4405F] transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>

                {/* Facebook */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-8 h-8 rounded-lg border border-slate-300 flex items-center justify-center text-slate-600 hover:text-[#1877F2] hover:border-[#1877F2] transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Qualifications & Courses */}
          <div className="lg:col-span-2 space-y-3">
            <ul className="space-y-2.5 text-xs text-slate-600">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                <Link to="/qualifications/hse" className="hover:text-[#0F7BFF] transition-colors">
                  NEBOSH Gen. Certificate
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                <Link to="/qualifications/hse/othm-level-6" className="hover:text-[#0F7BFF] transition-colors">
                  NEBOSH Diploma
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                <Link to="/qualifications/hse/iosh" className="hover:text-[#0F7BFF] transition-colors">
                  IOSH Managing Safely
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                <Link to="/qualifications/hse/aosh" className="hover:text-[#0F7BFF] transition-colors">
                  ISEP Foundation Cert.
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                <Link to="/qualifications/hse" className="hover:text-[#0F7BFF] transition-colors">
                  Pathways to Net Zero
                </Link>
                <span className="px-2 py-0.5 rounded-full bg-blue-100 text-[#0F7BFF] text-[10px] font-bold">
                  New
                </span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                <Link to="/qualifications/hse" className="hover:text-[#0F7BFF] transition-colors">
                  CDM Awareness
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Delivery Formats */}
          <div className="lg:col-span-2 space-y-3">
            <ul className="space-y-2.5 text-xs text-slate-600">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                <Link to="/qualifications" className="hover:text-[#0F7BFF] transition-colors">
                  Online Self-Paced
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                <Link to="/qualifications" className="hover:text-[#0F7BFF] transition-colors">
                  Virtual Classroom
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                <Link to="/workplace-training/customize-courses" className="hover:text-[#0F7BFF] transition-colors">
                  In-Company Training
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                <Link to="/qualifications" className="hover:text-[#0F7BFF] transition-colors">
                  Blended Learning
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                <Link to="/qualifications" className="hover:text-[#0F7BFF] transition-colors">
                  Distance Learning
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Corporate / Enterprise */}
          <div className="lg:col-span-2 space-y-3">
            <ul className="space-y-2.5 text-xs text-slate-600">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                <Link to="/workplace-training/consultation-services" className="hover:text-[#0F7BFF] transition-colors">
                  Team Training
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                <Link to="/services" className="hover:text-[#0F7BFF] transition-colors">
                  Compliance Suite
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                <Link to="/workplace-training/customize-courses" className="hover:text-[#0F7BFF] transition-colors">
                  Bespoke Programmes
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                <Link to="/workplace-training/customize-courses" className="hover:text-[#0F7BFF] transition-colors">
                  Group Enrolment
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                <Link to="/services" className="hover:text-[#0F7BFF] transition-colors">
                  LMS Integration
                </Link>
                <span className="px-2 py-0.5 rounded-full bg-blue-100 text-[#0F7BFF] text-[10px] font-bold">
                  New
                </span>
              </li>
            </ul>
          </div>

          {/* Column 5: Company */}
          <div className="lg:col-span-2 space-y-3">
            <ul className="space-y-2.5 text-xs text-slate-600">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                <Link to="/about-us" className="hover:text-[#0F7BFF] transition-colors">
                  About MostServs
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                <Link to="/about-us" className="hover:text-[#0F7BFF] transition-colors">
                  Meet the Team
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                <Link to="/about-us" className="hover:text-[#0F7BFF] transition-colors">
                  Accreditations
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                <Link to="/about-us" className="hover:text-[#0F7BFF] transition-colors">
                  Blog &amp; Insights
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                <Link to="/contact" className="hover:text-[#0F7BFF] transition-colors">
                  Careers
                </Link>
                <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[10px] font-bold">
                  Hiring
                </span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                <Link to="/contact" className="hover:text-[#0F7BFF] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Embedded Dark Newsletter Box */}
        <div className="rounded-3xl bg-[#070E1A] p-6 sm:p-8 border border-slate-800 mb-12">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-1">
              <h4 className="text-lg sm:text-xl font-bold text-white">
                Stay ahead of the curve
              </h4>
              <p className="text-xs sm:text-sm text-slate-400">
                Monthly updates on H&amp;S legislation, new courses, and industry insights. No spam.
              </p>
            </div>

            <div className="w-full lg:max-w-md">
              {subscribed ? (
                <div className="flex items-center gap-2 text-[#0098D4] text-xs sm:text-sm font-semibold">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span>Thank you for subscribing to MostServs updates!</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex items-center gap-2">
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-4 py-3 rounded-xl bg-slate-900 border border-slate-700/80 text-white text-xs sm:text-sm placeholder:text-slate-500 focus:outline-hidden focus:border-[#0F7BFF] transition-colors"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#0098D4] to-[#0F7BFF] hover:from-[#0085BA] hover:to-[#0066EB] text-white text-xs sm:text-sm font-bold transition-all hover:scale-102 cursor-pointer shrink-0"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; 2026 MostServices Ltd. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <Link to="/about-us" className="hover:text-slate-900 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/about-us" className="hover:text-slate-900 transition-colors">
              Terms &amp; Conditions
            </Link>
            <Link to="/about-us" className="hover:text-slate-900 transition-colors">
              Cookie Policy
            </Link>
            <Link to="/about-us" className="hover:text-slate-900 transition-colors">
              Accessibility
            </Link>
            <Link to="/qualifications" className="hover:text-slate-900 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
