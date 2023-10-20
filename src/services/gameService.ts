import ApiClient from "./api-clinet";
import { Game } from "./gamesService";

export default (slug: string) => new ApiClient<Game>(`games/${slug}`);
