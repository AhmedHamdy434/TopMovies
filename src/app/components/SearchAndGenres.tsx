"use client";
import { useState } from "react";
import Card from "../components/Card";
import { DataType } from "../fetch/fetchData";

const SearchAndGenres: React.FC<{
  allData: DataType[];
  allGenres: string[];
}> = ({ allData, allGenres }) => {
  const [dataToShow, setDataToShow] = useState<DataType[]>([]);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [search, setSearch] = useState<string>("");
  // const [page,setPage]=useState<number>(1);
  const handleCheckboxChange = (genre: string) => {
    setSelectedItems((prev) =>
      prev.includes(genre)
        ? prev.filter((item) => item !== genre)
        : [...prev, genre]
    );
  };
  const handleSearch = () => {
    setDataToShow(
      allData
        .filter(
          (data) =>
            selectedItems.some((item) => data.genres.includes(item)) &&
            data.primaryTitle.toLowerCase().includes(search.toLowerCase())
        )
        .slice(0, 9)
    );
    setSearch("");
  };
  return (
    <>
      <div className="search pt-[50px] mb-[20px] flex flex-col justify-between items-center gap-4 sm:flex-row ">
        <input
          type="text"
          className="w-full focus:outline-0 text-[26px] bg-main rounded-[6px] py-2 pl-4 sm:w-[80%]"
          placeholder="Search By Name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="btn" onClick={handleSearch}>
          Search
        </button>
      </div>
      <ul className="flex flex-wrap gap-x-6 gap-y-3">
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
              className="data cursor-pointer !flex justify-center items-center !w-[100px] peer-checked:!bg-blue-500"
            >
              {genre}
            </label>
          </li>
        ))}
      </ul>
      {dataToShow.length === 0 ? (
        <div className="text-[32px] my-[50px] text-center">No Result Found</div>
      ) : (
        <div className="card-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-[50px]">
          {dataToShow.map((data) => (
            <Card key={data.id} {...data} />
          ))}
        </div>
      )}
    </>
  );
};

export default SearchAndGenres;
