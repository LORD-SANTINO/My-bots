// /pages/contact.js

export default function Contact() {
  return (
    <main>
      <h1>Contact Me</h1>
      <p>Want to discuss a project or request a custom bot? Reach out!</p>
      <form action="mailto:youremail@example.com" method="POST" encType="text/plain">
        <div>
          <label>Name: <input type="text" name="name" required /></label>
        </div>
        <div>
          <label>Email: <input type="email" name="email" required /></label>
        </div>
        <div>
          <label>Message:<br />
            <textarea name="message" rows="5" required></textarea>
          </label>
        </div>
        <button type="submit">Send</button>
      </form>
      <p>Or email me at: <a href="mailto:youremail@example.com">youremail@example.com</a></p>
    </main>
  );
    }
    
