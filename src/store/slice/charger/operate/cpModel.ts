import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type OperateCpModelDto = {
  list: { name: string; content: number };
  add: { name: string; content: number };
  detail: { name: string; content: number };
};

const initialState: OperateCpModelDto = {
  list: { name: "operateCpModelList", content: 0 },
  add: { name: "operateCpModelAdd", content: 0 },
  detail: { name: "operateCpModelDetail", content: 0 },
};

export const cpModelSlice = createSlice({
  name: "operateCpModel",
  initialState,
  reducers: {
    setCpModelList: (
      state,
      action: PayloadAction<OperateCpModelDto["list"]>
    ) => {
      state.list = action.payload;
    },
    setCpModelAdd: (state, action: PayloadAction<OperateCpModelDto["add"]>) => {
      state.add = action.payload;
    },
    setCpModelDetail: (
      state,
      action: PayloadAction<OperateCpModelDto["detail"]>
    ) => {
      state.detail = action.payload;
    },
  },
});
export const { setCpModelList, setCpModelAdd, setCpModelDetail } =
  cpModelSlice.actions;
export default cpModelSlice.reducer;
