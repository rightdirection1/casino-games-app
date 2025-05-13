import { useState, useEffect, useCallback } from "react";
import { Game } from "../types/game";

export function usePaginatedGames(allGames: Game[], pageSize: number = 10) {
  const [games, setGames] = useState<Game[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const loadGames = useCallback(() => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);
    const newGames = allGames.slice((page - 1) * pageSize, page * pageSize);
    setGames((prev) => [...prev, ...newGames]);
    setHasMore(allGames.length > page * pageSize);
    setIsLoading(false);
  }, [allGames, page, isLoading, hasMore, pageSize]);

  useEffect(() => {
    loadGames();
  }, [page, loadGames]);

  const loadMore = () => {
    if (hasMore && !isLoading) {
      setPage((prev) => prev + 1);
    }
  };

  return { games, loadMore, hasMore, isLoading };
}
