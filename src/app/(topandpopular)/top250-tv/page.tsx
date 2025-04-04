import SearchAndGenres from "../SearchAndGenres";
import fetchData, { DataType, genresUrl, topTvUrl } from "@/lib/fetchData";

const topShowPage = async () => {
  const allData: DataType[] = await fetchData(topTvUrl);
  const allGenres: string[] = await fetchData(genresUrl);
  return (
    <div className="container">
      <SearchAndGenres allData={allData} allGenres={allGenres} />
    </div>
  );
};

export default topShowPage;
