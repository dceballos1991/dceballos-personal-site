import React from 'react'
import { DefaultNode, Graph } from '@visx/network'
import * as d3 from 'd3'
import { LINKS, NODES } from '@/lib/constants'

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
  // const simulation = d3
  //   .forceSimulation(NODES)
  //   .force('link', d3.forceLink(LINKS))
  //   .force('charge', d3.forceManyBody())
  //   .force('center', d3.forceCenter(width / 2, height / 2))

  console.log({ NODES: NODES, LINKS: LINKS })
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
