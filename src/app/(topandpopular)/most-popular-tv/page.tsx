import SearchAndGenres from "../SearchAndGenres";
import fetchData, { DataType, genresUrl, popularTvUrl } from "@/lib/fetchData";

const popularShowsPage = async () => {
  const allData: DataType[] = await fetchData(popularTvUrl);
  const allGenres: string[] = await fetchData(genresUrl);
  return (
    <div className="container">
      <SearchAndGenres allData={allData} allGenres={allGenres} />
    </div>
  );
};

export default popularShowsPage;
