// Public details supplied by the practice. Keep individual registrations separate.
export const MEDICAL_PRACTICE_NUMBER = "1368508";

export const careTeam = [
  {
    id: "dr-mncwango",
    name: "Dr T. Mncwango",
    role: "General Practitioner",
    monogram: "TM",
    focus: "Family GP care",
    description:
      "General consultations, family healthcare and doctor-assessed treatment, with time to discuss your next steps.",
    bookingLabel: "Enquire about Dr Mncwango",
  },
  {
    id: "dr-luthuli",
    name: "Dr M. Luthuli",
    fullName: "Penuel Mondi Luthuli",
    role: "General Practitioner",
    monogram: "ML",
    focus: "Your GP team",
    description:
      "An additional GP within the LifePoint team. Ask reception about consultations and availability with Dr Luthuli.",
    bookingLabel: "Enquire about Dr Luthuli",
  },
  {
    id: "njabulo-mvundla",
    name: "Njabulo Mvundla",
    role: "Dietitian",
    monogram: "NM",
    focus: "Nutrition & weight management",
    description:
      "Dietitian consultations and personalised nutrition support, alongside medical care where appropriate.",
    registration: "DT 1208241",
    bookingLabel: "Enquire about the dietitian",
  },
];

export const practitionerBookingMessage = (name: string) =>
  `Hello LifePoint Medical Centre, I'd like to enquire about an appointment with ${name}. Please confirm their availability and consulting location.`;
