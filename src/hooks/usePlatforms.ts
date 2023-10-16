import { useEffect, useState } from "react";
import apiClinet from "../services/api-clinet";
import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-clinet";

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

const usePlatforms = () => {
  const apiClient = new ApiClient("/platforms/lists/parents");

  return useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: 10 * 1000,
  });
};
export default usePlatforms;
