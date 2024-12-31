import React from "react";
import { TypeAnimation } from "react-type-animation";

const SearchBar = () => {
  return (
    <div className=" md:flex flex-grow mx-4">
      <div className="h-[40px] items-center flex">
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            'Search "milk"',
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            'Search "panner"',
            1000,
            'Search "bread"',
            1000,
            'Search "atta"',
            1000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </div>
    </div>
  );
};

export default SearchBar;
