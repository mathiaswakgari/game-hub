import { Grid, Image } from "@chakra-ui/react";
import useGameScreenshots from "../hooks/useGameScreenshots";
import Screenshot from "../entities/Screenshot";

interface Props {
  slug: string;
}

const GameScreenshots = ({ slug }: Props) => {
  const { data: screenshots, error } = useGameScreenshots(slug!);

  if (error) throw new Error("No screenshots");

  if (screenshots?.results)
    return (
      <Grid
        marginY={5}
        rowGap={2}
        columnGap={5}
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
        }}
      >
        {screenshots?.results.map((screenshot: Screenshot) => (
          <Image src={screenshot?.image} />
        ))}
      </Grid>
    );
};

export default GameScreenshots;
