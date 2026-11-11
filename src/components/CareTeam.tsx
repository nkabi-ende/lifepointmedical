import { ArrowUpRight, Baby, CalendarDays, Leaf, ScanFace, Stethoscope } from "lucide-react";
import { careTeam, MEDICAL_PRACTICE_NUMBER, practitionerBookingMessage } from "@/lib/care-team";

type CareTeamProps = {
  whatsappLink: (message?: string) => string;
};

export function CareTeam({ whatsappLink }: CareTeamProps) {
  return (
    <section className="care-team" id="team" aria-labelledby="care-team-heading">
      <div className="section-inner">
        <div className="care-team-heading">
          <div>
            <span className="label reveal">The people behind your care</span>
            <div className="hairline reveal" />
            <h2 id="care-team-heading" className="reveal reveal-delay-1">
              Meet our care team.
            </h2>
          </div>
          <p className="reveal reveal-delay-2">
            Your GP team, visiting specialists and dietitian support. Find the right next step, with
            appointment details confirmed by reception.
          </p>
        </div>

        {["gp", "visiting"].map((group) => (
          <div className="care-team-group" key={group}>
            <h3 className="care-team-group-label">
              {group === "gp"
                ? "Your general practitioners"
                : "Specialist & dietitian appointments"}
            </h3>
            <div className={`care-team-grid care-team-grid--${group}`}>
              {careTeam
                .filter((person) => (group === "gp" ? person.kind === "gp" : person.kind !== "gp"))
                .map((person, index) => {
                  const Icon =
                    person.role === "Dietitian"
                      ? Leaf
                      : person.role === "Paediatrician"
                        ? Baby
                        : person.role === "Dermatologist"
                          ? ScanFace
                          : Stethoscope;
                  return (
                    <article
                      id={person.id}
                      key={person.id}
                      className={`care-team-card reveal reveal-delay-${index + 1}`}
                      aria-labelledby={`${person.id}-name`}
                    >
                      <div className="care-team-card-top" aria-hidden="true">
                        <span className="care-team-monogram">{person.monogram}</span>
                        <Icon size={24} strokeWidth={1.4} />
                      </div>
                      <span className="care-team-role">{person.role}</span>
                      <h3 id={`${person.id}-name`}>{person.name}</h3>
                      {person.fullName && <p className="care-team-full-name">{person.fullName}</p>}
                      <span className="care-team-focus">{person.focus}</span>
                      <p className="care-team-description">{person.description}</p>
                      {person.availability && (
                        <div className="care-team-availability">
                          <CalendarDays size={17} aria-hidden="true" />
                          <div>
                            <strong>{person.availability}</strong>
                            <p>{person.bookingNote}</p>
                          </div>
                        </div>
                      )}
                      {person.registration && (
                        <p className="care-team-registration">Practice no. {person.registration}</p>
                      )}
                      <a
                        href={whatsappLink(practitionerBookingMessage(person.name))}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="care-team-booking"
                      >
                        {person.bookingLabel}
                        <ArrowUpRight size={17} aria-hidden="true" />
                      </a>
                    </article>
                  );
                })}
            </div>
          </div>
        ))}

        <div className="care-team-note reveal">
          <span>Medical practice no. {MEDICAL_PRACTICE_NUMBER}</span>
          <p>
            Reception confirms your practitioner, visiting dates, consulting venue and fees. Medical
            aid cover varies by plan and service.
          </p>
        </div>
      </div>
    </section>
  );
}
