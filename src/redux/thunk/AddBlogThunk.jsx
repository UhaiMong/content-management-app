import axios from "axios";
import { SERVER_URL } from "../../config/config";
import { addBlogSuccess } from "../ActionCreator/BlogCreator";
const addBlogThunk = (blog) => {
  return async (dispatch) => {
    const response = await axios.post(`${SERVER_URL}/blog`, blog);
    dispatch(
      addBlogSuccess({
        _id: response.data.insertedId,
        ...blog,
      })
    );
  };
};

export default addBlogThunk;
