import React, { useEffect } from "react";
import { BiEdit, BiTrash } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import DeleteBlogThunk from "../../redux/thunk/DeleteBlogThunk";
import GetBlogThunk from "../../redux/thunk/GetBlogThunk";

const BlogList = () => {
  const { blogs } = useSelector((state) => state.blogReducer);
  const dispatch = useDispatch();

  /* delete blog */
  const deleteBlog = (id) => {
    const isConfirm = window.confirm(`Are you sure?`);

    if (isConfirm) {
      dispatch(DeleteBlogThunk(id));
    }
  };

  useEffect(() => {
    dispatch(GetBlogThunk());
  }, [dispatch]);

  return (
    <div>
      <>
        <div className="w-full sm:px-6">
          <div className="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
            <table className="w-full whitespace-nowrap">
              <thead>
                <tr className="h-16 w-full text-sm leading-none text-gray-800">
                  <th className="font-normal text-left pl-4">Project</th>
                  <th className="font-normal text-left pl-12">Author</th>
                  <th className="font-normal text-left pl-20">Content</th>
                  <th className="font-normal text-left pl-20">Deadline</th>
                  <th className="font-normal text-left pl-16">action</th>
                </tr>
              </thead>
              <tbody className="w-full">
                {blogs?.map((blog, ind) => (
                  <tr
                    className="h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100"
                    key={blog?.title + ind}
                  >
                    <td className="pl-4 cursor-pointer">
                      <div className="flex items-center">
                        <div className="w-10 h-10">
                          <img
                            className="w-full h-full"
                            src={blog?.image}
                            alt={blog?.title}
                          />
                        </div>
                        <div className="pl-4">
                          <p className="font-medium">{blog?.title}</p>
                          <p className="text-xs leading-3 text-gray-600 pt-2">
                            {blog?.category}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="pl-12">
                      <p className="text-sm font-medium leading-none text-gray-800">
                        {blog?.author}
                      </p>
                      <div className="text-gray-400">author</div>
                    </td>

                    <td className="pl-20">
                      <p className="font-medium">
                        {blog?.content?.slice(0, 50) + "..."}
                      </p>
                      <p className="text-xs leading-3 text-gray-600 mt-2">
                        content
                      </p>
                    </td>

                    <td className="pl-16">
                      <div className="flex items-center">
                        {new Date(blog?.date).toISOString()}
                      </div>
                    </td>
                    <td className="px-7 2xl:px-0 ">
                      <div className="relative flex items-center gap-3">
                        <Link
                          to={`/dashboard/update-blog/${blog?._id}`}
                          className="text-lg text-blue-600"
                        >
                          <BiEdit />
                        </Link>
                        <button
                          className="text-lg text-red-500"
                          onClick={() => deleteBlog(blog?._id)}
                        >
                          <BiTrash />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </>
    </div>
  );
};

export default BlogList;
