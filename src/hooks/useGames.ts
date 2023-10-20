import { useInfiniteQuery } from "@tanstack/react-query";
import gamesService from "../services/gamesService";
import { FetchGames } from "../entities/FetchGames";
import ms from "ms";
import useGameQueryStoreStore from "../stores/gameQueryStore";

const useGames = () => {
  const gameQuery = useGameQueryStoreStore((s) => s.gameQuery);

  return useInfiniteQuery<FetchGames, Error, FetchGames>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) => {
      return gamesService.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page_size: 9,
          page: pageParam,
        },
      });
    },
    staleTime: ms("24h"),
    //all pages- pages we've retrived so far
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });
};

export default useGames;
