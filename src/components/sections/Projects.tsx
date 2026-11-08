import { projects } from '../../data/projects'
import ProjectArt from '../geometry/ProjectArt'
import Reveal from '../ui/Reveal'

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <Reveal>
        <h2 className="sec-title sm">Featured projects</h2>
      </Reveal>
      {projects.map((p, i) => (
        <Reveal key={p.id} className={`proj p${i + 1}`}>
          <div className="art">
            <ProjectArt variant={p.id} />
            <span className="num">{p.number}</span>
          </div>
          <div className="info">
            <h3>
              {p.name} <b>{p.number}</b>
            </h3>
            <p>{p.description}</p>
            <div className="meta mono">
              {p.meta.map(([k, v]) => (
                <span key={k} className="contents">
                  <span>{k}</span>
                  <span>{v}</span>
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      ))}
    </section>
  )
}
