import bots from "../../data/bots";

export async function getStaticPaths() {
  const paths = bots.map(bot => ({ params: { id: bot.id } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const bot = bots.find(b => b.id === params.id);
  return { props: { bot } };
}

export default function BotDetail({ bot }) {
  return (
    <div>
      <h1>{bot.name}</h1>
      <img src={bot.image} alt={bot.name} />
      <p>{bot.description}</p>
      {/* Add more info as you like */}
    </div>
  );
    }
      
