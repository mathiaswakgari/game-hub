import { Grid, GridItem, Heading } from "@chakra-ui/react";

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
    <Grid
      templateColumns={{
        base: `repeat(1, 1fr)`,
        md: `repeat(2, 1fr)`,
      }}
    >
      <GridItem>
        <Heading>{data?.name}</Heading>
        <ExpandableText text={data?.description_raw!} />
        <GameAttributes game={data!} />
      </GridItem>
      <GridItem>
        <GameTrailer slug={slug!} />
        <GameScreenshots slug={slug!} />
      </GridItem>
    </Grid>
  );
};

export default GameDetailPage;
