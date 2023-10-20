import Game from "./Game";

interface FetchGames {
  count: number;
  results: Array<Game>;
  next: string | null;
}

export default FetchGames;
