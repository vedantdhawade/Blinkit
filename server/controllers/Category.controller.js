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
