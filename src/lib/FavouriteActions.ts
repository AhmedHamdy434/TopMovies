import {
  doc,
  getDoc,
  setDoc,
  deleteDoc,
  collection,
  getDocs,
} from "firebase/firestore";
import { db } from "../firebase/config";
import { DataType } from "./fetchData";

export async function addingFav(
  userId: string,
  id: string,
  movieDetail: DataType
) {
  await setDoc(doc(db, "users", userId, "favouriteList", id), movieDetail);
}
export async function removingFav(userId: string, id: string) {
  await deleteDoc(doc(db, "users", userId, "favouriteList", id));
}
export async function gettingFav(userId: string) {
  const favCollection = collection(db, "users", userId, "favouriteList");
  const snapshot = await getDocs(favCollection);
  return snapshot.docs.map((doc) => ({ ...doc.data() }));
  // const allFavList = await getDoc(doc(db, "users", userId, "favouriteList"));
  // return allFavList.exists() ? allFavList.data() : null;
}
export async function gettingDetaileById(userId: string, id: string) {
  const movieData = await getDoc(doc(db, "users", userId, "favouriteList", id));

  return movieData.exists() ? movieData.data() : null;
}
