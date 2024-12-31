import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import { TiShoppingCart } from "react-icons/ti";

const navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSearch, setisSearch] = useState(false);

  useEffect(() => {
    const issearch = location.pathname === "/search";
    setisSearch(issearch);
  }, [location]);

  const redirecttosearchpage = () => {
    navigate("/search");
  };
  console.log(isSearch);

  return (
    <div className=" md:flex  items-center justify-between mx-2 container gap-5 ">
      <div className="flex-shrink-0 ml-2 ">
        <Link to="/" className="text-black font-bold text-2xl mb-2">
          Blinkit
        </Link>
      </div>
      <div
        className=" md:flex w-full border h-full"
        onClick={redirecttosearchpage}
      >
        {!isSearch ? (
          <div className=" md:flex w-full flex items-center ">
            <SearchBar />
          </div>
        ) : (
          <div className=" items-center flex w-full h-[40px]">
            <input
              type="text"
              className="w-full bg-transparent focus:outline-none text-sm mx-2"
            />
          </div>
        )}
      </div>
      <div className="hidden md:flex space-x-4">
        <Link
          to="/login"
          className="px-4 py-2 bg-black text-yellow-500 rounded-lg hover:bg-gray-800"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="flex items-center justify-center py-2 px-4 bg-yellow-300 text-black rounded-lg hover:bg-yellow-400 h-[40px] space-x-2"
        >
          <TiShoppingCart size={20} />
          <span>Cart</span>
        </Link>
      </div>
    </div>
  );
};

export default navbar;
