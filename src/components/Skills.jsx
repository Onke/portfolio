import { profile } from '../data/profile'
import Reveal from './Reveal'

export default function Skills() {
  return (
    <section className="section section--tight" id="skills">
      <div className="container">
        <Reveal>
          <p className="eyebrow">Toolbox</p>
          <h2 className="section-title">Skills &amp; tools</h2>
          <p className="section-lead">
            The technologies I reach for most, and the practices that keep
            shipping reliable.
          </p>
        </Reveal>

        <div className="skills__grid">
          {profile.skills.map((group, i) => (
            <Reveal className="skill-group" key={group.group} delay={i * 60}>
              <h3>{group.group}</h3>
              <div className="tags">
                {group.items.map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
