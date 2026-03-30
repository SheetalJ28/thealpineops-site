import { useState } from "react";
import mountainProData from "../../data/mountainProData.json";

type ChatMessage = {
  speaker: "System" | "Mentor" | "Trainee";
  tone?: "accent" | "muted";
  text: string;
};

type ItineraryItem = {
  day: string;
  focus: string;
  details: string;
};

type Program = {
  id: number;
  label: string;
  title: string;
  tagline: string;
  duration: string;
  difficulty: string;
  entryStandard: string;
  summary: string;
  outcome: string;
  trainingObjectives: string[];
  chat: ChatMessage[];
  itinerary: ItineraryItem[];
};

const { programs, mentorshipPoints } = mountainProData as {
  programs: Program[];
  mentorshipPoints: string[];
};

const MountainPro = () => {
  const [activeProgram, setActiveProgram] = useState(0);
  const currentProgram = programs[activeProgram];

  return (
    <section className="mountain-pro">
      <header className="mountain-pro__hero">
        <div className="mountain-pro__heroCopy">
          <p className="section-eyebrow">Mountain Pro</p>
          <h1>Train for the mountains. Prepare for life.</h1>
          <p className="mountain-pro__intro">
            Mountain Pro is Alpine Ops&apos; structured outdoor training system
            built around fitness, mentorship, and progressive exposure to real
            mountain environments. Winters we train. Summers we operate.
          </p>
        </div>
        <div
          className="mountain-pro__heroStats"
          aria-label="Mountain Pro highlights"
        >
          <div>
            <span>4</span>
            <p>program levels</p>
          </div>
          <div>
            <span>3-10</span>
            <p>days per program</p>
          </div>
          <div>
            <span>1</span>
            <p>progressive pathway</p>
          </div>
        </div>
      </header>

      <section className="mountain-pro__flow">
        <div className="mountain-pro__flowIntro">
          <p className="section-eyebrow">Program Selector</p>
          <h2>
            Select a Mountain Pro level to view its difficulty and entry criteria
          </h2>
          <p>
            Each program is a distinct stage in the Mountain Pro progression.
            Users can enter at the level that aligns with their current
            capability, though the full pathway is designed to build in
            sequence.
          </p>
        </div>

        <div className="mountain-pro__flowLayout">
          <div
            className="mountain-pro__mountain"
            aria-label="Mountain progression programs"
          >
            {programs.map((program, index) => {
              const isActive = index === activeProgram;

              return (
                <button
                  key={program.id}
                  type="button"
                  className={`mountain-pro__stage${isActive ? " is-active" : ""}`}
                  onClick={() => setActiveProgram(index)}
                >
                  <span className="mountain-pro__stageNumber">
                    {String(program.id).padStart(2, "0")}
                  </span>
                  <div className="mountain-pro__stageBody">
                    <p>{program.label}</p>
                    <strong>{program.difficulty}</strong>
                  </div>
                </button>
              );
            })}
          </div>

          <article className="mountain-pro__chatPanel">
            <div className="mountain-pro__chatHeader">
              <div>
                <p className="section-eyebrow">
                  Program {String(currentProgram.id).padStart(2, "0")}
                </p>
                <h3>{currentProgram.label}</h3>
              </div>
              <p>{currentProgram.outcome}</p>
            </div>

            <div className="mountain-pro__metaGrid">
              <article>
                <span>Duration</span>
                <strong>{currentProgram.duration}</strong>
              </article>
              <article>
                <span>Difficulty</span>
                <strong>{currentProgram.difficulty}</strong>
              </article>
            </div>

            <div className="mountain-pro__chatThread" aria-live="polite">
              {currentProgram.chat.map((message, index) => (
                <article
                  key={`${currentProgram.id}-${index}`}
                  className={`mountain-pro__bubble mountain-pro__bubble--${message.speaker.toLowerCase()}${
                    message.tone ? ` is-${message.tone}` : ""
                  }`}
                >
                  <span>{message.speaker}</span>
                  <p>{message.text}</p>
                </article>
              ))}
            </div>

            <div className="mountain-pro__chatSummary">
              <h4>{currentProgram.title}</h4>
              <p>{currentProgram.summary}</p>
              <p className="mountain-pro__entryStandard">
                <strong>Entry standard:</strong> {currentProgram.entryStandard}
              </p>
              <ul>
                {currentProgram.trainingObjectives.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      </section>

      <section className="mountain-pro__curriculum">
        <article className="mountain-pro__curriculumCard">
          <p className="section-eyebrow">Selected Program</p>
          <h2>{currentProgram.tagline}</h2>
          <p>
            The mountains naturally challenge every dimension of human fitness.
            Through structured exposure and progressive difficulty, Mountain Pro
            develops capability that transfers into both alpine terrain and life
            outside it.
          </p>
        </article>

        <div className="mountain-pro__curriculumGrid">
          <article>
            <h3>Program Focus</h3>
            <p>{currentProgram.summary}</p>
          </article>
          <article>
            <h3>Level of Difficulty</h3>
            <p>{currentProgram.difficulty}</p>
          </article>
          <article>
            <h3>Duration</h3>
            <p>{currentProgram.duration}</p>
          </article>
          <article>
            <h3>Training Outcome</h3>
            <p>{currentProgram.outcome}</p>
          </article>
        </div>
      </section>

      <section className="mountain-pro__curriculum mountain-pro__curriculum--mentorship">
        <article className="mountain-pro__curriculumCard">
          <p className="section-eyebrow">Mentorship Treks & Expeditions</p>
          <h2>Where skills turn into capability</h2>
          <p>
            The four Mountain Pro progressions equip participants with essential
            skills, but sound judgement, intuition, and leadership are built
            through repeated exposure, real decisions, and guided experience
            over time.
          </p>
        </article>

        <div className="mountain-pro__curriculumGrid">
          {mentorshipPoints.map((item) => (
            <article key={item}>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mountain-pro__contact">
        <div>
          <p className="section-eyebrow">Next Step</p>
          <h2>Request batch details and enrollment support</h2>
          <p>
            Reach out directly for eligibility, upcoming dates, and help
            choosing the Mountain Pro program that matches your current
            experience and capability.
          </p>
        </div>
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
