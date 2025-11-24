import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProjectsGrid = ({ projects, limit }) => {
  const displayProjects = typeof limit === 'number' ? projects.slice(0, limit) : projects;

  return (
    <div className="projects-grid">
      {displayProjects.map((project) => (
        <article key={project.slug} className="project-card">
          <div
            className="project-card__media"
            style={{ backgroundImage: `url(${project.cover})` }}
            role="img"
            aria-label={`Cover for ${project.name}`}
          />
          <div className="project-card__body">
            <p className="eyebrow">{project.tagline}</p>
            <h3>{project.name}</h3>
            <p>{project.summary}</p>
            <div className="pill-row">
              {project.stack.slice(0, 4).map((tech) => (
                <span key={tech} className="pill pill--ghost">
                  {tech}
                </span>
              ))}
            </div>
            <div className="project-card__actions">
              <a href={project.links.live} target="_blank" rel="noreferrer" className="pill pill--outline">
                Launch
              </a>
              <Link to={`/projects/${project.slug}`} className="pill pill--solid">
                Case study
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

ProjectsGrid.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string,
      name: PropTypes.string,
      tagline: PropTypes.string,
      summary: PropTypes.string,
      cover: PropTypes.string,
      stack: PropTypes.arrayOf(PropTypes.string),
      links: PropTypes.shape({
        live: PropTypes.string,
      }),
    }),
  ).isRequired,
  limit: PropTypes.number,
};

ProjectsGrid.defaultProps = {
  limit: undefined,
};

export default ProjectsGrid;
