import fetchData, { DataDetailType } from "@/app/fetch/fetchData";
import MovieDetail from "./FullMovieDetail";

const MoviePage = async ({
  params,
}: {
  params: Promise<{ pageId: string }>;
}) => {
  const { pageId } = await params;
  const movieData: DataDetailType = await fetchData(
    `https://imdb236.p.rapidapi.com/imdb/${pageId}`
  );
  console.log(movieData);

  return (
    <>
      <MovieDetail {...movieData} />
    </>
  );
};

export default MoviePage;
