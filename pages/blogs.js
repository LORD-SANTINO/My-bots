import { useEffect, useState } from "react";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("/api/blogs")
      .then((res) => res.json())
      .then(setBlogs);
  }, []);

  return (
    <main>
      <h1>Blog Posts</h1>
      {/* Insert blog submission form here */}
      {blogs.length === 0 ? <p>No blogs yet</p> : (
        blogs.map(blog => (
          <article key={blog.id}>
            <h2>{blog.title}</h2>
            <p>By {blog.author} on {new Date(blog.date).toLocaleString()}</p>
            <p>{blog.content}</p>
          </article>
        ))
      )}
    </main>
  );
}
