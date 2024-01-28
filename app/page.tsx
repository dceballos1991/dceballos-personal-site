import { KnowledgeGraph } from '@/components/knowledge-graph'
import { ModeToggle } from '@/components/mode-toggle'

export default function Home() {
  return (
    <main className='flex h-screen flex-col items-center justify-between p-24'>
      hello world
      <KnowledgeGraph />
      <ModeToggle />
    </main>
  )
}
