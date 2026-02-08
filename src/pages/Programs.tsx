import programs from "../data/programs.json";
import type { Program } from "../types/Program";

const Programs = () => {
  const data = programs as Program[];

  return (
    <section>
      <h1>Upcoming Programs</h1>
      {data.map((p) => (
        <div key={p.id}>
          <h3>{p.title}</h3>
          <p>{p.location}</p>
          <p>
            {p.date} · {p.duration}
          </p>
          <strong>{p.status}</strong>
        </div>
      ))}
    </section>
  );
};

export default Programs;
