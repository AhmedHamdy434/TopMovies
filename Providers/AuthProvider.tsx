"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "@/app/firebase/config";
import { onAuthStateChanged, User } from "firebase/auth";
import { getDoc, doc } from "firebase/firestore";
interface ExtraInfoType {
  userName: string;
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  favouriteList?: string[];
}
interface AuthContextType {
  user: User | null;
  userExtraInfo: ExtraInfoType | null;
}
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [userExtraInfo, setuserExtraInfo] = useState<ExtraInfoType>({
    userName: "",
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        const userSnap = await getDoc(doc(db, "users", currentUser.uid));

        if (userSnap.exists()) {
          setuserExtraInfo(
            userSnap.data() as {
              userName: string;
              firstName?: string;
              lastName?: string;
              phoneNumber?: string;
              favouriteList?: string[];
            }
          );
          setUser(currentUser);
        }
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, userExtraInfo }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
