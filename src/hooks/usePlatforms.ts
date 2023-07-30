import { useEffect, useState } from "react";
import apiClinet from "../services/api-clinet";

interface Platform {
  id: number;
  name: string;
  slug: string;
}
interface FetchPlatforms {
  results: Array<Platform>;
  count: number;
}

const usePlatforms = () => {
  const [platforms, setPlatforms] = useState<Platform[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    const controller = new AbortController();

    apiClinet
      .get<FetchPlatforms>("/platforms/lists/parents", {
        signal: controller.signal,
      })
      .then((res) => setPlatforms(res.data.results))
      .catch((error) => setError(error.message));

    controller.abort();
  }, []);

  return {
    platforms,
    error,
  };
};
export default usePlatforms;
