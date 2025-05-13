"use client";

import { Game } from "../types/game";
import GameMedia from "./GameMultimedia";

type Props = {
  game: Game;
};

export default function GameCard({ game }: Props) {
  return (
    <div className="bg-white border rounded shadow-sm p-2 flex flex-col items-center justify-between">
      <GameMedia game={game} />
      <p className="text-sm text-center mt-2">{game.name}</p>
    </div>
  );
}
