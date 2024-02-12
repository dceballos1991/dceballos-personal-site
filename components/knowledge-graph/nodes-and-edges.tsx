import React, { useEffect, useRef, useState } from 'react'
import { DefaultNode, Graph } from '@visx/network'
import * as d3 from 'd3'
import { LINKS, NODES } from '@/lib/constants'
import { CustomLink, CustomNode } from '@/lib/types'

export type NetworkProps = {
  width: number
  height: number
}

export default function NodesAndEdges({ width, height }: NetworkProps) {
  console.log({ width, height })
  const [nodes, setNodes] = useState<CustomNode[]>(
    NODES.map((node) => ({
      ...node,
      x: width / 2,
      y: height / 2,
    })) as CustomNode[],
  )
  const [links, setLinks] = useState<CustomLink[]>(
    LINKS.map((link) => ({
      ...link,
      source: NODES[link.source],
      target: NODES[link.target],
    })) as CustomLink[],
  )
  console.log({ nodes })

  useEffect(() => {
    const getStableGraph = (width: number, height: number) => {
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
        .stop()

      simulation.tick(120)

      return simulation
    }

    const simulation = getStableGraph(width, height)

    // set nodes after 500ms to animate the transition
    setTimeout(() => {
      setNodes(simulation.nodes() as CustomNode[])
    }, 5000)

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
