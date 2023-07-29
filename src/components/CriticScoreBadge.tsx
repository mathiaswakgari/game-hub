import { Badge } from "@chakra-ui/react";
interface Props {
  score: number;
}

const CriticScoreBadge = ({ score }: Props) => {
  const color =
    score > 75 ? "green" : score > 50 ? "yellow" : score < 50 ? "red" : "";
  return (
    <Badge
      colorScheme={color}
      paddingX={2}
      borderRadius={"3px"}
      fontSize={"15"}
    >
      {score}
    </Badge>
  );
};

export default CriticScoreBadge;
