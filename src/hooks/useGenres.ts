import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import genresService from "../services/genresService";
import { FetchGenres } from "../entities/FetchGenres";
import genres from "../data/Genres";

const useGenres = () => {
  return useQuery<FetchGenres, Error, FetchGenres, string[]>({
    queryKey: ["genres"],
    queryFn: genresService.getAll,
    staleTime: ms("24h"),
    initialData: {
      count: genres.length,
      results: genres,
    },
  });
};

export default useGenres;
