import { ArrowUpRight, Leaf, Stethoscope } from "lucide-react";
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
            Two GPs. Dedicated dietitian support. A team to help you find the right next step for
            your health.
          </p>
        </div>

        <div className="care-team-grid">
          {careTeam.map((person, index) => {
            const Icon = person.role === "Dietitian" ? Leaf : Stethoscope;
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
                {"fullName" in person && <p className="care-team-full-name">{person.fullName}</p>}
                <span className="care-team-focus">{person.focus}</span>
                <p className="care-team-description">{person.description}</p>
                {"registration" in person && (
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

        <div className="care-team-note reveal">
          <span>Medical practice no. {MEDICAL_PRACTICE_NUMBER}</span>
          <p>
            Reception will confirm your practitioner, service and consulting location when booking.
          </p>
        </div>
      </div>
    </section>
  );
}
