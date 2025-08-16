// /components/BotCard.js

import Link from "next/link";

export default function BotCard({ bot }) {
  return (
    <article style={{
      border: '1px solid #ddd',
      borderRadius: 12,
      padding: 16
    }}>
      <h2>{bot.name}</h2>
      <p>{bot.description}</p>

      {bot.link && (
        <a href={bot.link} target="_blank" rel="noreferrer">
          Visit Bot
        </a>
      )}

      {bot.technologies && (
        <div style={{ marginTop: 12 }}>
          {bot.technologies.map((tech) => (
            <span key={tech} style={{ marginRight: 8 }}>
              {tech}
            </span>
          ))}
        </div>
      )}
    </article>
  );
    }
