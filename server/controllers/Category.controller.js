import CategoryModel from "../models/category.model.js";

export const CatergoryController = async (req, res) => {
  try {
    const { name, image } = req.body;

    const category = new CategoryModel({
      name,
      image,
    });

    const savecategory = await category.save();

    if (!savecategory) {
      return res.status(400).json({
        success: false,
        message: "Category not saved",
        error: true,
      });
    }
    return res.status(200).json({
      success: true,
      message: "Category saved",
      error: false,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
      error: true,
    });
  }
};

export const getCategories = async (req, res) => {
  try {
    const data = await CategoryModel.find();
    if (!data) {
      return res.status(400).json({
        success: false,
        message: "Category not found",
        error: true,
      });
    }
    return res.status(200).json({
      success: true,
      data: data,
      error: false,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      sucess: false,
      error: true,
    });
  }
};