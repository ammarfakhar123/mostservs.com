import React, { useState } from 'react';
import { Send, CheckCircle2, Building, Mail, Phone, User, Users, MessageSquare } from 'lucide-react';
import toast from 'react-hot-toast';
import { siteConfig } from '../../data/siteConfig';

export default function WorkplaceInquiryForm({ preselectedTopic }) {
  const [formData, setFormData] = useState({
    organizationName: '',
    contactPerson: '',
    designation: '',
    email: '',
    phone: '',
    teamSize: '5-15 learners',
    trainingArea: preselectedTopic || 'HSE & Occupational Safety',
    deliveryMode: 'On-Site (At Client Location)',
    requirements: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success('Corporate inquiry received! Proposal will be sent within 24 business hours.');
  };

  return (
    <section id="corporate-form" className="py-16 bg-white border-b border-slate-200 scroll-mt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F37021]">
              Customized Proposal
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Request a Tailored Corporate Training Proposal
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Our enterprise solutions team will review your requirements and provide a structured proposal within 24 business hours.
            </p>
          </div>

          {submitted ? (
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8 text-center text-slate-900 animate-fade-in">
              <div className="w-14 h-14 bg-[#0098D4]/15 text-[#0098D4] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Corporate Request Received</h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto mb-6 leading-relaxed">
                Thank you, <span className="font-semibold">{formData.contactPerson}</span>. Our enterprise accounts director will contact <span className="font-semibold">{formData.organizationName}</span> at {formData.email || formData.phone} with course syllabi and cohort pricing.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="px-5 py-2.5 rounded-xl bg-[#0098D4] text-white text-xs font-bold hover:bg-[#0085BA] transition-colors cursor-pointer"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Organization / Company Name *
                  </label>
                  <div className="relative">
                    <Building className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Fauji Fertilizer, PetroChina, Descon"
                      value={formData.organizationName}
                      onChange={(e) => setFormData({ ...formData, organizationName: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 focus:outline-hidden focus:border-[#F37021] focus:ring-2 focus:ring-[#F37021]/20 bg-white text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Contact Person Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      required
                      placeholder="Full Name"
                      value={formData.contactPerson}
                      onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 focus:outline-hidden focus:border-[#F37021] focus:ring-2 focus:ring-[#F37021]/20 bg-white text-sm"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Official Corporate Email *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 focus:outline-hidden focus:border-[#F37021] focus:ring-2 focus:ring-[#F37021]/20 bg-white text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Contact Phone / WhatsApp *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="tel"
                      required
                      placeholder="+92 300 1234567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 focus:outline-hidden focus:border-[#F37021] focus:ring-2 focus:ring-[#F37021]/20 bg-white text-sm"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Primary Training Area
                  </label>
                  <select
                    value={formData.trainingArea}
                    onChange={(e) => setFormData({ ...formData, trainingArea: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-hidden focus:border-[#F37021] bg-white text-sm"
                  >
                    <option value="HSE & Occupational Safety">HSE & Occupational Safety</option>
                    <option value="Cyber Security Defense">Cyber Security Defense</option>
                    <option value="Information Technology">Information Technology</option>
                    <option value="Artificial Intelligence">Artificial Intelligence</option>
                    <option value="Corporate Tax & SECP Compliance">Corporate Tax & SECP</option>
                    <option value="Executive Management">Executive Management</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Expected Cohort Size
                  </label>
                  <select
                    value={formData.teamSize}
                    onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-hidden focus:border-[#F37021] bg-white text-sm"
                  >
                    <option value="1-5 learners">1 - 5 learners</option>
                    <option value="5-15 learners">5 - 15 learners</option>
                    <option value="15-30 learners">15 - 30 learners</option>
                    <option value="30+ enterprise">30+ enterprise cohort</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Preferred Delivery Format
                  </label>
                  <select
                    value={formData.deliveryMode}
                    onChange={(e) => setFormData({ ...formData, deliveryMode: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-hidden focus:border-[#F37021] bg-white text-sm"
                  >
                    <option value="On-Site (At Client Location)">On-Site (At Client Location)</option>
                    <option value="Live Virtual Classroom">Live Virtual Classroom</option>
                    <option value="MOST Services Islamabad Venue">MOST Islamabad Venue</option>
                    <option value="Hybrid / Blended">Hybrid / Blended</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Specific Learning Objectives or Workplace Context
                </label>
                <textarea
                  rows={4}
                  placeholder="Outline key workplace hazards, departmental requirements, or target timeline..."
                  value={formData.requirements}
                  onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-hidden focus:border-[#F37021] bg-white text-sm"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-slate-500">
                  Direct inquiries: <span className="font-semibold text-slate-700">{siteConfig.email}</span> | <span className="font-semibold text-slate-700">{siteConfig.phoneDisplay}</span>
                </p>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#F37021] hover:bg-[#E05E10] text-white font-bold text-sm shadow-md transition-all cursor-pointer"
                >
                  <span>Submit Proposal Request</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
