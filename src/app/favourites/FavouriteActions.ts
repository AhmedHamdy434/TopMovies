import {
  doc,
  updateDoc,
  getDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";
import { db } from "../firebase/config";
import fetchData, { DataDetailType } from "../fetch/fetchData";

export async function addingFav(userId: string, id: string) {
  await updateDoc(doc(db, "users", userId), {
    favouriteList: arrayUnion(id),
  });
}
export async function removingFav(userId: string, id: string) {
  await updateDoc(doc(db, "users", userId), {
    favouriteList: arrayRemove(id),
  });
}
export async function gettingFav(userId: string) {
  const allFavList = await getDoc(doc(db, "users", userId));
  return allFavList?.data()?.favouriteList;
}
export async function gettingDetaileById(id: string) {
  const movieData: DataDetailType = await fetchData(
    `https://imdb236.p.rapidapi.com/imdb/${id}`
  );
  return movieData;
}
