import { profile } from "../data/portfolio.js";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <h1>{profile.name}</h1>
        <p className="hero-title">{profile.title}</p>
        <p className="hero-text">
          I'm a final-year Computer Science (AI &amp; Data Science) student with hands-on
          experience in HTML, CSS, JavaScript and Python. I recently interned at Pixelwind
          Technologies and I'm looking for an entry-level Software Developer or Frontend
          Developer role.
        </p>

        <div className="button-row">
          <a className="btn btn-primary" href="#projects">View Projects</a>
          <a className="btn btn-secondary" href="#contact">Contact Me</a>
          <a className="btn btn-secondary" href={profile.resume} download>Download Resume</a>
        </div>

        <ul className="social-links">
          <li>
            <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          </li>
          <li>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Hero;
