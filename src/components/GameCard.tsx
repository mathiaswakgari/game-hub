import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScoreBadge from "./CriticScoreBadge";
import getCroppedImage from "../services/image-url";
import GameCardContainer from "./GameCardContainer";
import { Game } from "../services/gamesService";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <GameCardContainer>
      <Card
        _hover={{
          transform: "scale(1.075)",
          transitionDuration: "400ms",
        }}
      >
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
