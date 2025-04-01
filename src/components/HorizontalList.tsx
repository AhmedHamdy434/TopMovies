import Link from "next/link";
import fetchData, { DataType } from "../lib/fetchData";
import Card from "./Card";

const HorizontalList = async ({ url }: { url: string }) => {
  const allData: DataType[] = await fetchData(url);
  const dataToShow: DataType[] = allData.slice(0, 4);
  return (
    <div className="py-[50px] md:py-[100px]">
      <div className="container">
        <h2 className="text-[32px] font-bold mb-8 ">
          {url.split("/")[4].split("-").join(" ").toUpperCase()}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {dataToShow.map((data) => (
            <Card key={data.id} {...data} />
          ))}
        </div>
        <Link
          href={`/${url.split("/")[4]}`}
          className="btn hover:!bg-[#13383b] ml-auto mt-6"
        >
          Show More
        </Link>
      </div>
    </div>
  );
};

export default HorizontalList;
