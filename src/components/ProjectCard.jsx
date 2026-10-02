function ProjectCard({ project }) {
  const { title, description, tags, github } = project;

  return (
    <article className="card project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <ul className="chips">
        {tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      {github && (
        <a
          className="text-link"
          href={github}
          target="_blank"
          rel="noreferrer"
          aria-label={`View ${title} on GitHub`}
        >
          View on GitHub
        </a>
      )}
    </article>
  );
}

export default ProjectCard;
