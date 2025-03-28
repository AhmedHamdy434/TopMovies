// import { createSlice } from "@reduxjs/toolkit";
// import { store } from "../store";
// export type SearchType = {
//   search: string;
//   genresSelected: string[];
//   notFound: boolean;
// };
// const initialState: SearchType = {
//   search: "",
//   genresSelected: [],
//   notFound: false,
// };
// const searchSlice = createSlice({
//   name: "searchResult",
//   initialState: initialState,
//   reducers: {
//     setSearch: (state, action) => {
//       state.search = action.payload;
//       state.notFound = true;
//     },
//     setGenres: (state, action) => {
//       state.genresSelected = state.genresSelected.includes(action.payload)
//         ? state.genresSelected.filter((item) => item !== action.payload)
//         : [...state.genresSelected, action.payload];
//       state.notFound = true;
//     },
//     empty: (state) => {
//       state.search = "";
//       state.genresSelected = [];
//       state.notFound = false;
//     },
//   },
// });
// export default searchSlice.reducer;
// export const { setSearch, setGenres, empty } = searchSlice.actions;
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
