import SectionHeading from "./SectionHeading.jsx";
import { journey } from "../data/portfolio.js";

function LearningJourney() {
  return (
    <section id="journey" className="section section-alt">
      <div className="container narrow">
        <SectionHeading title="Learning journey" />
        <ol className="timeline">
          {journey.map((step) => (
            <li key={step.title}>
              <span className="timeline-when">{step.when}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default LearningJourney;
