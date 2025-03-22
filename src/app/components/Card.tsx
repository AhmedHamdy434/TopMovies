import Image from "next/image";
import Link from "next/link";
import { DataType } from "../fetch/fetchData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { Suspense } from "react";
import ImageLoading from "./ImageLoading";
import Logo from "../../../public/reshot-icon-movies-YHCSARN6B4.svg";

const Card = ({
  id,
  primaryTitle,
  type,
  startYear,
  endYear,
  genres,
  averageRating,
  numVotes,
  primaryImage,
}: DataType) => {
  return (
    <Link href={`/${type}/${id}`}>
      <div className="card bg-white relative hover:-translate-y-4 transition-all duration-300 cursor-pointer rounded-[10px]">
        <div className="image h-[72%] overflow-hidden relative">
          <Suspense fallback={<ImageLoading />}>
            <Image
              src={primaryImage || Logo}
              alt="image"
              unoptimized={true}
              width={100}
              height={100}
              className="w-full rounded-t-[10px]"
            />
          </Suspense>
          <FontAwesomeIcon
            icon={faHeart}
            size="2xl"
            className="absolute top-[5%] left-[5%] text-red-400"
          />
          <div className="rating absolute top-[5%] right-[5%] flex items-center">
            <span className="text-[24px] font-bold text-main">
              {averageRating}
            </span>
            <FontAwesomeIcon icon={faStar} className="text-yellow-500 ml-2" />
          </div>
          <div className="genres absolute bottom-[5%] left-[5%] flex gap-3">
            {genres.map((genre, index) => (
              <span key={index} className="data">
                {genre}
              </span>
            ))}
          </div>
        </div>
        <div className="information  p-4">
          <h3 className="text-[30px] sm:text-[20px] text-main font-bold leading-[1.2] mb-2">
            {primaryTitle}
          </h3>
          <div className="year absolute left-[5%] bottom-[5%]">
            <span className="data">{startYear}</span>
            {endYear && endYear !== startYear && (
              <span className="data ml-3">{endYear}</span>
            )}
          </div>
          <div className="votes data absolute bottom-[4%] right-[5%]">
            {numVotes} Votes
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
