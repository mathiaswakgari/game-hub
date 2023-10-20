import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImage from "../services/image-url";
import GenreSkeleton from "./GenreSkeleton";
import useGameQueryStoreStore from "../stores/gameQueryStore";
import Genre from "../entities/Genre";

const GenresList = () => {
  const { data: results, error, isLoading } = useGenres();
  const genresList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const setGenreId = useGameQueryStoreStore((s) => s.setGenreId);
  const genreId = useGameQueryStoreStore((s) => s.gameQuery.genreId);

  if (error) return null;

  return (
    <>
      <Heading marginBottom={"20px"}>Genres</Heading>
      <List>
        {isLoading &&
          genresList.map((genre) => (
            <ListItem key={genre} paddingY={1.5}>
              <GenreSkeleton />
            </ListItem>
          ))}
        {results?.results.map((genre: Genre) => (
          <ListItem key={genre.id} paddingY={1.5}>
            <HStack>
              <Image
                boxSize={"40px"}
                borderRadius={"10px"}
                objectFit={"cover"}
                src={getCroppedImage(genre.image_background)}
              />
              <Button
                onClick={() => setGenreId(genre.id)}
                variant="link"
                fontSize={"lg"}
                whiteSpace={"normal"}
                textAlign={"left"}
                fontWeight={genreId === genre.id ? "bold" : "normal"}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenresList;
