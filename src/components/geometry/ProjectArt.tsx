import { COLORS } from '../../constants/tokens'
import type { ProjectVariant } from '../../data/projects'

export default function ProjectArt({ variant }: { variant: ProjectVariant }) {
  return (
    <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      {variant === 'vertex' && (
        <>
          <polygon points="60,230 200,40 340,230" fill={COLORS.lime} />
          <polygon points="200,40 340,230 200,200" fill={COLORS.bg} fillOpacity=".45" />
          <polygon points="60,230 200,200 200,270 60,270" fill="#2c2f27" />
          <line x1="0" y1="270" x2="400" y2="270" stroke={COLORS.mu} />
        </>
      )}
      {variant === 'fracture' && (
        <>
          <polygon points="40,40 220,0 180,300 0,300" fill={COLORS.lime2} fillOpacity=".9" />
          <polygon points="220,0 400,60 360,300 180,300" fill={COLORS.bg} stroke={COLORS.lime} />
          <polygon points="120,120 300,150 240,260 90,220" fill={COLORS.lime} fillOpacity=".5" />
        </>
      )}
      {variant === 'monolith' && (
        <>
          <polygon points="200,20 320,90 320,210 200,280 80,210 80,90" fill={COLORS.bg} stroke={COLORS.lime} strokeWidth="2" />
          <polygon points="200,20 320,90 200,150 80,90" fill={COLORS.lime} />
          <polygon points="200,150 320,90 320,210 200,280" fill={COLORS.mu} fillOpacity=".5" />
        </>
      )}
    </svg>
  )
}
