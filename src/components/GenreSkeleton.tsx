import { HStack, Skeleton, SkeletonText } from "@chakra-ui/react";

const GenreSkeleton = () => {
  return (
    <HStack>
      <Skeleton boxSize={"40px"} borderRadius={"10px"} />
      <SkeletonText width={"75px"} noOfLines={1} />
    </HStack>
  );
};

export default GenreSkeleton;
