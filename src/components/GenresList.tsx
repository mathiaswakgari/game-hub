import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImage from "../services/image-url";
import GenreSkeleton from "./GenreSkeleton";

interface Props {
  onSelected: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenresList = ({ onSelected, selectedGenre }: Props) => {
  const { genres, error, isLoading } = useGenres();
  const genresList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

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
        {genres.map((genre) => (
          <ListItem key={genre.id} paddingY={1.5}>
            <HStack>
              <Image
                boxSize={"40px"}
                borderRadius={"10px"}
                objectFit={"cover"}
                src={getCroppedImage(genre.image_background)}
              />
              <Button
                onClick={() => onSelected(genre)}
                variant="link"
                fontSize={"lg"}
                whiteSpace={"normal"}
                textAlign={"left"}
                fontWeight={selectedGenre?.id === genre.id ? "bold" : "normal"}
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
