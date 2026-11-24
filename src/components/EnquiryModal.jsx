import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import toast from 'react-hot-toast';

export default function EnquiryModal({ topic, onClose }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [sent, setSent] = useState(false);

  if (!topic) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setSent(true);
    toast.success(`Inquiry received for ${topic}! An academic advisor will reach out shortly.`, {
      id: 'enquiry-success',
    });
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md dark-card p-6 sm:p-7 relative border border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#0098D4]">
          MOST SERVICES PVT LTD
        </span>
        <h3 className="mt-1 text-xl font-bold text-white pr-6">{topic}</h3>

        {sent ? (
          <div className="mt-6 py-4 text-center space-y-3 animate-fade-in">
            <CheckCircle2 className="w-10 h-10 text-[#0098D4] mx-auto" />
            <p className="text-sm text-slate-200">
              Thanks, <span className="font-semibold text-white">{name}</span>! Your
              request for <span className="text-[#4B9EFF]">{topic}</span> has been
              received.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="btn-primary px-5 py-2.5 text-sm cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-5 space-y-3.5">
            <p className="text-xs text-slate-400">
              Enter your details and our training team will send you syllabus info,
              upcoming dates, and pricing.
            </p>
            <input
              type="text"
              required
              placeholder="Your Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-lg bg-[#0F1A2E] border border-white/10 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#0F7BFF] focus:ring-1 focus:ring-[#0F7BFF] transition-all"
            />
            <input
              type="email"
              required
              placeholder="Work or Personal Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-lg bg-[#0F1A2E] border border-white/10 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#0F7BFF] focus:ring-1 focus:ring-[#0F7BFF] transition-all"
            />
            <textarea
              rows={3}
              placeholder="Any specific questions or team size?"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-lg bg-[#0F1A2E] border border-white/10 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#0F7BFF] focus:ring-1 focus:ring-[#0F7BFF] transition-all resize-none"
            />
            <button
              type="submit"
              className="w-full btn-primary py-2.5 text-sm inline-flex items-center justify-center gap-1.5 group cursor-pointer"
            >
              <span>Submit Request</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
