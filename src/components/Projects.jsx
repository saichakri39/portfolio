import { useState } from "react";
import SectionHeading from "./SectionHeading.jsx";
import ProjectCard from "./ProjectCard.jsx";
import { projects, projectFilters } from "../data/portfolio.js";

function Projects() {
  // Real interactive feature: filter projects by category
  const [activeFilter, setActiveFilter] = useState("All");

  const visibleProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        <SectionHeading
          title="Projects"
          intro="Frontend and React projects, plus AI projects I built while learning Python and Generative AI."
        />

        <div className="filters" role="group" aria-label="Filter projects">
          {projectFilters.map((filter) => (
            <button
              key={filter}
              className={filter === activeFilter ? "filter active" : "filter"}
              aria-pressed={filter === activeFilter}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-3">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
