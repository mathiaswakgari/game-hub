import { Grid, Text } from "@chakra-ui/react";
import { Game } from "../entities/Game";
import AttributesCard from "./AttributesCard";
import CriticScoreBadge from "./CriticScoreBadge";

interface Props {
  game: Game;
}

const GameAttributes = ({ game: data }: Props) => {
  return (
    <Grid templateColumns="repeat(2, 1fr)">
      <AttributesCard title="Platforms">
        {data?.parent_platforms.map((p) => (
          <Text key={p.platform.id}>{p.platform.name}</Text>
        ))}
      </AttributesCard>
      <AttributesCard title="Metascore">
        <CriticScoreBadge score={data?.metacritic!} />
      </AttributesCard>
      <AttributesCard title="Genres">
        {data?.genres.map((g) => (
          <Text key={g.id}>{g.name}</Text>
        ))}
      </AttributesCard>
      <AttributesCard title="Publishers">
        {data?.publishers?.map((p) => (
          <Text key={p.id}>{p.name}</Text>
        ))}
      </AttributesCard>
    </Grid>
  );
};

export default GameAttributes;
