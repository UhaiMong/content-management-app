import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { BiArrowBack } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import UpdateBlogThunk from "../../redux/thunk/UpdateBlogThunk";
const UpdateBlog = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm();

  const blogs = useSelector((state) => state.blogReducer);

  /* handle blog save */
  const handleUpdateBlog = handleSubmit(async (data) => {
    const sendingData = {
      date: new Date(),
      ...data,
    };

    dispatch(UpdateBlogThunk(sendingData, id));
    navigate("/dashboard");
  });

  const blog = blogs?.blogs?.find((item) => item?._id === id);
  useEffect(() => {
    setValue("title", blog?.title);
    setValue("category", blog?.category);
    setValue("author", blog?.author);
    setValue("content", blog?.content);
    setValue("image", blog?.image);
  }, [blog, setValue]);

  return (
    <div>
      <div className="add-blog-content">
        <div className="flex items-center gap-2">
          <span className="cursor-pointer" onClick={() => navigate(-1)}>
            <BiArrowBack />
          </span>
          <h1 className="text-2xl my-5">Update Blog</h1>
        </div>
        <form
          className="flex flex-col items-start gap-3"
          onSubmit={handleUpdateBlog}
        >
          <div className="form-group flex items-stretch w-full gap-2 flex-col">
            <label htmlFor="title">Author</label>
            <input
              type="text"
              className="form-control w-full p-3 border border-gray-300 rounded-md focus:outline-blue-500"
              id="author"
              placeholder="Enter author"
              {...register("author", { required: true })}
            />
            {errors.author && (
              <span className="text-red-500 my-1">
                Author field is required
              </span>
            )}
          </div>
          <div className="form-group flex items-stretch w-full gap-2 flex-col">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control w-full p-3 border border-gray-300 rounded-md focus:outline-blue-500"
              id="title"
              placeholder="Enter title"
              {...register("title", { required: true })}
            />
            {errors.title && (
              <span className="text-red-500 my-1">Title field is required</span>
            )}
          </div>
          <div className="form-group flex items-stretch w-full gap-2 flex-col">
            <label htmlFor="Category">Category</label>
            <select
              className="form-control w-full p-3 border border-gray-300 rounded-md focus:outline-blue-500 cursor-pointer"
              id="Category"
              {...register("category", { required: true })}
            >
              <option value={""}>Select Category</option>
              <option value={"Development"}>Development</option>
              <option value={"Comic"}>Comic</option>
              <option value={"Reading"}>Reading</option>
            </select>
            {errors.category && (
              <span className="text-red-500 my-1">
                Category field is required
              </span>
            )}
          </div>
          <div className="form-group flex flex-col items-start w-full gap-2">
            <label htmlFor="content">Content</label>
            <textarea
              className="form-control w-full p-5 border border-gray-300 rounded-md focus:outline-blue-500"
              id="content"
              rows="3"
              {...register("content", { required: true })}
            ></textarea>
            {errors.content && (
              <span className="text-red-500 my-1">
                Content field is required
              </span>
            )}
          </div>
          <div className="form-group flex flex-col gap-2 w-full">
            <label htmlFor="image">Image</label>
            <input
              type="url"
              className="form-control w-full p-3 border border-gray-300 rounded-md focus:outline-blue-500"
              id="image"
              {...register("image", { required: true })}
              placeholder="Enter image url"
            />

            <div className="img">
              <img
                src={blog?.image}
                alt=""
                className="w-56 h-auto border-2 border-blue-400"
              />
            </div>

            {errors.image && (
              <span className="text-red-500 my-1">Image field is required</span>
            )}
          </div>
          <button
            type="submit"
            className="btn btn-primary px-5 py-3 bg-blue-500 text-white rounded-sm"
          >
            Update Blog
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateBlog;
