import { COLORS } from '../../constants/tokens'

interface Props {
  outer?: string
  inner?: string
  className?: string
}

export default function LogoMark({ outer = COLORS.lime, inner = COLORS.bg, className }: Props) {
  return (
    <svg className={className} viewBox="0 0 40 40" aria-hidden="true">
      <polygon points="20,1 39,14 31,39 9,39 1,14" fill={outer} />
      <polygon points="20,10 30,18 26,31 14,31 10,18" fill={inner} />
      <polygon points="20,10 30,18 20,22" fill={outer} />
    </svg>
  )
}
