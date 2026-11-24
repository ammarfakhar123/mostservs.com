import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Check, CheckCircle2, MessageSquare, ShieldCheck } from 'lucide-react';
import toast from 'react-hot-toast';
import RevealOnScroll from './animation/RevealOnScroll';
import MagneticButton from './animation/MagneticButton';
import { siteConfig } from '../data/siteConfig';

export default function ContactCTA({ onOpenEnquiry }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: 'Health & Safety (HSE)',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) return;
    setSubmitted(true);
    toast.success('Callback requested! An advisor will phone you shortly.');
  };

  return (
    <section id="contact" className="relative bg-[#050B14] py-16 lg:py-24 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <RevealOnScroll animation="fade-up">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Heading, Subtitle & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Pill Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#0098D4]" />
              <span>Enrolment open — start any time</span>
            </div>

            {/* H2 Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.12]">
              Ready to advance your career{' '}
              <br className="hidden sm:block" />
              in{' '}
              <span className="bg-gradient-to-r from-[#0098D4] to-[#4B9EFF] bg-clip-text text-transparent">
                health &amp; safety?
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed">
              Join over 140,000 professionals who have transformed their careers with MostServs. Speak with an advisor today — no obligation, just expert guidance.
            </p>

            {/* CTAs Row */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Link
                to="/qualifications"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#0098D4] to-[#0F7BFF] hover:from-[#0085BA] hover:to-[#0066EB] text-white text-sm font-bold transition-all hover:scale-102 inline-flex items-center gap-2 group"
              >
                <span>Browse All Courses</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <button
                type="button"
                onClick={() => onOpenEnquiry && onOpenEnquiry('Speak to an Advisor')}
                className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-sm font-bold border border-white/15 transition-all inline-flex items-center gap-2 cursor-pointer"
              >
                <Phone className="w-4 h-4 text-[#0098D4]" />
                <span>Speak to an Advisor</span>
              </button>
            </div>

            {/* Trust bullet items (Logo Blue Checks, No Green) */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-3 text-xs text-slate-300">
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#0098D4] stroke-[2.5]" />
                <span>No commitment required</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#0098D4] stroke-[2.5]" />
                <span>Flexible payment options</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#0098D4] stroke-[2.5]" />
                <span>Funded learning available</span>
              </div>
            </div>

            {/* Enhanced Value Strip */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-4 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#0F7BFF]" />
                <span>Islamabad HQ: Suite 30, Twin City Plaza, I-8 Markaz</span>
              </div>
              <a
                href={siteConfig.getWhatsAppInquiryLink('Homepage Consultation CTA')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#0098D4] hover:text-[#4B9EFF] font-semibold transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-current" />
                <span>WhatsApp: {siteConfig.whatsAppPrimaryDisplay}</span>
              </a>
            </div>
          </div>

          {/* Right Column: High-End Advisor Card (No Heavy Shadow) */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-[#070E1A] p-7 sm:p-9 border border-white/10">
              <div className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400 mb-1">
                TALK TO OUR TEAM
              </div>
              <h3 className="text-2xl font-extrabold text-white mb-2">
                Get expert advice
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6 leading-relaxed">
                Our qualified training advisors will help you find the right course for your goals and budget.
              </p>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-blue-950/60 border border-blue-600/40 text-center space-y-3 animate-fade-in">
                  <CheckCircle2 className="w-10 h-10 text-[#0098D4] mx-auto" />
                  <h4 className="text-base font-bold text-white">Callback Requested</h4>
                  <p className="text-xs text-blue-200">
                    Thank you, <span className="font-semibold text-white">{formData.name}</span>. An admissions advisor will contact you within 1 business hour.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', course: 'Health & Safety (HSE)' });
                    }}
                    className="mt-2 px-4 py-2 rounded-xl bg-[#0F7BFF] text-white text-xs font-semibold hover:bg-[#0066EB] cursor-pointer"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#050B14] border border-white/10 text-white text-xs sm:text-sm placeholder:text-slate-500 focus:outline-hidden focus:border-[#0F7BFF] transition-colors"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      required
                      placeholder="Work email address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#050B14] border border-white/10 text-white text-xs sm:text-sm placeholder:text-slate-500 focus:outline-hidden focus:border-[#0F7BFF] transition-colors"
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      placeholder="Phone number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#050B14] border border-white/10 text-white text-xs sm:text-sm placeholder:text-slate-500 focus:outline-hidden focus:border-[#0F7BFF] transition-colors"
                    />
                  </div>

                  <div>
                    <select
                      value={formData.course}
                      onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#050B14] border border-white/10 text-slate-300 text-xs sm:text-sm focus:outline-hidden focus:border-[#0F7BFF] transition-colors"
                    >
                      <option value="Health & Safety (HSE)">I&apos;m interested in Health &amp; Safety (HSE)</option>
                      <option value="OTHM Level 6 / Level 7">OTHM Level 6 &amp; Level 7 Diplomas</option>
                      <option value="IOSH Managing Safely">IOSH Managing Safely</option>
                      <option value="Artificial Intelligence">Artificial Intelligence &amp; Data Science</option>
                      <option value="Cyber Security">Cyber Security Qualifications</option>
                      <option value="In-Company Corporate Training">In-Company Corporate Training</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#0098D4] to-[#0F7BFF] hover:from-[#0085BA] hover:to-[#0066EB] text-white text-sm font-bold transition-all hover:scale-101 cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Request a Callback</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <p className="text-[11px] text-slate-500 text-center pt-1">
                    We&apos;ll respond within 1 business hour · No spam, ever
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
