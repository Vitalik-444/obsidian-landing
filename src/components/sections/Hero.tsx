import { useRef } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { useMouseParallax } from '../../hooks/useMouseParallax'
import { STUDIO } from '../../constants/tokens'
import HeroStructure from '../geometry/HeroStructure'
import Button from '../ui/Button'

const LETTERS = STUDIO.name.split('')

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { x, y } = useMouseParallax(ref)
  const reduce = useReducedMotion()

  return (
    <header className="hero" id="top" ref={ref}>
      <HeroStructure x={x} y={y} />
      <h1 aria-label={STUDIO.name}>
        {LETTERS.map((l, i) => (
          <motion.span
            key={i}
            aria-hidden="true"
            className="inline-block"
            initial={reduce ? false : { clipPath: 'polygon(0 100%,100% 100%,100% 100%,0 100%)' }}
            animate={{ clipPath: 'polygon(0 -10%,100% -10%,100% 110%,0 110%)' }}
            transition={{ duration: 1, delay: i * 0.07, ease: [0.2, 0.8, 0.2, 1] }}
          >
            {l}
          </motion.span>
        ))}
      </h1>
      <p className="tag">
        SHAPING SPACES <i>BEYOND</i> THE ORDINARY.
      </p>
      <div className="cta">
        <Button variant="a" href="#projects">View projects</Button>
        <Button variant="b" href="#contact">Start a build</Button>
      </div>
      <div className="hline" />
      <div className="coords mono">
        {STUDIO.coords}
        <br />
        PLATE 00 — SCALE 1:200
      </div>
    </header>
  )
}
