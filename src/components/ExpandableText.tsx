import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  text: string;
}

const ExpandableText = ({ text }: Props) => {
  const [showMore, setShowMore] = useState(false);

  if (text)
    return (
      <>
        <Text>
          {!showMore ? text.slice(0, 300) + "..." : text}
          {text?.length! >= 300 && (
            <Button
              onClick={() => setShowMore(!showMore)}
              marginLeft={1}
              colorScheme="red"
              size={"sm"}
            >
              {showMore ? "Less" : "More"}
            </Button>
          )}
        </Text>
      </>
    );
};

export default ExpandableText;
