import baseUrl from "../../constants/baseUrl";

const About = () => {
  return (
    <section className="about">
      <div className="hero">
        <div className="heroCopy">
          <span className="kicker">Our Mission</span>
          <h1>About Alpine Ops</h1>
          <p>
            We build resilient teams for environments where calm execution is
            non-negotiable. Our programs blend expedition discipline, tactical
            planning, and field-tested decision making.
          </p>
          <div className="heroStats">
            <div>
              <span>12+</span>
              <p>Years expedition leadership</p>
            </div>
            <div>
              <span>40+</span>
              <p>Program iterations delivered</p>
            </div>
            <div>
              <span>8</span>
              <p>Training terrains across India</p>
            </div>
          </div>
        </div>
        <div
          className="heroMedia"
          style={{
            backgroundImage: `url(${baseUrl}assets/images/main5.jpg)`,
          }}
        />
      </div>

      <div className="values">
        <div>
          <h2>Why We Exist</h2>
          <p>
            Alpine Ops trains professionals to operate in uncertainty, align
            quickly, and move with discipline. We focus on the field skills,
            mindset, and systems that keep teams effective under pressure.
          </p>
        </div>
        <div className="valueGrid">
          <article>
            <h3>Field-Ready Discipline</h3>
            <p>
              Scenario-driven routines that build calm, repeatable execution.
            </p>
          </article>
          <article>
            <h3>Leadership Under Load</h3>
            <p>Decision frameworks designed for ambiguity and time pressure.</p>
          </article>
          <article>
            <h3>Team Resilience</h3>
            <p>
              Shared language, trust, and accountability systems that scale.
            </p>
          </article>
        </div>
      </div>

      <div className="story">
        <div className="storyMedia">
          <img src={`${baseUrl}assets/images/main6.jpg`} alt="Field training" />
        </div>
        <div className="storyCopy">
          <h2>What Our Training Looks Like</h2>
          <p>
            Every engagement is built around terrain immersion, tight feedback
            loops, and measured progression. We use realistic constraints,
            adaptive scenarios, and a coaching cadence that aligns teams fast.
          </p>
          <ul>
            <li>Pre-mission planning and threat assessment.</li>
            <li>Live drills, night movement, and tactical navigation.</li>
            <li>After-action reviews with actionable next steps.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
