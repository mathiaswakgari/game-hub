import useGames from "../hooks/useGames";
import { SimpleGrid, Text, Button, Spinner } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import React from "react";
import { Link } from "react-router-dom";

const GameGrid = () => {
  const { data, error, isLoading, isFetchingNextPage, fetchNextPage } =
    useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];
  if (error) return <Text>{error.message}</Text>;

  return (
    <>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3 }}
        spacing={"30 "}
        padding={"20px"}
      >
        {isLoading &&
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {data?.pages.map((page) => (
          <React.Fragment>
            {page?.results.map((game) => (
              <Link to={`games/${game.slug}`}>
                <GameCard key={game.id} game={game} />
              </Link>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
      <Button
        colorScheme={"teal"}
        width={"10rem"}
        marginBottom={5}
        marginLeft={"20px"}
        onClick={() => {
          fetchNextPage();
        }}
        disabled={isFetchingNextPage}
      >
        {isFetchingNextPage ? <Spinner></Spinner> : "Load more..."}
      </Button>
    </>
  );
};

export default GameGrid;
