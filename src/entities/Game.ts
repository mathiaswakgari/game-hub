import { Platform } from "./Platform";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  metacritic: number;
  description_raw?: string;
  slug: string;
  parent_platforms: Array<{ platform: Platform }>;
}
