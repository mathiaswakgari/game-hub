import { Box, Heading } from "@chakra-ui/react";

import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import GameTrailer from "../components/GameTrailer";

import GameScreenshots from "../components/GameScreenshots";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data } = useGame(slug!);

  return (
    <Box>
      <Heading>{data?.name}</Heading>
      <ExpandableText text={data?.description_raw!} />
      <GameAttributes game={data!} />
      <GameTrailer slug={slug!} />
      <GameScreenshots slug={slug!} />
    </Box>
  );
};

export default GameDetailPage;
