import { Box, Heading } from "@chakra-ui/react";

import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import ExpandableText from "../components/ExpandableText";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data } = useGame(slug!);

  return (
    <Box>
      <Heading>{data?.name}</Heading>
      <ExpandableText text={data?.description_raw!} />
    </Box>
  );
};

export default GameDetailPage;
