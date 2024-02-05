import React, { useEffect, useRef, useState } from 'react'
import { DefaultNode, Graph } from '@visx/network'
import * as d3 from 'd3'
import { LINKS, NODES } from '@/lib/constants'
import { CustomLink, CustomNode } from '@/lib/types'

export type NetworkProps = {
  width: number
  height: number
}

export default function Example({ width, height }: NetworkProps) {
  const [nodes, setNodes] = useState<CustomNode[]>(NODES as CustomNode[])
  const [links, setLinks] = useState<CustomLink[]>(LINKS as CustomLink[])
  const svgRef = useRef(null)

  useEffect(() => {
    const simulation = d3
      .forceSimulation(nodes as d3.SimulationNodeDatum[])
      .force(
        'link',
        d3.forceLink(links as d3.SimulationLinkDatum<CustomNode>[]),
      )
      .force(
        'charge',
        d3.forceManyBody(),
        // .strength(-500)
      )
      .force('center', d3.forceCenter(width / 2, height / 2))

    // Initially place all nodes at the center
    simulation.nodes().forEach((node) => {
      node.fx = width / 2
      node.fy = height / 2
    })

    for (let i = 0; i < 300; ++i) {
      // Run for a sufficient number of ticks to stabilize
      simulation.tick()
    }

    setNodes(simulation.nodes() as CustomNode[])

    simulation.stop()
    return () => {
      simulation.stop()
    }
  }, [width, height, nodes, links])

  const graph = {
    nodes: nodes,
    links: links,
  }

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
      linkComponent={({ link: { source, target } }) => (
        <line
          x1={source.x}
          y1={source.y}
          x2={target.x}
          y2={target.y}
          strokeWidth={2}
          stroke='#999'
          strokeOpacity={0.6}
        />
      )}
    />
  )
}
