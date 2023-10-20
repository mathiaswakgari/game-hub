import ApiClient from "./api-clinet";
import { Platform } from "./platformsService";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  metacritic: number;
  slug: string;
  parent_platforms: Array<{ platform: Platform }>;
}

export interface FetchGames {
  count: number;
  results: Array<Game>;
  next: string | null;
}

export default new ApiClient<FetchGames>("/games");
