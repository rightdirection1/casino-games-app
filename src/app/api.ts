import { Game } from "./types/game";

export const fetchGames = async (): Promise<Game[]> => {
  const res = await fetch(
    "https://cdn.palmsbet.com/static/games.json",
    { next: { revalidate: 3600 } } // ISR
  );

  if (!res.ok) {
    throw new Error("Failed to fetch games");
  }

  const games: Game[] = await res.json();

  return games
    .filter((game) => game.category === "slots")
    .sort((a, b) => a.index - b.index);
};
