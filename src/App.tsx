import "./App.css";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenresList from "./components/GenresList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );

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
        <NavBar />
      </GridItem>
      <GridItem area={"main"}>
        <PlatformSelector
          selectedPlatform={selectedPlatform}
          onSelectedPlatform={(platform) => {
            setSelectedPlatform(platform);
            console.log(platform);
          }}
        />
        <GameGrid
          selectedGenre={selectedGenre}
          selectedPlatform={selectedPlatform}
        />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} paddingX={"20px"}>
          <GenresList
            selectedGenre={selectedGenre}
            onSelected={(genre) => {
              setSelectedGenre(genre);
            }}
          />
        </GridItem>
      </Show>
    </Grid>
  );
}

export default App;
