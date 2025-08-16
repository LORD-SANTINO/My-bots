import { db } from "../../firebase";
import { collection, addDoc, getDocs, query, orderBy } from "firebase/firestore";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const q = query(collection(db, "blogs"), orderBy("date", "desc"));
      const querySnapshot = await getDocs(q);
      const blogs = [];
      querySnapshot.forEach((doc) => {
        blogs.push({ id: doc.id, ...doc.data() });
      });
      res.status(200).json(blogs);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else if (req.method === "POST") {
    try {
      const { title, author, content } = req.body;
      if (!title || !author || !content) {
        return res.status(400).json({ error: "All fields are required" });
      }
      const docRef = await addDoc(collection(db, "blogs"), {
        title,
        author,
        content,
        date: new Date().toISOString(),
      });
      res.status(201).json({ id: docRef.id });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
             }
        
