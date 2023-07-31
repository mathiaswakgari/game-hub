import { Game } from "../hooks/useGames";
import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScoreBadge from "./CriticScoreBadge";
import getCroppedImage from "../services/image-url";
import GameCardContainer from "./GameCardContainer";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <GameCardContainer>
      <Card>
        <Image src={getCroppedImage(game.background_image)} />
        <CardBody>
          <HStack justifyContent={"space-between"}>
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticScoreBadge score={game.metacritic} />
          </HStack>
          <Heading fontSize={"2xl"} whiteSpace={"nowrap"}>
            {game.name}
          </Heading>
        </CardBody>
      </Card>
    </GameCardContainer>
  );
};

export default GameCard;
