import { ReactNode } from 'react'
import { MotionValue, motion, useTransform } from 'framer-motion'

interface Props {
  x: MotionValue<number>
  y: MotionValue<number>
  depth: number
  rotate?: boolean
  children: ReactNode
}

export default function ParallaxLayer({ x, y, depth, rotate = false, children }: Props) {
  const tx = useTransform(x, (v) => v * depth)
  const ty = useTransform(y, (v) => v * depth)
  const rot = useTransform(x, (v) => (rotate ? v * depth * 0.5 : 0))
  return (
    <motion.g style={{ x: tx, y: ty, rotate: rot, transformBox: 'fill-box', transformOrigin: 'center' }}>
      {children}
    </motion.g>
  )
}
