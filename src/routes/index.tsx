import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

import logoAsset from "@/assets/lifepoint-logo-v3.png.asset.json";



export const Route = createFileRoute("/")({
  component: LifePointHome,
  head: () => ({
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const WA_NUMBER = "27603196884";
const WA_LINK = (msg?: string) =>
  `https://wa.me/${WA_NUMBER}${msg ? `?text=${encodeURIComponent(msg)}` : ""}`;

const services = [
  {
    icon: (
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    ),
    title: "General Practice",
    items: [
      "Acute illness & everyday consultations",
      "Preventative screening & vaccinations",
      "Family medicine for all ages",
    ],
  },
  {
    icon: (
      <>
        <path d="M9 11H5a2 2 0 0 0-2 2v7h18v-7a2 2 0 0 0-2-2h-4" />
        <rect x="9" y="3" width="6" height="8" rx="1" />
      </>
    ),
    title: "Chronic Illness Management",
    items: [
      "Hypertension, diabetes & cholesterol",
      "HIV testing, initiation & ongoing care",
      "Long-term case management",
    ],
  },
  {
    icon: (
      <>
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </>
    ),
    title: "ECG & Chest Pain Management",
    items: [
      "In-house 12-lead ECG",
      "Chest pain triage & assessment",
      "Cardiac risk screening",
    ],
  },
  {
    icon: (
      <>
        <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
        <line x1="16" y1="8" x2="2" y2="22" />
        <line x1="17.5" y1="15" x2="9" y2="15" />
      </>
    ),
    title: "Minor Surgical Procedures",
    items: [
      "Circumcisions",
      "Wound suturing & minor trauma",
      "Skin lesion excisions",
    ],
  },
  {
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
      </>
    ),
    title: "Family Planning",
    items: [
      "Contraception counselling & prescriptions",
      "Reproductive & sexual health",
      "Pre-conception consultations",
    ],
  },
  {
    icon: (
      <>
        <circle cx="12" cy="8" r="5" />
        <path d="M20 21a8 8 0 0 0-16 0" />
      </>
    ),
    title: "Male Health",
    items: [
      "Executive men's health checks",
      "Prostate & testicular screening",
      "Sexual & hormonal health",
    ],
  },
  {
    icon: (
      <>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
    title: "Special Interest in Pediatrics",
    items: [
      "Infant & child wellness screening",
      "Immunisations & growth monitoring",
      "Acute pediatric consultations",
    ],
  },
  {
    icon: (
      <>
        <path d="M9 2v6l-3 4v10h12V12l-3-4V2" />
        <path d="M9 2h6" />
      </>
    ),
    title: "IV Drips & Aesthetics",
    items: [
      "IV Glow, hydration & vitamin infusions",
      "Wellness & recovery drips",
      "Skin health consultations",
    ],
  },
  {
    icon: <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />,
    title: "Medical Weight Loss",
    items: [
      "Physician-supervised programmes",
      "Metabolic & bloodwork assessment",
      "Nutrition & lifestyle coaching",
    ],
  },
  {
    icon: (
      <>
        <path d="M10 2v7.31" />
        <path d="M14 9.3V1.99" />
        <path d="M8.5 2h7" />
        <path d="M14 9.3a6.5 6.5 0 1 1-4 0" />
      </>
    ),
    title: "Bloods, DNA & Drug Screening",
    items: [
      "Comprehensive pathology bloods",
      "DNA & genetic screening",
      "Employer & personal drug screening",
    ],
  },
  {
    icon: (
      <>
        <path d="M20 7h-9" />
        <path d="M14 17H5" />
        <circle cx="17" cy="17" r="3" />
        <circle cx="7" cy="7" r="3" />
      </>
    ),
    title: "Occupational Health",
    items: [
      "Pre-employment, periodic & exit medicals",
      "Fitness-to-work assessments",
      "Spirometry, audiometry & vision",
      "Corporate wellness programmes",
    ],
  },
  {
    icon: (
      <>
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </>
    ),
    title: "Chronic & Lifestyle Care",
    items: [
      "Mental health & lifestyle coaching",
      "Preventative wellness planning",
      "Long-term patient partnership",
    ],
  },
];

const credentials = [
  { title: "MBChB Qualified", sub: "Registered medical practitioner" },
  { title: "Basic Surgical Skills", sub: "Accredited training" },
  { title: "BLS & ACLS Accredited", sub: "Current certification" },
  { title: "Occupational Health", sub: "Postgraduate training" },
  { title: "Multilingual Care", sub: "isiZulu, English, Spanish" },
  { title: "Broad Hospital Experience", sub: "Multi-disciplinary training" },
];

function LifePointHome() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loaderGone, setLoaderGone] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const done = () => setLoading(false);
    const t = window.setTimeout(done, 1400);
    if (document.readyState === "complete") window.setTimeout(done, 900);
    else window.addEventListener("load", done, { once: true });
    return () => {
      window.clearTimeout(t);
      window.removeEventListener("load", done);
    };
  }, []);

  useEffect(() => {
    if (loading) return;
    const t = window.setTimeout(() => setLoaderGone(true), 800);
    document.body.style.overflow = "";
    return () => window.clearTimeout(t);
  }, [loading]);

  useEffect(() => {
    if (loading) document.body.style.overflow = "hidden";
  }, [loading]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!rootRef.current) return;
    const els = rootRef.current.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -60px 0px", threshold: 0.1 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const handleNav = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div ref={rootRef}>
      {!loaderGone && (
        <div className={`preloader${loading ? "" : " preloader-hide"}`} aria-hidden="true">
          <div className="preloader-inner">
            <div className="preloader-logo-wrap">
              <img src={logoAsset.url} alt="" className="preloader-logo" />
              <span className="preloader-ring"></span>
            </div>
            <div className="preloader-ecg" aria-hidden="true">
              <svg viewBox="0 0 220 40" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                <path d="M0 20 L60 20 L72 8 L86 32 L100 4 L112 28 L124 20 L220 20" className="preloader-ecg-path" />
              </svg>
            </div>
            <div className="preloader-word">Life Point Medical Center</div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className={`nav${scrolled ? " scrolled" : ""}`} id="nav">
        <div className="nav-inner">
          <a href="#hero" className="nav-brand" onClick={handleNav("hero")}>
            <img src={logoAsset.url} alt="Life Point Medical Center" className="nav-logo" />
          </a>
          <button
            className={`menu-toggle${menuOpen ? " active" : ""}`}
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div className={`nav-links${menuOpen ? " active" : ""}`}>
            <a href="#services" className="nav-link" onClick={handleNav("services")}>Services</a>
            <a href="#about" className="nav-link" onClick={handleNav("about")}>About the Practice</a>
            <a href="#location" className="nav-link" onClick={handleNav("location")}>Location</a>
            <a href="#contact" className="nav-link" onClick={handleNav("contact")}>Contact</a>
            <a href="#contact" className="btn btn-outline btn-sm" onClick={handleNav("contact")}>
              Book an Appointment
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero" id="hero">
        <div className="hero-inner hero-grid">
          <div className="hero-copy">
            <span className="hero-eyebrow reveal">Pietermaritzburg's newest family practice</span>
            <h1 className="reveal reveal-delay-1">Comprehensive care, close to home.</h1>
            <span className="hero-slogan reveal reveal-delay-2">Your health, our focus.</span>
            <p className="hero-sub reveal reveal-delay-2">
              General practice, minor procedures, a special interest in pediatrics, aesthetics and
              occupational health — all under one roof, delivered with the attention your family deserves.
            </p>
            <div className="hero-badge reveal reveal-delay-3">
              Now open — accepting new patients
            </div>
            <div className="hero-ctas reveal reveal-delay-3">
              <a
                href={WA_LINK("Hello Life Point Medical Center, I'd like to book an appointment.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                </svg>
                Book via WhatsApp
              </a>
              <a href="#contact" className="btn btn-outline" onClick={handleNav("contact")}>
                Request Appointment
              </a>
            </div>
            <div className="hero-meta reveal reveal-delay-4">
              <div className="hero-meta-item">
                <svg className="hero-meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>Unit 02, Mayors Walk Centre, Pietermaritzburg</span>
              </div>
              <div className="hero-meta-item">
                <svg className="hero-meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                <span>Medical Aid & Cash Accepted</span>
              </div>
            </div>
          </div>

          {/* At-a-glance card */}
          <aside className="hero-card reveal reveal-delay-2" aria-label="Practice at a glance">
            <div className="hero-card-header">
              <span className="hero-card-eyebrow">At a glance</span>
              <span className="hero-card-status"><span className="hero-card-dot" /> Open today</span>
            </div>
            <div className="hero-card-hours">
              <div className="hours-row"><span className="hours-day">Mon – Fri</span><span>08:00 – 19:00</span></div>
              <div className="hours-row"><span className="hours-day">Saturday</span><span>08:00 – 14:00</span></div>
              <div className="hours-row"><span className="hours-day">Sunday</span><span>08:00 – 14:00</span></div>
            </div>
            <div className="hero-card-divider" />
            <span className="hero-card-eyebrow">Popular care</span>
            <div className="hero-chip-row">
              <span className="hero-chip">General Practice</span>
              <span className="hero-chip">ECG & Chest Pain</span>
              <span className="hero-chip">IV Drips</span>
              <span className="hero-chip">Bloods & DNA</span>
              <span className="hero-chip">Weight Loss</span>
              <span className="hero-chip">Family Planning</span>
            </div>
            <a
              href={WA_LINK("Hello Life Point Medical Center, I'd like to enquire about an appointment.")}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-card-cta"
            >
              <span>Chat with the practice</span>
              <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </aside>
        </div>
      </section>

      {/* Trust strip */}
      <section className="trust-strip" aria-label="Practice highlights">
        <div className="trust-inner">
          {[
            { n: "13+", l: "Services under one roof" },
            { n: "3", l: "Rooms — 2 consult, 1 procedure" },
            { n: "7 days", l: "Weekly availability" },
            { n: "3 languages", l: "isiZulu · English · Spanish" },
          ].map((t) => (
            <div key={t.l} className="trust-item">
              <div className="trust-n">{t.n}</div>
              <div className="trust-l">{t.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="about" id="about">
        <div className="section-inner">
          <div className="about-grid">
            <div className="about-visual reveal">
              <div className="about-frame double-frame">
                <div className="about-monogram" aria-hidden="true">
                  <svg viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="60" cy="60" r="52" opacity="0.15" />
                    <path d="M18 62 h18 l6 -14 l10 28 l8 -20 l6 12 h36" />
                    <circle cx="86" cy="68" r="3.5" fill="currentColor" stroke="none" />
                  </svg>
                </div>
                <div className="about-name">Your Family Physician</div>
                <div className="about-title">MBChB · Family Practice</div>
              </div>
            </div>
            <div className="about-content">
              <span className="label reveal">About the Practice</span>
              <div className="hairline reveal"></div>
              <h2 className="reveal reveal-delay-1">A physician built for whole-family care.</h2>
              <div className="about-text reveal reveal-delay-1">
                <p>
                  Life Point is led by an MBChB-qualified family physician with a broad, rigorous
                  clinical foundation built across major KwaZulu-Natal hospitals. Training spans
                  internal medicine, surgery, a special interest in pediatrics, orthopaedics,
                  anaesthesia, family medicine, and obstetrics & gynaecology — giving the depth to
                  treat patients of all ages with confidence and care.
                </p>
                <p>
                  Additional training in Occupational Health, Basic Surgical Skills, and current
                  BLS & ACLS accreditation round out a clinically versatile practice. Consultations
                  are offered in isiZulu, English, and Spanish, ensuring every patient feels heard
                  in their own language.
                </p>
              </div>
              <div className="credentials">
                {credentials.map((c, i) => (
                  <div key={c.title} className={`credential reveal reveal-delay-${(i % 4) + 1}`}>
                    <svg className="credential-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                      <path d="M6 12v5c0 1.66 1.79 3 4 3s4-1.34 4-3v-5" />
                    </svg>
                    <div>
                      <div className="credential-text">{c.title}</div>
                      <span className="credential-sub">{c.sub}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Family Promise band */}
      <section className="promise" aria-label="Our promise">
        <div className="promise-inner">
          <svg className="promise-mark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
          <p className="promise-quote">
            &ldquo;We treat every patient like family — with time, honesty and continuity of care.&rdquo;
          </p>
          <span className="promise-sign">— The Life Point Practice</span>
        </div>
      </section>

      {/* Services */}
      <section className="services" id="services">
        <div className="section-inner">
          <div className="section-header">
            <span className="label reveal">What We Treat</span>
            <div className="hairline hairline-center reveal"></div>
            <h2 className="reveal reveal-delay-1">Services</h2>
            <p className="reveal reveal-delay-2">
              A full spectrum of family healthcare, from everyday consultations to specialised
              procedures and corporate wellness.
            </p>
          </div>
          <div className="services-grid">
            {services.map((s, i) => (
              <div key={s.title} className={`service-card reveal reveal-delay-${(i % 3) + 1}`}>
                <svg className="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                  {s.icon}
                </svg>
                <h3>{s.title}</h3>
                <ul>
                  {s.items.map((it) => <li key={it}>{it}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="why" id="why">
        <div className="why-inner">
          <div className="why-header">
            <span className="label" style={{ color: "var(--teal)" }}>Why Life Point</span>
            <div className="hairline hairline-center" style={{ background: "rgba(129,216,208,0.4)" }}></div>
            <h2>Built for better care.</h2>
          </div>
          <div className="why-grid">
            {[
              { t: "Three Dedicated Rooms", d: "Two consultation rooms plus a procedure room — minimal wait, more privacy.", p: <><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></> },
              { t: "Free Secure Parking", d: "On-site parking at Mayors Walk Centre, shared with Spar, Post Office and pharmacy.", p: <><rect x="1" y="5" width="22" height="14" rx="7" ry="7" /><circle cx="12" cy="12" r="3" /></> },
              { t: "Broad Clinical Scope", d: "Comprehensive in-house care means fewer outward referrals for your family.", p: <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /> },
              { t: "Multilingual Care", d: "Consultations in isiZulu, English, and Spanish — because understanding matters.", p: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /> },
            ].map((w, i) => (
              <div key={w.t} className={`why-item reveal reveal-delay-${i}`}>
                <svg className="why-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                  {w.p}
                </svg>
                <h3>{w.t}</h3>
                <p>{w.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patient info */}
      <section className="patient-info" id="patient-info">
        <div className="section-inner">
          <div className="section-header">
            <span className="label reveal">Patient Information</span>
            <div className="hairline hairline-center reveal"></div>
            <h2 className="reveal reveal-delay-1">What to Expect</h2>
            <p className="reveal reveal-delay-2">Everything you need to know before your first visit.</p>
          </div>
          <div className="info-grid">
            <div className="info-card reveal">
              <h3><span className="dot"></span>Medical Aid & Cash</h3>
              <p>Most major medical aids accepted via direct billing. Cash consultations also available. Please confirm your specific scheme when booking.</p>
            </div>
            <div className="info-card reveal reveal-delay-1">
              <h3><span className="dot"></span>Operating Hours</h3>
              <div className="hours-row"><span className="hours-day">Monday – Friday</span><span>08:00 – 19:00</span></div>
              <div className="hours-row"><span className="hours-day">Saturday</span><span>08:00 – 14:00</span></div>
              <div className="hours-row"><span className="hours-day">Sunday</span><span>08:00 – 14:00</span></div>
            </div>
            <div className="info-card reveal reveal-delay-2">
              <h3><span className="dot"></span>What to Bring</h3>
              <p>Please bring your valid ID and your medical aid card (if applicable). For occupational health assessments, bring any relevant employer documentation.</p>
            </div>
            <div className="info-card reveal">
              <h3><span className="dot"></span>First Visit</h3>
              <p>Walk-ins are welcome, but booking ahead ensures you skip the queue. New patient forms can be completed on arrival.</p>
            </div>
            <div className="info-card reveal reveal-delay-1">
              <h3><span className="dot"></span>Parking & Access</h3>
              <p>Free on-site parking at Mayors Walk Centre. Easily accessible from Prestbury, Blackridge, Signal Hill, Boughton, Clarendon, and commuter routes from Mpumuza, Caluza and Sweetwaters.</p>
            </div>
            <div className="info-card reveal reveal-delay-2">
              <h3><span className="dot"></span>Emergencies</h3>
              <p>For life-threatening emergencies, please call emergency services or proceed to your nearest hospital casualty department.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="location" id="location">
        <div className="section-inner">
          <div className="section-header">
            <span className="label reveal">Find Us</span>
            <div className="hairline hairline-center reveal"></div>
            <h2 className="reveal reveal-delay-1">Location</h2>
          </div>
          <div className="location-grid">
            <div className="map-container reveal">
              <iframe
                title="Life Point Medical Center map"
                src="https://www.google.com/maps?q=68+Mayors+Walk+Road,+Pietermaritzburg&output=embed"
                style={{ width: "100%", height: "100%", border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="location-details reveal reveal-delay-1">
              <h3>Mayors Walk Centre</h3>
              <p>
                Conveniently located for residents of Prestbury, Blackridge, Signal Hill, Boughton,
                and Clarendon, as well as commuters travelling from Mpumuza, Caluza and Sweetwaters.
              </p>
              <div className="location-address">
                <p>Unit 02, Mayors Walk Centre</p>
                <span>68 Mayors Walk Road<br />Pietermaritzburg<br />KwaZulu-Natal, South Africa</span>
              </div>
              <p style={{ fontSize: "0.9rem" }}>
                The centre shares parking with Spar, the Post Office, and the pharmacy. Look for
                the Life Point signage at Unit 02.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="contact" id="contact">
        <div className="section-inner">
          <div className="section-header">
            <span className="label reveal">Get in Touch</span>
            <div className="hairline hairline-center reveal"></div>
            <h2 className="reveal reveal-delay-1">Contact / Booking</h2>
            <p className="reveal reveal-delay-2">
              Book an appointment or send us a message. We'll confirm your slot within one business
              day.
            </p>
          </div>
          <div className="contact-grid">
            <form
              className="contact-form reveal"
              onSubmit={(e) => {
                e.preventDefault();
                const f = e.currentTarget as HTMLFormElement;
                const data = new FormData(f);
                const lines = [
                  "Hello Life Point Medical Center, I'd like to request an appointment.",
                  "",
                  `Name: ${data.get("name") || "—"}`,
                  `Phone: ${data.get("phone") || "—"}`,
                  `Payment: ${data.get("payment") || "—"}`,
                  `Preferred date: ${data.get("date") || "—"}`,
                  `Preferred time: ${data.get("time") || "—"}`,
                  `Message: ${data.get("message") || "—"}`,
                ];
                window.open(WA_LINK(lines.join("\n")), "_blank", "noopener");
              }}
            >
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" name="name" placeholder="Your name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" placeholder="Your phone number" required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="payment">Payment Method</label>
                  <select id="payment" name="payment" required defaultValue="">
                    <option value="" disabled>Select…</option>
                    <option value="medical-aid">Medical Aid</option>
                    <option value="cash">Cash</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="date">Preferred Date</label>
                  <input type="date" id="date" name="date" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="time">Preferred Time</label>
                <select id="time" name="time" defaultValue="">
                  <option value="" disabled>Select preferred time…</option>
                  <option value="morning">Weekday Morning (08:00 – 12:00)</option>
                  <option value="afternoon">Weekday Afternoon (12:00 – 19:00)</option>
                  <option value="weekend">Weekend (08:00 – 14:00)</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message (optional)</label>
                <textarea id="message" name="message" placeholder="Reason for visit, symptoms, or any special requirements…" />
              </div>
              <button type="submit" className="btn btn-solid" style={{ alignSelf: "flex-start" }}>
                Request Appointment
              </button>
            </form>
            <div className="contact-info reveal reveal-delay-1">
              <div className="contact-method">
                <h3>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  Phone
                </h3>
                <p>Call the practice directly during operating hours.</p>
                <p style={{ marginTop: "0.5rem" }}>
                  <a href="tel:+2733">Phone number available on booking</a>
                </p>
              </div>
              <div className="contact-method">
                <h3>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  Email
                </h3>
                <p>For non-urgent enquiries and corporate wellness bookings.</p>
                <p style={{ marginTop: "0.5rem" }}>
                  <a href="mailto:info@lifepointmedical.co.za">info@lifepointmedical.co.za</a>
                </p>
              </div>
              <div className="contact-method">
                <h3>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                  WhatsApp
                </h3>
                <p>Fastest way to reach the practice. Message us for quick enquiries and appointment requests.</p>
                <p style={{ marginTop: "0.5rem" }}>
                  <a href={WA_LINK("Hello Life Point Medical Center, I'd like to enquire.")} target="_blank" rel="noopener noreferrer">
                    Open WhatsApp chat
                  </a>
                </p>
              </div>
              <div className="contact-actions">
                <a
                  href={WA_LINK("Hello Life Point Medical Center, I'd like to book an appointment.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-solid"
                  style={{ gap: "0.5rem" }}
                >
                  <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Message on WhatsApp
                </a>
                <a
                  href={WA_LINK("Hello Life Point Medical Center, I'd like to speak with the practice.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                  style={{ gap: "0.5rem" }}
                >
                  <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  Chat with the Practice
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer" id="footer">
        <div className="footer-inner">
          <div className="footer-grid">
            <div className="footer-brand">
              <img src={logoAsset.url} alt="Life Point Medical Center" />
              <p>Pietermaritzburg's newest family practice. Comprehensive care, close to home. Your health, our focus.</p>
            </div>
            <div className="footer-col">
              <h4>Practice</h4>
              <ul>
                <li><a href="#services" onClick={handleNav("services")}>Services</a></li>
                <li><a href="#about" onClick={handleNav("about")}>About the Practice</a></li>
                <li><a href="#patient-info" onClick={handleNav("patient-info")}>Patient Info</a></li>
                <li><a href="#contact" onClick={handleNav("contact")}>Book Appointment</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Contact</h4>
              <ul>
                <li><a href="#location" onClick={handleNav("location")}>Unit 02, Mayors Walk Centre</a></li>
                <li><a href="#location" onClick={handleNav("location")}>68 Mayors Walk Road</a></li>
                <li><a href="#location" onClick={handleNav("location")}>Pietermaritzburg</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Hours</h4>
              <ul>
                <li><a href="#patient-info" onClick={handleNav("patient-info")}>Mon–Fri: 08:00–19:00</a></li>
                <li><a href="#patient-info" onClick={handleNav("patient-info")}>Sat: 08:00–14:00</a></li>
                <li><a href="#patient-info" onClick={handleNav("patient-info")}>Sun: 08:00–14:00</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} Lifepoint Medical (Pty) Ltd. All rights reserved.</p>
            <p>Life Point Medical Center · Family GP Practice</p>
          </div>
        </div>
      </footer>

      {/* Mobile sticky CTA */}
      <div className="mobile-cta">
        <a
          href={WA_LINK("Hello Life Point Medical Center, I'd like to book an appointment.")}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline btn-sm"
        >
          WhatsApp
        </a>
        <a href="#contact" className="btn btn-solid btn-sm" onClick={handleNav("contact")}>Book</a>
      </div>
    </div>
  );
}
