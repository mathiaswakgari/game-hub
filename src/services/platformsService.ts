import { FetchPlatforms } from "../entities/FetchPlatforms";
import ApiClient from "./api-clinet";
export default new ApiClient<FetchPlatforms>("/platforms/lists/parents");
