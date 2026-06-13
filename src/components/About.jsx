import { profile } from '../data/profile'
import Reveal from './Reveal'

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <Reveal>
          <p className="eyebrow">About</p>
          <h2 className="section-title">A bit about me</h2>
        </Reveal>

        <div className="about__grid">
          <Reveal className="about__body">
            {profile.about.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </Reveal>

          <Reveal className="about__card" delay={80}>
            <img
              className="about__photo"
              src={profile.profileImage}
              alt={`${profile.name}, software developer`}
              loading="lazy"
            />
            <div className="fact">
              <span>Role</span>
              <b>{profile.role}</b>
            </div>
            <div className="fact">
              <span>Company</span>
              <b>{profile.company}</b>
            </div>
            <div className="fact">
              <span>Based in</span>
              <b>{profile.location}</b>
            </div>
            <div className="fact">
              <span>Degree</span>
              <b>BSc Computer Science &amp; Statistics</b>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
