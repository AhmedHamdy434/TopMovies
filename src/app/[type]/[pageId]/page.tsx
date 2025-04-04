import fetchData, { baseUrl, DataDetailType } from "@/lib/fetchData";
import FullMovieDetail from "./FullMovieDetail";

const MoviePage = async ({
  params,
}: {
  params: Promise<{ pageId: string }>;
}) => {
  const { pageId } = await params;
  const movieData: DataDetailType = await fetchData(`${baseUrl}/${pageId}`);
  return (
    <>
      <FullMovieDetail {...movieData} />
    </>
  );
};

export default MoviePage;
