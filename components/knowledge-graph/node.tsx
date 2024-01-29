'use client'
import React from 'react'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export const Node = () => {
  return (
    <Card className='absolute left-[50px] top-[20px]'>
      <CardHeader>
        <CardTitle>David Ceballos</CardTitle>
        <CardDescription>Knowledge Graph</CardDescription>
      </CardHeader>
    </Card>
  )
}
