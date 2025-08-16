// pages/index.js
import bots from "../data/bots";
import BotCard from "../components/BotCard";

export default function Home() {
  return (
    <main style={{ padding: 24 }}>
      <h1>DAX BOTS</h1>

      <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))" }}>
        {bots?.map((bot) => (
          <BotCard key={bot.id} bot={bot} />
        ))}
      </div>
    </main>
  );
  }
