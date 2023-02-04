import React from "react";
import { BiBook, BiHistory, BiHomeAlt } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const menus = [
    {
      _id: 1,
      name: "Home",
      icon: <BiHomeAlt />,
      path: "/",
    },
    {
      _id: 2,
      name: "Blogs",
      icon: <BiBook />,
      path: "/blogs",
    },
    {
      _id: 3,
      name: "History",
      icon: <BiHistory />,
      path: "/reading-history",
    },
  ];
  const activeMenu = menus.find((menu) => menu?.path === location?.pathname);

  return (
    <nav className="fixed right-10 top-1/2 -translate-y-1/2 bg-white p-5 px-5 rounded-lg border shadow z-50">
      <div className="container mx-auto">
        <div>
          <div className="flex space-x-4 justify-between items-center">
            <div className="flex items-center">
              <ul className="flex items-center gap-5 flex-col">
                {menus.map((menu) => (
                  <li key={menu?._id}>
                    <Link
                      to={menu?.path}
                      className={`flex items-center justify-center flex-col gap-1 w-16 h-16   rounded-lg text-sm ${
                        activeMenu === menu
                          ? "border-gray-100 bg-gray-100 border-2"
                          : ""
                      }`}
                    >
                      <span className="icon">{menu?.icon}</span>
                      <span>{menu?.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
