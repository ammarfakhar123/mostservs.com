import React, { useState } from 'react';
import { Send, CheckCircle2, User, Mail, Phone, MessageSquare, HelpCircle } from 'lucide-react';
import toast from 'react-hot-toast';
import { siteConfig } from '../../data/siteConfig';

export default function InteractiveContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'HSE Qualifications',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success('Inquiry submitted! Our admissions desk will reach out shortly.');
  };

  return (
    <div id="contact-form" className="bg-slate-50 rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-xs scroll-mt-24">
      <div className="mb-8">
        <span className="text-xs font-bold uppercase tracking-wider text-[#F37021]">
          Send a Message
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
          Direct Online Inquiry Form
        </h2>
        <p className="mt-2 text-sm text-slate-600">
          Complete the form below and an advisor from our Islamabad desk will respond with course specifications, syllabi, or corporate proposals.
        </p>
      </div>

      {submitted ? (
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8 text-center text-slate-900 animate-fade-in">
          <div className="w-14 h-14 bg-[#0098D4]/15 text-[#0098D4] rounded-2xl flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold mb-2">Message Sent Successfully</h3>
          <p className="text-sm text-slate-600 max-w-md mx-auto mb-6 leading-relaxed">
            Thank you, <span className="font-semibold">{formData.name}</span>. Your inquiry regarding <span className="font-semibold">{formData.subject}</span> has been assigned to our admissions team. We will contact you at {formData.email || formData.phone}.
          </p>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="px-5 py-2.5 rounded-xl bg-[#0098D4] text-white text-xs font-bold hover:bg-[#0085BA] transition-colors cursor-pointer"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Your Full Name *
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  type="text"
                  required
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 focus:outline-hidden focus:border-[#F37021] bg-white text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Email Address *
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  type="email"
                  required
                  placeholder="name@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 focus:outline-hidden focus:border-[#F37021] bg-white text-sm"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Phone Number / WhatsApp *
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  type="tel"
                  required
                  placeholder="+92 3XX XXXXXXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 focus:outline-hidden focus:border-[#F37021] bg-white text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Subject / Department
              </label>
              <select
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-hidden focus:border-[#F37021] bg-white text-sm"
              >
                <option value="HSE Qualifications">HSE Qualifications (IOSH, OTHM, AOSH, ICTQual)</option>
                <option value="Cyber Security Diplomas">Cyber Security Diplomas (OTHM L4, L5)</option>
                <option value="Information Technology">Information Technology (OTHM L3-L6)</option>
                <option value="Artificial Intelligence">Artificial Intelligence (OTHM Level 7)</option>
                <option value="Corporate Workplace Training">Corporate Workplace Training</option>
                <option value="SECP & FBR Tax Advisory">SECP & FBR Tax Advisory</option>
                <option value="Certificate Verification">Certificate Verification</option>
                <option value="General Information">General Information</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Your Message or Specific Questions *
            </label>
            <textarea
              rows={4}
              required
              placeholder="Please describe your qualification goals, preferred study mode, or corporate training requirements..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-hidden focus:border-[#F37021] bg-white text-sm"
            />
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-500">
              Response within 24 business hours • Strict data privacy
            </span>

            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#F37021] hover:bg-[#E05E10] text-white font-bold text-sm shadow-md transition-all cursor-pointer"
            >
              <span>Send Message</span>
              <Send className="w-4 h-4" />
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
