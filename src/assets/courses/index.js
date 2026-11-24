import safetyInspection from './course-safety-inspection.jpg';
import industrialHse from './course-industrial-hse.jpg';
import corporateLeadership from './course-corporate-leadership.png';
import safetySeminar from './course-safety-seminar.png';
import aiNeural from './course-ai-neural.jpg';
import cyberDefense from './course-cyber-defense.jpg';
import dataScience from './course-data-science.jpg';
import softwareEngineering from './course-software-engineering.png';
import digitalLearning from './course-digital-learning.png';

import hseBanner from '../images/hse-banner.jpg';
import aiBanner from '../images/ai-banner.jpg';
import cyberBanner from '../images/cyber-banner.jpg';
import heroCollaboration from '../images/hero-collaboration.png';
import heroSeminar from '../images/hero-seminar.png';
import learningOnline from '../images/learning-online.png';

export {
  safetyInspection,
  industrialHse,
  corporateLeadership,
  safetySeminar,
  aiNeural,
  cyberDefense,
  dataScience,
  softwareEngineering,
  digitalLearning,
  hseBanner,
  aiBanner,
  cyberBanner,
  heroCollaboration,
  heroSeminar,
  learningOnline,
};

// Unified, 1:1 consistent mapping for every course slug across the entire site
export const courseImageMap = {
  // HSE - Distinct, high-impact industrial & safety photographs
  'ictqual-ab': heroSeminar,
  'iosh': heroCollaboration,
  'iosh-courses': heroCollaboration,
  'iosh-managing-safely': heroCollaboration,
  'aosh': safetyInspection,
  'aosh-courses': safetyInspection,
  'othm-level-3': learningOnline,
  'othm-level-6': hseBanner,
  'othm-level-6-occupational-health-and-safety': hseBanner,
  'othm-level-6-diploma-in-occupational-health-and-safety': hseBanner,
  'othm-level-7': industrialHse,
  'othm-level-7-occupational-health-and-safety': industrialHse,
  'othm-level-7-occupational-health-and-safety-management': industrialHse,
  'othm-level-7-diploma-in-occupational-health-and-safety-management': industrialHse,
  'othm': hseBanner,
  'othm-level-3-health-and-social-care': corporateLeadership,

  // Artificial Intelligence - High-tech, vivid neural & robotics visuals
  'othm-level-7-diploma-in-artificial-intelligence': aiNeural,
  'artificial-intelligence': aiNeural,

  // Cyber Security - High-tech SOC, defensive architecture & encryption visuals
  'othm-level-4-diploma-in-cyber-security': cyberBanner,
  'othm-level-5-diploma-in-cyber-security': cyberDefense,
  'othm-level-5-extended-diploma-in-cyber-security': cyberDefense,
  'cyber-security': cyberDefense,

  // Information Technology - Software engineering, data science & enterprise IT visuals
  'othm-level-3-foundation-diploma-in-information-technology': digitalLearning,
  'othm-level-4-diploma-in-information-technology': corporateLeadership,
  'othm-level-5-diploma-in-information-technology': softwareEngineering,
  'othm-level-5-extended-diploma-in-information-technology': softwareEngineering,
  'othm-level-6-diploma-in-information-technology': softwareEngineering,
  'othm-level-3-certificate-in-python': digitalLearning,
  'othm-level-6-certificate-in-python': aiNeural,
  'othm-level-7-diploma-in-data-science': dataScience,
  'information-technology': softwareEngineering,
};

// Fallback resolver by category so NO course ever gets a generic or mismatched image
export function getCourseImage(slug, categorySlug) {
  if (slug && courseImageMap[slug]) {
    return courseImageMap[slug];
  }

  if (categorySlug === 'artificial-intelligence' || slug?.includes('ai') || slug?.includes('artificial')) {
    return aiNeural;
  }
  if (categorySlug === 'cyber-security' || slug?.includes('cyber')) {
    return cyberDefense;
  }
  if (categorySlug === 'information-technology' || slug?.includes('data-science') || slug?.includes('python')) {
    return slug?.includes('data-science') ? dataScience : softwareEngineering;
  }
  if (categorySlug === 'hse' || slug?.includes('safety') || slug?.includes('hse')) {
    return industrialHse;
  }

  return corporateLeadership;
}
