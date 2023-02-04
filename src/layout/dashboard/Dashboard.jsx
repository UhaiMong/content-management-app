import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { Link, Outlet, useLocation } from "react-router-dom";

const Dashboard = () => {
  const location = useLocation();

  return (
    <div className="p-10">
      <div className="container mx-auto bg-white p-10">
        <div className="flex items-center gap-2">
          <Link to="/" className="cursor-pointer">
            <BiArrowBack size={20} />
          </Link>
          <h1 className="my-3 text-xl">Dashboard</h1>
        </div>

        <div className="justify-between flex-wrap  sm:block bg-white rounded shadow">
          <div className="xl:w-full xl:mx-0 pl-5 pr-5 h-12">
            <ul className="flex flex-wrap">
              <Link
                to="/dashboard/blog-list"
                className={
                  location?.pathname === "/dashboard/blog-list" ||
                  location?.pathname === "/dashboard/"
                    ? "text-sm text-indigo-700 flex flex-col justify-between border-indigo-700 pt-3 rounded-t mr-10 font-normal"
                    : "text-sm text-gray-600 py-3 mr-10 font-normal cursor-pointer hover:text-gray-800"
                }
              >
                <span className="mb-3 cursor-pointer">Blog List</span>
                {location?.pathname === "/dashboard/blog-list" && (
                  <div className="w-full h-1 bg-indigo-700 rounded-t-md" />
                )}
              </Link>
              <Link
                to="/dashboard/add-blog"
                className={
                  location?.pathname === "/dashboard/add-blog"
                    ? "text-sm text-indigo-700 flex flex-col justify-between border-indigo-700 pt-3 rounded-t mr-10 font-normal"
                    : "text-sm text-gray-600 py-3 mr-10 font-normal cursor-pointer hover:text-gray-800"
                }
              >
                <span className="mb-3 cursor-pointer">Add Blog</span>
                {location?.pathname === "/dashboard/add-blog" && (
                  <div className="w-full h-1 bg-indigo-700 rounded-t-md" />
                )}
              </Link>
              <Link
                to="/dashboard/profile"
                className={
                  location?.pathname === "/dashboard/profile"
                    ? "text-sm text-indigo-700 flex flex-col justify-between border-indigo-700 pt-3 rounded-t mr-10 font-normal"
                    : "text-sm text-gray-600 py-3 mr-10 font-normal cursor-pointer hover:text-gray-800"
                }
              >
                <span className="mb-3 cursor-pointer">Profile</span>
                {location?.pathname === "/dashboard/profile" && (
                  <div className="w-full h-1 bg-indigo-700 rounded-t-md" />
                )}
              </Link>
            </ul>
          </div>
        </div>
        <div className="py-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
