import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import ErrorBoundary from './components/common/ErrorBoundary';
import EnquiryModal from './components/EnquiryModal';

// Global Animation Architecture
import {
  AnimationProvider,
  AnimatedCursor,
  ScrollProgress,
  ToastProvider,
} from './components/animation';

// Pages
import HomePage from './pages/HomePage';
import QualificationsHubPage from './pages/QualificationsHubPage';
import CategoryPage from './pages/CategoryPage';
import CourseDetailPage from './pages/CourseDetailPage';
import CustomizedCoursesPage from './pages/workplace/CustomizedCoursesPage';
import ConsultationServicesPage from './pages/workplace/ConsultationServicesPage';
import WorkplaceFAQsPage from './pages/workplace/WorkplaceFAQsPage';
import ServicesPage from './pages/ServicesPage';
import TaxSecpPage from './pages/TaxSecpPage';
import CertificateVerificationPage from './pages/CertificateVerificationPage';
import AboutUsPage from './pages/AboutUsPage';
import ContactPage from './pages/ContactPage';

function AnimatedAppRoutes({ onOpenEnquiry }) {
  const location = useLocation();

  return (
    <div key={location.pathname} className="animate-fade-in flex-1 flex flex-col">
      <Routes location={location}>
        {/* 1. Preserved Finished Homepage */}
        <Route path="/" element={<HomePage onOpenEnquiry={onOpenEnquiry} />} />

        {/* 2. Qualifications Directory & Hub */}
        <Route
          path="/qualifications"
          element={<QualificationsHubPage onOpenEnquiry={onOpenEnquiry} />}
        />

        {/* 3. Category Landing Pages (/qualifications/hse, /qualifications/cyber-security, etc.) */}
        <Route
          path="/qualifications/:categorySlug"
          element={<CategoryPage onOpenEnquiry={onOpenEnquiry} />}
        />

        {/* 4. Course Detail Pages (/qualifications/:categorySlug/:courseSlug) */}
        <Route
          path="/qualifications/:categorySlug/:courseSlug"
          element={<CourseDetailPage onOpenEnquiry={onOpenEnquiry} />}
        />

        {/* Direct convenience course route */}
        <Route
          path="/course/:courseSlug"
          element={<CourseDetailPage onOpenEnquiry={onOpenEnquiry} />}
        />

        {/* 5. Workplace Training Routes */}
        <Route
          path="/workplace-training"
          element={<CustomizedCoursesPage onOpenEnquiry={onOpenEnquiry} />}
        />
        <Route
          path="/workplace-training/customized-courses"
          element={<CustomizedCoursesPage onOpenEnquiry={onOpenEnquiry} />}
        />
        <Route
          path="/workplace-training/customize-courses"
          element={<CustomizedCoursesPage onOpenEnquiry={onOpenEnquiry} />}
        />
        <Route
          path="/workplace-training/consultation-services"
          element={<ConsultationServicesPage onOpenEnquiry={onOpenEnquiry} />}
        />
        <Route
          path="/workplace-training/faqs"
          element={<WorkplaceFAQsPage onOpenEnquiry={onOpenEnquiry} />}
        />

        {/* 6. Corporate Services */}
        <Route
          path="/services"
          element={<ServicesPage onOpenEnquiry={onOpenEnquiry} />}
        />

        {/* 7. Tax & SECP Advisory */}
        <Route
          path="/tax-secp"
          element={<TaxSecpPage onOpenEnquiry={onOpenEnquiry} />}
        />

        {/* 8. Certificate Verification Registry */}
        <Route
          path="/certificate-verification"
          element={<CertificateVerificationPage onOpenEnquiry={onOpenEnquiry} />}
        />

        {/* 9. About Us Profile */}
        <Route
          path="/about-us"
          element={<AboutUsPage onOpenEnquiry={onOpenEnquiry} />}
        />

        {/* 10. Contact Page */}
        <Route path="/contact" element={<ContactPage />} />

        {/* Fallback wildcard */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default function App() {
  const [enquiryTopic, setEnquiryTopic] = useState(null);

  return (
    <BrowserRouter>
      <AnimationProvider>
        <ScrollToTop />
        <ScrollProgress />
        <AnimatedCursor />
        <ToastProvider />

        <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-[#F37021]/20 selection:text-[#F37021]">
          {/* Persistent Global Header with Mega Menu */}
          <Header />

          {/* Dynamic Route Pages with Smooth Entrance Transitions */}
          <main className="flex-1 flex flex-col">
            <ErrorBoundary>
              <AnimatedAppRoutes onOpenEnquiry={setEnquiryTopic} />
            </ErrorBoundary>
          </main>

          {/* Persistent 5-Column Agency Footer */}
          <Footer />

          {/* Global Modal Enquiry Trigger */}
          <EnquiryModal topic={enquiryTopic} onClose={() => setEnquiryTopic(null)} />
        </div>
      </AnimationProvider>
    </BrowserRouter>
  );
}
