"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "@/Providers/AuthProvider";
import { useEffect, useState } from "react";
import { addingFav, gettingFav, removingFav } from "@/lib/FavouriteActions";
import { DataType } from "@/lib/fetchData";
const FavouriteIcon = ({
  id,
  movieData,
}: {
  id: string;
  movieData: DataType;
}) => {
  const authContext = useAuth();
  const userId = authContext?.user?.uid;
  const [isFavourite, setIsFavourite] = useState<boolean>(false);

  const handleFavorite = async () => {
    if (!userId) return;
    if (isFavourite) {
      await removingFav(userId, id);
      setIsFavourite(false);
    } else {
      await addingFav(userId, id, movieData);
      setIsFavourite(true);
    }
  };
  useEffect(() => {
    const isFavouriteFunction = async () => {
      if (!userId) return;
      const favouriteList = await gettingFav(userId);
      setIsFavourite(favouriteList?.some((data) => data.id === id) || false);
    };
    isFavouriteFunction();
  }, [userId, isFavourite, id]);
  return (
    <>
      <FontAwesomeIcon
        icon={faHeart}
        size="2xl"
        className={`${
          isFavourite ? "text-red-400" : "text-black"
        } cursor-pointer`}
        onClick={handleFavorite}
      />
    </>
  );
};

export default FavouriteIcon;
