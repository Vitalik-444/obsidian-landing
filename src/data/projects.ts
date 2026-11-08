export type ProjectVariant = 'vertex' | 'fracture' | 'monolith'

export interface Project {
  id: ProjectVariant
  number: string
  name: string
  description: string
  meta: ReadonlyArray<readonly [string, string]>
}

export const projects: Project[] = [
  {
    id: 'vertex',
    number: '01',
    name: 'VERTEX',
    description: 'Futuristic residential architecture.',
    meta: [['LOC', 'Osaka, JP'], ['AREA', '14,200 m²'], ['YEAR', '2027']],
  },
  {
    id: 'fracture',
    number: '02',
    name: 'FRACTURE',
    description: 'Experimental cultural space.',
    meta: [['LOC', 'Rotterdam, NL'], ['AREA', '8,600 m²'], ['YEAR', '2026']],
  },
  {
    id: 'monolith',
    number: '03',
    name: 'MONOLITH',
    description: 'Monumental geometric installation.',
    meta: [['LOC', 'Atacama, CL'], ['HEIGHT', '64 m'], ['YEAR', '2028']],
  },
]
