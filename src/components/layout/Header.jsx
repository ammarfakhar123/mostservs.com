import React, { useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, ChevronDown } from 'lucide-react';
import DesktopMegaMenu from './DesktopMegaMenu';
import MobileNavDrawer from './MobileNavDrawer';
import PortalLoginModal from '../common/PortalLoginModal';
import { navigationData } from '../../data/navigationData';
import mostLogoImg from '../../assets/images/most-logo.png';

export default function Header() {
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [workplaceMenuOpen, setWorkplaceMenuOpen] = useState(false);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [portalModalOpen, setPortalModalOpen] = useState(false);
  const location = useLocation();

  const megaTimeoutRef = useRef(null);
  const workplaceTimeoutRef = useRef(null);

  const handleMegaEnter = () => {
    if (megaTimeoutRef.current) clearTimeout(megaTimeoutRef.current);
    setMegaMenuOpen(true);
    setWorkplaceMenuOpen(false);
  };

  const handleMegaLeave = () => {
    if (megaTimeoutRef.current) clearTimeout(megaTimeoutRef.current);
    megaTimeoutRef.current = setTimeout(() => {
      setMegaMenuOpen(false);
    }, 300);
  };

  const handleWorkplaceEnter = () => {
    if (workplaceTimeoutRef.current) clearTimeout(workplaceTimeoutRef.current);
    setWorkplaceMenuOpen(true);
    setMegaMenuOpen(false);
  };

  const handleWorkplaceLeave = () => {
    if (workplaceTimeoutRef.current) clearTimeout(workplaceTimeoutRef.current);
    workplaceTimeoutRef.current = setTimeout(() => {
      setWorkplaceMenuOpen(false);
    }, 300);
  };

  const workplaceNav = navigationData.find((n) => n.label === 'Workplace Training');

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-white border-b border-slate-200/90 shadow-2xs">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-3">
          {/* 1. Logo on Left */}
          <Link to="/" className="flex items-center shrink-0">
            <img
              src={mostLogoImg}
              alt="MOST Services Pvt Ltd."
              className="h-11 sm:h-12 w-auto object-contain"
            />
          </Link>

          {/* 2. Desktop Navigation Menu */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {/* Qualifications (Mega Menu Dropdown) */}
            <div
              className="relative py-2"
              onMouseEnter={handleMegaEnter}
              onMouseLeave={handleMegaLeave}
            >
              <button
                type="button"
                onClick={() => setMegaMenuOpen(!megaMenuOpen)}
                className={`px-3 py-2 text-[13.5px] xl:text-[14px] font-medium flex items-center gap-1 rounded-lg transition-colors cursor-pointer group ${
                  location.pathname.startsWith('/qualifications') || megaMenuOpen
                    ? 'text-[#0F7BFF] font-semibold'
                    : 'text-slate-800 hover:text-[#0F7BFF]'
                }`}
              >
                <span>Qualifications</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-slate-400 group-hover:text-[#0F7BFF] transition-transform duration-200 ${
                    megaMenuOpen ? 'rotate-180 text-[#0F7BFF]' : ''
                  }`}
                />
              </button>
            </div>

            {/* Workplace Training (Dropdown) */}
            <div
              className="relative py-2"
              onMouseEnter={handleWorkplaceEnter}
              onMouseLeave={handleWorkplaceLeave}
            >
              <button
                type="button"
                onClick={() => setWorkplaceMenuOpen(!workplaceMenuOpen)}
                className={`px-3 py-2 text-[13.5px] xl:text-[14px] font-medium flex items-center gap-1 rounded-lg transition-colors cursor-pointer group ${
                  location.pathname.startsWith('/workplace-training') || workplaceMenuOpen
                    ? 'text-[#0F7BFF] font-semibold'
                    : 'text-slate-800 hover:text-[#0F7BFF]'
                }`}
              >
                <span>Workplace Training</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-slate-400 group-hover:text-[#0F7BFF] transition-transform duration-200 ${
                    workplaceMenuOpen ? 'rotate-180 text-[#0F7BFF]' : ''
                  }`}
                />
              </button>

              {/* Workplace Sub-Menu Dropdown */}
              {workplaceMenuOpen && workplaceNav && (
                <div className="absolute top-full left-0 w-72 bg-white border border-slate-200 rounded-2xl shadow-xl p-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  {workplaceNav.items.map((item) => (
                    <Link
                      key={item.title}
                      to={item.href}
                      onClick={() => setWorkplaceMenuOpen(false)}
                      className="block p-2.5 rounded-xl text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-[#0F7BFF] transition-colors"
                    >
                      <div className="font-bold text-slate-900 leading-snug">{item.title}</div>
                      <div className="text-[11px] text-slate-500 font-normal line-clamp-1 mt-0.5">
                        {item.description}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Services */}
            <Link
              to="/services"
              className={`px-3 py-2 text-[13.5px] xl:text-[14px] font-medium rounded-lg transition-colors ${
                location.pathname === '/services'
                  ? 'text-[#0F7BFF] font-semibold'
                  : 'text-slate-800 hover:text-[#0F7BFF]'
              }`}
            >
              Services
            </Link>

            {/* Tax & SECP */}
            <Link
              to="/tax-secp"
              className={`px-3 py-2 text-[13.5px] xl:text-[14px] font-medium rounded-lg transition-colors ${
                location.pathname === '/tax-secp'
                  ? 'text-[#0F7BFF] font-semibold'
                  : 'text-slate-800 hover:text-[#0F7BFF]'
              }`}
            >
              Tax &amp; SECP
            </Link>

            {/* Certificate Verification */}
            <Link
              to="/certificate-verification"
              className={`px-3 py-2 text-[13.5px] xl:text-[14px] font-medium rounded-lg transition-colors ${
                location.pathname === '/certificate-verification'
                  ? 'text-[#0F7BFF] font-semibold'
                  : 'text-slate-800 hover:text-[#0F7BFF]'
              }`}
            >
              Certificate Verification
            </Link>

            {/* About Us */}
            <Link
              to="/about-us"
              className={`px-3 py-2 text-[13.5px] xl:text-[14px] font-medium rounded-lg transition-colors ${
                location.pathname === '/about-us'
                  ? 'text-[#0F7BFF] font-semibold'
                  : 'text-slate-800 hover:text-[#0F7BFF]'
              }`}
            >
              About
            </Link>

            {/* Contact */}
            <Link
              to="/contact"
              className={`px-3 py-2 text-[13.5px] xl:text-[14px] font-medium rounded-lg transition-colors ${
                location.pathname === '/contact'
                  ? 'text-[#0F7BFF] font-semibold'
                  : 'text-slate-800 hover:text-[#0F7BFF]'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* 3. Right Side Actions (Portal Login Button) */}
          <div className="hidden lg:flex items-center shrink-0">
            {/* Gradient Blue Portal Login Button */}
            <button
              type="button"
              onClick={() => setPortalModalOpen(true)}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#0098D4] to-[#0F7BFF] hover:from-[#0085BA] hover:to-[#0066EB] text-white text-sm font-bold shadow-[0_4px_14px_rgba(15,123,255,0.35)] hover:shadow-[0_6px_20px_rgba(15,123,255,0.5)] transition-all hover:scale-102 cursor-pointer inline-flex items-center justify-center"
            >
              <span>Portal Login</span>
            </button>
          </div>

          {/* 4. Mobile Menu Trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={() => setPortalModalOpen(true)}
              className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-[#0098D4] to-[#0F7BFF] text-white text-xs font-bold shadow-xs"
            >
              Portal Login
            </button>
            <button
              type="button"
              onClick={() => setMobileDrawerOpen(true)}
              className="p-2 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              aria-label="Open Navigation"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mega Menu Dropdown */}
        <DesktopMegaMenu
          isOpen={megaMenuOpen}
          onMouseEnter={handleMegaEnter}
          onMouseLeave={handleMegaLeave}
          onClose={() => setMegaMenuOpen(false)}
        />

        {/* Mobile Drawer */}
        <MobileNavDrawer
          isOpen={mobileDrawerOpen}
          onClose={() => setMobileDrawerOpen(false)}
          onOpenPortal={() => {
            setMobileDrawerOpen(false);
            setPortalModalOpen(true);
          }}
        />
      </header>

      {/* Portal Login Modal */}
      <PortalLoginModal
        isOpen={portalModalOpen}
        onClose={() => setPortalModalOpen(false)}
      />
    </>
  );
}
