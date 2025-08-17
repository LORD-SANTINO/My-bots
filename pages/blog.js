import { useState, useEffect } from "react";
import staticBlogs from "../data/blogs";

function BlogForm() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, author, content }),
    });

    if (res.ok) {
      setMessage("Blog posted successfully!");
      setTitle("");
      setAuthor("");
      setContent("");
    } else {
      setMessage("Failed to post blog.");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "2rem" }}>
      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        style={{ width: "100%", marginBottom: "0.5rem" }}
      />
      <input
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
        style={{ width: "100%", marginBottom: "0.5rem" }}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
        rows={6}
        style={{ width: "100%", marginBottom: "0.5rem" }}
      />
      <button type="submit">Submit Blog</button>
      {message && <p>{message}</p>}
    </form>
  );
}

export default function Blog() {
  const [dynamicBlogs, setDynamicBlogs] = useState([]);

  useEffect(() => {
    fetch("/api/blogs")
      .then((res) => res.json())
      .then(setDynamicBlogs);
  }, []);

  // Combine static and dynamic blogs, sort by date descending
  const combinedBlogs = [...dynamicBlogs, ...staticBlogs].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <main>
      <h1>Blog Posts</h1>
      <BlogForm />

      {combinedBlogs.map((blog) => (
        <article key={blog.id || blog.title} style={{ marginBottom: 20 }}>
          <h2>{blog.title}</h2>
          <p>
            By <strong>{blog.author || "Admin"}</strong> on{" "}
            {new Date(blog.date).toLocaleDateString()}
          </p>
          {blog.content ? (
            <div dangerouslySetInnerHTML={{ __html: blog.content }} />
          ) : (
            <p>{blog.content}</p>
          )}
        </article>
      ))}
    </main>
  );
      }
    
