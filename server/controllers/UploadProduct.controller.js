import ProductModel from "../models/product.model.js";

export const UploadProduct = async (req, res) => {
  const {
    name,
    image,
    category,
    subCategory,
    unit,
    stock,
    price,
    discount,
    description,
  } = req.body;
  try {
    const data = await new ProductModel({
      name,
      image,
      category,
      subCategory,
      unit,
      stock,
      price,
      discount,
      description,
    });
    const dataa = await data.save();
    if (!dataa) {
      res.status(500).json({
        message: "Product Not added",
        success: false,
        error: true,
      });
    }
    res.status(200).json({
      message: "Product Added Successfully",
      success: true,
      error: false,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      success: false,
      error: true,
    });
  }
};
