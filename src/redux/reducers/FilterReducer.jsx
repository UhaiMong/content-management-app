import {
  CLEAR_FILTER,
  SET_FILTER_BY_CATEGORY,
  SET_FILTER_BY_RECENT,
  SET_FILTER_BY_TAG,
  SET_FILTER_BY_TITLE,
} from "../actionTypes/FilterTypes";

const initialState = {
  byTitle: null,
  byCategory: null,
  byTag: [],
  byAuthor: null,
  byDate: null,
  byShow: "recent",
  error: null,
};

const FilterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER_BY_TITLE:
      return {
        ...state,
        byTitle: action.payload,
      };

    case SET_FILTER_BY_RECENT:
      return {
        ...state,
        byShow: action.payload,
      };

    case SET_FILTER_BY_CATEGORY:
      return {
        ...state,
        byCategory: action.payload,
      };

    case SET_FILTER_BY_TAG:
      if (state.byTag.includes(action.payload)) {
        return {
          ...state,
          byTag: state.byTag.filter((tag) => tag !== action.payload),
        };
      } else {
        return {
          ...state,
          byTag: [...state.byTag, action.payload],
        };
      }

    case CLEAR_FILTER:
      return {
        ...state,
        blogs: null,
      };
    default:
      return state;
  }
};

export default FilterReducer;
