import SearchAndGenres from "../SearchAndGenres";
import fetchData, { DataType, genresUrl, topMoviesUrl } from "@/lib/fetchData";

const topMoviesPage = async () => {
  const allData: DataType[] = await fetchData(topMoviesUrl);
  const allGenres: string[] = await fetchData(genresUrl);
  return (
    <div className="container">
      <SearchAndGenres allData={allData} allGenres={allGenres} />
    </div>
  );
};

export default topMoviesPage;
