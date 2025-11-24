import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import ExperienceTimeline from '../components/ExperienceTimeline';
import ProjectsGrid from '../components/ProjectsGrid';
import ContactPanel from '../components/ContactPanel';
import {
  contact,
  experiences,
  highlights,
  profile,
  projects,
  skillGroups,
} from '../data/portfolio';

const scrollToHash = (hash) => {
  if (!hash) return;
  const element = document.querySelector(hash);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    scrollToHash(location.hash);
  }, [location]);

  return (
    <div className="page-shell">
      <Hero profile={profile} stats={highlights} />

      <section id="about" className="section">
        <div className="section-heading">
          <p className="eyebrow">About</p>
          <h2>Code, product, and systems thinking in one seat.</h2>
        </div>
        <div className="about-grid">
          <p>
            I combine strong fundamentals in computer science with a deep respect for discovery work.
            I enjoy pairing with PMs to map opportunities, embedding with designers to prototype, and
            hopping into the weeds with engineers when a release needs hands-on support.
          </p>
          <div className="about-grid__card">
            <h3>What I&apos;m optimising for</h3>
            <ul>
              {profile.focusAreas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
            <p>{profile.availability}</p>
          </div>
        </div>
        <div className="skill-grid">
          {skillGroups.map((group) => (
            <article key={group.title} className="skill-card">
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="section">
        <div className="section-heading">
          <p className="eyebrow">Experience</p>
          <h2>Recent roles and missions.</h2>
        </div>
        <ExperienceTimeline experiences={experiences} />
      </section>

      <section id="projects" className="section">
        <div className="section-heading">
          <p className="eyebrow">Projects</p>
          <h2>Selected work</h2>
        </div>
        <ProjectsGrid projects={projects} />
      </section>

      <section id="contact" className="section">
        <div className="section-heading">
          <p className="eyebrow">Contact</p>
          <h2>Bring me into your next sprint.</h2>
        </div>
        <ContactPanel contact={contact} />
      </section>
    </div>
  );
};

export default Home;
