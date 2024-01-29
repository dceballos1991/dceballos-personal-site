'use client'

import React from 'react'
import { GraphBackground } from '@/components/knowledge-graph/graph-background'
import { ParentSize } from '@visx/responsive'
import Example from './nodes-and-edges'
import { Node } from './node'

export const KnowledgeGraph = () => {
  return (
    <ParentSize className='relative'>
      {({ width, height }) => (
        <>
          <Node />
          <svg className='relative' width={width} height={height}>
            <GraphBackground width={width} height={height} />
            <Example width={width} height={height} />
          </svg>
        </>
      )}
    </ParentSize>
  )
}
