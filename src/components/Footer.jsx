import { profile } from "../data/portfolio.js";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© {year} {profile.name}</p>
        <p>
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          {" | "}
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
