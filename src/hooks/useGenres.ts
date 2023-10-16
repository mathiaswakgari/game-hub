import { useEffect, useState } from "react";
import apiClinet from "../services/api-clinet";
import { CanceledError } from "axios";
import { useQuery } from "@tanstack/react-query";
// import genres from "../data/Genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

interface FetchGenres {
  count: number;
  results: Array<Genre>;
}

const useGenres = () => {
  const fetchGenres = () =>
    apiClinet.get<FetchGenres>("/genres").then((res) => res.data);

  return useQuery<FetchGenres, Error, FetchGenres, string[]>({
    queryKey: ["genres"],
    queryFn: fetchGenres,
    staleTime: 10 * 1000,
  });
};

export default useGenres;
