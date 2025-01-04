import { Router } from "express";
import AuthMiddleware from "../middleware/auth.js";
import {
  CatergoryController,
  DeleteCategory,
  getCategories,
  UpdateCategory,
} from "../controllers/Category.controller.js";

const router = Router();

router.post("/add-category", AuthMiddleware, CatergoryController);
router.get("/get", AuthMiddleware, getCategories);
router.put("/update", AuthMiddleware, UpdateCategory);
router.delete("/delete", AuthMiddleware, DeleteCategory);

export default router;
