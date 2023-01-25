import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type OperateCsBuildDto = {
  list: { name: string; content: number };
  add: { name: string; content: number };
  detail: { name: string; content: number };
};

const initialState: OperateCsBuildDto = {
  list: { name: "operateCsBuildList", content: 0 },
  add: { name: "operateCsBuildAdd", content: 0 },
  detail: { name: "operateCsBuildDetail", content: 0 },
};

export const csBuildSlice = createSlice({
  name: "operateCsBuild",
  initialState,
  reducers: {
    setCsBuildList: (
      state,
      action: PayloadAction<OperateCsBuildDto["list"]>
    ) => {
      state.list = action.payload;
    },
    setCsBuildAdd: (state, action: PayloadAction<OperateCsBuildDto["add"]>) => {
      state.add = action.payload;
    },
    setCsBuildDetail: (
      state,
      action: PayloadAction<OperateCsBuildDto["detail"]>
    ) => {
      state.detail = action.payload;
    },
  },
});
export const { setCsBuildList, setCsBuildAdd, setCsBuildDetail } =
  csBuildSlice.actions;
export default csBuildSlice.reducer;
