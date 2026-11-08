import { useRef } from 'react'
import { useMouseParallax } from '../../hooks/useMouseParallax'
import { COLORS } from '../../constants/tokens'
import { labPolygons } from '../../data/lab'
import ParallaxLayer from '../geometry/ParallaxLayer'
import Reveal from '../ui/Reveal'

export default function GeometryLab() {
  const ref = useRef<HTMLDivElement>(null)
  const { x, y } = useMouseParallax(ref)

  return (
    <section className="cut s lab-section" id="lab">
      <Reveal>
        <h2 className="sec-title sm">Geometry lab</h2>
      </Reveal>
      <p className="mono lab-hint">Move your cursor. Hover a fragment.</p>
      <div className="lab" ref={ref}>
        <svg viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <line className="dash" x1="0" y1="420" x2="800" y2="140" stroke={COLORS.lime} />
          <line className="dash" x1="0" y1="80" x2="800" y2="460" stroke={COLORS.mu} />
          {labPolygons.map((p) => (
            <ParallaxLayer key={p.points} x={x} y={y} depth={p.depth} rotate>
              <polygon points={p.points} fill={p.color} fillOpacity={p.fillOpacity} stroke={p.color} />
            </ParallaxLayer>
          ))}
        </svg>
        <div className="lab-cap mono">FIG. 07 — LAYERED FRAGMENTS / PARALLAX 12–40</div>
      </div>
    </section>
  )
}
