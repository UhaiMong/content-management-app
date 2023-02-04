import React from "react";
import { BiChevronsRight, BiCloud, BiEdit } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addBlogAsHistory } from "../redux/ActionCreator/BlogCreator";

const BlogCard = ({ blog }) => {
  const dispatch = useDispatch();
  /* handle add blog as history */
  const handleAddBlogHistory = () => {
    dispatch(addBlogAsHistory({ updatedDate: new Date(), ...blog }));
  };

  return (
    <div className="card bg-gray-50 p-3 group shadow-sm rounded-sm">
      <div className="card-body">
        <div className="image h-60 overflow-hidden border relative">
          <img
            src={
              blog?.image
                ? blog?.image
                : "https://images.unsplash.com/photo-1670491777181-c1fd8ce8b23d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            }
            alt={blog?.title}
            className="h-full w-full object-cover group-hover:scale-150 transition-all duration-500 group-hover:rotate-12"
          />

          <div className="date-overlay absolute left-0 top-0 z-10 w-full h-full grid place-items-center bg-[#7e7e7e67] opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="date text-white font-bold text-lg border-2 border-white p-2 py-1 uppercase font-noto">
              {new Date(blog?.date).getDate()} <br />
              {new Date(blog?.date).toDateString()?.split(" ")[1]}
            </span>
          </div>
        </div>
        <div className="details  m-3 font-noto">
          <div className="details-inner my-2 p-3 -mt-12 z-30 bg-gray-50 relative">
            <h5 className="card-title uppercase font-bold group-hover:text-yellow-500 transition-all">
              {blog?.title}
            </h5>
            <div className="meta flex items-center gap-3 text-sm text-gray-500 my-1">
              <span className="date flex items-center gap-1 capitalize">
                <BiEdit className="text-orange-600" />
                {blog?.author}
              </span>

              <span className="author flex items-center gap-1">
                <BiCloud className="text-orange-600" /> {blog?.viewed}
              </span>
            </div>
            <p className="card-text text-sm my-2 text-gray-600">
              {blog?.content?.slice(0, 120) + "..."}
            </p>
            <Link
              to={`/blog-details/${blog?._id}`}
              onClick={handleAddBlogHistory}
              className="card-link flex items-center gap-2 p-3 bg-gray-100  uppercase text-sm font-bold text-gray-600 hover:bg-yellow-500 hover:text-yellow-100 transition-all duration-700"
            >
              <BiChevronsRight size={18} />
              Read more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
