import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Globe, Trophy, Briefcase, ArrowRight, ShieldCheck, Check } from 'lucide-react';
import { AnimatedCounter, RevealOnScroll } from './animation';

const statsData = [
  {
    id: 'learners',
    icon: GraduationCap,
    iconColor: 'text-[#0098D4]',
    iconBg: 'bg-[#0098D4]/10',
    target: 30000,
    suffix: '+',
    title: 'Qualified Learners',
    description: 'Certified professionals graduated since 2009',
    indexLabel: 'Pass benchmark',
    indexValue: '92%',
    progressPercent: 92,
  },
  {
    id: 'countries',
    icon: Globe,
    iconColor: 'text-[#0F7BFF]',
    iconBg: 'bg-[#0F7BFF]/10',
    target: 35,
    suffix: '+',
    title: 'Active Countries',
    description: 'Global reach across UK, Middle East & Asia',
    indexLabel: 'Global presence',
    indexValue: '78%',
    progressPercent: 78,
  },
  {
    id: 'satisfaction',
    icon: Trophy,
    iconColor: 'text-[#F59E0B]',
    iconBg: 'bg-[#F59E0B]/10',
    target: 98.4,
    decimals: 1,
    suffix: '%',
    title: 'Client Satisfaction',
    description: 'Rated exceptional on independent audits',
    indexLabel: 'Audit score',
    indexValue: '98.4%',
    progressPercent: 98,
  },
  {
    id: 'corporate',
    icon: Briefcase,
    iconColor: 'text-[#0098D4]',
    iconBg: 'bg-[#0098D4]/10',
    target: 500,
    suffix: '+',
    title: 'Corporate Clients',
    description: 'From local leaders to multinational enterprises',
    indexLabel: 'Corporate retention',
    indexValue: '85%',
    progressPercent: 85,
  },
];

export default function ProvenAtScale({ onOpenEnquiry }) {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Title and "View our impact report" button */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div className="space-y-3">
            <span className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#0098D4]">
              BY THE NUMBERS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#070E1A]">
              Proven at Scale
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl">
              Over 15 years of measurable impact — for individuals, teams, and entire organisations across every major industry.
            </p>
          </div>

          <button
            type="button"
            onClick={() => onOpenEnquiry && onOpenEnquiry('Impact Report & Scale Statistics')}
            className="px-5 py-2.5 rounded-xl bg-[#070E1A] hover:bg-slate-900 text-white text-xs sm:text-sm font-bold inline-flex items-center gap-2 self-start sm:self-auto shrink-0 transition-all hover:scale-102 cursor-pointer"
          >
            <span>View our impact report</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 4 Dark Metric Cards Grid with Animated Counters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {statsData.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <RevealOnScroll
                key={stat.id}
                delay={idx * 80}
                animation="fade-up"
                className="h-full"
              >
                <div className="rounded-3xl bg-[#070E1A] p-6 sm:p-7 border border-slate-800 flex flex-col justify-between h-full hover:border-slate-700 transition-colors">
                  <div>
                    {/* Top: Icon + Since 2009 pill */}
                    <div className="flex items-center justify-between mb-8">
                      <div
                        className={`w-11 h-11 rounded-2xl ${stat.iconBg} ${stat.iconColor} flex items-center justify-center border border-white/5`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>

                      <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-400 text-[11px] font-semibold">
                        Since 2009
                      </span>
                    </div>

                    {/* Big Animated Number */}
                    <div className="flex items-baseline mb-2">
                      <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                        <AnimatedCounter
                          target={stat.target}
                          decimals={stat.decimals || 0}
                          suffix={stat.suffix}
                        />
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-white mb-1">
                      {stat.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {stat.description}
                    </p>
                  </div>

                  {/* Bottom Performance Index Bar */}
                  <div className="pt-6 mt-6 border-t border-slate-800/80">
                    <div className="flex items-center justify-between text-[11px] font-semibold text-slate-400 mb-2">
                      <span className="text-[#0098D4]">{stat.indexLabel}</span>
                      <span className="text-slate-200">{stat.indexValue}</span>
                    </div>
                    {/* Progress bar line (Logo Blue Gradient, No Green) */}
                    <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#0098D4] to-[#0F7BFF] rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${stat.progressPercent}%` }}
                      />
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>

        {/* Bottom Trust Bar */}
        <div className="mt-8 rounded-2xl bg-[#070E1A] p-4 sm:p-5 border border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-4 sm:gap-8 text-xs font-semibold text-slate-300">
            <div className="flex items-center gap-2">
              <Trophy className="w-4 h-4 text-[#F59E0B]" />
              <span>Platinum Customer Service Award 2026</span>
            </div>

            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#0F7BFF]" />
              <span>SECP Incorporated &amp; ISO Aligned</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-[#0098D4]/20 text-[#0098D4] flex items-center justify-center">
                <Check className="w-3 h-3 stroke-[2.5]" />
              </div>
              <span>98% Would Recommend MostServs</span>
            </div>
          </div>

          <Link
            to="/about-us"
            className="text-xs font-bold text-[#0F7BFF] hover:text-[#4B9EFF] inline-flex items-center gap-1 transition-colors"
          >
            <span>View accreditations</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
