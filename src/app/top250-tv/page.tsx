import SearchAndGenres from "../components/SearchAndGenres";
import fetchData, { DataType } from "../fetch/fetchData";

const topShowPage = async () => {
  const allData: DataType[] = await fetchData(
    "https://imdb236.p.rapidapi.com/imdb/top250-tv"
  );
  const allGenres: string[] = await fetchData(
    "https://imdb236.p.rapidapi.com/imdb/genres"
  );

  return (
    <div className="container">
      <SearchAndGenres allData={allData} allGenres={allGenres} />
    </div>
  );
};

export default topShowPage;
