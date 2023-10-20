import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-clinet";
import FetchScreenshots from "../entities/FetchScreenshots";

const useGameScreenshots = (slug: string) => {
  const api = new ApiClient<FetchScreenshots>(`games/${slug}/screenshots`);
  return useQuery({
    queryKey: ["screenshots", slug],
    queryFn: api.getAll,
  });
};

export default useGameScreenshots;
