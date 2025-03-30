"use client";

import { useAuth } from "../../../Providers/AuthProvider";
import CardHandle from "../components/CardHandle";
const FavouritePage = () => {
  const authContext = useAuth();
  const user = authContext?.user;
  const favouriteList = authContext?.userExtraInfo?.favouriteList;

  return (
    <div className="container">
      {user && favouriteList ? (
        favouriteList.length === 0 ? (
          <div className="min-h-screen flex justify-center items-center text-[20px] font-bold">
            Your Favourite List is empty
          </div>
        ) : (
          <div className="card-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-[50px] min-h-[60vh]">
            {favouriteList.map((dataId) => (
              <CardHandle key={dataId} dataId={dataId} />
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
