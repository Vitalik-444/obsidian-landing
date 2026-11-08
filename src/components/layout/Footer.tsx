import { ArrowUpRight } from 'lucide-react'
import { STUDIO } from '../../constants/tokens'
import { socials } from '../../data/navigation'
import LogoMark from '../geometry/LogoMark'

export default function Footer() {
  return (
    <footer id="contact">
      <h2>BUILD THE UNEXPECTED</h2>
      <div className="fgrid">
        <div>
          <div className="mono">Contact</div>
          <a href={`mailto:${STUDIO.email}`}>{STUDIO.email}</a>
          <a href={`tel:${STUDIO.phone.replace(/\s/g, '')}`}>{STUDIO.phone}</a>
        </div>
        <div>
          <div className="mono">Elsewhere</div>
          {socials.map((s) => (
            <a key={s} href="#top" className="soc">
              {s} <ArrowUpRight size={14} />
            </a>
          ))}
        </div>
        <div>
          <div className="mono">Studio</div>
          <span className="addr">
            {STUDIO.address[0]}
            <br />
            {STUDIO.address[1]}
          </span>
        </div>
      </div>
      <LogoMark className="sym" outer="#10110F" inner="#B6FF36" />
      <p className="tiny mono">
        © 2026 {STUDIO.name} — FICTIONAL STUDIO · {STUDIO.coords} · REV 03
      </p>
    </footer>
  )
}
