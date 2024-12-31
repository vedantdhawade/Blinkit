import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

const SearchBar = () => {
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
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="flex-shrink-0">
          <a href="/" className="text-black font-bold text-xl mr-3">
            Blinkit
          </a>
        </div>

        <div
          className="hidden md:flex flex-grow mx-4 border w-full h-10 rounded-lg text-xs overflow-hidden"
          onClick={navigatetosearch}
        >
          {!isSearch ? (
            <div className="flex mt-1 ml-5 text-[8px] items-center ">
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
                className="bg-transparent w-full h-full px-2 focus:outline-none"
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

        <div className="hidden md:flex space-x-4">
          <a
            href="/login"
            className="px-4 py-2 bg-black text-yellow-500 rounded-lg shadow hover:bg-gray-800"
          >
            Login
          </a>
          <a
            href="/register"
            className="px-4 py-2 bg-yellow-300 text-black rounded-lg shadow hover:bg-yellow-400"
          >
            Register
          </a>
        </div>

        <div className="md:hidden">
          <button
            id="hamburger"
            className="text-black focus:outline-none focus:ring-2 focus:ring-yellow-300"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <div id="mobileMenu" className="hidden md:hidden flex-col space-y-4 mt-4">
        <input
          type="text"
          placeholder="Search for groceries..."
          className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300"
        />
        <div className="space-y-2">
          <a
            href="/login"
            className="block px-4 py-2 bg-black text-yellow-500 rounded-lg shadow hover:bg-gray-800 text-center"
          >
            Login
          </a>
          <a
            href="/register"
            className="block px-4 py-2 bg-yellow-300 text-black rounded-lg shadow hover:bg-yellow-400 text-center"
          >
            Register
          </a>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
