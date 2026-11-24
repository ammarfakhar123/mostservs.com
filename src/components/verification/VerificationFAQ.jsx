import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';

const verificationFaqs = [
  {
    q: 'How long does centre verification take?',
    a: 'Verification requests submitted with accurate registration numbers are typically confirmed within 48 to 72 business hours. Urgent background screening inquiries for employers can be expedited.'
  },
  {
    q: 'Can employers request an official verification letter directly from MOST Services?',
    a: 'Yes. An authorized verification letter stamped and signed by the academic registrar can be issued directly to verified corporate HR departments and background screening agencies.'
  },
  {
    q: 'What should I do if my certificate cannot be found online?',
    a: 'If a newly completed qualification does not yet appear on the awarding body portal, it may still be undergoing the standard external quality assurance (EQA) moderation cycle. Contact our Islamabad office with your cohort details.'
  },
  {
    q: 'Are OTHM qualifications accepted for UK university master’s top-ups?',
    a: 'Yes. OTHM Level 7 postgraduate diplomas carry 120 UK credits and are recognized by universities in the UK and worldwide for direct entry into the final dissertation / project stage of MBA and MSc degrees.'
  }
];

export default function VerificationFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#008AD2]">
            Help & Guidance
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
            Verification FAQs
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Answers regarding transcript validation, employer requests, and turnaround timelines.
          </p>
        </div>

        <div className="space-y-3">
          {verificationFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`bg-white rounded-xl border transition-all overflow-hidden ${
                  isOpen ? 'border-[#F37021] shadow-xs' : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full text-left px-5 py-4 sm:px-6 sm:py-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-hidden"
                >
                  <span className="text-base font-bold text-slate-900 leading-snug">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform ${
                      isOpen ? 'rotate-180 text-[#F37021]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
