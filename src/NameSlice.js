import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  datalist: [],
};

const nameSlice = createSlice({
  name: "userlist",
  initialState,
  reducer: {
    setdatalist: (state, action) => {
      state.datalist =[...state.datalist, action.payload];
    },
  },
});

const { reducer, action } = nameSlice;
export const { setdatalist } = action;

export default reducer;
