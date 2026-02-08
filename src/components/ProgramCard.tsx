import type { Program } from "../types/Program";

const ProgramCard = (props: Program) => {
  return (
    <article>
      <h3>{props.title}</h3>
      <p>{props.location}</p>
      <p>
        {props.date} · {props.duration}
      </p>
      <span>{props.status}</span>
    </article>
  );
};

export default ProgramCard;
