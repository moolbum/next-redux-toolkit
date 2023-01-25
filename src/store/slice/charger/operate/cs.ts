import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type OperateCsDto = {
  list: { name: string; content: number };
  add: { name: string; content: number };
  detail: { name: string; content: number };
};

const initialState: OperateCsDto = {
  list: { name: "operateCsList", content: 0 },
  add: { name: "operateCsAdd", content: 0 },
  detail: { name: "operateCsDetail", content: 0 },
};

export const csSlice = createSlice({
  name: "operateCs",
  initialState,
  reducers: {
    setCsList: (state, action: PayloadAction<OperateCsDto["list"]>) => {
      state.list = action.payload;
    },
    setCsAdd: (state, action: PayloadAction<OperateCsDto["add"]>) => {
      state.add = action.payload;
    },
    setCsDetail: (state, action: PayloadAction<OperateCsDto["detail"]>) => {
      state.detail = action.payload;
    },
  },
});
export const { setCsList, setCsAdd, setCsDetail } = csSlice.actions;
export default csSlice.reducer;
