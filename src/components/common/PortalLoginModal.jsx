import React, { useState } from 'react';
import { X, Lock, User, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function PortalLoginModal({ isOpen, onClose }) {
  const [role, setRole] = useState('student'); // 'student' | 'corporate'
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userId.trim() || !password.trim()) return;
    setLoggedIn(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 relative border border-slate-200 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Brand Header */}
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2 h-2 rounded-full bg-[#0F7BFF]" />
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#0F7BFF]">
            MOST Services Secure Portal
          </span>
        </div>

        <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
          Learner &amp; Corporate LMS
        </h3>
        <p className="text-xs text-slate-500 mt-1">
          Access your enrolled qualification modules, assessment portal, and certificate registry.
        </p>

        {loggedIn ? (
          <div className="mt-8 py-6 text-center space-y-4 animate-fade-in">
            <div className="w-14 h-14 bg-blue-50 text-[#0098D4] rounded-2xl flex items-center justify-center mx-auto border border-blue-200">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-slate-900">Authentication Verified</h4>
              <p className="text-xs text-slate-600 mt-1 max-w-xs mx-auto">
                Redirecting to your secure learning dashboard for <span className="font-semibold text-slate-900">{userId}</span>...
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition-colors cursor-pointer"
            >
              Continue to Dashboard
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            {/* Role Switcher Tabs */}
            <div className="grid grid-cols-2 gap-1.5 p-1 bg-slate-100 rounded-xl">
              <button
                type="button"
                onClick={() => setRole('student')}
                className={`py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  role === 'student'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Learner / Candidate
              </button>
              <button
                type="button"
                onClick={() => setRole('corporate')}
                className={`py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  role === 'corporate'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Corporate / Employer
              </button>
            </div>

            {/* User ID Field */}
            <div>
              <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                {role === 'student' ? 'Student ID / Registered Email' : 'Corporate Account ID / Work Email'}
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  type="text"
                  required
                  placeholder={role === 'student' ? 'e.g. OTHM-2024-XXXX or email' : 'e.g. hr@company.com'}
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-[#0F7BFF] focus:ring-1 focus:ring-[#0F7BFF] text-sm text-slate-900 placeholder:text-slate-400 bg-white"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider">
                  Password
                </label>
                <a
                  href="#forgot"
                  onClick={(e) => {
                    e.preventDefault();
                    alert('Password reset instructions sent to your registered email address.');
                  }}
                  className="text-[11px] text-[#0F7BFF] hover:underline font-semibold"
                >
                  Forgot?
                </a>
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  type="password"
                  required
                  placeholder="••••••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-[#0F7BFF] focus:ring-1 focus:ring-[#0F7BFF] text-sm text-slate-900 placeholder:text-slate-400 bg-white"
                />
              </div>
            </div>

            {/* Security Notice */}
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-500">
              <ShieldCheck className="w-4 h-4 text-[#0098D4] shrink-0" />
              <span>256-Bit SSL Encrypted Official Institutional Gateway</span>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 px-5 rounded-xl bg-gradient-to-r from-[#0098D4] to-[#0F7BFF] hover:from-[#0085BA] hover:to-[#0066EB] text-white font-bold text-sm shadow-[0_4px_14px_rgba(15,123,255,0.35)] transition-all hover:scale-101 cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Sign In to Portal</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
