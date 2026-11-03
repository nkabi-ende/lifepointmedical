export const SITE_URL = "https://lifepointmedical.co.za";
export const SHARE_IMAGE = `${SITE_URL}/images/lifepoint-social.png`;
export const PRACTICE_TITLE = "LifePoint Medical Center | GP in Mayors Walk & Manor, Pietermaritzburg";
export const PRACTICE_DESCRIPTION = "Dr T. Mncwango consults at Mayors Walk Centre and inside Ringpharm Manor Med Pharmacy in Manor, Pietermaritzburg. Enquire or request an appointment via WhatsApp.";

// These answers are also rendered on the page; keep the two in sync.
export const patientQuestions = [
  { question: "Where does Dr T. Mncwango consult in Pietermaritzburg?", answer: "Dr T. Mncwango consults at two separate locations: LifePoint Medical Center, Unit 02, Mayors Walk Centre, 68 Mayors Walk Road; and a consulting room inside Ringpharm Manor Med Pharmacy, 2 Ohrtmann Road, Manor, Pietermaritzburg." },
  { question: "Where is the new Manor consulting room?", answer: "The Manor consulting room is inside Ringpharm Manor Med Pharmacy, 2 Ohrtmann Road, Manor, Pietermaritzburg, 3201. It is separate from the Mayors Walk surgery. Please request an appointment via WhatsApp before visiting." },
  { question: "Can I visit from Hayfields for a family GP consultation?", answer: "Yes. Patients from Hayfields and across Pietermaritzburg can enquire about appointments at either Mayors Walk Centre or the Manor pharmacy consulting room. Choose your preferred location when booking." },
  { question: "Is the Mayors Walk practice open on weekends?", answer: "The Mayors Walk practice lists Monday to Friday from 08:00 to 19:00, and Saturday and Sunday from 08:00 to 14:00. Consulting times at Ringpharm Manor Med Pharmacy may differ; contact the practice to confirm." },
  { question: "How do I request an appointment?", answer: "Use the WhatsApp booking link or the enquiry form, select Mayors Walk or Manor and send your request. The team will confirm your appointment and consulting hours." },
  { question: "Does LifePoint accept medical aid and cash patients?", answer: "Most major medical aids are accepted via direct billing, and cash consultations are available. Confirm your scheme, benefits and consultation fees when booking." },
];

export const practiceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalClinic",
      "@id": `${SITE_URL}/#practice`,
      name: "LifePoint Medical Center",
      url: `${SITE_URL}/`,
      logo: `${SITE_URL}/images/lifepoint-logo.webp`,
      image: SHARE_IMAGE,
      description: PRACTICE_DESCRIPTION,
      alternateName: ["LifePoint Medical", "Life Point Medical"],
      medicalSpecialty: "PrimaryCare",
      email: "info@lifepointmedical.co.za",
      areaServed: ["Pietermaritzburg", "Mayors Walk", "Manor", "Hayfields", "Prestbury", "Blackridge", "Boughton", "Clarendon"].map(name => ({ "@type": "Place", name })),
      employee: { "@id": `${SITE_URL}/#doctor` },
      subOrganization: { "@id": `${SITE_URL}/#manor-consulting-room` },
      telephone: "+27603196884",
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
    {
      "@type": "MedicalClinic",
      "@id": `${SITE_URL}/#manor-consulting-room`,
      name: "LifePoint Medical Center — Manor consulting room",
      description: "Dr T. Mncwango consults inside Ringpharm Manor Med Pharmacy, 2 Ohrtmann Road, Manor, Pietermaritzburg. Confirm consulting hours by WhatsApp.",
      url: `${SITE_URL}/#location`,
      telephone: "+27603196884",
      medicalSpecialty: "PrimaryCare",
      parentOrganization: { "@id": `${SITE_URL}/#practice` },
      containedInPlace: { "@type": "Pharmacy", name: "Ringpharm Manor Med Pharmacy", address: { "@type": "PostalAddress", streetAddress: "2 Ohrtmann Road, Manor", addressLocality: "Pietermaritzburg", postalCode: "3201", addressRegion: "KwaZulu-Natal", addressCountry: "ZA" } },
      hasMap: "https://www.google.com/maps/search/?api=1&query=Ringpharm+Manor+Med+Pharmacy+2+Ohrtmann+Road+Pietermaritzburg",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Inside Ringpharm Manor Med Pharmacy, 2 Ohrtmann Road, Manor",
        addressLocality: "Pietermaritzburg",
        postalCode: "3201",
        addressRegion: "KwaZulu-Natal",
        addressCountry: "ZA",
      },
    },
    { "@type": "Person", "@id": `${SITE_URL}/#doctor`, name: "Dr T. Mncwango", jobTitle: "General Practitioner", worksFor: { "@id": `${SITE_URL}/#practice` }, workLocation: [{ "@id": `${SITE_URL}/#practice` }, { "@id": `${SITE_URL}/#manor-consulting-room` }], url: `${SITE_URL}/#about` },
    { "@type": "FAQPage", "@id": `${SITE_URL}/#questions`, mainEntity: patientQuestions.map(({ question, answer }) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) },
    { "@type": "WebSite", "@id": `${SITE_URL}/#website`, name: "LifePoint Medical Center", url: `${SITE_URL}/`, publisher: { "@id": `${SITE_URL}/#practice` } },
    { "@type": "WebPage", "@id": `${SITE_URL}/#webpage`, url: `${SITE_URL}/`, name: PRACTICE_TITLE, description: PRACTICE_DESCRIPTION, isPartOf: { "@id": `${SITE_URL}/#website` }, about: { "@id": `${SITE_URL}/#practice` }, inLanguage: "en-ZA", primaryImageOfPage: { "@type": "ImageObject", url: SHARE_IMAGE, width: 1200, height: 630 } },
  ],
};