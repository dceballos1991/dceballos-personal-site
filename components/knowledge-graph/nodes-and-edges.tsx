import React from 'react'
import { DefaultNode, Graph } from '@visx/network'

export type NetworkProps = {
  width: number
  height: number
}

interface CustomNode {
  x: number
  y: number
  color?: string
}

interface CustomLink {
  source: CustomNode
  target: CustomNode
  dashed?: boolean
}

const nodes: CustomNode[] = [
  { x: 50, y: 20 },
  { x: 200, y: 250 },
  { x: 300, y: 40 },
]

const links: CustomLink[] = [
  { source: nodes[0] as CustomNode, target: nodes[1] as CustomNode },
  { source: nodes[1] as CustomNode, target: nodes[2] as CustomNode },
  {
    source: nodes[2] as CustomNode,
    target: nodes[0] as CustomNode,
    dashed: true,
  },
]

const graph = {
  nodes,
  links,
}

export default function Example({ width, height }: NetworkProps) {
  return (
    <Graph<CustomLink, CustomNode>
      graph={graph}
      nodeComponent={({ node }) => (
        <DefaultNode
          className='fill-card-foreground'
          r={6}
          onClick={() => console.log('clicked')}
        />
      )}
      linkComponent={({ link: { source, target, dashed } }) => (
        <line
          x1={source.x}
          y1={source.y}
          x2={target.x}
          y2={target.y}
          strokeWidth={2}
          stroke='#999'
          strokeOpacity={0.6}
          strokeDasharray={dashed ? '8,4' : undefined}
        />
      )}
    />
  )
}
