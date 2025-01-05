import React, { useEffect, useState } from "react";
import { FaRegWindowClose } from "react-icons/fa";
import uploadImage from "../utils/uploadimage.js";
import { toast } from "react-hot-toast";
import Axios from "../utils/Axios.js";
import SummaryApi from "../common/SummaryApi.js";
import { useSelector } from "react-redux";

const UpdateSubCategory = ({ close, editdata }) => {
  const [formData, setFormData] = useState({
    name: "",
    image: null,
    category: [], // Array to store multiple selected category IDs
  });
  const [loading, setLoading] = useState(false);
  const [categoriess, setCategoriess] = useState([]);

  const cat = useSelector((state) => state.product.allCategories);

  useEffect(() => {
    setCategoriess(cat); // Update categories when `cat` changes
  }, [cat]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = async (e) => {
    setLoading(true);
    const image = e.target.files[0];
    try {
      const response = await uploadImage(image);
      if (response.data.success) {
        toast.success(response.data.message);
        setFormData({
          ...formData,
          image: response.data.url,
        });
      } else {
        throw new Error(response.data.message || "Image upload failed");
      }
    } catch (error) {
      toast.error(error.message || "Error uploading image");
    } finally {
      setLoading(false);
    }
  };

  const handleCategorySelection = (e) => {
    const options = Array.from(e.target.selectedOptions); // Get all selected options
    const selectedIds = options.map((option) => option.value); // Extract their values (IDs)
    setFormData({
      ...formData,
      category: selectedIds,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios({
        ...SummaryApi.addSubcategory,
        data: formData,
      });
      if (response.data.success) {
        toast.success(response.data.message);
        close();
      }
    } catch (error) {
      toast.error(error.message || "Error submitting sub-category");
    }
  };

  return (
    <div className="fixed top-0 bottom-0 right-0 left-0 bg-neutral-700 opacity-90 flex justify-center items-center">
      <div className="bg-white w-auto p-5 flex-col rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h1 className="font-semibold text-lg">Add Sub Category</h1>
          <div onClick={close} className="cursor-pointer">
            <FaRegWindowClose size={20} />
          </div>
        </div>
        <form
          className="bg-white shadow-md rounded-lg p-6 w-full max-w-md"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-bold text-center text-yellow-500 mb-6">
            Add Sub Category
          </h2>

          {/* Sub-Category Name */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Sub Category Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-yellow-400 focus:border-yellow-400"
            />
          </div>

          {/* Sub-Category Image */}
          <div className="mb-4">
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700"
            >
              Sub Category Image
            </label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleImageChange}
              accept="image/*"
              required
              className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-yellow-100 file:text-yellow-700 hover:file:bg-yellow-200"
            />
          </div>

          {/* Multiple Category Selection */}
          <div className="mb-4">
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700"
            >
              Select Categories
            </label>
            <select
              id="category"
              name="category"
              multiple
              value={formData.category}
              onChange={handleCategorySelection}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-yellow-400 focus:border-yellow-400"
            >
              {categoriess.map((category) => (
                <option key={category._id} value={category._id}>
                  {category.name}
                </option>
              ))}
            </select>
            <p className="text-sm text-gray-500 mt-1">
              Hold down the Ctrl (Windows) or Command (Mac) key to select
              multiple categories.
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-yellow-600 transition disabled:bg-gray-300"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateSubCategory;
