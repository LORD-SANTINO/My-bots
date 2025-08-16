// /components/BotCard.js

import Link from "next/link";

export default function BotCard({ bot }) {
  return (
    <div className="bot-card">
      <img src={bot.image} alt={bot.name} style={{width: '100px'}} />
      <h2>{bot.name}</h2>
      <p>{bot.description}</p>
      <p>Status: {bot.status}</p>
      <div>
        {bot.technologies.map(tech => (
          <span key={tech}>{tech} </span>
        ))}
      </div>
      <Link href={`/bots/${bot.id}`}>
        <button>View Details</button>
      </Link>
      {bot.link && (
        <a href={bot.link} target="_blank" rel="noopener noreferrer">
          Try Bot
        </a>
      )}
    </div>
  );
}
