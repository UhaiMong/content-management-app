import axios from "axios";
import { SERVER_URL } from "../../config/config";
import { getBlogSuccess } from "../ActionCreator/BlogCreator";

const GetBlogThunk = () => {
  return async (dispatch) => {
    const response = await axios.get(`${SERVER_URL}/blogs`);
    dispatch(getBlogSuccess(response?.data?.data));
  };
};

export default GetBlogThunk;
