"use client";

import Card from "@/components/Card";
import { gettingFav } from "@/lib/FavouriteActions";
import { useAuth } from "@/Providers/AuthProvider";
import { useEffect, useState } from "react";

const FavouritePage = () => {
  const authContext = useAuth();
  const userId = authContext?.user?.uid;
  const [favouriteListId, setFavouriteListId] = useState<object>({});
  useEffect(() => {
    const favouriteFunction = async () => {
      if (!userId) return;
      const favouriteList = await gettingFav(userId);
      if (favouriteList) setFavouriteListId(favouriteList);
    };
    favouriteFunction();
  }, [userId]);
  return (
    <div className="container">
      {userId && favouriteListId ? (
        Object.keys(favouriteListId).length === 0 ? (
          <div className="min-h-screen flex justify-center items-center text-[20px] font-bold">
            Your Favourite List is empty
          </div>
        ) : (
          <div className="card-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-[50px] min-h-[60vh]">
            {Object.values(favouriteListId).map((data) => (
              <Card key={data.id} {...data.id} />
            ))}
          </div>
        )
      ) : (
        <div className="min-h-screen flex justify-center items-center text-[20px] font-bold">
          You Should Sign In to watch Your Favourite List
        </div>
      )}
    </div>
  );
};
export default FavouritePage;
