import Genre from "../entities/Genre";
import useGenres from "./useGenres";

const useGenre = (genreId: number) => {
  const { data: genres } = useGenres();
  return genres?.results.find((g: Genre) => g.id === genreId);
};

export default useGenre;
