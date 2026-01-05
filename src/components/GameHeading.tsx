import { Heading } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatforms";
import useGameQueryStore from "../store";

const GameHeading = () => {
  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const { data: platforms } = usePlatform();
  const platform = platforms?.results.find((p) => p.id === platformId);
  const { data: genres } = useGenre();
  const genre = genres?.results.find((g) => g.id === genreId);
  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading size="4xl" marginY={5} marginX={7}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
