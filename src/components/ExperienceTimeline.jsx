import PropTypes from 'prop-types';

const ExperienceTimeline = ({ experiences }) => {
  return (
    <ol className="timeline">
      {experiences.map((item) => (
        <li key={item.company} className="timeline__item">
          <div className="timeline__meta">
            <p className="eyebrow">{item.period}</p>
            <p>{item.location}</p>
          </div>
          <div className="timeline__body">
            <h3>
              {item.role} - <span>{item.company}</span>
            </h3>
            <p>{item.summary}</p>
            <ul>
              {item.achievements.map((achievement) => (
                <li key={achievement}>{achievement}</li>
              ))}
            </ul>
            <div className="pill-row">
              {item.stack.map((tech) => (
                <span key={tech} className="pill pill--ghost">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
};

ExperienceTimeline.propTypes = {
  experiences: PropTypes.arrayOf(
    PropTypes.shape({
      company: PropTypes.string,
      location: PropTypes.string,
      role: PropTypes.string,
      period: PropTypes.string,
      summary: PropTypes.string,
      achievements: PropTypes.arrayOf(PropTypes.string),
      stack: PropTypes.arrayOf(PropTypes.string),
    }),
  ).isRequired,
};

export default ExperienceTimeline;
