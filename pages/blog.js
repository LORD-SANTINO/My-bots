// /pages/blog.js

import blogs from '../data/blogs'
import Link from 'next/link'

export default function Blog() {
  return (
    <main>
      <h1>Blog</h1>
      <ul>
        {blogs.map(blog => (
          <li key={blog.id} style={{ marginBottom: '1.4rem' }}>
            <Link href={`/blog/${blog.id}`}>
              <span style={{ color: '#61dafb', fontWeight: 'bold', cursor: 'pointer' }}>{blog.title}</span>
            </Link>
            <div style={{color:'#aaa', fontSize:'0.95em'}}>{blog.date}</div>
            <div>{blog.summary}</div>
          </li>
        ))}
      </ul>
    </main>
  )
}
