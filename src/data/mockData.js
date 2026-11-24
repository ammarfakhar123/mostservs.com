export const navLinks = [
  { label: 'Programmes', href: '#programmes' },
  { label: 'Delivery Modes', href: '#learning-modes' },
  { label: 'Workforce', href: '#proven-at-scale' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

export const learningModes = [
  {
    id: 'online',
    label: 'Online Self-Paced',
    eyebrow: 'FLEXIBLE & ACCESSIBLE',
    title: 'Online Self-Paced Study',
    description:
      'Study at your own schedule with comprehensive digital materials, structured assignment briefs, tutor feedback, and 100% remote assessment mapped to UK Ofqual standards.',
    badge: 'Most Flexible',
    image: '/images/hero-collaboration.png',
    features: [
      '24/7 access to digital syllabus documents and assignment briefs',
      'Direct guidance from certified OTHM and IOSH approved instructors',
      'Dedicated tutor review and feedback on draft assignments',
      'Flexible study schedule tailored for working engineers and managers',
      'Remote assessment submissions with zero mandatory travel'
    ],
    cta: 'Explore All Qualifications',
    path: '/qualifications'
  },
  {
    id: 'in-house',
    label: 'In-House Corporate',
    eyebrow: 'TAILORED FOR ORGANISATIONS',
    title: 'In-House Corporate Training',
    description:
      'Customized on-site safety and technical workshops delivered at your factory, plant, or corporate offices across Pakistan, aligned directly with your operational hazard profile.',
    badge: 'Corporate Cohorts',
    image: '/images/hero-seminar.png',
    features: [
      'Bespoke syllabi aligned to site-specific hazards and shift rotations',
      'Corporate cohort pricing for teams of 5 to 30+ participants',
      'Delivered on-site nationwide or at our Islamabad training facility',
      'Pre- and post-training compliance audits and competence reports',
      'Official corporate invoices with SECP & FBR compliance documentation'
    ],
    cta: 'Customized Corporate Solutions',
    path: '/workplace-training/customized-courses'
  },
  {
    id: 'live',
    label: 'Live Virtual Classroom',
    eyebrow: 'REAL-TIME INTERACTION',
    title: 'Live Virtual & Interactive Cohorts',
    description:
      'Participate in scheduled interactive sessions led by senior health, safety, and IT specialists with live group exercises, practical scenario walkthroughs, and peer discussions.',
    badge: 'Instructor-Led',
    image: '/images/hero-seminar.png',
    features: [
      'Scheduled interactive webinar blocks with live Q&A',
      'Small class sizes ensuring personalized tutor mentoring',
      'Practical real-world case studies from Pakistani and multinational industry',
      'Step-by-step guidance on portfolio development and criteria mapping',
      'Direct WhatsApp access to academic tutors throughout your course'
    ],
    cta: 'Consult Admissions Team',
    path: '/contact'
  }
];

export const courseCategories = [
  'All Disciplines',
  'Health & Safety (HSE)',
  'Artificial Intelligence',
  'Cyber Security',
  'Information Technology'
];

export const featuredCourse = {
  id: 'othm-level-6',
  slug: 'othm-level-6',
  categorySlug: 'hse',
  path: '/qualifications/hse/othm-level-6',
  badge: 'OTHM',
  highlightBadge: 'UK OFQUAL LEVEL 6',
  category: 'Health & Safety (HSE)',
  meta: 'OFQUAL REGULATED • BACHELOR EQUIVALENT • 60 CREDITS',
  title: 'OTHM Level 6 Diploma in Occupational Health and Safety',
  description:
    'The premier UK Ofqual-regulated qualification equivalent to a bachelor’s degree with honours. Designed for health and safety practitioners aiming for senior advisory roles, regulatory leadership, and multinational project compliance.',
  rating: 4.9,
  reviews: 320,
  passRate: '98%',
  enrolled: '1,200+',
  tags: ['Online', 'Live', 'In-House', '60 Credits', 'Ofqual Mapped'],
  price: 'Contact for Latest Fees',
  image: '/images/hse-banner.jpg',
  duration: '6 to 9 Months'
};

export const courses = [
  {
    id: 'othm-level-7',
    slug: 'othm-level-7',
    categorySlug: 'hse',
    path: '/qualifications/hse/othm-level-7',
    badge: 'OTHM',
    highlightBadge: 'POSTGRADUATE',
    category: 'Health & Safety (HSE)',
    meta: 'OFQUAL LEVEL 7 • MASTER EQUIVALENT',
    title: 'OTHM Level 7 Diploma in Occupational Health & Safety Management',
    description:
      'Executive safety qualification advancing strategic risk governance, culture transformation, and multinational corporate compliance.',
    rating: 4.9,
    reviews: 185,
    tags: ['Postgraduate', 'Executive', 'Ofqual'],
    price: 'Contact for Latest Fees',
    duration: '6 to 9 Months',
    image: '/images/hse-banner.jpg'
  },
  {
    id: 'iosh',
    slug: 'iosh',
    categorySlug: 'hse',
    path: '/qualifications/hse/iosh',
    badge: 'IOSH',
    highlightBadge: 'GLOBAL BENCHMARK',
    category: 'Health & Safety (HSE)',
    meta: 'INDUSTRY STANDARD • PRACTICAL ASSESSMENT',
    title: 'IOSH Managing Safely®',
    description:
      'The international benchmark certificate providing managers and team leads with practical risk assessment tools and compliance fundamentals.',
    rating: 4.8,
    reviews: 450,
    tags: ['Live / Virtual', 'In-House', 'Supervisor'],
    price: 'Contact for Latest Fees',
    duration: '3 Days / Flexible',
    image: '/images/hse-banner.jpg'
  },
  {
    id: 'aosh',
    slug: 'aosh',
    categorySlug: 'hse',
    path: '/qualifications/hse/aosh',
    badge: 'AOSH',
    highlightBadge: 'INTERNATIONAL',
    category: 'Health & Safety (HSE)',
    meta: 'INTERNATIONAL SAFETY • RISK GOVERNANCE',
    title: 'AOSH International Safety Qualifications',
    description:
      'Globally recognized credentials designed to build leadership capabilities in site hazard mitigation, fire safety, and environmental auditing.',
    rating: 4.8,
    reviews: 140,
    tags: ['International', 'Field Safety', 'Fast Track'],
    price: 'Contact for Latest Fees',
    duration: 'Self-Paced / In-House',
    image: '/images/hse-banner.jpg'
  },
  {
    id: 'ictqual-ab',
    slug: 'ictqual-ab',
    categorySlug: 'hse',
    path: '/qualifications/hse/ictqual-ab',
    badge: 'ICTQual',
    highlightBadge: 'ACCREDITED',
    category: 'Health & Safety (HSE)',
    meta: 'TECHNICAL COMPETENCY • SITE COMPLIANCE',
    title: 'ICTQual AB Qualifications',
    description:
      'Quality-assured workplace competency certifications covering operational risk profiling, machinery safety, and safety supervision.',
    rating: 4.7,
    reviews: 110,
    tags: ['Site Safety', 'Accredited', 'Practical'],
    price: 'Contact for Latest Fees',
    duration: 'Modular Syllabus',
    image: '/images/hse-banner.jpg'
  },
  {
    id: 'othm-level-7-diploma-in-artificial-intelligence',
    slug: 'othm-level-7-diploma-in-artificial-intelligence',
    categorySlug: 'artificial-intelligence',
    path: '/qualifications/artificial-intelligence/othm-level-7-diploma-in-artificial-intelligence',
    badge: 'OTHM',
    highlightBadge: 'POSTGRADUATE',
    category: 'Artificial Intelligence',
    meta: 'OFQUAL REGULATED • MASTER EQUIVALENT • 120 CREDITS',
    title: 'OTHM Level 7 Diploma in Artificial Intelligence',
    description:
      'Master neural network architectures, computer vision, natural language processing, and strategic enterprise AI deployment.',
    rating: 4.9,
    reviews: 165,
    tags: ['AI / ML', 'Deep Learning', 'Neural Systems'],
    price: 'Contact for Latest Fees',
    duration: '6 to 9 Months',
    image: '/images/ai-banner.jpg'
  },
  {
    id: 'othm-level-5-extended-diploma-in-cyber-security',
    slug: 'othm-level-5-extended-diploma-in-cyber-security',
    categorySlug: 'cyber-security',
    path: '/qualifications/cyber-security/othm-level-5-extended-diploma-in-cyber-security',
    badge: 'OTHM',
    highlightBadge: '240 CREDITS',
    category: 'Cyber Security',
    meta: 'HIGHER NATIONAL • YEAR 2 DEGREE EQUIVALENT',
    title: 'OTHM Level 5 Extended Diploma in Cyber Security',
    description:
      'Extensive 240-credit qualification covering ethical hacking, network defense architecture, and incident triage.',
    rating: 4.9,
    reviews: 210,
    tags: ['Network Defense', 'Pen Testing', 'Degree Pathway'],
    price: 'Contact for Latest Fees',
    duration: '1 Academic Year',
    image: '/images/cyber-banner.jpg'
  },
  {
    id: 'othm-level-4-diploma-in-cyber-security',
    slug: 'othm-level-4-diploma-in-cyber-security',
    categorySlug: 'cyber-security',
    path: '/qualifications/cyber-security/othm-level-4-diploma-in-cyber-security',
    badge: 'OTHM',
    highlightBadge: 'FOUNDATIONAL',
    category: 'Cyber Security',
    meta: 'OFQUAL LEVEL 4 • 120 CREDITS',
    title: 'OTHM Level 4 Diploma in Cyber Security',
    description:
      'First-year degree equivalent introducing cyber threat intelligence, secure networking, and vulnerability assessment.',
    rating: 4.8,
    reviews: 180,
    tags: ['Security Operations', 'Foundations', 'Level 4'],
    price: 'Contact for Latest Fees',
    duration: '6 Months',
    image: '/images/cyber-banner.jpg'
  },
  {
    id: 'othm-level-7-diploma-in-data-science',
    slug: 'othm-level-7-diploma-in-data-science',
    categorySlug: 'information-technology',
    path: '/qualifications/information-technology/othm-level-7-diploma-in-data-science',
    badge: 'OTHM',
    highlightBadge: 'POSTGRADUATE',
    category: 'Information Technology',
    meta: 'BIG DATA & PREDICTIVE ANALYTICS • 120 CREDITS',
    title: 'OTHM Level 7 Diploma in Data Science',
    description:
      'Postgraduate qualification in distributed big data pipelines, machine learning models, and executive data strategy.',
    rating: 4.9,
    reviews: 195,
    tags: ['Data Science', 'Python', 'Big Data'],
    price: 'Contact for Latest Fees',
    duration: '6 to 9 Months',
    image: '/images/hero-collaboration.png'
  },
  {
    id: 'othm-level-6-diploma-in-information-technology',
    slug: 'othm-level-6-diploma-in-information-technology',
    categorySlug: 'information-technology',
    path: '/qualifications/information-technology/othm-level-6-diploma-in-information-technology',
    badge: 'OTHM',
    highlightBadge: 'BACHELOR LEVEL',
    category: 'Information Technology',
    meta: 'ENTERPRISE SYSTEMS • 120 CREDITS',
    title: 'OTHM Level 6 Diploma in Information Technology',
    description:
      'Bachelor-equivalent credential covering cloud infrastructure engineering, advanced software development, and IT management.',
    rating: 4.8,
    reviews: 220,
    tags: ['Cloud Systems', 'Software Engineering', 'Level 6'],
    price: 'Contact for Latest Fees',
    duration: '6 to 9 Months',
    image: '/images/hero-collaboration.png'
  },
  {
    id: 'othm-level-3-foundation-diploma-in-information-technology',
    slug: 'othm-level-3-foundation-diploma-in-information-technology',
    categorySlug: 'information-technology',
    path: '/qualifications/information-technology/othm-level-3-foundation-diploma-in-information-technology',
    badge: 'OTHM',
    highlightBadge: 'FOUNDATION',
    category: 'Information Technology',
    meta: 'ENTRY DIPLOMA • 60 CREDITS',
    title: 'OTHM Level 3 Foundation Diploma in IT',
    description:
      'Gateway qualification introducing programming essentials, database management, and networking principles.',
    rating: 4.7,
    reviews: 130,
    tags: ['Foundation', 'Intro to IT', 'Level 3'],
    price: 'Contact for Latest Fees',
    duration: '6 Months',
    image: '/images/hero-collaboration.png'
  }
];

export const scaleStats = [
  {
    id: 'learners',
    tag: 'Accredited',
    target: 18,
    suffix: '+',
    accentColor: 'text-[#2DD4BF]',
    barColor: 'bg-[#2DD4BF]',
    label: 'Regulated Qualifications',
    sublabel: 'OTHM, IOSH, AOSH & ICTQual',
    progress: 95
  },
  {
    id: 'pass-rate',
    tag: 'Success Metric',
    target: 98,
    suffix: '%',
    accentColor: 'text-[#F59E0B]',
    barColor: 'bg-[#F59E0B]',
    label: 'Verified Assessment Pass Rate',
    sublabel: 'Structured assignment guidance',
    progress: 98
  },
  {
    id: 'compliance',
    tag: 'Corporate',
    target: 100,
    suffix: '%',
    accentColor: 'text-[#4B9EFF]',
    barColor: 'bg-[#4B9EFF]',
    label: 'SECP & FBR Compliant',
    sublabel: 'Official corporate registration',
    progress: 100
  },
  {
    id: 'support',
    tag: 'Advisory',
    target: 7,
    suffix: ' Days',
    accentColor: 'text-[#2DD4BF]',
    barColor: 'bg-[#2DD4BF]',
    label: 'Admissions Support Desk',
    sublabel: 'Islamabad head office team',
    progress: 92
  }
];

export const testimonials = [
  {
    id: 1,
    name: 'Muhammad Tariq',
    initials: 'MT',
    avatarBg: 'bg-amber-500',
    role: 'HSE Officer, Oil & Gas Sector • Rawalpindi',
    course: 'OTHM Level 6 Diploma in Occupational Health & Safety',
    tagColor: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
    quote:
      '“The academic rigor and assignment guidance from MOST Services tutors were exceptional. The diploma provided direct progression to advanced workplace risk roles with international project credibility.”'
  },
  {
    id: 2,
    name: 'Ahmed Bilal',
    initials: 'AB',
    avatarBg: 'bg-[#0F7BFF]',
    role: 'Compliance Supervisor, Construction • Islamabad',
    course: 'IOSH Managing Safely®',
    tagColor: 'bg-blue-500/15 text-blue-400 border-blue-500/30',
    quote:
      '“Practical and completely relevant to site safety operations. The interactive delivery made hazard identification and risk control actionable immediately on our projects in the twin cities.”'
  },
  {
    id: 3,
    name: 'Zeeshan Akhtar',
    initials: 'ZA',
    avatarBg: 'bg-indigo-500',
    role: 'Infrastructure Engineer • Lahore',
    course: 'OTHM Level 4 Diploma in Cyber Security',
    tagColor: 'bg-teal-500/15 text-teal-400 border-teal-500/30',
    quote:
      '“Flexible digital learning coupled with responsive tutor support. The course modules gave me hands-on confidence in defensive security controls and network threat mitigation.”'
  },
  {
    id: 4,
    name: 'Engr. Shahbaz Malik',
    initials: 'SM',
    avatarBg: 'bg-emerald-500',
    role: 'EHS Manager, Industrial Manufacturing • Islamabad',
    course: 'OTHM Level 7 Diploma in OHS Management',
    tagColor: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
    quote:
      '“We partnered with MOST Services for executive safety leadership qualifications. The strategic framework and prompt verification support made the entire cohort experience seamless.”'
  }
];
