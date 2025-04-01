import { DataDetailType, DataType } from "@/lib/fetchData";
import Image from "next/image";
import Sub from "../../../../public/landing2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import FavouriteIcon from "@/components/FavouriteIcon";

const MovieDetail = ({
  id,
  url,
  primaryTitle,
  type,
  description,
  primaryImage,
  contentRating,
  startYear,
  endYear,
  genres,
  runtimeMinutes,
  averageRating,
  numVotes,
  cast,
}: DataDetailType) => {
  const movieDetail: DataType = {
    id,
    primaryTitle,
    type,
    startYear,
    endYear,
    genres,
    averageRating,
    numVotes,
    primaryImage,
  };
  return (
    <div className="container min-h-screen">
      <div className="main-section flex flex-col md:flex-row-reverse justify-between gap-[50px] pt-[50px]">
        <div className="details-section w-full md:w-[55%]">
          <div className="title flex justify-between items-center mb-4">
            <div className="main-title text-[32px] sm:text-[48px] md:text-[30px] lg:text-[42px]">
              <h3 className="sm:inline-block font-bold text-main sm:mr-2 md:mr-4">
                {primaryTitle}
              </h3>
              <span className="year">
                &#91;{startYear}
                {endYear && `- ${endYear}`}&#93;
              </span>
            </div>
            <FavouriteIcon id={id} movieData={movieDetail} />
          </div>
          <div className="type flex gap-4 mb-4 text-[12px] md:text-[16px]">
            <span className="rounded-[50%] bg-main inline-flex justify-center items-center  w-[70px] h-[70px] md:w-[80px] md:h-[80px]">
              {type}
            </span>
            {runtimeMinutes && (
              <span className="rounded-[50%] bg-main inline-flex justify-center items-center w-[70px] h-[70px] md:w-[80px] md:h-[80px]">
                {runtimeMinutes} Min
              </span>
            )}
            <span className="rounded-[50%] bg-main inline-flex justify-center items-center w-[70px] h-[70px] md:w-[80px] md:h-[80px]">
              {contentRating}
            </span>
          </div>
          <div className="url mb-4">
            <Link
              href={url}
              target="blank"
              className="text-[18px] hover:underline"
            >
              IMDb
              <FontAwesomeIcon
                icon={faUpRightFromSquare}
                className="translate-y-[3px] ml-2"
              />
            </Link>
          </div>
          <div className="description">
            <h4 className="text-[20px] font-bold mb-2">Description :-</h4>
            <p>{description}</p>
          </div>
        </div>
        <div className="image-section w-full flex flex-col gap-4 md:w-[40%]">
          <Image
            src={primaryImage || Sub}
            alt="image"
            unoptimized={true}
            width={900}
            height={900}
            className="rounded-[10px]"
          />
          <div className="genres flex gap-3">
            {genres.map((genre) => (
              <span key={genre} className="data">
                {genre}
              </span>
            ))}
          </div>
          <div className="rating">
            <span className="data">
              {averageRating}
              <FontAwesomeIcon icon={faStar} className="text-yellow-500 ml-2" />
            </span>
            <span className="data ml-4">{numVotes} Votes</span>
          </div>
        </div>
      </div>
      <div className="cast my-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {cast.map((actor, index) => (
          <div
            key={index}
            className="p-2 rounded-[4px] bg-[#888] dark:bg-[#333]"
          >
            <Link
              href={actor.url}
              className="hover:underline !inline-flex"
              target="blank"
            >
              {actor.fullName} ({actor.job})
            </Link>
            {actor.characters.length > 0 && (
              <span className="ml-3">
                as
                <span className="font-bold text-[#024950] dark:text-[#a8dadc] ml-3">
                  {actor.characters[0]}
                </span>
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieDetail;
