import { CONTACT, SOCIALS } from "@/lib/contact";

const linkedin = SOCIALS.find((s) => s.id === "linkedin");

const schema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "More Than Points",
  url: CONTACT.siteUrl,
  logo: `${CONTACT.siteUrl}logo-morethanpoints.webp`,
  email: CONTACT.email,
  telephone: CONTACT.phoneE164,
  founder: {
    "@type": "Person",
    name: "Angela O'Sullivan",
    sameAs: linkedin?.url,
  },
  sameAs: SOCIALS.filter((s) => s.id === "facebook" || s.id === "instagram").map((s) => s.url),
};

export default function OrganizationSchema() {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
}
