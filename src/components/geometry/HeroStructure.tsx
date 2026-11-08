import { MotionValue } from 'framer-motion'
import { COLORS } from '../../constants/tokens'
import ParallaxLayer from './ParallaxLayer'

interface Props {
  x: MotionValue<number>
  y: MotionValue<number>
}

export default function HeroStructure({ x, y }: Props) {
  return (
    <div className="hero-shape" aria-hidden="true">
      <svg viewBox="0 0 600 600">
        <ParallaxLayer x={x} y={y} depth={14}>
          <polygon points="300,20 580,170 580,430 300,580 20,430 20,170" fill="none" stroke={COLORS.lime} strokeWidth="1.2" strokeDasharray="4 8" />
        </ParallaxLayer>
        <ParallaxLayer x={x} y={y} depth={30}>
          <polygon points="300,90 520,210 300,330 80,210" fill={COLORS.lime} />
        </ParallaxLayer>
        <ParallaxLayer x={x} y={y} depth={22}>
          <polygon points="80,210 300,330 300,540 80,420" fill={COLORS.sf} stroke={COLORS.lime} strokeWidth="1" />
        </ParallaxLayer>
        <ParallaxLayer x={x} y={y} depth={40}>
          <polygon points="300,330 520,210 520,420 300,540" fill={COLORS.lime2} fillOpacity=".18" stroke={COLORS.lime2} strokeWidth="1" />
        </ParallaxLayer>
        <ParallaxLayer x={x} y={y} depth={55}>
          <polygon points="300,170 400,225 300,280 200,225" fill={COLORS.bg} />
          <polygon points="300,170 400,225 300,225" fill={COLORS.tx} />
        </ParallaxLayer>
        <g stroke={COLORS.mu} strokeWidth=".8">
          <line x1="0" y1="300" x2="600" y2="300" />
          <line x1="300" y1="0" x2="300" y2="600" />
        </g>
      </svg>
    </div>
  )
}
