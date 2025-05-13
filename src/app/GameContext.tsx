// GameProvider.tsx
"use client";
import { createContext, useContext, ReactNode } from "react";
import { Game } from "./types/game";

const GameContext = createContext<Game[] | null>(null);

export const useGames = () => {
  const context = useContext(GameContext);
  if (context === null) {
    throw new Error("useGames must be used within a GameProvider");
  }
  return context;
};

export const GameProvider = ({
  games,
  children,
}: {
  games: Game[];
  children: ReactNode;
}) => {
  return <GameContext.Provider value={games}>{children}</GameContext.Provider>;
};
