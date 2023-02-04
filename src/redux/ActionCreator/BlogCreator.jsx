import {
  ADD_BLOG_AS_HISTORY,
  ADD_BLOG_FAIL,
  ADD_BLOG_REQUEST,
  ADD_CONTENT,
  DELETE_CONTENT,
  GET_CONTENT,
} from "../actionTypes/BlogTypes";

/* add blog creator */
export const addBlogRequest = () => {
  return { type: ADD_BLOG_REQUEST };
};

export const addBlogSuccess = (data) => {
  return {
    type: ADD_CONTENT,
    payload: data,
  };
};

export const addBlogFail = (error) => {
  return { type: ADD_BLOG_FAIL, payload: error };
};

export const addBlogAsHistory = (blog) => {
  return { type: ADD_BLOG_AS_HISTORY, payload: blog };
};

// delete blog creator
export const deleteBlogSuccess = (id) => {
  return {
    type: DELETE_CONTENT,
    payload: id,
  };
};

// get blog creator
export const getBlogSuccess = (data) => {
  return {
    type: GET_CONTENT,
    payload: data,
  };
};
