import { Navigate, Link, useParams } from 'react-router-dom';
import ProjectsGrid from '../components/ProjectsGrid';
import { projects } from '../data/portfolio';

const ProjectDetails = () => {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const related = projects.filter((item) => item.slug !== slug).slice(0, 2);

  return (
    <article className="project-detail page-shell">
      <div className="project-detail__hero">
        <div className="project-detail__media" style={{ backgroundImage: `url(${project.cover})` }} />
        <div className="project-detail__summary">
          <p className="eyebrow">
            {project.timeframe} - {project.role}
          </p>
          <h1>{project.name}</h1>
          <p>{project.summary}</p>
          <div className="pill-row">
            {project.stack.map((tech) => (
              <span key={tech} className="pill pill--ghost">
                {tech}
              </span>
            ))}
          </div>
          <div className="project-detail__links">
            <a className="pill pill--solid" href={project.links.live} target="_blank" rel="noreferrer">
              View live product
            </a>
            <a className="pill pill--outline" href={project.links.repo} target="_blank" rel="noreferrer">
              Source
            </a>
          </div>
        </div>
      </div>

      <section className="project-detail__section">
        <h2>The challenge</h2>
        <p>{project.problem}</p>
      </section>

      <section className="project-detail__section">
        <h2>What we shipped</h2>
        <ul>
          {project.solution.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="project-detail__section project-detail__impact">
        {project.impact.map((impact) => (
          <div key={impact.label} className="impact-card">
            <p className="impact-card__value">{impact.value}</p>
            <p className="impact-card__label">{impact.label}</p>
          </div>
        ))}
      </section>

      <section className="project-detail__section">
        {project.sections.map((section) => (
          <article key={section.title}>
            <h3>{section.title}</h3>
            <p>{section.body}</p>
          </article>
        ))}
      </section>

      {related.length > 0 && (
        <section className="project-detail__section">
          <div className="section-heading">
            <p className="eyebrow">More work</p>
            <h2>Related case studies</h2>
          </div>
          <ProjectsGrid projects={related} />
        </section>
      )}

      <Link to="/#projects" className="pill pill--ghost">
        Back to projects
      </Link>
    </article>
  );
};

export default ProjectDetails;
