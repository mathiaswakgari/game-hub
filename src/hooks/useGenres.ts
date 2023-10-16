import { useQuery } from "@tanstack/react-query";
import genresService, { FetchGenres } from "../services/genresService";
// import genres from "../data/Genres";

const useGenres = () => {
  return useQuery<FetchGenres, Error, FetchGenres, string[]>({
    queryKey: ["genres"],
    queryFn: genresService.getAll,
    staleTime: 10 * 1000,
  });
};

export default useGenres;
