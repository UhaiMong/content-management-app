import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BlogCard from "../components/BlogCard";
import {
  setFilterByCategory,
  setFilterByRecent,
  setFilterByTag,
  setFilterForTitle,
} from "../redux/ActionCreator/FilterCreator";
import GetBlogThunk from "../redux/thunk/GetBlogThunk";

const Blogs = () => {
  const { blogs } = useSelector((state) => state?.blogReducer);
  const { byTitle, byShow, byCategory, byTag } = useSelector(
    (state) => state?.filterReducer
  );

  const dispatch = useDispatch();
  let blogsData = blogs;
  const blogCategories = blogs;
  const categories = blogCategories
    ?.map((blog) => blog.category)
    .filter((item, i, ar) => ar.indexOf(item) === i);

  const tags = blogCategories
    ?.map((blog) => blog.tags)
    .flat()
    .filter((item, i, ar) => ar.indexOf(item) === i);

  if (byTitle) {
    blogsData = blogs?.filter((blog) =>
      blog.title.toLowerCase().includes(byTitle.toLowerCase())
    );
  }

  if (byShow === "recent") {
    blogsData = blogsData?.sort((a, b) => new Date(b.date) - new Date(a.date));
  }

  if (byShow === "oldest") {
    blogsData = blogsData?.sort((a, b) => new Date(a.date) - new Date(b.date));
  }

  if (byCategory) {
    blogsData = blogsData?.filter((blog) => blog.category === byCategory);
  }

  if (byTag.length > 0) {
    blogsData = blogsData?.filter((blog) =>
      blog.tags.some((tag) => byTag.includes(tag))
    );
  }

  useEffect(() => {
    dispatch(GetBlogThunk());
  }, [dispatch]);

  return (
    <div>
      <div className="blog-container container mx-auto">
        <div className="blogs-content grid grid-cols-8 items-start gap-5 font-noto">
          {/* blog sidebar */}
          <div className="blog-sidebar p-5 bg-white col-span-2 sticky top-10">
            <div className="my-3">
              <h3 className=" text-2xl mb-2 font-bold">
                <span className="text-yellow-500">Blogs</span> Page
              </h3>
              <div className="w-20 border-2 border-yellow-500 "></div>
            </div>

            <div className="blog-sidebar-content my-5">
              <h1 className="text-lg  mb-0 text-gray-800">Search by name</h1>
              <input
                type="text"
                className="w-full border rounded mt-2 bg-gray-50 outline-none p-4"
                placeholder="Search"
                onChange={(e) => dispatch(setFilterForTitle(e.target.value))}
                value={byTitle || ""}
              />
            </div>
            <div className="blog-sidebar-content mb-5">
              <h1 className="text-lg  mb-0 text-gray-800">Sort by</h1>
              <select
                name=""
                className="w-full border rounded mt-2 bg-gray-50 outline-none p-4 cursor-pointer"
                id=""
                onChange={(e) => dispatch(setFilterByRecent(e.target.value))}
              >
                <option value="recent">Recent Upload</option>
                <option value="oldest">Last upload</option>
              </select>
            </div>
            <div className="blog-sidebar-content">
              <h1 className="text-lg  mb-0 text-gray-800">Categories</h1>
              <select
                name=""
                className="w-full border rounded mt-2 bg-gray-50 outline-none p-4 cursor-pointer"
                id=""
                onChange={(e) => dispatch(setFilterByCategory(e.target.value))}
              >
                <option value="">All</option>
                {categories?.map((category, i) => (
                  <option key={i} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            <div className="blog-sidebar-content mt-5">
              <h1 className="text-lg  mb-0 text-gray-800">Tags</h1>
              <ul className="my-4 flex flex-wrap gap-2 text-sm">
                {tags?.map((tag, i) => (
                  <li
                    onClick={() => dispatch(setFilterByTag(tag))}
                    key={i}
                    className={` rounded-sm uppercase p-2 cursor-pointer hover:bg-yellow-500 hover:text-white transition-all duration-300 ease-in-out ${
                      byTag?.includes(tag)
                        ? `bg-yellow-500 text-white`
                        : "text-gray-500 bg-gray-100"
                    }`}
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* blog sidebar end */}
          <div className="blog-main col-span-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mb-36">
            {blogsData?.length === 0 && (
              <div className="p-10">
                <h1>No blogs found</h1>
              </div>
            )}
            {blogsData?.map((blog) => (
              <BlogCard key={blog?._id} blog={blog} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
