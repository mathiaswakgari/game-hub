import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-clinet";
import FetchTrailers from "../entities/FetchTrailers";

const useGameTrailers = (slug: string) => {
  const api = new ApiClient<FetchTrailers>(`games/${slug}/movies`);
  return useQuery({
    queryFn: api.getAll,
    queryKey: ["trailers", slug],
  });
};

export default useGameTrailers;
