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
    <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        style={{ width: "100%", marginBottom: 8, padding: 8 }}
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
        style={{ width: "100%", marginBottom: 8, padding: 8 }}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
        rows={6}
        style={{ width: "100%", marginBottom: 8, padding: 8 }}
      />
      <button type="submit" style={{ padding: "8px 16px" }}>
        Submit Blog
      </button>
      {message && <p>{message}</p>}
    </form>
  );
}

export default function Blog() {
  const [dynamicBlogs, setDynamicBlogs] = useState([]);

  useEffect(() => {
    fetch("/api/blogs")
      .then((res) => res.json())
      .then(setDynamicBlogs)
      .catch(() => setDynamicBlogs([])); // Fallback on error
  }, []);

  // Combine and sort by date descending
  const allBlogs = [...dynamicBlogs, ...staticBlogs].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <main style={{ maxWidth: 600, margin: "auto", padding: 20, fontFamily: "Arial" }}>
      <h1>Blog Posts</h1>

      <BlogForm />

      {allBlogs.length === 0 && <p>No blogs yet.</p>}

      {allBlogs.map((blog) => (
        <article
          key={blog.id || blog.title}
          style={{ marginBottom: 24, borderBottom: "1px solid #ccc", paddingBottom: 12 }}
        >
          <h2>{blog.title || "Untitled"}</h2>
          <p>
            By <strong>{blog.author || "Admin"}</strong> on{" "}
            {blog.date ? new Date(blog.date).toLocaleDateString() : "Unknown"}
          </p>
          {blog.content ? (
            <div dangerouslySetInnerHTML={{ __html: blog.content }} />
          ) : (
            <p>No content available.</p>
          )}
        </article>
      ))}
    </main>
  );
          }
          
