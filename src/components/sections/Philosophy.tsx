import { fragments } from '../../data/philosophy'
import Reveal from '../ui/Reveal'

export default function Philosophy() {
  return (
    <section className="cut s" id="philosophy">
      <Reveal>
        <h2 className="sec-title">GEOMETRY IS A LANGUAGE</h2>
      </Reveal>
      <div className="frags">
        {fragments.map((f) => (
          <Reveal key={f.id} className={`frag ${f.id}`}>
            <h3>{f.title}</h3>
            <p>{f.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
