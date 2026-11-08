import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navigation } from '../../data/navigation'
import { STUDIO } from '../../constants/tokens'
import LogoMark from '../geometry/LogoMark'

export default function Navigation() {
  const [open, setOpen] = useState(false)

  return (
    <nav aria-label="Main">
      <a className="logo" href="#top" aria-label={`${STUDIO.name} home`}>
        <LogoMark />
        {STUDIO.name}
      </a>
      <button
        className="burger"
        aria-expanded={open}
        aria-controls="menu"
        onClick={() => setOpen((o) => !o)}
      >
        {open ? <X size={16} /> : <Menu size={16} />}
        <span>{open ? 'Close' : 'Menu'}</span>
      </button>
      <ul className={`links${open ? ' open' : ''}`} id="menu">
        {navigation.map((item) => (
          <li key={item.href}>
            <a href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
