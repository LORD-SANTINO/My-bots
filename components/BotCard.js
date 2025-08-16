// /components/BotCard.js

import Link from "next/link";

export default function BotCard({ bot }) {
  return (
    <article style={{ border: "1px solid #ddd", borderRadius: 12, padding: 16 }}>
      <h2 style={{ margin: "0 0 8px" }}>{bot.name}</h2>
      <p style={{ margin: "0 0 12px" }}>{bot.description}</p>
      {bot.link && (
        <a href={bot.link} target="_blank" rel="noreferrer">
          Visit bot
        </a>
      )}
    </article>
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
