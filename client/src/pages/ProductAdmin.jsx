import React, { useState } from "react";
import { useSelector } from "react-redux";
import uploadImage from "../utils/uploadimage";
import toast from "react-hot-toast";
import Axios from "../utils/Axios";
import SummaryApi from "../common/SummaryApi";

const ProductAdmin = () => {
  const [data, setdata] = useState({
    name: "",
    description: "",
    image: [],
    category: [],
    subCategory: [],
    unit: "",
    stock: 0,
    price: 0,
    discount: 0,
  });
  const categories = useSelector((state) => state.product.allCategories);
  const Subcategories = useSelector((state) => state.product.subCategories);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setdata((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    const response = await Axios({
      ...SummaryApi.uploadProduct,
      data: data,
    });
    console.log(response);
    if (response.data.success) {
      toast.success(response.data.message);
      setdata({
        name: "",
        description: "",
        image: [],
        category: [],
        subCategory: [],
        unit: "",
        stock: 0,
        price: 0,
        discount: 0,
      });
    }
  };

  const handleimagechange = async (e) => {
    const file = e.target.files[0];
    if (!file) {
      return;
    }
    const res = await uploadImage(file);

    const url = res.data.url;
    setdata((prev) => {
      return {
        ...prev,
        image: [...prev.image, url],
      };
    });
  };

  return (
    <section className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="flex justify-between items-center p-4 shadow-md bg-white rounded-md">
        <h1 className="text-xl font-semibold text-gray-700">Products</h1>
        <button
          className="bg-yellow-400 px-4 py-2 rounded-md text-white font-medium hover:bg-yellow-500 transition duration-200"
          onClick={() => console.log("Add Product Clicked")}
        >
          Add Products
        </button>
      </div>

      {/* Form Section */}
      <div className="bg-white mt-6 p-6 rounded-md shadow-md">
        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          {/* Product Name */}
          <div>
            <label htmlFor="name" className="block text-gray-600 font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={data.name}
              onChange={handleInputChange}
              placeholder="Enter product name"
              className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            />
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label
              htmlFor="description"
              className="block text-gray-600 font-medium"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={data.description}
              onChange={handleInputChange}
              placeholder="Enter product description"
              className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-400 focus:outline-none"
              rows="4"
            ></textarea>
          </div>

          {/* Image Upload */}
          {/* Image Upload */}
          <div>
            <label htmlFor="image" className="block text-gray-600 font-medium">
              Image
            </label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleimagechange}
              className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            />
          </div>

          {/* Display Selected Images */}
          <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
            {data.image.map((url, index) => (
              <div
                key={index}
                className="relative w-full aspect-square border border-gray-300 rounded-md overflow-hidden"
              >
                <img
                  src={url}
                  alt={`Uploaded ${index + 1}`}
                  className="object-cover w-full h-full"
                />
                <button
                  onClick={() =>
                    setdata((prev) => ({
                      ...prev,
                      image: prev.image.filter((_, i) => i !== index),
                    }))
                  }
                  className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600"
                >
                  &times;
                </button>
              </div>
            ))}
          </div>

          {/* Category */}
          <div>
            <label
              htmlFor="category"
              className="block text-gray-600 font-medium"
            >
              Category
            </label>
            <select
              id="category"
              name="category"
              onChange={(e) => {
                const cat = e.target.value;
                const catego = categories.find((el) => el._id === cat);
                setdata((prev) => {
                  return {
                    ...prev,
                    category: [...prev.category, catego],
                  };
                });
              }}
              className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            >
              <option value="" disabled>
                Select Category
              </option>
              {categories.map((c, index) => (
                <option key={index} value={c._id}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>

          {/* Sub-Category */}
          <div>
            <label
              htmlFor="subCategory"
              className="block text-gray-600 font-medium"
            >
              Sub-Category
            </label>
            <select
              id="subCategory"
              name="subCategory"
              onChange={(e) => {
                const cat = e.target.value;
                const subcatego = Subcategories.find((el) => el._id === cat);
                setdata((prev) => {
                  return {
                    ...prev,
                    subCategory: [...prev.subCategory, subcatego],
                  };
                });
              }}
              className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            >
              <option value="" disabled>
                Select Sub-Category
              </option>
              {Subcategories.map((c, index) => (
                <option key={index} value={c._id}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>

          {/* Unit */}
          <div>
            <label htmlFor="unit" className="block text-gray-600 font-medium">
              Unit
            </label>
            <input
              type="text"
              id="unit"
              name="unit"
              value={data.unit}
              onChange={handleInputChange}
              placeholder="Enter unit (e.g., kg, pcs)"
              className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            />
          </div>

          {/* Stock */}
          <div>
            <label htmlFor="stock" className="block text-gray-600 font-medium">
              Stock
            </label>
            <input
              type="number"
              id="stock"
              name="stock"
              value={data.stock}
              onChange={handleInputChange}
              placeholder="Enter stock quantity"
              className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            />
          </div>

          {/* Price */}
          <div>
            <label htmlFor="price" className="block text-gray-600 font-medium">
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={data.price}
              onChange={handleInputChange}
              placeholder="Enter price"
              className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            />
          </div>

          {/* Discount */}
          <div>
            <label
              htmlFor="discount"
              className="block text-gray-600 font-medium"
            >
              Discount
            </label>
            <input
              type="number"
              id="discount"
              name="discount"
              value={data.discount}
              onChange={handleInputChange}
              placeholder="Enter discount percentage"
              className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            />
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="bg-yellow-400 px-4 py-2 rounded-md text-white font-medium hover:bg-yellow-500 transition duration-200"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ProductAdmin;
