export const navigationData = [
  {
    label: "Qualifications",
    href: "/qualifications",
    isMegaMenu: true,
    categories: [
      {
        id: "hse",
        title: "HSE (Health & Safety)",
        href: "/qualifications/hse",
        items: [
          {
            title: "ICTQual AB",
            href: "/qualifications/hse/ictqual-ab",
            badge: "Accredited Pathway",
            description: "Occupational safety and professional compliance qualifications."
          },
          {
            title: "IOSH",
            href: "/qualifications/hse/iosh",
            badge: "Industry Standard",
            description: "IOSH Managing & Working Safely certifications for supervisors."
          },
          {
            title: "AOSH",
            href: "/qualifications/hse/aosh",
            badge: "International",
            description: "Advanced safety leadership and risk governance credentials."
          },
          {
            title: "OTHM",
            href: "/qualifications/hse/othm",
            hasFlyout: true,
            flyoutItems: [
              {
                title: "OTHM Level 3",
                href: "/qualifications/hse/othm-level-3",
                level: "Level 3",
                description: "Foundation qualification for workplace safety practitioners."
              },
              {
                title: "OTHM Level 6",
                href: "/qualifications/hse/othm-level-6",
                level: "Level 6",
                description: "Professional diploma equivalent to bachelor's honours degree."
              },
              {
                title: "OTHM Level 7",
                href: "/qualifications/hse/othm-level-7",
                level: "Level 7",
                description: "Postgraduate diploma advancing executive safety management."
              }
            ]
          }
        ]
      },
      {
        id: "ai",
        title: "Artificial Intelligence",
        href: "/qualifications/artificial-intelligence",
        items: [
          {
            title: "OTHM Level 7 Diploma in Artificial Intelligence",
            href: "/qualifications/artificial-intelligence/othm-level-7-diploma-in-artificial-intelligence",
            level: "Level 7 (Postgraduate)",
            description: "Master AI architecture, neural frameworks, and deep enterprise intelligence."
          }
        ]
      },
      {
        id: "cyber-security",
        title: "Cyber Security",
        href: "/qualifications/cyber-security",
        items: [
          {
            title: "OTHM Level 4 Diploma in Cyber Security",
            href: "/qualifications/cyber-security/othm-level-4-diploma-in-cyber-security",
            level: "Level 4 (Year 1 Degree)",
            description: "Foundational network defense, threat analysis, and digital forensics."
          },
          {
            title: "OTHM Level 5 Diploma in Cyber Security",
            href: "/qualifications/cyber-security/othm-level-5-diploma-in-cyber-security",
            level: "Level 5 (Year 2 Degree)",
            description: "Advanced penetration testing, security architecture, and incident triage."
          },
          {
            title: "OTHM Level 5 Extended Diploma in Cyber Security",
            href: "/qualifications/cyber-security/othm-level-5-extended-diploma-in-cyber-security",
            level: "Level 5 (Extended)",
            description: "Comprehensive 240-credit pathway directly into final year degree."
          }
        ]
      },
      {
        id: "it",
        title: "Information Technology",
        href: "/qualifications/information-technology",
        items: [
          {
            title: "OTHM Level 3 Foundation Diploma in Information Technology",
            href: "/qualifications/information-technology/othm-level-3-foundation-diploma-in-information-technology",
            level: "Level 3",
            description: "Entry pathway establishing computing, algorithms, and core software skills."
          },
          {
            title: "OTHM Level 4 Diploma in Information Technology",
            href: "/qualifications/information-technology/othm-level-4-diploma-in-information-technology",
            level: "Level 4",
            description: "First year degree equivalent covering systems analysis and programming."
          },
          {
            title: "OTHM Level 5 Diploma in Information Technology",
            href: "/qualifications/information-technology/othm-level-5-diploma-in-information-technology",
            level: "Level 5",
            description: "Second year degree equivalent advancing software engineering and databases."
          },
          {
            title: "OTHM Level 5 Extended Diploma in Information Technology",
            href: "/qualifications/information-technology/othm-level-5-extended-diploma-in-information-technology",
            level: "Level 5 Extended",
            description: "Full 240-credit accelerated university progression pathway."
          },
          {
            title: "OTHM Level 6 Diploma in Information Technology",
            href: "/qualifications/information-technology/othm-level-6-diploma-in-information-technology",
            level: "Level 6 (Degree Final)",
            description: "Honours degree equivalent qualification for senior IT specialists."
          },
          {
            title: "OTHM Level 3 Certificate in Python",
            href: "/qualifications/information-technology/othm-level-3-certificate-in-python",
            level: "Level 3 Certificate",
            description: "Foundational Python syntax, data structures, and automation scripting."
          },
          {
            title: "OTHM Level 6 Certificate in Python",
            href: "/qualifications/information-technology/othm-level-6-certificate-in-python",
            level: "Level 6 Certificate",
            description: "Advanced Python engineering, object design, and enterprise data pipelines."
          },
          {
            title: "OTHM Level 7 Diploma in Data Science",
            href: "/qualifications/information-technology/othm-level-7-diploma-in-data-science",
            level: "Level 7 (Postgraduate)",
            description: "Master big data analytics, statistical modeling, and machine learning."
          }
        ]
      }
    ]
  },
  {
    label: "Workplace Training",
    href: "/workplace-training",
    isDropdown: true,
    items: [
      {
        title: "Customize Courses",
        href: "/workplace-training/customize-courses",
        description: "Bespoke corporate safety and technical curricula aligned to your site hazards."
      },
      {
        title: "Consultation Services",
        href: "/workplace-training/consultation-services",
        description: "Independent audit, hazard evaluation, and HSE compliance advisory."
      },
      {
        title: "FAQs",
        href: "/workplace-training/faqs",
        description: "Frequently asked questions regarding corporate bookings and schedules."
      }
    ]
  },
  {
    label: "Services",
    href: "/services"
  },
  {
    label: "Tax & SECP",
    href: "/tax-secp"
  },
  {
    label: "Certificate Verification",
    href: "/certificate-verification"
  },
  {
    label: "About Us",
    href: "/about-us"
  },
  {
    label: "Contact Now",
    href: "/contact",
    isCTA: true
  }
];
