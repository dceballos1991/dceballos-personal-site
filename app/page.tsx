'use client'
import { Graph } from '@visx/network'
import { ParentSize } from '@visx/responsive'

const Example = ({ width, height }: { width: number; height: number }) => {
  return (
    <svg className='relative' width={width} height={height}>
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
          <circle cx='1' cy='1' r='1' fill='#91919a'></circle>
        </pattern>
        <rect
          x='0'
          y='0'
          width='100%'
          height='100%'
          fill='url(#pattern-1undefined)'
        ></rect>
      </svg>
    </svg>
  )
}

export default function Home() {
  return (
    <main className='flex h-screen flex-col items-center justify-between p-24'>
      hello world
      <ParentSize>
        {({ width, height }) => <Example width={width} height={height} />}
      </ParentSize>
    </main>
  )
}
