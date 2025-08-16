import { useState, useEffect } from "react";

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
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        style={{ width: "100%", padding: "0.5rem", marginBottom: "0.5rem" }}
      />

      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
        style={{ width: "100%", padding: "0.5rem", marginBottom: "0.5rem" }}
      />

      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
        rows="6"
        style={{ width: "100%", padding: "0.5rem", marginBottom: "0.5rem" }}
      />

      <button type="submit" style={{ padding: "0.6rem 1.2rem", cursor: "pointer" }}>
        Submit Blog
      </button>

      {message && <p>{message}</p>}
    </form>
  );
}

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
      <BlogForm />

      {blogs.length === 0 ? (
        <p>No blogs yet</p>
      ) : (
        blogs.map((blog) => (
          <article key={blog.id} style={{ marginBottom: "2rem", borderBottom: "1px solid #ccc", paddingBottom: "1rem" }}>
            <h2>{blog.title}</h2>
            <p>
              By <strong>{blog.author}</strong> on {new Date(blog.date).toLocaleString()}
            </p>
            <p>{blog.content}</p>
          </article>
        ))
      )}
    </main>
  );
          }
          
