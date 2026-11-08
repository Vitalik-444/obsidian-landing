import { ReactNode } from 'react'

interface Props {
  href: string
  variant: 'a' | 'b'
  children: ReactNode
}

export default function Button({ href, variant, children }: Props) {
  return (
    <a className={`btn ${variant}`} href={href}>
      {children}
    </a>
  )
}
