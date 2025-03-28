import Link from "next/link";
interface TopListProps {
  setTop: React.Dispatch<React.SetStateAction<boolean>>;
  setBars: React.Dispatch<React.SetStateAction<boolean>>;
}
const TopList: React.FC<TopListProps> = ({ setTop, setBars }) => {
  const removingList = () => {
    setTop(false);
    setBars(false);
  };
  return (
    <div className="flex flex-col items-center gap-4 mt-4 py-4 md:absolute md:w-[200px] md:top-[100%] md:left-[-140%] md:pl-4 md:bg-main md:text-[16px] md:items-start">
      <Link onClick={removingList} className="" href="/top250-movies">
        Top 250 Movies
      </Link>

      <Link onClick={removingList} href="/most-popular-movies">
        Most Popular Movies
      </Link>

      <Link onClick={removingList} href="/top250-tv">
        Top 250 TV Shows
      </Link>

      <Link onClick={removingList} href="/most-popular-tv">
        Most Popular TV Shows
      </Link>
    </div>
  );
};

export default TopList;
