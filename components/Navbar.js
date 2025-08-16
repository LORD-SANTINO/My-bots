import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{ padding: "1rem", background: "#181b20", marginBottom: "2rem", borderRadius: "0 0 10px 10px" }}>
      <ul style={{ display: "flex", gap: "2rem", listStyle: "none", margin: 0, padding: 0 }}>
        <li>
          <Link href="/"><span style={{ color: "#61dafb", fontWeight: "bold" }}>Home</span></Link>
        </li>
        <li>
          <Link href="/about"><span style={{ color: "#61dafb" }}>About</span></Link>
        </li>
        <li>
          <Link href="/contact"><span style={{ color: "#61dafb" }}>Contact</span></Link>
        </li>
       <li>
         <Link href="/blog"><span style={{ color: "#61dafb" }}>Blog</span></Link>
        </li>
      </ul>
    </nav>
  );
  }
                  
