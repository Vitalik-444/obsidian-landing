import { RefObject, useEffect } from 'react'
import { useMotionValue, useReducedMotion, useSpring } from 'framer-motion'

/** Normalised (-0.5 … 0.5) pointer position relative to `ref`, smoothed with a spring. */
export function useMouseParallax(ref: RefObject<HTMLElement>) {
  const reduce = useReducedMotion()
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const x = useSpring(rawX, { stiffness: 120, damping: 20 })
  const y = useSpring(rawY, { stiffness: 120, damping: 20 })

  useEffect(() => {
    if (reduce) return
    const onMove = (e: PointerEvent) => {
      const el = ref.current
      if (!el) return
      const r = el.getBoundingClientRect()
      if (r.bottom < 0 || r.top > window.innerHeight) return
      rawX.set((e.clientX - r.left) / r.width - 0.5)
      rawY.set((e.clientY - r.top) / r.height - 0.5)
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => window.removeEventListener('pointermove', onMove)
  }, [ref, reduce, rawX, rawY])

  return { x, y }
}
