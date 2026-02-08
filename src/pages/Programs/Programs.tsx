import programs from "../../data/programs.json";
import type { Program } from "../../types/Program";
import ProgramCard from "../../components/ProgramCard/ProgramCard";

const Programs = () => {
  const data = programs as Program[];

  return (
    <section>
      <h1>Upcoming Programs</h1>

      <div className="program-grid">
        {data.map((p) => (
          <ProgramCard key={p.id} {...p} />
        ))}
      </div>
    </section>
  );
};

export default Programs;
