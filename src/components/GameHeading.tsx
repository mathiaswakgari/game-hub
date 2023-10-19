import { Heading } from "@chakra-ui/react";

import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStoreStore from "../stores/gameQueryStore";

const GameHeading = () => {
  const genreId = useGameQueryStoreStore((s) => s.gameQuery.genreId);
  const platformId = useGameQueryStoreStore((s) => s.gameQuery.platformId);
  const genre = useGenre(genreId!);
  const platform = usePlatform(platformId!);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return <Heading marginBottom={"20px"}>{heading}</Heading>;
};

export default GameHeading;
