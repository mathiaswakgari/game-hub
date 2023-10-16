import "./App.css";
import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenresList from "./components/GenresList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `
                "navbar" 
                "main"`,
        lg: `
                "navbar navbar" 
                "aside  main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "300px 1fr",
      }}
    >
      <GridItem area={"navbar"}>
        <NavBar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        />
      </GridItem>
      <GridItem area={"main"}>
        {/* <Box paddingLeft={"20px"} marginBottom={"20px"}>
          <GameHeading gameQuery={gameQuery} />
          <HStack>
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              onSelectedPlatform={(platform) => {
                setGameQuery({ ...gameQuery, platform });
              }}
            />
            <SortSelector
              onSelectSort={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
              selectedSortOrder={gameQuery.sortOrder}
            />
          </HStack>
        </Box> */}

        {/* <GameGrid gameQuery={gameQuery} /> */}
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} paddingX={"20px"}>
          <GenresList
            selectedGenre={gameQuery.genre}
            onSelected={(genre) => {
              setGameQuery({ ...gameQuery, genre });
            }}
          />
        </GridItem>
      </Show>
    </Grid>
  );
}

export default App;
