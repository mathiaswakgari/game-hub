import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-clinet";
// import genres from "../data/Genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

interface FetchGenres {
  count: number;
  results: Array<Genre>;
}

const apiClient = new ApiClient<FetchGenres>("/genres");

const useGenres = () => {
  return useQuery<FetchGenres, Error, FetchGenres, string[]>({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 10 * 1000,
  });
};

export default useGenres;
