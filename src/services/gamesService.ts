import ApiClient from "./api-clinet";
import { Platform } from "./platformsService";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  metacritic: number;
  parent_platforms: Array<{ platform: Platform }>;
}

export interface FetchGames {
  count: number;
  results: Array<Game>;
}

export default new ApiClient<FetchGames>("/games");
