import logoAsset from "@/assets/lifepoint-uploaded-logo.webp.asset.json";
import shareAsset from "@/assets/lifepoint-share.jpg.asset.json";

export const SITE_URL = "https://lifepointmedical.lovable.app";
export const SHARE_IMAGE = `${SITE_URL}${shareAsset.url}`;
export const PRACTICE_TITLE = "Life Point Medical Center | Family GP in Pietermaritzburg";
export const PRACTICE_DESCRIPTION = "Family GP care at Mayors Walk Centre, Pietermaritzburg. Acute and chronic care, ECGs, family planning and more. Open 7 days. Request an appointment.";

export const practiceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalClinic",
      "@id": `${SITE_URL}/#practice`,
      name: "Life Point Medical Center",
      url: `${SITE_URL}/`,
      logo: `${SITE_URL}${logoAsset.url}`,
      image: SHARE_IMAGE,
      description: PRACTICE_DESCRIPTION,
      medicalSpecialty: "PrimaryCare",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Unit 02, Mayors Walk Centre, 68 Mayors Walk Road",
        addressLocality: "Pietermaritzburg",
        addressRegion: "KwaZulu-Natal",
        addressCountry: "ZA",
      },
      openingHoursSpecification: [
        { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "19:00" },
        { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday", "Sunday"], opens: "08:00", closes: "14:00" },
      ],
    },
    { "@type": "WebSite", "@id": `${SITE_URL}/#website`, name: "Life Point Medical Center", url: `${SITE_URL}/`, publisher: { "@id": `${SITE_URL}/#practice` } },
    { "@type": "WebPage", "@id": `${SITE_URL}/#webpage`, url: `${SITE_URL}/`, name: PRACTICE_TITLE, description: PRACTICE_DESCRIPTION, isPartOf: { "@id": `${SITE_URL}/#website` }, about: { "@id": `${SITE_URL}/#practice` }, inLanguage: "en-ZA", primaryImageOfPage: { "@type": "ImageObject", url: SHARE_IMAGE, width: 1200, height: 630 } },
  ],
};