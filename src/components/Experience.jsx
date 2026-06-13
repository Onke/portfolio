import { profile } from '../data/profile'
import Reveal from './Reveal'

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <Reveal>
          <p className="eyebrow">Experience</p>
          <h2 className="section-title">Where I&apos;ve worked</h2>
        </Reveal>

        <div className="timeline">
          {profile.experience.map((xp, i) => (
            <Reveal className="xp" key={xp.company + xp.role} delay={i * 60}>
              <div className="xp__head">
                <h3 className="xp__role">
                  {xp.role} <span className="at">@ {xp.company}</span>
                </h3>
                <span className="xp__period">
                  {xp.current && <span className="badge-now">Now</span>}{' '}
                  {xp.period}
                </span>
              </div>
              <p className="xp__meta">{xp.location}</p>
              <p className="xp__summary">{xp.summary}</p>
              {xp.highlights.length > 0 && (
                <ul className="bullets">
                  {xp.highlights.map((h, j) => (
                    <li key={j}>{h}</li>
                  ))}
                </ul>
              )}
            </Reveal>
          ))}

          {profile.education.map((ed) => (
            <Reveal className="xp" key={ed.school} delay={60}>
              <div className="xp__head">
                <h3 className="xp__role">
                  {ed.degree} <span className="at">@ {ed.school}</span>
                </h3>
                <span className="xp__period">{ed.period}</span>
              </div>
              <p className="xp__meta">{ed.location}</p>
              <p className="xp__summary">{ed.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
