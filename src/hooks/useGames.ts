import { GameQuery } from "../App";

import { useQuery } from "@tanstack/react-query";
import gamesService, { FetchGames } from "../services/gamesService";

export interface Platform {
  id: number;
  name: string;
  slug: string;
  platforms: {
    id: number;
  };
}

const useGames = (gameQuery: GameQuery) => {
  return useQuery<FetchGames, Error, FetchGames, (string | GameQuery)[]>({
    queryKey: ["games", gameQuery],
    queryFn: () => {
      return gamesService.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platform: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
        },
      });
    },
  });
};

export default useGames;
