const dayPlan = [
  {
    day: "Day 1",
    focus: "Baseline Assessment + Acclimatization",
    details:
      "Mobility screening, pack-fit check, breathing drills, and a low-load acclimatization trek with pacing control.",
  },
  {
    day: "Day 2",
    focus: "Strength Endurance + Load Movement",
    details:
      "Step-up circuits, hill carries, core bracing under fatigue, and terrain-specific movement with 10-12 kg loads.",
  },
  {
    day: "Day 3",
    focus: "Navigation + Team Movement",
    details:
      "Map orientation, route selection, communication drills, and controlled group movement through mixed terrain.",
  },
  {
    day: "Day 4",
    focus: "High Altitude Work Capacity",
    details:
      "Interval climbs, recovery windows, nutrition timing, and decision-making tasks under oxygen-limited effort.",
  },
  {
    day: "Day 5",
    focus: "Integrated Field Simulation",
    details:
      "Full mission-style movement block combining planning, execution, and after-action review for individual and team gaps.",
  },
];

const MountainPro = () => {
  return (
    <section className="mountain-pro">
      <header className="mountain-pro__hero">
        <p className="mountain-pro__eyebrow">Mountain Pro</p>
        <h1>Mountain Pro Performance Program</h1>
        <p className="mountain-pro__intro">
          Mountain Pro is an intensive field-led preparation program designed
          for trekkers, expedition members, and operators who need reliable
          performance in demanding mountain terrain.
        </p>
      </header>

      <section className="mountain-pro__section">
        <h2>What is Mountain Pro?</h2>
        <p>
          It is a structured mountain readiness system that combines strength,
          endurance, mobility, breathing control, and terrain skills so you can
          move efficiently at altitude with a pack and make better decisions
          under stress.
        </p>
      </section>

      <section className="mountain-pro__section mountain-pro__section--altitude">
        <h2>High Altitude Operations</h2>
        <p>
          High altitude operations demand more than fitness. The body works with
          reduced oxygen, slower recovery, and higher movement cost. Our
          sessions focus on pacing, load management, terrain judgement, and team
          communication so performance stays consistent in real mountain
          conditions.
        </p>
      </section>

      <section className="mountain-pro__cards">
        <article>
          <h3>Training Objective</h3>
          <ul>
            <li>
              Build durable strength and endurance for long mountain days.
            </li>
            <li>Improve pack-load movement economy and posture control.</li>
            <li>Increase operational confidence in exposed terrain.</li>
          </ul>
        </article>

        <article>
          <h3>Training Methodology</h3>
          <ul>
            <li>Progressive overload with terrain-specific conditioning.</li>
            <li>Scenario-based drills with measurable performance markers.</li>
            <li>Coaching feedback loops with daily correction points.</li>
          </ul>
        </article>

        <article>
          <h3>Style of Movement</h3>
          <ul>
            <li>Rhythmic pacing and breath-synchronized climbing.</li>
            <li>Efficient uphill/downhill mechanics with joint protection.</li>
            <li>Team movement protocols for speed, safety, and control.</li>
          </ul>
        </article>
      </section>

      <section className="mountain-pro__section">
        <h2>What You&apos;ll Learn</h2>
        <div className="mountain-pro__learnGrid">
          <article className="mountain-pro__learnCard">
            <h3>Altitude Readiness</h3>
            <p>
              Practical acclimatization habits, breathing patterns, and effort
              pacing to sustain output at elevation.
            </p>
          </article>
          <article className="mountain-pro__learnCard">
            <h3>Load & Terrain Skills</h3>
            <p>
              Efficient uphill and downhill mechanics, pack handling, and foot
              placement for technical trails.
            </p>
          </article>
          <article className="mountain-pro__learnCard">
            <h3>Operational Decision-Making</h3>
            <p>
              Route judgement, risk checks, and communication protocols for
              safer and faster team movement.
            </p>
          </article>
          <article className="mountain-pro__learnCard">
            <h3>Recovery & Continuity</h3>
            <p>
              Recovery routines, hydration-nutrition timing, and mobility
              sequencing to train consistently.
            </p>
          </article>
        </div>
      </section>

      <section className="mountain-pro__section">
        <h2>Session Plan: Day-to-Day Training</h2>
        <div className="mountain-pro__planGrid">
          {dayPlan.map((item) => (
            <article key={item.day} className="mountain-pro__planCard">
              <p className="mountain-pro__day">{item.day}</p>
              <h3>{item.focus}</h3>
              <p>{item.details}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mountain-pro__contact">
        <h2>Need More Information?</h2>
        <p>
          Contact us directly for batch dates, eligibility, and enrollment
          support.
        </p>
        <div className="mountain-pro__ctaRow">
          <a
            href="https://wa.me/917819983273"
            target="_blank"
            rel="noreferrer"
            className="mountain-pro__cta mountain-pro__cta--whatsapp"
          >
            WhatsApp
          </a>
          <a
            href="https://www.instagram.com/thealpineops"
            target="_blank"
            rel="noreferrer"
            className="mountain-pro__cta"
          >
            Instagram
          </a>
        </div>
      </section>
    </section>
  );
};

export default MountainPro;
