import { GameQuery } from "../App";

import { useInfiniteQuery } from "@tanstack/react-query";
import gamesService, { FetchGames } from "../services/gamesService";

const useGames = (gameQuery: GameQuery) => {
  return useInfiniteQuery<
    FetchGames,
    Error,
    FetchGames,
    (string | GameQuery)[]
  >({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) => {
      return gamesService.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platform: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page_size: 9,
          page: pageParam,
        },
      });
    },
    //all pages- pages we've retrived so far
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });
};

export default useGames;
