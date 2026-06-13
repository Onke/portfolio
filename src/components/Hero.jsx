import { profile } from '../data/profile'
import { scrollToSection } from '../lib/scroll'
import Icon from './Icon'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <p className="hero__ping">
          <span className="pulse" />
          Available for interesting frontend work
        </p>

        <h1>
          {profile.firstName} <span className="accent">Sipuka</span>
        </h1>

        <p className="hero__role">
          {profile.tagline} at <b>{profile.company}</b>
        </p>

        <p className="hero__lead">{profile.headline}</p>

        <div className="hero__actions">
          <button
            className="btn btn--primary"
            onClick={() => scrollToSection('experience')}
          >
            View my work <Icon name="arrow" size={16} />
          </button>
          <button
            className="btn btn--ghost"
            onClick={() => scrollToSection('contact')}
          >
            Get in touch
          </button>
        </div>

        <div className="hero__socials">
          {profile.social.map((s) => (
            <a
              key={s.name}
              className="icon-link"
              href={s.url}
              target={s.icon === 'mail' ? undefined : '_blank'}
              rel="noreferrer"
              aria-label={s.name}
              title={s.name}
            >
              <Icon name={s.icon} size={19} />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
