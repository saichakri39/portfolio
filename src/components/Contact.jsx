import SectionHeading from "./SectionHeading.jsx";
import { profile } from "../data/portfolio.js";

function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container narrow">
        <SectionHeading
          title="Contact"
          intro="I'm looking for an entry-level Software Developer or Frontend Developer role. You can reach me here:"
        />
        <ul className="contact-list">
          <li>
            <span>Email</span>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </li>
          <li>
            <span>Phone</span>
            <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>{profile.phone}</a>
          </li>
          <li>
            <span>LinkedIn</span>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              linkedin.com/in/peddinti-sai-chakri-a3a378379
            </a>
          </li>
          <li>
            <span>GitHub</span>
            <a href={profile.github} target="_blank" rel="noreferrer">
              github.com/saichakri39
            </a>
          </li>
        </ul>
        <a className="btn btn-primary" href={profile.resume} download>Download Resume</a>
      </div>
    </section>
  );
}

export default Contact;
