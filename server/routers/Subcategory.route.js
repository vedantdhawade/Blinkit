import { Router } from "express";
import {
  addSubcategory,
  GetSubCategory,
  updateSubCategory,
} from "../controllers/SubCategory.controller.js";

const router = Router();

router.post("/add-subcategory", addSubcategory);
router.get("/get-subcategory", GetSubCategory);
router.get("/update-subcategory", updateSubCategory);

export default router;
