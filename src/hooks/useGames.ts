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

const useGames = (gameQuery: GameQuery) => {
  const apiClient = new ApiClient<FetchGames>("/games");
  // params: {
  //   genres: gameQuery.genre?.id,
  //   platforms: gameQuery.platform?.id,
  //   ordering: gameQuery.sortOrder,
  //   search: gameQuery.searchText,
  // },

  return useQuery<FetchGames, Error, FetchGames, (string | GameQuery)[]>({
    queryKey: ["games", gameQuery],
    queryFn: apiClient.getAll,
  });
};

export default useGames;
