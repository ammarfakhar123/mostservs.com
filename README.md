# MOST Services Pvt. Ltd. — Health, Safety & Environmental Training Website

A pixel-faithful, responsive conversion of the Figma design for **MOST Services Pvt. Ltd.** built with:
- **HTML5 & CSS3**
- **React 18**
- **Tailwind CSS**
- **Vite**
- **Lucide Icons**

---

## 🚀 Quick Start (2 Ways to Run)

### Option 1: Instant Standalone Version (No Node / npm Required)
Double-click or open directly in any browser:
```
most-services-website/index.standalone.html
```
- Includes all styling, responsive layout, interactive delivery-mode switcher, course filter, dynamic review slider, and enquiry modals.
- Zero installation or server needed!

### Option 2: Full React + Tailwind CSS App (Vite)
To run the modern modular React development environment:
```bash
# 1. Navigate to the project directory
cd most-services-website

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev

# 4. Build for production
npm run build
```

---

## 📂 Project Architecture

```
most-services-website/
├── index.html                 # React Vite Entry HTML
├── index.standalone.html      # Ready-to-open Standalone HTML+Tailwind+JS file
├── package.json               # Dependencies and build scripts
├── postcss.config.js          # PostCSS configuration
├── tailwind.config.js         # Custom theme: colors, shadows & typography
├── vite.config.js             # Vite bundler configuration
│
├── public/
│   └── images/
│       ├── most-logo.png          # Original MOST Services logo
│       ├── hero-seminar.png       # Lecture & seminar training image
│       ├── hero-collaboration.png # Team risk assessment image
│       └── card-gradient.png      # Figma background visual
│
└── src/
    ├── main.jsx               # React entry point
    ├── App.jsx                # Main layout composition
    ├── index.css              # Tailwind base layers & dark-card utilities
    ├── data/
    │   └── mockData.js        # Programmes, testimonials, delivery modes & stats
    └── components/
        ├── Navbar.jsx             # Sticky navigation with mobile drawer
        ├── Hero.jsx               # H1, badges, CTA buttons & Bento visual stack
        ├── LearningModes.jsx      # Online, In-House, Live Classroom tab switcher
        ├── ProgrammesSection.jsx  # Category filter pills, featured & 6-card grid
        ├── ProvenAtScale.jsx      # Animated count-up stat cards & accreditations
        ├── Testimonials.jsx       # Featured graduate review & stacked cards
        ├── ContactCTA.jsx         # Gradient CTA section + consultation form
        ├── Footer.jsx             # 5-column navigation, newsletter & legal
        └── EnquiryModal.jsx       # Dynamic popup modal for course bookings
```

---

## 🎨 Design System Implementation

| Design Element | Values & Specifications |
|---|---|
| **Primary Typography** | Plus Jakarta Sans & Inter |
| **Dark Theme Cards** | `#070E1A` with subtle `rgba(255,255,255,0.08)` borders |
| **Brand Colors** | Electric Blue (`#0F7BFF`), Cyan/Sky (`#4B9EFF`), Teal (`#2DD4BF`), Amber (`#F59E0B`) |
| **Accreditation Badges** | NEBOSH Gold Learning Partner, IOSH Approved Centre, ISO 45001 & 9001 |
| **Micro-Interactions** | Dynamic delivery mode tabs, category filtering, testimonial rotator, interactive modal dialogs |
