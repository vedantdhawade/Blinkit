import SearchBar from "./SearchBar";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

const Navbar = () => {
  const [isSearch, setisSearch] = useState();
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const issearch = location.pathname === "/search";
    setisSearch(issearch);
  }, [location]);

  const navigatetosearch = () => {
    navigate("/search");
  };
  return (
    <div>
      <nav className="bg-yellow-500 lg:shadow-md py-2">
        <SearchBar />
        <div className="md:hidden">
          <div
            className=" md:flex flex-grow mx-4 border h-10 rounded-lg text-[8px]"
            onClick={navigatetosearch}
          >
            {!isSearch ? (
              <div className="flex ml-5 text-[8px]  h-10 items-center ">
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    'Search "milk"',
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    'Search  "bread"',
                    1000,
                    'Search  "atta"',
                    1000,
                    'Search  "panner"',
                    1000,
                    'Search "dahi"',
                    1000,
                    'Search "maggie"',
                    1000,
                    'Search "coffee"',
                    1000,
                    'Search "tea"',
                    1000,
                    'Search "snaks"',
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  style={{ fontSize: "2em", display: "inline-block" }}
                  repeat={Infinity}
                />
              </div>
            ) : (
              <div className="hidden md:flex flex-grow mx-4 w-full h-10 rounded-lg text-lg  focus-within:border-red-500">
                <input
                  type="text"
                  className="bg-transparent w-full  px-2  h-10 focus:outline-none"
                  autoFocus
                  onChange={(e) => {
                    e.target.style.borderColor = e.target.value
                      ? "red"
                      : "transparent";
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
