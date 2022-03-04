import * as React from 'react'
import { LayoutProps } from '@/models/index'
import Link from 'next/link'

export default function AdminLayout({ children }: LayoutProps) {
  return (
    <div>
      <h1>AdminLayout</h1>
      <div>Sidebar</div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>about</a>
      </Link>
      <div>{children}</div>
    </div>
  )
}
