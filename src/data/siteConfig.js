export const siteConfig = {
  name: "MOST Services Pvt Ltd",
  tagline: "Professional Qualifications, Workplace Training & Corporate Advisory",
  logo: "/images/most-logo.png",
  phone: "+92514862414",
  phoneDisplay: "+92 (51) 486-2414",
  email: "info@mostservs.com",
  whatsAppPrimary: "923365555683",
  whatsAppPrimaryDisplay: "+92 336 5555683",
  whatsAppSecondary: "923365555628",
  whatsAppSecondaryDisplay: "+92 336 5555628",
  address: {
    suite: "Suite 30",
    floor: "3rd Floor",
    building: "Twin City Plaza",
    area: "I-8 Markaz",
    city: "Islamabad",
    postalCode: "44000",
    country: "Pakistan",
    line1: "Suite 30, 3rd Floor, Twin City Plaza",
    line2: "I-8 Markaz",
    full: "Suite 30, 3rd Floor, Twin City Plaza, I-8 Markaz, Islamabad 44000, Pakistan"
  },
  businessHours: {
    days: "Monday – Friday",
    hours: "9:00 AM – 5:00 PM",
    timezone: "PKT",
    full: "Monday – Friday: 9:00 AM – 5:00 PM (PKT)"
  },
  contact: {
    address: {
      line1: "Suite 30, 3rd Floor, Twin City Plaza",
      line2: "I-8 Markaz",
      city: "Islamabad",
      postalCode: "44000",
      country: "Pakistan",
      full: "Suite 30, 3rd Floor, Twin City Plaza, I-8 Markaz, Islamabad 44000, Pakistan"
    },
    businessHours: {
      days: "Monday – Friday",
      hours: "9:00 AM – 5:00 PM",
      timezone: "PKT (Islamabad Time)",
      full: "Monday – Friday: 9:00 AM – 5:00 PM (PKT)"
    },
    email: "info@mostservs.com",
    phone: "+92514862414",
    phoneDisplay: "+92 (51) 486-2414",
    whatsAppPrimary: "923365555683",
    whatsAppPrimaryDisplay: "+92 336 5555683",
    whatsAppSecondary: "923365555628",
    whatsAppSecondaryDisplay: "+92 336 5555628"
  },
  colors: {
    primaryOrange: "#F37021",
    secondaryBlue: "#008AD2",
    darkNavy: "#070E1A",
    warmPeach: "#FFF7ED"
  },
  getWhatsAppInquiryLink: function (courseTitle = "", inquiryType = "course") {
    const number = "923365555683";
    let text = "";

    if (inquiryType === "course" && courseTitle) {
      text = `Hello MOST Services, I would like to know the latest fees, duration, and admission details for ${courseTitle}. Please guide me.`;
    } else if (inquiryType === "workplace") {
      text = `Hello MOST Services, I am interested in customized workplace training for my organization. Please guide me.`;
    } else if (inquiryType === "consultation") {
      text = `Hello MOST Services, I would like to request a consultation. Please guide me.`;
    } else {
      text = `Hello MOST Services, I have an inquiry regarding your training programmes and services. Please guide me.`;
    }

    return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
  }
};

/**
 * Generates an official WhatsApp inquiry link with encoded text
 * Also exported as standalone function for flexibility
 */
export function getWhatsAppInquiryLink(courseTitle = "", inquiryType = "course") {
  return siteConfig.getWhatsAppInquiryLink(courseTitle, inquiryType);
}
