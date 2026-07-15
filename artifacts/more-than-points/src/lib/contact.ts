export const CONTACT = {
  phoneDisplay: "+353 83 360 1839",
  phoneHref: "tel:+353833601839",
  phoneE164: "+353833601839",
  email: "info@morethanpoints.ie",
  whatsappUrl: "https://wa.me/message/TZFWACF6K4RLJ1",
  siteUrl: "https://morethanpoints.ie/",
} as const;

export const SOCIALS = [
  { id: "facebook", label: "Facebook", url: "https://www.facebook.com/morethanpoints/" },
  { id: "instagram", label: "Instagram", url: "https://www.instagram.com/morethanpointscoaching/" },
  { id: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/in/angela-o-sullivan/" },
  { id: "whatsapp", label: "WhatsApp", url: "https://wa.me/message/TZFWACF6K4RLJ1" },
] as const;

export type SocialId = (typeof SOCIALS)[number]["id"];
