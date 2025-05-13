"use client";

import { usePaginatedGames } from "../hooks/usePaginatedGames";
import { Game } from "../types/game";
import GameCard from "./GameCard";
//import Loader from "./Loader";

type Props = {
  allGames: Game[];
  dict: {
    loadMore: string;
    noGames: string;
  };
};

export default function GameGrid({ allGames, dict }: Props) {
  const { games, loadMore, hasMore } = usePaginatedGames(allGames);

  //const isLoading = games.length === 0 && allGames === null;

  // if (isLoading) {
  //   return (
  //     <div className="p-4 grid gap-4 grid-cols-2 sm:grid-cols-4 lg:grid-cols-6">
  //       {Array.from({ length: 12 }).map((_, i) => (
  //         <Loader key={i} />
  //       ))}
  //     </div>
  //   );
  // }

  if (games.length === 0) {
    return <p className="text-center text-gray-500 mt-8">{dict.noGames}</p>;
  }

  return (
    <div className="p-4">
      <div className="grid gap-4 grid-cols-2 sm:grid-cols-4 lg:grid-cols-6">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>

      {hasMore && (
        <div className="flex justify-center mt-6">
          <button
            onClick={loadMore}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            {dict.loadMore}
          </button>
        </div>
      )}
    </div>
  );
}
