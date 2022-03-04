import MainLayout from '@/componenst/layout/main'
import * as React from 'react'

export interface AboutProps {
  post: any
}

export default function AboutPage({ post }: AboutProps) {
  return (
    <div>
      <h1>about page</h1>
      <p>
        {post.map((i: any) => (
          <li key={i.id}>{i.title}</li>
        ))}
      </p>
    </div>
  )
}

AboutPage.Layout = MainLayout

export async function getServerSideProps(props: AboutProps) {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos')
  const data = await res.json()
  console.log('res', data)
  return {
    props: {
      post: data.map((i: any) => ({ title: i.title, id: i.id })),
    },
  }
}
