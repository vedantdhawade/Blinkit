import { Router } from "express";
import {
  addSubcategory,
  DeleteSubCategory,
  GetSubCategory,
  updateSubCategory,
} from "../controllers/SubCategory.controller.js";

const router = Router();

router.post("/add-subcategory", addSubcategory);
router.get("/get-subcategory", GetSubCategory);
router.put("/update-subcategory", updateSubCategory);
router.delete("/delete-subcategory", DeleteSubCategory);

export default router;
