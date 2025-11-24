import PropTypes from 'prop-types';

const formatHref = (href) => (href.startsWith('#') ? `/${href}` : href);

const Hero = ({ profile, stats }) => {
  return (
    <section className="hero" id="home">
      <div className="hero__content">
        <p className="eyebrow">{profile.role}</p>
        <h1>
          Building resilient products with code, curiosity, and measurable outcomes.
        </h1>
        <p className="hero__summary">{profile.summary}</p>
        <div className="hero__focus">
          {profile.focusAreas.map((area) => (
            <span key={area} className="pill">
              {area}
            </span>
          ))}
        </div>
        <div className="hero__actions">
          {profile.heroCtas.map((cta) => (
            <a
              key={cta.label}
              className={`pill ${cta.variant === 'primary' ? 'pill--solid' : 'pill--outline'}`}
              href={formatHref(cta.href)}
              target={cta.href.startsWith('http') ? '_blank' : undefined}
              rel={cta.href.startsWith('http') ? 'noreferrer' : undefined}
            >
              {cta.label}
            </a>
          ))}
        </div>
        <dl className="hero__stats">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt>{stat.label}</dt>
              <dd>{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="hero__panel">
        <div className="hero-card">
          <div
            className="hero-card__image"
            style={{ backgroundImage: `url(${profile.heroImage})` }}
          />
          <div className="hero-card__body">
            <p className="eyebrow">Currently shipping</p>
            <p>{profile.now}</p>
          </div>
        </div>
        <div className="hero__socials">
          {profile.social.map((item) => (
            <a key={item.label} href={item.url} target="_blank" rel="noreferrer">
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = {
  profile: PropTypes.shape({
    role: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    focusAreas: PropTypes.arrayOf(PropTypes.string).isRequired,
    heroCtas: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        href: PropTypes.string,
        variant: PropTypes.string,
      }),
    ).isRequired,
    heroImage: PropTypes.string.isRequired,
    now: PropTypes.string.isRequired,
    social: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string,
        url: PropTypes.string,
      }),
    ).isRequired,
  }).isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    }),
  ).isRequired,
};

export default Hero;
