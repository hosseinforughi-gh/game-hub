import { Grid, GridItem, HStack } from "@chakra-ui/react";
import GameGrid from "../components/GameGrid";
import GameHeading from "../components/GameHeading";
import GenreList from "../components/GenreList";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";

const HomePage = () => {
  return (
    <Grid
      h={"100vh"}
      templateColumns={{ base: "1fr", lg: "200px 1fr" }}
      templateAreas={{
        base: ` "main"`,
        lg: ` "aside main"`,
      }}
      gap={{ base: 4, md: 6, lg: 8 }}
    >
      <GridItem
        area="aside"
        paddingX={5}
        display={{ base: "none", lg: "block" }}
      >
        <GenreList />
      </GridItem>
      <GridItem area="main">
        <GameHeading />
        <HStack paddingLeft={7}>
          <PlatformSelector />
          <SortSelector />
        </HStack>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
