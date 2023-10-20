import { Genre } from "./Genre";
import { Platform } from "./Platform";
import { Publisher } from "./Publisher";

export interface Game {
  id: number;
  name: string;
  genres: Genre[];
  background_image: string;
  metacritic: number;
  description_raw?: string;
  slug: string;
  publishers: Publisher[];
  parent_platforms: Array<{ platform: Platform }>;
}
