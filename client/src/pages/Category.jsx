import React, { useEffect, useState } from "react";
import UploadCategory from "../components/UploadCategory";
import CategoryCard from "../components/CategoryCard";
import { useSelector } from "react-redux";

const Category = () => {
  const [addcategory, setaddcategory] = useState(false);
  const [Categories, setCategories] = useState([]);

  const cat = useSelector((state) => state.product.allCategories);

  useEffect(() => {
    setCategories(cat); // Set categories when `cat` changes
  }, [cat]);

  return (
    <section>
      <div className="flex justify-between items-center p-2 shadow-md bg-slate-100">
        <h1 className="font-semibold">Category</h1>
        <button
          className="bg-yellow-200 px-3 py-2 hover:bg-yellow-400"
          onClick={() => setaddcategory(true)}
        >
          Add Category
        </button>
      </div>
      {addcategory && <UploadCategory close={() => setaddcategory(false)} />}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {Categories.map((curr, index) => (
          <CategoryCard
            key={index}
            image={curr.image}
            title={curr.name}
            _id={curr._id}
          />
        ))}
      </div>
    </section>
  );
};

export default Category;
