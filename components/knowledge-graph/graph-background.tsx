import React from 'react'

export const GraphBackground = ({
  width,
  height,
}: {
  width: number
  height: number
}) => {
  return (
    <svg className='absolute' width={width} height={height}>
      <pattern
        id='pattern-1undefined'
        x='1.5'
        y='5'
        width='24'
        height='24'
        patternUnits='userSpaceOnUse'
        patternTransform='translate(-1,-1)'
      >
        <circle cx='1' cy='1' r='1' className='fill-graph-dots'></circle>
      </pattern>
      <rect
        x='0'
        y='0'
        width='100%'
        height='100%'
        fill='url(#pattern-1undefined)'
      ></rect>
    </svg>
  )
}
