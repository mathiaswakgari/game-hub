import "./App.css";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

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
      <GridItem area={"main"} bg={"blue"}>
        Main
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} bg={"green"}>
          Aside
        </GridItem>
      </Show>
    </Grid>
  );
}

export default App;
