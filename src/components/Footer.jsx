import { profile } from '../data/profile'
import { scrollToSection } from '../lib/scroll'
import Icon from './Icon'
import Reveal from './Reveal'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer" id="contact">
      <div className="container">
        <Reveal className="footer__grid">
          <div>
            <p className="eyebrow">Get in touch</p>
            <h3>Let&apos;s build something.</h3>
            <p className="footer__lead">
              Open to frontend and product engineering conversations. The
              fastest way to reach me is email.
            </p>
            <a className="btn btn--primary" href={`mailto:${profile.email}`}>
              <Icon name="mail" size={16} /> {profile.email}
            </a>
          </div>

          <div className="footer__links">
            <p className="eyebrow">Elsewhere</p>
            {profile.social.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target={s.icon === 'mail' ? undefined : '_blank'}
                rel="noreferrer"
              >
                <Icon name={s.icon} size={16} /> {s.name}
                <span style={{ color: 'var(--text-faint)' }}>· {s.handle}</span>
              </a>
            ))}
            <button
              className="footer__links-top"
              onClick={() => scrollToSection('home')}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--text-muted)',
                cursor: 'pointer',
                padding: 0,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                font: 'inherit',
              }}
            >
              <Icon name="arrow" size={16} className="arrow" /> Back to top
            </button>
          </div>
        </Reveal>

        <div className="footer__bottom">
          <span>
            © {year} {profile.name}. Built with React &amp; Vite.
          </span>
          <span>{profile.location}</span>
        </div>
      </div>
    </footer>
  )
}
