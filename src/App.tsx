import "./App.css";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";

function App() {
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
    >
      <GridItem area={"navbar"}>
        <NavBar />
      </GridItem>
      <GridItem area={"main"}>
        <GameGrid />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"}>Aside</GridItem>
      </Show>
    </Grid>
  );
}

export default App;
