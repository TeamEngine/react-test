import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";

import employees from "./employees";
import global from "./global";

const reducer = combineReducers({
  global,
  employees,
});
const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware({
    thunk: true,
  }),
});
export default store;
