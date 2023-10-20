import useGameTrailers from "../hooks/useGameTrailers";

interface Props {
  slug: string;
}

const GameTrailer = ({ slug }: Props) => {
  const { data: trailers, error } = useGameTrailers(slug!);
  const first = trailers?.results[0];

  if (error) throw new Error("No trailer.");

  if (first)
    return (
      <video
        title={first?.name}
        src={first?.data[480]}
        poster={first?.preview}
        controls
      />
    );
};

export default GameTrailer;
