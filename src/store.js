import { configureStore } from "@reduxjs/toolkit";
import nameReducer from "./NameSlice"

const store = configureStore({
  reducer: {
    datalist: nameReducer,
  },
});
export default store;
