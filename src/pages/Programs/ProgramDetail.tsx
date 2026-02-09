import { Link, useParams } from "react-router-dom";
import programs from "../../data/programs.json";
import type { Program } from "../../types/Program";
import baseUrl from "../../constants/baseUrl";

const ProgramDetail = () => {
  const { slug } = useParams();
  const data = programs as Program[];
  const program = data.find((item) => item.slug === slug);

  if (!program) {
    return (
      <section className="program-detail">
        <div className="program-detail__content">
          <h1>Program Not Found</h1>
          <p>
            The program you are looking for is not available. Browse the full
            list to find the right fit.
          </p>
          <Link className="program-detail__back" to="/programs">
            Back to Programs
          </Link>
        </div>
      </section>
    );
  }

  const imageUrl = program.image
    ? program.image.startsWith("/")
      ? `${baseUrl}${program.image.slice(1)}`
      : program.image
    : undefined;
  const heroStyle = imageUrl
    ? {
        backgroundImage: `linear-gradient(180deg, rgba(9, 10, 12, 0.2), rgba(9, 10, 12, 0.85)), url(${imageUrl})`,
      }
    : undefined;

  return (
    <section className="program-detail">
      <div className="program-detail__hero" style={heroStyle} />
      <div className="program-detail__content">
        <Link className="program-detail__back" to="/programs">
          Back to Programs
        </Link>
        <h1>{program.title}</h1>
        <div className="program-detail__meta">
          <span>{program.location}</span>
          <span>{program.date}</span>
          <span>{program.duration}</span>
        </div>
        <p className="program-detail__summary">
          This program is built for operators who want real-world conditioning,
          terrain exposure, and instructor-led drills. Enrollment windows are
          limited and subject to capacity.
        </p>
        <span className={`status status--${program.status.toLowerCase().replace(/\s+/g, "-")}`}>
          {program.status}
        </span>
      </div>
    </section>
  );
};

export default ProgramDetail;
