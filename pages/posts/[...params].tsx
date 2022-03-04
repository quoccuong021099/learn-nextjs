import { useRouter } from 'next/router'
import * as React from 'react'

export interface ParamPagesProps {}

export default function ParamPages(props: ParamPagesProps) {
  const router = useRouter()

  return (
    <div>
      ParamPages
      <p>Query: {JSON.stringify(router.query)}</p>
    </div>
  )
}
