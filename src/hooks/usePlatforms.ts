import { useQuery } from "@tanstack/react-query";
import platformsService from "../services/platformsService";

const usePlatforms = () => {
  return useQuery({
    queryKey: ["platforms"],
    queryFn: platformsService.getAll,
    staleTime: 10 * 1000,
  });
};
export default usePlatforms;
