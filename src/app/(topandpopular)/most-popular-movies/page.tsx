import SearchAndGenres from "../SearchAndGenres";
import fetchData, {
  DataType,
  genresUrl,
  popularMoviesUrl,
} from "@/lib/fetchData";

const popularMoviesPage = async () => {
  const allData: DataType[] = await fetchData(popularMoviesUrl);
  const allGenres: string[] = await fetchData(genresUrl);
  return (
    <div className="container">
      <SearchAndGenres allData={allData} allGenres={allGenres} />
    </div>
  );
};

export default popularMoviesPage;
