import ApiClient from "./api-clinet";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}
export interface FetchGenres {
  count: number;
  results: Array<Genre>;
}
export default new ApiClient<FetchGenres>("/genres");
