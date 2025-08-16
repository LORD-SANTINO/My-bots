import { useState, useEffect } from "react";

function BlogForm() {
  // ... form state and logic here ...
  // (use the full BlogForm code I shared previously)
}

export default function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("/api/blogs.js")
      .then((res) => res.json())
      .then(setBlogs);
  }, []);

  return (
    <main>
      <h1>Blog Posts</h1>
      <BlogForm />  {/* This renders the form */}

      {blogs.length === 0 ? (
        <p>No blogs yet</p>
      ) : (
        blogs.map((blog) => (
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
        
