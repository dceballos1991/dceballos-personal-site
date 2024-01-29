'use client'
import React from 'react'
import { DefaultNode, Graph } from '@visx/network'
import { Node } from './node'

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
  { x: 300, y: 40, color: '#26deb0' },
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

export const background = '#272b4d'

export default function Example({ width, height }: NetworkProps) {
  return (
    <>
      <Graph<CustomLink, CustomNode>
        graph={graph}
        top={20}
        left={100}
        nodeComponent={({ node: { color } }) =>
          color ? <DefaultNode fill={color} /> : <Node />
        }
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
      <Node />
    </>
  )
}
