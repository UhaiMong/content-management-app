import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { BiX } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import addBlogThunk from "../../redux/thunk/AddBlogThunk";

const AddBlog = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [tags, setTags] = useState([]);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  /* handle blog save */
  const handleBlogSave = handleSubmit(async (data) => {
    dispatch(addBlogThunk({ date: new Date(), ...data, tags }));
    navigate("/dashboard/blog-list");
  });

  return (
    <div>
      <div className="add-blog-content">
        <h1 className="text-2xl my-5">Add Blog</h1>
        <form
          className="flex flex-col items-start gap-3"
          onSubmit={handleBlogSave}
        >
          <div className="form-group flex items-stretch w-full gap-2 flex-col">
            <label htmlFor="title">
              Author <span className="text-red-500">*</span>
            </label>
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
            <label htmlFor="title">
              Title <span className="text-red-500">*</span>
            </label>
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
            <label htmlFor="Category">
              Category <span className="text-red-500">*</span>
            </label>
            <select
              className="form-control w-full p-3 border border-gray-300 rounded-md focus:outline-blue-500 cursor-pointer"
              id="Category"
              {...register("category", { required: true })}
            >
              <option value={""}>Select Category</option>
              <option value={"Development"}>Development</option>
              <option value={"Comic"}>Love</option>
              <option value={"Reading"}>Reading</option>
            </select>
            {errors.category && (
              <span className="text-red-500 my-1">
                Category field is required
              </span>
            )}
          </div>
          <div className="form-group flex flex-col items-start w-full gap-2">
            <label htmlFor="content">
              Content <span className="text-red-500">*</span>
            </label>
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
            <label htmlFor="image">
              Image <span className="text-red-500">*</span>
            </label>
            <input
              type="url"
              className="form-control w-full p-3 border border-gray-300 rounded-md focus:outline-blue-500"
              id="image"
              {...register("image", { required: true })}
              placeholder="Enter image url"
            />
            {errors.image && (
              <span className="text-red-500 my-1">Image field is required</span>
            )}
          </div>

          <div className="form-group flex flex-col gap-2 w-full">
            <label htmlFor="tags">
              Tags
              <small>
                (write single tag and press the{" "}
                <b>shift/Escape/Tab/Space Bar</b> to add)
              </small>
            </label>
            {tags?.length > 0 && (
              <div className="flex flex-wrap gap-2 ">
                {tags?.map((tag, index) => (
                  <div
                    className="bg-gray-200  rounded-md text-sm flex items-stretch gap-2 overflow-hidden"
                    key={index}
                  >
                    <span className="p-2">{tag}</span>
                    <span
                      onClick={() => {
                        const newTags = tags.filter((t) => t !== tag);
                        setTags(newTags);
                      }}
                      className="bg-gray-300 p-1 grid place-items-center cursor-pointer px-2"
                    >
                      <BiX />
                    </span>
                  </div>
                ))}
              </div>
            )}
            <input
              type="text"
              className="form-control w-full p-3 border border-gray-300 rounded-md focus:outline-blue-500"
              id="tags"
              onKeyDown={(e) => {
                if (
                  e.key === "Shift" ||
                  e.key === "Tab" ||
                  e.key === "Escape" ||
                  e.key === " "
                ) {
                  if (tags?.includes(e.target.value)) return;
                  setTags([...tags, e.target.value]);
                  e.target.value = "";
                }
              }}
              placeholder="Enter Tags"
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary px-5 py-3 bg-blue-500 text-white rounded-sm"
          >
            Save Blog
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBlog;
