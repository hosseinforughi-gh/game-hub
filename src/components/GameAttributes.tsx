import Game from "../entities/Game";
import { SimpleGrid, Text } from "@chakra-ui/react";
import CriticScore from "./CriticScore";
import DefiniationItem from "./DefiniationItem";
interface Props {
  game: Game;
}
const GameAttributes = ({ game }: Props) => {
  return (
    <SimpleGrid columns={2} as={"dl"}>
      <DefiniationItem term="Platforms">
        {game.parent_platforms?.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </DefiniationItem>
      <DefiniationItem term="Metascore">
        <CriticScore score={game.metacritic} />
      </DefiniationItem>
      <DefiniationItem term="Genres">
        {game.genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </DefiniationItem>
      <DefiniationItem term="Publishers">
        {game.publishers?.map((publisher) => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      </DefiniationItem>
    </SimpleGrid>
  );
};

export default GameAttributes;
