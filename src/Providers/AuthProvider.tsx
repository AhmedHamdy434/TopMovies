"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "@/firebase/config";
import { onAuthStateChanged, User } from "firebase/auth";
import { DataType } from "@/lib/fetchData";
import { gettingFav } from "@/lib/FavouriteActions";

interface AuthContextType {
  user: User | null;
  favouriteList: DataType[] | null;
}
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [favouriteList, setFavouriteList] = useState<DataType[]>([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        const allFavouriteList = await gettingFav(currentUser.uid);
        setUser(currentUser);
        setFavouriteList(allFavouriteList);
      } else {
        setUser(null);
        setFavouriteList([]);
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, favouriteList }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
