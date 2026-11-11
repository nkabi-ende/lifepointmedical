// Public details supplied by the practice. Keep individual registrations separate.
export const MEDICAL_PRACTICE_NUMBER = "1368508";

export type CareTeamMember = {
  id: string;
  name: string;
  role: string;
  monogram: string;
  kind: "gp" | "specialist" | "dietitian";
  focus: string;
  description: string;
  bookingLabel: string;
  fullName?: string;
  registration?: string;
  availability?: string;
  bookingNote?: string;
  unnamed?: boolean;
};

export const careTeam: CareTeamMember[] = [
  {
    id: "dr-mncwango",
    name: "Dr T. Mncwango",
    role: "General Practitioner",
    monogram: "TM",
    kind: "gp",
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
    kind: "gp",
    focus: "Your GP team",
    description:
      "An additional GP within the LifePoint team. Ask reception about consultations and availability with Dr Luthuli.",
    bookingLabel: "Enquire about Dr Luthuli",
  },
  {
    id: "dr-cele",
    name: "Dr Cele",
    role: "Dermatologist",
    monogram: "C",
    kind: "specialist",
    focus: "Visiting dermatology consultations",
    description: "Visiting specialist consultations for skin-related concerns.",
    availability: "Last Sunday of every month",
    bookingNote: "Available upon booking. Reception confirms the venue, time and specialist fees.",
    bookingLabel: "Request a dermatology appointment",
  },
  {
    id: "visiting-paediatrician",
    name: "Visiting paediatrician",
    role: "Paediatrician",
    monogram: "PA",
    kind: "specialist",
    unnamed: true,
    focus: "Children’s specialist care",
    description:
      "Consultations with a visiting paediatrician. Reception can help arrange an appointment for your child.",
    availability: "Once a month",
    bookingNote:
      "Available upon booking. Reception confirms the next visiting date, venue and specialist fees.",
    bookingLabel: "Enquire about the next paediatric visit",
  },
  {
    id: "njabulo-mvundla",
    name: "Njabulo Mvundla",
    role: "Dietitian",
    monogram: "NM",
    kind: "dietitian",
    focus: "Nutrition & weight management",
    description:
      "Dietitian consultations and personalised nutrition support, alongside medical care where appropriate.",
    registration: "DT 1208241",
    availability: "Available upon booking",
    bookingNote: "Reception confirms your appointment time and consulting location.",
    bookingLabel: "Enquire about the dietitian",
  },
];

export const visitingAppointments = careTeam.filter((person) => person.kind !== "gp");

export const practitionerSelectionLabel = (id: string) => {
  const person = careTeam.find((member) => member.id === id);
  return person
    ? `${person.name}${person.unnamed ? "" : ` — ${person.role}`}${person.availability ? ` (${person.availability})` : ""}`
    : "Any available practitioner";
};

export const practitionerBookingMessage = (name: string) => {
  const person = careTeam.find((member) => member.name === name);
  const appointmentName = person?.unnamed ? "the visiting paediatrician" : name;
  const schedule = person?.availability ? ` ${person.availability}.` : "";
  return `Hello LifePoint Medical Centre, I'd like to enquire about an appointment with ${appointmentName}.${schedule} Please confirm availability, the appointment date, consulting location and fees.`;
};
