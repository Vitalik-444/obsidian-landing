export interface NavItem {
  label: string
  href: string
  primary?: boolean
}

export const navigation: NavItem[] = [
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'Projects', href: '#projects' },
  { label: 'Geometry lab', href: '#lab' },
  { label: 'Studio', href: '#studio' },
  { label: 'Contact us', href: '#contact', primary: true },
]

export const socials = ['Instagram', 'Behance', 'LinkedIn'] as const
