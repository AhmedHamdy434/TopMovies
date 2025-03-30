"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../../../Providers/AuthProvider";
import { useEffect, useState } from "react";
import { addingFav, removingFav } from "../favourites/FavouriteActions";
const FavouriteIcon = ({ id }: { id: string }) => {
  const authContext = useAuth();
  const userId = authContext?.user?.uid;
  const favouriteList = authContext?.userExtraInfo?.favouriteList;

  const [isFavourite, setIsFavourite] = useState<boolean>(true);
  const handleFavorite = async () => {
    if (userId) {
      if (isFavourite) {
        await removingFav(userId, id);
        setIsFavourite(false);
      } else {
        await addingFav(userId, id);
        setIsFavourite(true);
      }
    }
  };
  useEffect(() => {
    const isFavouriteFunction = () => {
      if (favouriteList) setIsFavourite(favouriteList?.includes(id));
    };
    isFavouriteFunction();
  });
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
