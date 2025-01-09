import React from "react";
import mobilebanner from "../assets/banner-mobile.jpg";
import banner from "../assets/banner.jpg";
import { useSelector } from "react-redux";
import { validateUrl } from "../utils/urlvalidator";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const allCategories = useSelector((state) => state.product.allCategories);
  const isLoading = useSelector((state) => state.product.isLoading);
  const subCategorydata = useSelector((state) => state.product.subCategories);

  const navigate = useNavigate();

  const handleredirectcategory = (id, name) => {
    const subCategory = subCategorydata.find((sub) => {
      const filterdata = sub.category.some((c) => {
        return c._id == id;
      });
      return filterdata ? true : null;
    });
    const url = `/${validateUrl(name)}-${id}/${validateUrl(subCategory.name)}-${
      subCategory._id
    }`;
    navigate(url);
  };

  return (
    <section className="p-2">
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

      {/* categories display here */}

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
    </section>
  );
};

export default Home;
