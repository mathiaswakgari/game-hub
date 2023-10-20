import ApiClient from "./api-clinet";
import Game from "../entities/Game";

export default (slug: string) => new ApiClient<Game>(`games/${slug}`);
