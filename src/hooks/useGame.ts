import { useQuery } from "@tanstack/react-query";
import gameService from "../services/gameService";

const useGame = (id: string) => {
  return useQuery({
    queryKey: ["game", id],
    queryFn: () => gameService(id).getAll(),
    staleTime: 10 * 1000,
  });
};

export default useGame;
