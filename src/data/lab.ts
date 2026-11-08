import { COLORS } from '../constants/tokens'

export interface LabPolygon {
  points: string
  color: string
  fillOpacity: number
  depth: number
}

export const labPolygons: LabPolygon[] = [
  { points: '90,120 330,60 300,260 120,300', color: COLORS.lime, fillOpacity: 0.14, depth: 12 },
  { points: '300,200 560,120 620,330 380,420', color: COLORS.lime2, fillOpacity: 0.12, depth: 26 },
  { points: '520,60 740,150 680,260 500,190', color: COLORS.tx, fillOpacity: 0.1, depth: 40 },
  { points: '140,320 280,340 220,460 100,430', color: COLORS.lime, fillOpacity: 0.3, depth: 18 },
  { points: '640,300 760,330 720,450 610,420', color: COLORS.mu, fillOpacity: 0.25, depth: 34 },
]
