import {
  SET_FILTER_BY_CATEGORY,
  SET_FILTER_BY_RECENT,
  SET_FILTER_BY_TAG,
  SET_FILTER_BY_TITLE,
} from "../actionTypes/FilterTypes";

export const setFilterForTitle = (filter) => {
  return {
    type: SET_FILTER_BY_TITLE,
    payload: filter,
  };
};

export const setFilterByRecent = (filter) => {
  return {
    type: SET_FILTER_BY_RECENT,
    payload: filter,
  };
};

export const setFilterByCategory = (filter) => {
  return {
    type: SET_FILTER_BY_CATEGORY,
    payload: filter,
  };
};

export const setFilterByTag = (filter) => {
  return {
    type: SET_FILTER_BY_TAG,
    payload: filter,
  };
};
