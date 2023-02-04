import axios from "axios";
import { SERVER_URL } from "../../config/config";

const UpdateBlogThunk = (blog, id) => {
  return async (dispatch) => {
    const { data } = await axios.put(`${SERVER_URL}/blog/${id}`, blog);

    if (data?.acknowledged) {
    }
  };
};

export default UpdateBlogThunk;
