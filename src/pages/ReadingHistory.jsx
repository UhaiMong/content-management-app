import React from "react";
import { BiCloud, BiEdit } from "react-icons/bi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ReadingHistory = () => {
  const { history } = useSelector((state) => state?.blogReducer);

  /* get last added 3 items */
  const getLastAddedItems = (arr, n) => {
    return arr?.slice(Math.max(arr?.length - n, 0)).sort((a, b) => {
      return new Date(b?.updatedDate) - new Date(a?.updatedDate);
    });
  };
  const lastAddedItems = getLastAddedItems(history, 3);

  return (
    <div>
      <div className="container mx-auto p-12">
        <div className="title my-5 bg-white p-4 rounded">
          <h3 className=" text-2xl font-medium uppercase ">
            Last 3 Reading History
          </h3>
          <p className="text-sm text-gray-600">
            here you will get of your recent reading history and you can also
            see the books you have read
          </p>
        </div>
        <div className="flex flex-wrap w-full gap-2">
          {/* Code block starts */}
          {lastAddedItems?.length === 0 && (
            <div>
              <h2>No history found.</h2>
            </div>
          )}
          {lastAddedItems?.map((item) => (
            <div
              className="bg-white  py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between px-5 sm:pr-10 shadow rounded-t w-full"
              key={item?._id}
            >
              <div className="flex items-start mb-4 sm:mb-0 md:mb-0 lg:mb-0 xl:mb-0">
                <div className="relative w-40 h-40 rounded mr-4">
                  <img
                    className="w-full h-full object-cover inset-0 absolute rounded"
                    src={
                      item?.image
                        ? item?.image
                        : "https://tuk-cdn.s3.amazonaws.com/assets/components/card_headings/ch_1.png"
                    }
                    alt={item?.title}
                  />
                </div>
                <div className="ml-2 w-3/4">
                  <h2 className="text-gray-800  uppercase font-bold">
                    {item?.title}
                  </h2>
                  <div className="meta flex items-center gap-3 text-sm text-gray-500 my-1">
                    <span className="date flex items-center gap-1 capitalize">
                      <BiEdit className="text-orange-600" /> {item?.Author}
                    </span>
                    <span className="author flex items-center gap-1">
                      <BiCloud className="text-orange-600" /> 150
                    </span>
                  </div>
                  <p className="text-sm font-noto text-gray-600 leading-snug my-3">
                    {item?.content?.slice(0, 120)}
                  </p>
                  <Link
                    to={`/blog-details/${item?._id}`}
                    className="font-normal text-xs text-gray-600 dark:text-gray-400 cursor-pointer hover:text-gray-700"
                  >
                    View Blog
                  </Link>
                </div>
              </div>
              <div className="flex items-center">
                <Link
                  to={`/blog-details/${item?._id}`}
                  className="font-normal focus:outline-none bg-blue-700 dark:hover:bg-blue-700 transition duration-150 ease-in-out hover:bg-blue-600 dark:bg-blue-600 rounded text-white px-6 py-2 text-sm"
                >
                  View
                </Link>
                <button className="ml-2 sm:ml-3 font-normal focus:outline-none bg-red-700 dark:hover:bg-red-700 transition duration-150 ease-in-out hover:bg-red-600 dark:bg-red-600 rounded text-white px-6 py-2 text-sm">
                  Delete
                </button>
              </div>
            </div>
          ))}
          {/* Code block ends */}
        </div>
      </div>
    </div>
  );
};

export default ReadingHistory;
