import type { Program } from "../../types/Program";

const ProgramCard = (p: Program) => {
  return (
    <div className="program-card">
      <h3>{p.title}</h3>
      <p>
        {p.location} · {p.date}
      </p>
      <p>{p.duration}</p>
      <span className="status">{p.status}</span>
    </div>
  );
};

export default ProgramCard;
