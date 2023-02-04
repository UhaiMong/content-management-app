import { combineReducers } from "redux";
import blogReducer from "./BlogReducer";
import FilterReducer from "./FilterReducer";

const rootReducer = combineReducers({
  blogReducer: blogReducer,
  filterReducer: FilterReducer,
});

export default rootReducer;
