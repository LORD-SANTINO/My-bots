import bots from "../data/bots";
import BotCard from "../components/BotCard";

export default function Home() {
  return (
    <main>
      <h1>My Bot Portfolio</h1>
      <div className="bot-list">
        {bots.map(bot => (
          <BotCard key={bot.id} bot={bot} />
        ))}
      </div>
    </main>
  );
}
