/*"use client";

import { useEffect } from "react";
import { store } from "@/redux/store";
import { Provider } from "react-redux";
import { useAuth } from "./AuthProvider";
import fetchData, { DataType } from "@/lib/fetchData";
import { initializeList } from "@/redux/slices/userFavouritesSlice";
// interface ExtraInfoType {
//   userName: string;
//   firstName?: string;
//   lastName?: string;
//   phoneNumber?: string;
//   favouriteList?: string[];
// }
// interface AuthContextType {
//   user: User | null;
//   userExtraInfo: ExtraInfoType | null;
// }

export const ReduxProvider = ({ children }: { children: React.ReactNode }) => {
  const authContext = useAuth();
  const user = authContext?.user;
  const favouriteListId = authContext?.userExtraInfo?.favouriteList;

  // const [user, setUser] = useState<User | null>(null);
  //   const [userExtraInfo, setuserExtraInfo] = useState<ExtraInfoType>({
  //     userName: "",
  //   });

  useEffect(() => {
    const favouriteListDetailArray: DataType[] = [];
    const initialFunction = async () => {
      if (user) {
        favouriteListId?.map(async (id) => {
          const favouriteListDetail: DataType = await fetchData(
            `https://imdb236.p.rapidapi.com/imdb/${id}`
          );
          favouriteListDetailArray.push(favouriteListDetail);
        });
        initializeList({
          userId: user.uid,
          favouriteList: favouriteListDetailArray,
        });
      }
    };
    initialFunction();
  });

  return <Provider store={store}>{children}</Provider>;
};
*/
