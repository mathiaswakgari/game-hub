import { Box, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  title: string;
}

const AttributesCard = ({ children, title }: Props) => {
  return (
    <Box w="50%" marginY={5}>
      <Text fontWeight={"bold"} color={"gray.500"}>
        {title}
      </Text>
      <Box>{children}</Box>
    </Box>
  );
};

export default AttributesCard;
