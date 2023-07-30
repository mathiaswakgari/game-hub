import { useState, useEffect } from "react";
import apiClinet from "../services/api-clinet";
import { CanceledError } from "axios";
import { Genre } from "./useGenres";

export interface Platform {
  id: number;
  name: string;
  slug: string;
  platforms: {
    id: number;
  };
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  metacritic: number;
  parent_platforms: Array<{ platform: Platform }>;
}

interface FetchGames {
  count: number;
  results: Array<Game>;
}

const useGames = (
  selectedGenre?: Genre | null,
  selectedPlatform?: Platform | null
) => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);

    apiClinet
      .get<FetchGames>("/games", {
        signal: controller.signal,
        params: {
          genres: selectedGenre?.id,
          platforms: selectedPlatform?.id,
        },
      })
      .then((res) => {
        // console.log(res.data.results);
        setGames(res.data.results);
        setIsLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
        setIsLoading(false);
      });

    return () => controller.abort();
  }, [selectedGenre?.id, selectedPlatform?.id]);

  return {
    games,
    error,
    isLoading,
    setGames,
    setError,
  };
};

export default useGames;
