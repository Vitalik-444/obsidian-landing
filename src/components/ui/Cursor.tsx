import { useEffect, useState } from 'react'
import { motion, useMotionValue, useReducedMotion } from 'framer-motion'

export default function Cursor() {
  const reduce = useReducedMotion()
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const [big, setBig] = useState(false)

  useEffect(() => {
    if (reduce) return
    const move = (e: PointerEvent) => {
      x.set(e.clientX - 9)
      y.set(e.clientY - 9)
      setBig(!!(e.target as HTMLElement).closest('a,button'))
    }
    window.addEventListener('pointermove', move, { passive: true })
    return () => window.removeEventListener('pointermove', move)
  }, [reduce, x, y])

  if (reduce) return null
  return (
    <motion.div
      className="cursor"
      aria-hidden="true"
      style={{ x, y }}
      animate={{ scale: big ? 2 : 1 }}
      transition={{ duration: 0.2 }}
    />
  )
}
