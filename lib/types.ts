export type CustomNode = {
  id: number
  label: string
  type: 'Personal' | 'Professional'
  level: number
  details?: string
  x?: number
  y?: number
  vx?: number
  vy?: number
}

export type CustomLink = {
  source: CustomNode
  target: CustomNode
  relationship: string
  direction: 'unidirectional' | 'bidirectional'
}

export type CustomGraph = {
  nodes: CustomNode[]
  links: CustomLink[]
}
