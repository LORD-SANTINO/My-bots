// /pages/blog/[id].js

import blogs from '../../data/blogs'

export async function getStaticPaths() {
  const paths = blogs.map(blog => ({
    params: { id: blog.id }
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const blog = blogs.find(b => b.id === params.id);
  return { props: { blog } };
}

export default function BlogDetail({ blog }) {
  return (
    <main>
      <h1>{blog.title}</h1>
      <div style={{color:'#aaa', fontSize:'0.95em'}}>{blog.date}</div>
      <div dangerouslySetInnerHTML={{ __html: blog.content }} />
      <p><a href="/blog" style={{color:'#61dafb'}}>← Back to Blog</a></p>
    </main>
  )
}
