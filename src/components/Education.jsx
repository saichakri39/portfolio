import SectionHeading from "./SectionHeading.jsx";
import { education, certifications } from "../data/portfolio.js";

function EducationItem({ item }) {
  return (
    <article className="card education-card">
      <div className="education-top">
        <h3>{item.degree}</h3>
        <span className="muted">{item.years}</span>
      </div>
      <p>{item.school}</p>
      {item.note && <p className="muted">{item.note}</p>}
      <p className="score">{item.score}</p>
    </article>
  );
}

function Education() {
  return (
    <section id="education" className="section section-alt">
      <div className="container narrow">
        <SectionHeading title="Education" />
        <div className="stack">
          {education.map((item) => (
            <EducationItem key={item.degree} item={item} />
          ))}
        </div>

        <h3 className="subheading">Certifications</h3>
        <ul className="bullets">
          {certifications.map((cert) => (
            <li key={cert}>{cert}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Education;
