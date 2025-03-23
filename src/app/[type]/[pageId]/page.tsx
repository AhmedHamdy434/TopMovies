import fetchData, { DataDetailType } from "@/app/fetch/fetchData";
import Image from "next/image";
import Sub from "../../../../public/landing2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faStar,
  faUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const MoviePage = async ({
  params,
}: {
  params: Promise<{ pageId: string }>;
}) => {
  const { pageId } = await params;
  const {
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
    directors,
    writers,
    cast,
  }: DataDetailType = await fetchData(
    `https://imdb236.p.rapidapi.com/imdb/${pageId}`
  );
  return (
    <div>
      <div className="container">
        <div className="main-section flex flex-col md:flex-row-reverse justify-between gap-[50px] pt-[50px]">
          <div className="details-section w-full md:w-[55%]">
            <div className="title flex justify-between mb-4">
              <div className="main-title text-[32px] md:text-[32px]">
                <h3 className="sm:inline-block font-bold text-main sm:mr-2 md:mr-4">
                  {primaryTitle}
                </h3>
                <span className="year">
                  &#91;{startYear}
                  {endYear && `- ${endYear}`}&#93;
                </span>
              </div>
              <FontAwesomeIcon
                icon={faHeart}
                size="2xl"
                className="text-red-400"
              />
            </div>
            <div className="type flex gap-4 mb-4 text-[12px] md:text-[16px]">
              <span className="rounded-[50%]  bg-main inline-flex justify-center items-center  w-[50px] h-[50px] md:w-[70px] md:h-[70px]">
                {type}
              </span>
              <span className="rounded-[50%] bg-main inline-flex justify-center items-center  w-[50px] h-[50px] md:w-[70px] md:h-[70px]">
                {runtimeMinutes} Min
              </span>
              <span className="rounded-[50%] bg-main inline-flex justify-center items-center  w-[50px] h-[50px] md:w-[70px] md:h-[70px]">
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
              priority={false}
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
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-yellow-500 ml-2"
                />
              </span>
              <span className="data ml-4">{numVotes} Votes</span>
            </div>
          </div>
        </div>
        <div className="extra-section">
          <div className="directors mb-8">
            {directors.map((director) => (
              <Link
                href={director.url}
                className="hover:underline"
                target="blank"
                key={director.id}
              >
                {director.fullName}
              </Link>
            ))}
          </div>
          <div className="writers mb-8">
            {writers.map((writer) => (
              <Link
                href={writer.url}
                className="hover:underline"
                target="blank"
                key={writer.id}
              >
                {writer.fullName}
              </Link>
            ))}
          </div>
          <div className="cast mb-8">
            {cast.map((actor) => (
              <div key={actor.id}>
                <Link
                  href={actor.url}
                  className="hover:underline"
                  target="blank"
                >
                  {actor.fullName} ({actor.job})
                </Link>
                {actor.characters.length > 0 && (
                  <span>
                    as <span>{actor.characters[0]}</span>
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
