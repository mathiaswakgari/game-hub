import ApiClient from "./api-clinet";
export interface Platform {
  id: number;
  name: string;
  slug: string;
  platforms: {
    id: number;
  };
}
interface FetchPlatforms {
  results: Array<Platform>;
  count: number;
}

export default new ApiClient<FetchPlatforms>("/platforms/lists/parents");
