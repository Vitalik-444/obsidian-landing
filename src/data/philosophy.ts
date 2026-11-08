export interface Fragment {
  id: 'f1' | 'f2' | 'f3'
  title: string
  text: string
}

export const fragments: Fragment[] = [
  { id: 'f1', title: 'FORM', text: 'Experimental structures that bend load, light and expectation into one continuous gesture.' },
  { id: 'f2', title: 'SPACE', text: 'Unconventional spatial perception: rooms that tilt your sense of where inside ends.' },
  { id: 'f3', title: 'FUTURE', text: 'Architecture without boundaries, drawn today for cities that do not exist yet.' },
]
