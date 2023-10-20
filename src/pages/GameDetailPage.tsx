import { Box, Heading, Text } from "@chakra-ui/react";

import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data } = useGame(slug!);

  return (
    <Box>
      <Heading>{data?.name}</Heading>
      <Text>{data?.description_raw}</Text>
    </Box>
  );
};

export default GameDetailPage;
