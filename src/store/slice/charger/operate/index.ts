import { combineReducers } from "@reduxjs/toolkit";
import cp from "./cp";
import cpModel from "./cpModel";
import cs from "./cs";
import csBuild from "./csBuild";

const operateReducers = combineReducers({
  cp,
  cpModel,
  cs,
  csBuild,
});

export default operateReducers;
