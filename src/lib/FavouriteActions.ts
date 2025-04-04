import {
  doc,
  deleteDoc,
  getDocs,
  collection,
  setDoc,
  getDoc,
} from "firebase/firestore";
import { db } from "../firebase/config";
import { DataType } from "./fetchData";

export async function addingFav(
  userId: string,
  id: string,
  movieDetail: DataType
) {
  const favouriteList = doc(db, userId, id);
  await setDoc(favouriteList, movieDetail);
}
export async function removingFav(userId: string, id: string) {
  await deleteDoc(doc(db, userId, id));
}
export async function gettingFav(userId: string): Promise<DataType[]> {
  const favCollection = await getDocs(collection(db, userId));
  return favCollection.docs.map((doc) => ({ ...doc.data() })) as DataType[];
}
export async function gettingDetaileById(userId: string, id: string) {
  const movieData = await getDoc(doc(db, userId, id));

  return movieData.exists() ? movieData.data() : null;
}
