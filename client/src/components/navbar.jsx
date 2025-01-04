import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import { TiShoppingCart } from "react-icons/ti";
import { useSelector } from "react-redux";
import { MdArrowDropDown } from "react-icons/md";
import { IoMdArrowDropup } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import UserDetails from "./UserDetails";

const navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSearch, setisSearch] = useState(false);
  const user = useSelector((state) => state.user);
  const [selectusermenu, setselectusermenu] = useState(false);

  useEffect(() => {
    const issearch = location.pathname === "/search";
    setisSearch(issearch);
  }, [location]);

  const redirecttosearchpage = () => {
    navigate("/search");
  };

  const handlemobilemenu = () => {
    if (!user._id) {
      navigate("/login");
      return;
    }
    navigate("/mobileProfile");
  };

  const handleclose = () => {
    setselectusermenu(false);
  };
  return (
    <div className=" md:flex  items-center justify-between mx-2 container gap-5 ">
      <div className="flex justify-between ml-2 ">
        <Link to="/" className="text-black font-bold text-2xl mb-2">
          Blinkit
        </Link>
        <div className="md:hidden grid" onClick={handlemobilemenu}>
          <CgProfile size={27} />
        </div>
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
        {user.name ? (
          <div className="px-4 py-2 relative w-full">
            <div
              className="flex items-center gap-2 select-none"
              onClick={() => setselectusermenu((prev) => !prev)}
            >
              <p>Account</p>
              {selectusermenu ? (
                <IoMdArrowDropup size={20} />
              ) : (
                <MdArrowDropDown size={20} />
              )}
            </div>
            {selectusermenu && (
              <div className="absolute top-[53px]">
                <div className="min-w-52 rounded-md bg-white lg:shadow-md">
                  <UserDetails close={handleclose} />
                </div>
              </div>
            )}
          </div>
        ) : (
          <Link
            to="/login"
            className="px-4 py-2 bg-black text-yellow-500 rounded-lg hover:bg-gray-800"
          >
            Login
          </Link>
        )}

        <Link
          to="/register"
          className="flex items-center justify-center py-2 px-4 bg-yellow-300 text-black rounded-lg hover:bg-yellow-400 h-[40px] space-x-2"
        >
          <div className="animate-bounce">
            <TiShoppingCart size={20} />
          </div>

          <span className="mr-">Cart</span>
        </Link>
      </div>
    </div>
  );
};

export default navbar;
