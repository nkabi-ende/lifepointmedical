export const SITE_URL = "https://lifepointmedical.co.za";
export const SHARE_IMAGE = `${SITE_URL}/images/lifepoint-social.png`;
export const PRACTICE_TITLE = "Pietermaritzburg Family GP | Dr T. Mncwango | Life Point";
export const PRACTICE_DESCRIPTION = "Dr T. Mncwango, family GP at Life Point Medical Center, Mayors Walk, Pietermaritzburg (PMB). Open 7 days. Medical aid and cash. Book via WhatsApp.";

// These answers are also rendered on the page; keep the two in sync.
export const patientQuestions = [
  { question: "Where does Dr T. Mncwango practise in Pietermaritzburg?", answer: "Dr T. Mncwango is the family GP at Life Point Medical Center, Unit 02, Mayors Walk Centre, 68 Mayors Walk Road, Pietermaritzburg, KwaZulu-Natal." },
  { question: "Can I visit from Hayfields for a family GP consultation?", answer: "Yes. Patients from Hayfields and across PMB can request an appointment at Life Point Medical Center. The practice is at Mayors Walk Centre, not in Hayfields. Use the map below to plan your journey." },
  { question: "Is the Mayors Walk practice open on weekends?", answer: "The practice is open Monday to Friday from 08:00 to 19:00, and Saturday and Sunday from 08:00 to 14:00. Contact the practice to confirm appointment availability and public holiday hours." },
  { question: "How do I book a family doctor in PMB?", answer: "Use the WhatsApp booking button or the appointment request form. Send your request in WhatsApp and wait for the practice to confirm your appointment. Walk-ins are welcome, subject to availability." },
  { question: "Does Life Point accept medical aid and cash patients?", answer: "Most major medical aids are accepted via direct billing, and cash consultations are available. Confirm your specific scheme, benefits and consultation fees with the practice when booking." },
];

export const practiceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalClinic",
      "@id": `${SITE_URL}/#practice`,
      name: "Life Point Medical Center",
      url: `${SITE_URL}/`,
      logo: `${SITE_URL}/images/lifepoint-logo.webp`,
      image: SHARE_IMAGE,
      description: PRACTICE_DESCRIPTION,
      alternateName: ["LifePoint Medical", "Life Point Medical"],
      medicalSpecialty: "PrimaryCare",
      email: "info@lifepointmedical.co.za",
      areaServed: ["Pietermaritzburg", "Mayors Walk", "Hayfields", "Prestbury", "Blackridge", "Boughton", "Clarendon"].map(name => ({ "@type": "Place", name })),
      employee: { "@id": `${SITE_URL}/#doctor` },
      hasMap: "https://www.google.com/maps?q=68+Mayors+Walk+Road,+Pietermaritzburg",
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
    { "@type": "Person", "@id": `${SITE_URL}/#doctor`, name: "Dr T. Mncwango", jobTitle: "General Practitioner", worksFor: { "@id": `${SITE_URL}/#practice` }, url: `${SITE_URL}/#about` },
    { "@type": "FAQPage", "@id": `${SITE_URL}/#questions`, mainEntity: patientQuestions.map(({ question, answer }) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) },
    { "@type": "WebSite", "@id": `${SITE_URL}/#website`, name: "Life Point Medical Center", url: `${SITE_URL}/`, publisher: { "@id": `${SITE_URL}/#practice` } },
    { "@type": "WebPage", "@id": `${SITE_URL}/#webpage`, url: `${SITE_URL}/`, name: PRACTICE_TITLE, description: PRACTICE_DESCRIPTION, isPartOf: { "@id": `${SITE_URL}/#website` }, about: { "@id": `${SITE_URL}/#practice` }, inLanguage: "en-ZA", primaryImageOfPage: { "@type": "ImageObject", url: SHARE_IMAGE, width: 1200, height: 630 } },
  ],
};