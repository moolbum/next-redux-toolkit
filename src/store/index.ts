import { combineReducers, configureStore } from "@reduxjs/toolkit";
import chargerReducers from "./slice/charger";

const reducers = combineReducers({
  charger: chargerReducers,
});

export const store = configureStore({
  reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
