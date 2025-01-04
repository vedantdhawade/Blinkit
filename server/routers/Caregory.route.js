import { Router } from "express";
import AuthMiddleware from "../middleware/auth.js";
import {
  CatergoryController,
  getCategories,
} from "../controllers/Category.controller.js";

const router = Router();

router.post("/add-category", AuthMiddleware, CatergoryController);
router.get("/get", AuthMiddleware, getCategories);

export default router;
