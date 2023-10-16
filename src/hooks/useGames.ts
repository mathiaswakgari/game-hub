import { GameQuery } from "../App";
import ApiClient from "../services/api-clinet";
import { useQuery } from "@tanstack/react-query";

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

const apiClient = new ApiClient<FetchGames>("/games");

const useGames = (gameQuery: GameQuery) => {
  // params: {
  //   genres: gameQuery.genre?.id,
  //   platforms: gameQuery.platform?.id,
  //   ordering: gameQuery.sortOrder,
  //   search: gameQuery.searchText,
  // },

  return useQuery<FetchGames, Error, FetchGames, string[]>({
    queryKey: ["games"],
    queryFn: apiClient.getAll,
  });
};

export default useGames;
