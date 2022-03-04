import * as React from 'react'
import { LayoutProps } from '@/models/index'
import Link from 'next/link'

export default function EmptyLayout({ children }: LayoutProps) {
  return <>{children}</>
}
