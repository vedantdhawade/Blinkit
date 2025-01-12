import React, { useRef } from "react";
import mobilebanner from "../assets/banner-mobile.jpg";
import banner from "../assets/banner.jpg";
import { useSelector } from "react-redux";
import { validateUrl } from "../utils/urlvalidator";
import { Link, useNavigate } from "react-router-dom";
import CategoryCardCompo from "../components/CategoryCardCompo";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

const Home = () => {
  const allCategories = useSelector((state) => state.product.allCategories);
  const isLoading = useSelector((state) => state.product.isLoading);
  const subCategorydata = useSelector((state) => state.product.subCategories);

  const navigate = useNavigate();

  const handleredirectcategory = (id, name) => {
    const subCategory = subCategorydata.find((sub) => {
      const filterdata = sub.category.some((c) => c._id === id);
      return filterdata ? true : null;
    });
    const url = `/${validateUrl(name)}-${id}/${validateUrl(subCategory.name)}-${
      subCategory._id
    }`;
    navigate(url);
  };

  const scrollRef = useRef({}); // To store refs for each category container

  const handleScroll = (id, direction) => {
    const container = scrollRef.current[id];
    if (container) {
      const scrollAmount = 300; // Adjust this value as needed
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="mx-auto">
      {/* Banner display here */}
      <div className="w-screen">
        <div className="bg-blue-300 rounded-md h-full">
          <div className="hidden md:block">
            <img src={banner} alt="Banner" />
          </div>
          <div className="md:hidden block">
            <img src={mobilebanner} alt="Banner" />
          </div>
        </div>
      </div>

      {/* Categories display here */}
      <div className="grid md:grid-cols-10 gap-2 p-2 grid-cols-5">
        {allCategories.map((c, index) => {
          return (
            <div
              key={index + "category"}
              className="flex flex-col p-1"
              onClick={() => handleredirectcategory(c._id, c.name)}
            >
              <img src={c.image} alt={c.name} />
            </div>
          );
        })}
      </div>

      {/* Subcategories display here */}
      <div>
        {allCategories.map((c, index) => (
          <div key={"categorylist" + index}>
            {/* Category Header */}
            <div className="flex justify-between px-4 py-2 bg-yellow-400 rounded-md m-4">
              <h1>{c?.name}</h1>
              <Link>See More</Link>
            </div>

            {/* Category Items */}
            <div className="relative">
              <div
                className="flex gap-2 mx-2 items-center overflow-x-scroll no-scrollbar"
                ref={(el) => (scrollRef.current[c._id] = el)}
              >
                <CategoryCardCompo id={c?._id} />
              </div>

              {/* Scroll Buttons */}
              <div className="absolute flex justify-between left-0 right-0 px-6 top-1/2 transform -translate-y-1/2">
                <button
                  className="p-2 font-bold shadow-xl rounded-full border bg-yellow-300 hidden md:block"
                  onClick={() => handleScroll(c._id, "left")}
                >
                  <FaAngleDoubleLeft />
                </button>
                <button
                  className="p-2 font-bold shadow-xl rounded-full border bg-yellow-300 hidden md:block"
                  onClick={() => handleScroll(c._id, "right")}
                >
                  <FaAngleDoubleRight />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Home;
