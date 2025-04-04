"use client";

import Card from "@/components/Card";
import SignInButton from "@/components/header/SignInButton";
import ImageLoading from "@/components/ImageLoading";
import { gettingFav } from "@/lib/FavouriteActions";
import { DataType } from "@/lib/fetchData";
import { useAuth } from "@/Providers/AuthProvider";
import { useEffect, useState } from "react";

const FavouritePage = () => {
  const authContext = useAuth();
  const userId = authContext?.user?.uid;
  const [favouriteList, setFavouriteList] = useState<DataType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const favouriteFunction = async () => {
      if (!userId) {
        // setIsLoading(false);

        return;
      }
      const favouriteLists = await gettingFav(userId);
      if (favouriteLists) setFavouriteList(favouriteLists);
      setIsLoading(false);
    };
    favouriteFunction();
  }, [userId]);
  if (isLoading) return <ImageLoading />;
  return (
    <div className="container min-h-[90vh]">
      {userId && favouriteList ? (
        favouriteList.length === 0 ? (
          <div className="min-h-screen flex justify-center items-center text-[20px] font-bold">
            Your Favourite List is empty
          </div>
        ) : (
          <div className="card-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 py-[50px]">
            {favouriteList.map((data) => (
              <Card key={data.id} {...data} />
            ))}
          </div>
        )
      ) : (
        <div className="min-h-screen flex justify-center items-center flex-col gap-4 text-[20px] font-bold">
          <p className="text-center">
            You Should Sign In to watch Your Favourite List
          </p>
          <SignInButton />
        </div>
      )}
    </div>
  );
};
export default FavouritePage;
