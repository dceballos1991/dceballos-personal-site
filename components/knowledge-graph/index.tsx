'use client'

import React from 'react'
import { GraphBackground } from '@/components/knowledge-graph/graph-background'
import { ParentSize } from '@visx/responsive'
import Example from './nodes-and-edges'

export const KnowledgeGraph = () => {
  return (
    <ParentSize>
      {({ width, height }) => (
        <svg className='relative' width={width} height={height}>
          <GraphBackground width={width} height={height} />
          <Example width={width} height={height} />
        </svg>
      )}
    </ParentSize>
  )
}
