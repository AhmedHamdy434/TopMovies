// import { DataType } from "@/lib/fetchData";
// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// type InitialStateType = {
//   userId: string;
//   favouriteList: DataType[];
// };
// const initialState: InitialStateType = {
//   userId: "",
//   favouriteList: [],
// };

// const userFavouriteSlice = createSlice({
//   name: "favouriteList",
//   initialState,
//   reducers: {
//     addMovie: (state, action: PayloadAction<DataType>) => {
//       state.favouriteList.push(action.payload);
//     },
//     removeMovie: (state, action: PayloadAction<string>) => {
//       state.favouriteList = state.favouriteList.filter(
//         (fav) => fav.id !== action.payload
//       );
//     },
//     initializeList: (state, action: PayloadAction<InitialStateType>) => {
//       Object.assign(state, action.payload); //  updating state
//     },
//     resetList: (state) => {
//       Object.assign(state, initialState); //  state reset
//     },
//   },
// });
// export default userFavouriteSlice.reducer;
// export const { addMovie, removeMovie, initializeList, resetList } =
//   userFavouriteSlice.actions;
