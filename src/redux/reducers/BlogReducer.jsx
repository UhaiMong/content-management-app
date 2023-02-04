import {
  ADD_BLOG_AS_HISTORY,
  ADD_BLOG_REQUEST,
  ADD_CONTENT,
  DELETE_CONTENT,
  GET_ALL_BLOGS_FAIL,
  GET_ALL_BLOGS_REQUEST,
  GET_ALL_BLOGS_SUCCESS,
  GET_CONTENT,
} from "../actionTypes/BlogTypes";

const initialState = {
  blogs: [],
  history: [],
  loading: false,
  error: null,
};

const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BLOG_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_CONTENT:
      return {
        ...state,
        loading: false,
        blogs: action.payload,
      };
    case ADD_CONTENT: {
      return {
        ...state,
        loading: false,
        blogs: [...state.blogs, action.payload],
      };
    }

    case ADD_BLOG_AS_HISTORY:
      const isHasHistory = state?.history?.find(
        (item) => item?._id === action?.payload?._id
      );
      if (!isHasHistory) {
        return {
          ...state,
          loading: false,
          history: [...state.history, action.payload],
        };
      } else {
        return {
          ...state,
          loading: false,
        };
      }

    case DELETE_CONTENT:
      return {
        ...state,
        loading: false,
        blogs: state?.blogs.filter((item) => item?._id !== action?.payload),
      };

    case GET_ALL_BLOGS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_BLOGS_SUCCESS:
      return {
        ...state,
        loading: false,
        blogs: action.payload,
      };
    case GET_ALL_BLOGS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default blogReducer;
