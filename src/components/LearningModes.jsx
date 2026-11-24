import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Monitor, Video, Building2, Check, ArrowRight, Users } from 'lucide-react';
import RevealOnScroll from './animation/RevealOnScroll';

import onlineLearningImg from '../assets/images/learning-online.png';
import virtualSeminarImg from '../assets/images/hero-seminar.png';
import companyCollabImg from '../assets/images/hero-collaboration.png';

const modesData = {
  online: {
    id: 'online',
    tabLabel: 'Online',
    tabIcon: Monitor,
    eyebrow: 'STUDY ON YOUR SCHEDULE, FROM ANY DEVICE',
    title: 'Online Self-Paced',
    description:
      'Access our full course library 24/7 with immersive digital content, adaptive assessments, and AI-driven progress tracking. Study at home, in the office, or anywhere with an internet connection.',
    learnersBadge: '70,000+ online learners',
    image: onlineLearningImg,
    features: [
      'Lifetime access to all course materials',
      'Interactive simulations & scenario modules',
      'Dedicated tutor support via live chat',
      'iOS & Android mobile app included',
      'Instant digital certification on completion',
    ],
    buttonText: 'Explore Online Self-Paced',
    link: '/qualifications',
  },
  virtual: {
    id: 'virtual',
    tabLabel: 'Virtual',
    tabIcon: Video,
    eyebrow: 'REAL-TIME TUTOR-LED INTERACTIVE SESSIONS',
    title: 'Virtual Classroom',
    description:
      'Live interactive video lectures delivered by chartered UK health and safety tutors. Engage in real-time group workshops, ask questions live, and collaborate with international peers without travel costs.',
    learnersBadge: '45,000+ virtual attendees',
    image: virtualSeminarImg,
    features: [
      'Scheduled live weekend and evening cohorts',
      'Direct Q&A with chartered safety practitioners',
      'Full HD session recordings with downloadable notes',
      'Peer group case study breakout discussions',
      'Mock exam coaching & personalised feedback',
    ],
    buttonText: 'Explore Virtual Classroom',
    link: '/qualifications',
  },
  'in-company': {
    id: 'in-company',
    tabLabel: 'In-Company',
    tabIcon: Building2,
    eyebrow: 'BESPOKE ON-SITE CORPORATE COHORTS',
    title: 'In-Company Training',
    description:
      'Tailored health and safety training delivered directly at your corporate headquarters, plant, or construction site. We map course content specifically to your industry hazards, operational protocols, and shift rosters.',
    learnersBadge: '500+ corporate organisations',
    image: companyCollabImg,
    features: [
      'Site-specific hazard integration into course syllabus',
      'Flexible scheduling to fit industrial shift rotations',
      'Dedicated enterprise account manager & reporting desk',
      'Significant volume discounts for cohorts of 4+ learners',
      'Post-training safety audit and compliance review',
    ],
    buttonText: 'Explore In-Company Training',
    link: '/workplace-training/customize-courses',
  },
};

export default function LearningModes({ onOpenEnquiry }) {
  const [activeTab, setActiveTab] = useState('online');
  const current = modesData[activeTab];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll animation="fade-up">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#0098D4]">
            FLEXIBLE LEARNING FORMATS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#070E1A]">
            Choose How You Learn
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Three accredited delivery formats — each designed to fit your schedule, team size, and learning objectives.
          </p>
        </div>

        {/* 3 Pill Toggles */}
        <div className="mt-8 flex items-center justify-center gap-3">
          {Object.values(modesData).map((mode) => {
            const Icon = mode.tabIcon;
            const isActive = activeTab === mode.id;
            return (
              <button
                key={mode.id}
                type="button"
                onClick={() => setActiveTab(mode.id)}
                className={`px-6 py-2.5 rounded-xl text-sm font-bold inline-flex items-center gap-2 transition-all cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-[#0098D4] to-[#0F7BFF] text-white scale-102'
                    : 'bg-[#0B1324] hover:bg-[#131F38] text-slate-300 hover:text-white'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{mode.tabLabel}</span>
              </button>
            );
          })}
        </div>

        {/* Large Rounded Bento Card */}
        <div className="mt-10 rounded-3xl overflow-hidden bg-[#070E1A] border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Left Photo Side with Badge */}
            <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-[460px] overflow-hidden group">
              <img
                src={current.image}
                alt={current.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover opacity-80"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(90deg, rgba(7,14,26,0.1) 0%, rgba(7,14,26,0.85) 90%, rgba(7,14,26,1) 100%)',
                }}
              />
              {/* Overlay learners badge on bottom-left */}
              <div className="absolute bottom-6 left-6 z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0F7BFF] text-white text-xs font-bold">
                  <Users className="w-3.5 h-3.5" />
                  <span>{current.learnersBadge}</span>
                </div>
              </div>
            </div>

            {/* Right Content Side */}
            <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 flex flex-col justify-center">
              <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#0098D4] block mb-2">
                {current.eyebrow}
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-4">
                {current.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                {current.description}
              </p>

              {/* Checklist with Logo Blue Checkmarks */}
              <div className="space-y-3 mb-8">
                {current.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#0098D4]/20 text-[#0098D4] flex items-center justify-center shrink-0 border border-[#0098D4]/40">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span className="text-xs sm:text-sm text-slate-200 font-medium">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div>
                <Link
                  to={current.link}
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#0098D4] to-[#0F7BFF] hover:from-[#0085BA] hover:to-[#0066EB] text-white text-sm font-bold transition-all hover:scale-102 inline-flex items-center gap-2 group"
                >
                  <span>{current.buttonText}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
