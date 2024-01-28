'use client'
import { GraphBackground } from '@/components/graph-background'
import { ModeToggle } from '@/components/mode-toggle'
import { Graph } from '@visx/network'
import { ParentSize } from '@visx/responsive'

const Example = ({ width, height }: { width: number; height: number }) => {
  return (
    <svg className='relative' width={width} height={height}>
      <GraphBackground width={width} height={height} />
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
      <ModeToggle />
    </main>
  )
}
