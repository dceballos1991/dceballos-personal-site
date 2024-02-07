'use client'

import React from 'react'
import { GraphBackground } from '@/components/knowledge-graph/graph-background'
import { ParentSize } from '@visx/responsive'
import NodesAndEdges from './nodes-and-edges'
import { Node } from './node'

export const KnowledgeGraph = () => {
  return (
    <ParentSize className='relative overflow-hidden [&_*]:transition-all'>
      {({ width, height }) => (
        <>
          {/* <Node /> */}
          <svg
            className='relative'
            width={width}
            height={height}
            viewBox={`0 0 ${width} ${height}`}
          >
            <GraphBackground width={width} height={height} />
            {width && height && <NodesAndEdges width={width} height={height} />}
          </svg>
        </>
      )}
    </ParentSize>
  )
}
