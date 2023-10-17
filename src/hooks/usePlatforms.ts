import { useQuery } from "@tanstack/react-query";
import platformsService from "../services/platformsService";
import ms from "ms";

const usePlatforms = () => {
  return useQuery({
    queryKey: ["platforms"],
    queryFn: platformsService.getAll,
    staleTime: ms("24h"),
  });
};
export default usePlatforms;
