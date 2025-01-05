import { Router } from "express";
import {
  addSubcategory,
  GetSubCategory,
} from "../controllers/SubCategory.controller.js";

const router = Router();

router.post("/add-subcategory", addSubcategory);
router.get("/get-subcategory", GetSubCategory);
export default router;
