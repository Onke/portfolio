import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import { personal } from '../data/projects'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />

      {/* Personal projects (public side projects only) */}
      <section className="section" id="personal">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Personal projects</p>
            <h2 className="section-title">Things I&apos;ve built for fun</h2>
            <p className="section-lead">
              Side projects from learning and university — open source on
              GitHub.
            </p>
          </Reveal>

          <div className="work__grid">
            {personal.map((project, i) => (
              <Reveal key={project.title} delay={i * 70}>
                <a
                  className="proj"
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="proj__img"
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                  />
                  <div className="proj__body">
                    <p className="proj__cat">{project.category}</p>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <span className="proj__link">
                      View on GitHub <Icon name="external" size={15} />
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
