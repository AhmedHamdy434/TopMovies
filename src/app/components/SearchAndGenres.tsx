"use client";
import { Suspense, useCallback, useEffect, useState } from "react";
import Card from "../components/Card";
import { DataType } from "../fetch/fetchData";
import ImageLoading from "./ImageLoading";

const SearchAndGenres: React.FC<{
  allData: DataType[];
  allGenres: string[];
}> = ({ allData, allGenres }) => {
  const [dataToShow, setDataToShow] = useState<DataType[]>([]);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [search, setSearch] = useState<string>("");
  const [noResultFound, setNoResultFound] = useState<boolean>(false);
  // const [page,setPage]=useState<number>(1);
  const handleCheckboxChange = (genre: string) => {
    setSelectedItems((prev) =>
      prev.includes(genre)
        ? prev.filter((item) => item !== genre)
        : [...prev, genre]
    );
  };
  const handleSearch = useCallback(() => {
    setDataToShow(
      allData
        .filter(
          (data) =>
            selectedItems.every((item) => data.genres.includes(item)) &&
            data.primaryTitle.toLowerCase().includes(search.toLowerCase())
        )
        .slice(0, 9)
    );
  }, [search, allData, selectedItems]);
  useEffect(() => {
    handleSearch();
    setNoResultFound(true);
  }, [handleSearch]);
  return (
    <>
      <div className="search pt-[50px] mb-[30px] text-center">
        <input
          type="text"
          className="w-[80%] focus:outline-0 text-[26px] bg-main rounded-[6px] py-2 pl-4"
          placeholder="Search By Name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <ul className="flex flex-wrap gap-x-3 gap-y-3">
        {allGenres.map((genre) => (
          <li key={genre} className="">
            <input
              type="checkbox"
              name={genre}
              id={genre}
              className="hidden peer"
              onChange={() => handleCheckboxChange(genre)}
            />
            <label
              htmlFor={genre}
              className="data cursor-pointer flex justify-center items-center text-[10px] w-[80px] sm:text-[12px] sm:w-[100px] peer-checked:!bg-blue-500"
            >
              {genre}
            </label>
          </li>
        ))}
      </ul>
      {dataToShow.length === 0 && noResultFound ? (
        <div className="text-[32px] py-[100px] text-center font-extrabold h-[60vh]">
          No Result Found
        </div>
      ) : (
        <Suspense fallback={<ImageLoading />}>
          <div className="card-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-[50px] min-h-[60vh]">
            {dataToShow.map((data) => (
              <Card key={data.id} {...data} />
            ))}
          </div>
        </Suspense>
      )}
    </>
  );
};

export default SearchAndGenres;
