import { useState, useEffect } from "react";
import apiClinet from "../services/api-clinet";
import { CanceledError } from "axios";

interface Game {
  id: number;
  name: string;
}

interface FetchGames {
  count: number;
  results: Array<Game>;
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClinet
      .get<FetchGames>("/games", { signal: controller.signal })
      .then((res) => setGames(res.data.results))
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
      });

    return () => controller.abort();
  }, []);

  return {
    games,
    error,
    setGames,
    setError,
  };
};

export default useGames;
