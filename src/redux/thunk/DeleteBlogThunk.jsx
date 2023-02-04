import axios from "axios";
import { SERVER_URL } from "../../config/config";
import { deleteBlogSuccess } from "../ActionCreator/BlogCreator";

const DeleteBlogThunk = (id) => {
  return async (dispatch) => {
    const { data } = await axios.delete(`${SERVER_URL}/blog/${id}`);
    if (data?.acknowledged) {
      dispatch(deleteBlogSuccess(id));
    }
  };
};

export default DeleteBlogThunk;
