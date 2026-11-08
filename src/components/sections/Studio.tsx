import Reveal from '../ui/Reveal'

export default function Studio() {
  return (
    <section className="studio" id="studio">
      <Reveal>
        <h2 className="sec-title sm">Built by twelve people, one set square.</h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="studio-text">
          OBSIDIAN is a fictional studio working at the edge of architecture, graphic design and
          digital experiment. We draw in angles because curves hide the structure.
        </p>
      </Reveal>
    </section>
  )
}
