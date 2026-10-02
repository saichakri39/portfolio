import SectionHeading from "./SectionHeading.jsx";
import { skillGroups } from "../data/portfolio.js";

function SkillGroup({ title, skills }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <ul className="chips">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHeading title="Skills" />
        <div className="grid grid-3">
          {skillGroups.map((group) => (
            <SkillGroup key={group.title} title={group.title} skills={group.skills} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
