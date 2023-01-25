import { combineReducers } from "redux";
import operateReducers from "./operate";

const chargerReducers = combineReducers({
  operateReducers,
});

export default chargerReducers;
