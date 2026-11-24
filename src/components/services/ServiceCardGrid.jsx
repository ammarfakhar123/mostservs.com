import React from 'react';
import { Award, Building2, HardHat, ShieldCheck, Laptop, FileSpreadsheet, ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const corporateServices = [
  {
    icon: Award,
    title: 'Regulated UK & International Qualifications',
    tag: 'Academic & Professional',
    description: 'Accredited diplomas and benchmark certificates across Health & Safety, Cyber Security, Artificial Intelligence, and Information Technology.',
    link: '/qualifications',
    linkText: 'Explore Qualifications',
    features: [
      'Ofqual-regulated UK awarding bodies',
      'Flexible online, virtual, and distance study',
      'Direct pathway to UK university top-up degrees'
    ]
  },
  {
    icon: Building2,
    title: 'Workplace Training & Cohort Upskilling',
    tag: 'Enterprise Development',
    description: 'Customized workforce learning programs engineered to close organizational skill gaps and maintain operational excellence.',
    link: '/workplace-training/customized-courses',
    linkText: 'Workplace Training Details',
    features: [
      'On-premise or live virtual delivery',
      'Tailored case studies relevant to your industry',
      'Management dashboards and progress reporting'
    ]
  },
  {
    icon: HardHat,
    title: 'HSE Risk Audits & Workplace Safety Audits',
    tag: 'Safety & Compliance',
    description: 'Independent health, safety, and environmental gap assessments, workplace hazard evaluations, and incident-reduction advisory.',
    link: '/workplace-training/consultation-services',
    linkText: 'Consultation Services',
    features: [
      'Comprehensive on-site hazard inspections',
      'Legal compliance gap analysis',
      'PPE and operational safety protocols'
    ]
  },
  {
    icon: Laptop,
    title: 'Enterprise Cyber Security & IT Enablement',
    tag: 'Digital Infrastructure',
    description: 'Corporate cyber hygiene evaluations, defensive security architectures, and technical staff capability building.',
    link: '/qualifications/cyber-security',
    linkText: 'Cyber Security Pathways',
    features: [
      'Network defense & incident response training',
      'Staff phishing awareness & risk assessments',
      'Governance and cloud infrastructure alignment'
    ]
  },
  {
    icon: FileSpreadsheet,
    title: 'Corporate SECP Filings & Company Incorporation',
    tag: 'Corporate Legal',
    description: 'End-to-end statutory corporate advisory for private limited companies, annual return submissions, and regulatory compliance.',
    link: '/tax-secp',
    linkText: 'SECP Advisory Services',
    features: [
      'PVT LTD and Single Member Company (SMC) registration',
      'Statutory Form 29, Form A, and Annual Accounts',
      'Director changes & share capital restructuring'
    ]
  },
  {
    icon: ShieldCheck,
    title: 'FBR Tax Advisory & Regulatory Compliance',
    tag: 'Taxation & Fiscal',
    description: 'Professional tax planning, NTN registration, Sales Tax (STRN) enrollment, and periodic monthly/annual withholding tax return filings.',
    link: '/tax-secp',
    linkText: 'Taxation Services',
    features: [
      'Corporate & individual NTN registrations',
      'Sales tax return preparation and filing',
      'Withholding tax auditing and exemption requests'
    ]
  }
];

export default function ServiceCardGrid() {
  return (
    <section id="services-list" className="py-16 bg-slate-50 border-b border-slate-200 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#F37021]">
            Our Capabilities
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
            Enterprise Solutions for Modern Organizations
          </h2>
          <p className="mt-2 text-base text-slate-600">
            Delivering measurable value through education, safety compliance, digital infrastructure, and statutory corporate advisory.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {corporateServices.map((svc, idx) => {
            const Icon = svc.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 hover:border-[#F37021]/60 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between p-7 group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#FFF7ED] text-[#F37021] flex items-center justify-center border border-[#FED7AA]/60 group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                      {svc.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#F37021] transition-colors mb-2 leading-snug">
                    {svc.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {svc.description}
                  </p>

                  <ul className="space-y-2 border-t border-slate-100 pt-4 text-xs text-slate-700 mb-6">
                    {svc.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#0098D4] mt-0.5 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <Link
                    to={svc.link}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-900 group-hover:bg-[#F37021] text-white text-xs font-bold transition-colors"
                  >
                    <span>{svc.linkText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
