import React, { useEffect, useState } from "react";
import UploadCategory from "../components/UploadCategory";
import toast from "react-hot-toast";
import Axios from "../utils/Axios";
import SummaryApi from "../common/SummaryApi";
import CategoryCard from "../components/CategoryCard";

const Category = () => {
  const [addcategory, setaddcategory] = useState(false);
  const [isloading, setisloading] = useState(false);
  const [Categories, setCategories] = useState([]);

  const getCategories = async () => {
    try {
      setisloading(true);
      const response = await Axios({
        ...SummaryApi.getCategories,
      });
      const data = response.data.data;
      setCategories(data);
    } catch (error) {
      toast.error("error.message" || "Failed to fetch categories");
      setisloading(false);
    } finally {
      setisloading(false);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <section>
      <div className="flex justify-between items-center p-2 shadow-md bg-slate-100">
        <h1 className="font-semibold">Category</h1>
        <button
          className="bg-yellow-200  px-3 py-2 hover:bg-yellow-400"
          onClick={() => setaddcategory(true)}
        >
          Add Category
        </button>
      </div>
      {addcategory && <UploadCategory close={() => setaddcategory(false)} />}
      {isloading ? (
        <h1>loading</h1>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
          {Categories.map((curr, index) => {
            return (
              <CategoryCard key={index} image={curr.image} title={curr.name} />
            );
          })}
        </div>
      )}
    </section>
  );
};

export default Category;
