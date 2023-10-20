import { Game } from "./Game";

export interface FetchGames {
  count: number;
  results: Array<Game>;
  next: string | null;
}
