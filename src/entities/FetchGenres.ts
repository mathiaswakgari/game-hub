import { Genre } from "./Genre";

export interface FetchGenres {
  count: number;
  results: Array<Genre>;
}
