import React, { useState } from 'react';
import { ShieldCheck, Search, CheckCircle2, User, Hash, Mail, Building, FileText } from 'lucide-react';
import toast from 'react-hot-toast';
import { siteConfig } from '../../data/siteConfig';

export default function VerificationForm() {
  const [formData, setFormData] = useState({
    candidateName: '',
    registrationId: '',
    awardingBody: 'OTHM Qualifications',
    courseName: '',
    requestorName: '',
    requestorEmail: '',
    requestorType: 'Employer / Background Check Agency',
    additionalNotes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success('Verification request logged with Academic Verification Registry.');
  };

  return (
    <section id="verify-form" className="py-16 bg-white border-b border-slate-200 scroll-mt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-xs">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#008AD2]">
              Centre Records Check
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Centre Verification Request Form
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Submit learner registration details for manual verification against our approved centre cohort registry. Official written verification letters are dispatched to accredited requestors within 2-3 business days.
            </p>
          </div>

          {submitted ? (
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8 text-center text-slate-900 animate-fade-in">
              <div className="w-14 h-14 bg-[#0098D4]/15 text-[#0098D4] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Verification Query Logged</h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto mb-6 leading-relaxed">
                Thank you, <span className="font-semibold">{formData.requestorName}</span>. Your verification request for candidate <span className="font-semibold">{formData.candidateName}</span> (ID: <span className="font-semibold">{formData.registrationId}</span>) has been routed to the MOST Services Academic Verification Registry in Islamabad. A response will be sent to <span className="font-semibold">{formData.requestorEmail}</span>.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="px-5 py-2.5 rounded-xl bg-[#0098D4] text-white text-xs font-bold hover:bg-[#0085BA] transition-colors cursor-pointer"
              >
                Submit Another Verification Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Candidate Full Name (As on Certificate) *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Muhammad Usman Khan"
                      value={formData.candidateName}
                      onChange={(e) => setFormData({ ...formData, candidateName: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 focus:outline-hidden focus:border-[#F37021] bg-white text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Student Roll No / Registration ID *
                  </label>
                  <div className="relative">
                    <Hash className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. OTHM-2024-XXXX / MOST-REG-XXXX"
                      value={formData.registrationId}
                      onChange={(e) => setFormData({ ...formData, registrationId: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 focus:outline-hidden focus:border-[#F37021] bg-white text-sm"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Awarding Body / Certification Type *
                  </label>
                  <select
                    value={formData.awardingBody}
                    onChange={(e) => setFormData({ ...formData, awardingBody: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-hidden focus:border-[#F37021] bg-white text-sm"
                  >
                    <option value="OTHM Qualifications">OTHM Qualifications (UK)</option>
                    <option value="IOSH (Managing Safely)">IOSH (Institution of Occupational Safety)</option>
                    <option value="AOSH Awarding Body">AOSH Awarding Body</option>
                    <option value="ICTQual AB">ICTQual AB</option>
                    <option value="MOST Corporate Certificate">MOST Corporate Training Certificate</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Course / Qualification Title *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. OTHM Level 6 Diploma in OHS"
                    value={formData.courseName}
                    onChange={(e) => setFormData({ ...formData, courseName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-hidden focus:border-[#F37021] bg-white text-sm"
                  >
                  </input>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2 border-t border-slate-200">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Requestor Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={formData.requestorName}
                    onChange={(e) => setFormData({ ...formData, requestorName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-hidden focus:border-[#F37021] bg-white text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Requestor Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="hr@organization.com"
                    value={formData.requestorEmail}
                    onChange={(e) => setFormData({ ...formData, requestorEmail: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-hidden focus:border-[#F37021] bg-white text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Requestor Affiliation
                  </label>
                  <select
                    value={formData.requestorType}
                    onChange={(e) => setFormData({ ...formData, requestorType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-hidden focus:border-[#F37021] bg-white text-sm"
                  >
                    <option value="Employer / Background Check Agency">Employer / Background Agency</option>
                    <option value="Academic Institute / University">University Admissions Office</option>
                    <option value="Student / Candidate">Candidate Themselves</option>
                    <option value="Embassy / Visa Authority">Immigration / Visa Authority</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Additional Context or Scan Upload Notice
                </label>
                <textarea
                  rows={3}
                  placeholder="Include completion year, certificate serial number, or specific verification requirements..."
                  value={formData.additionalNotes}
                  onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-hidden focus:border-[#F37021] bg-white text-sm"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-slate-500">
                  Direct Registry Desk: <span className="font-semibold text-slate-700">{siteConfig.email}</span>
                </p>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#F37021] hover:bg-[#E05E10] text-white font-bold text-sm shadow-md transition-all cursor-pointer"
                >
                  <Search className="w-4 h-4" />
                  <span>Submit Verification Query</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
