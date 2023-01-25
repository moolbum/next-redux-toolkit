import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type OperateCpDto = {
  list: { name: string; content: number };
  add: { name: string; content: number };
  detail: { name: string; content: number };
};

const initialState: OperateCpDto = {
  list: { name: "operateCpList", content: 0 },
  add: { name: "operateCpAdd", content: 0 },
  detail: { name: "operateCpDetail", content: 0 },
};

export const cpSlice = createSlice({
  name: "operateCp",
  initialState,
  reducers: {
    setCpList: (state, action: PayloadAction<OperateCpDto["list"]>) => {
      state.list = action.payload;
    },
    setCpAdd: (state, action: PayloadAction<OperateCpDto["add"]>) => {
      state.add = action.payload;
    },
    setCpDetail: (state, action: PayloadAction<OperateCpDto["detail"]>) => {
      state.detail = action.payload;
    },
  },
});
export const { setCpList, setCpAdd, setCpDetail } = cpSlice.actions;
export default cpSlice.reducer;
