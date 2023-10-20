import { FetchGenres } from "../entities/FetchGenres";
import ApiClient from "./api-clinet";

export default new ApiClient<FetchGenres>("/genres");
