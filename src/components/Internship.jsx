import SectionHeading from "./SectionHeading.jsx";
import { internship } from "../data/portfolio.js";

function Internship() {
  return (
    <section id="internship" className="section">
      <div className="container narrow">
        <SectionHeading title="Internship" />
        <article className="card">
          <div className="education-top">
            <h3>{internship.role}</h3>
            <span className="muted">{internship.period}</span>
          </div>
          <p className="muted">{internship.company}</p>
          <ul className="bullets">
            {internship.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <ul className="chips">
            {internship.topics.map((topic) => (
              <li key={topic}>{topic}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Internship;
