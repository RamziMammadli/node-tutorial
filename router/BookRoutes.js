import express from "express";
import { createBook, getBooks } from "../controllers/bookController.js";

const router = express.Router();

router
.route("/")
.get(getBooks)
.post(createBook);

export default router;
