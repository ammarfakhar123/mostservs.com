import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';

const workplaceFaqData = [
  {
    category: 'Corporate Delivery & Formats',
    questions: [
      {
        q: 'Can training sessions be conducted at our own office or factory premises?',
        a: 'Yes. Our instructors deliver in-house cohorts across all major industrial hubs in Pakistan, including Islamabad/Rawalpindi, Lahore, Karachi, Peshawar, and regional field sites.'
      },
      {
        q: 'What is the minimum cohort size required for customized corporate training?',
        a: 'In-house customized sessions typically run for groups of 5 to 30 learners per cohort, allowing practical interactive drills and personalized mentoring.'
      },
      {
        q: 'Can we combine online asynchronous modules with in-person workshops?',
        a: 'Yes. Our blended training models allow staff to complete theoretical background reading online, followed by concentrated weekend or weekday practical workshops.'
      }
    ]
  },
  {
    category: 'Curriculum Customization & Sector Alignment',
    questions: [
      {
        q: 'Can our company’s internal safety operating procedures (SOPs) be integrated into the syllabus?',
        a: 'Yes. During our initial curriculum discovery stage, our lead consultants review your organization’s risk assessments and SOPs to build customized case studies.'
      },
      {
        q: 'Are certificates issued to participating employees accredited?',
        a: 'Depending on the programme chosen, participants can receive regulated UK awarding body diplomas (e.g. OTHM, IOSH) or MOST Services Pvt Ltd Corporate Certificates of Completion.'
      }
    ]
  },
  {
    category: 'Commercial Invoicing & Terms',
    questions: [
      {
        q: 'How does corporate invoicing and payment work for registered companies?',
        a: 'We issue official corporate tax invoices compliant with FBR requirements, including NTN and STRN details, with standard milestone payment terms.'
      },
      {
        q: 'How do we obtain an official formal quotation or proposal?',
        a: 'You can submit the corporate proposal request form on this page or email info@mostservs.com with participant counts and training requirements.'
      }
    ]
  }
];

export default function WorkplaceFAQsList() {
  const [activeTab, setActiveTab] = useState(0);
  const [openQuestion, setOpenQuestion] = useState(0);

  const currentCategory = workplaceFaqData[activeTab];

  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#F37021]">
            Corporate Knowledge Base
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
            Workplace Training FAQ
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Answers to common questions regarding enterprise delivery, cohort sizes, and corporate billing.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {workplaceFaqData.map((cat, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => {
                setActiveTab(idx);
                setOpenQuestion(0);
              }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === idx
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Questions Accordion */}
        <div className="space-y-3">
          {currentCategory.questions.map((item, qIdx) => {
            const isOpen = openQuestion === qIdx;
            return (
              <div
                key={qIdx}
                className={`bg-white rounded-xl border transition-all overflow-hidden ${
                  isOpen ? 'border-[#F37021] shadow-xs' : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenQuestion(isOpen ? -1 : qIdx)}
                  className="w-full text-left px-5 py-4 sm:px-6 sm:py-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-hidden"
                >
                  <span className="text-base font-bold text-slate-900 leading-snug">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform ${
                      isOpen ? 'rotate-180 text-[#F37021]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-3">
                    {item.a}
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
