import FetchGames from "../entities/FetchGames";
import ApiClient from "./api-clinet";

export default new ApiClient<FetchGames>("/games");
