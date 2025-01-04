import React, { useState } from "react";
import { FaRegWindowClose } from "react-icons/fa";
import uploadImage from "../utils/uploadimage.js";
import { toast } from "react-hot-toast";
import Axios from "../utils/Axios.js";
import SummaryApi from "../common/SummaryApi.js";

const UpdateCategory = ({ close, _id }) => {
  const [formData, setFormData] = useState({
    _id: _id,
    name: "",
    image: null,
  });
  const [loading, setloading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleimagechange = async (e) => {
    setloading(true);
    const image = e.target.files[0];
    if (!image) return;

    const response = await uploadImage(image);
    if (response.data.success) {
      toast.success(response.data.message);
      setFormData({
        ...formData,
        image: response.data.url,
      });
    }
    setloading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await Axios({
      ...SummaryApi.updateCategory,
      data: formData,
    });
    if (response.data.success) {
      toast.success(response.data.message);
      setFormData({
        name: "",
        image: "",
      });
      close();
    }
    // You can handle the form submission here, e.g., sending data to an API.
  };

  return (
    <div className="fixed top-0 bottom-0 right-0 left-0 bg-neutral-700 opacity-90 flex justify-center items-center">
      <div className="bg-white w-autp p-5 flex-col">
        <div className="flex justify-between items-center">
          <h1 className="font-semibold">Update Category </h1>
          <div onClick={close}>
            <FaRegWindowClose size={20} />
          </div>
        </div>
        <div className=" flex items-center justify-center bg-gray-100">
          <form
            className="bg-white shadow-md rounded-lg p-6 w-full max-w-md"
            onSubmit={handleSubmit}
          >
            <h2 className="text-2xl font-bold text-center text-yellow-500 mb-6">
              Update Category
            </h2>

            {/* Category Name */}
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Category Name
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

            {/* Category Image */}
            <div className="mb-4">
              <label
                htmlFor="image"
                className="block text-sm font-medium text-gray-700"
              >
                Category Image
              </label>
              <input
                type="file"
                id="image"
                name="image"
                onChange={handleimagechange}
                accept="image/*"
                required
                className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-yellow-100 file:text-yellow-700 hover:file:bg-yellow-200"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-yellow-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-yellow-600 transition disabled:bg-gray-300"
              disabled={loading}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateCategory;
