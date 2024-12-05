import express from "express";
import { createBook, deleteBook, getBooks, updateBook } from "../controllers/bookController.js";

const router = express.Router();

router
.route("/")
.get(getBooks)
.post(createBook)

router
.route('/:id')
.delete(deleteBook)
.put(updateBook)
export default router;
