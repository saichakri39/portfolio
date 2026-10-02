import SectionHeading from "./SectionHeading.jsx";

function About() {
  return (
    <section id="about" className="section">
      <div className="container narrow">
        <SectionHeading title="About me" />
        <p>
          I'm a final-year B.Tech student in Computer Science and Engineering (AI and Data
          Science) at Satya Institute of Technology and Management, Vizianagaram.
        </p>
        <p>
          I started with web basics and have built projects with HTML, CSS and JavaScript, such
          as a pizza booking app, a music website and an Amazon-inspired e-commerce clone. I'm
          also learning React and backend development with Node.js.
        </p>
        <p>
          From April to June 2026 I worked as a Python and Generative AI intern at Pixelwind
          Technologies, where I worked with LLMs, explored RAG concepts and contributed to an
          AI-powered healthcare platform called Medicare AI.
        </p>
        <p>
          Right now I'm preparing for software-development placements. I'm looking for an
          entry-level frontend or software developer role where I can keep learning and work with
          a team.
        </p>
      </div>
    </section>
  );
}

export default About;
