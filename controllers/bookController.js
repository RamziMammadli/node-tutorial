import mongoose from "mongoose";
import BookItem from "../models/BookModel.js";

const getBooks = async (req, res) => {
  const books = await BookItem.find();
  res.json(books);
};

const createBook = async (req, res) => {
  const { name, author, publishedDate, inStock } = req.body;

  let newBook = { name, author, publishedDate, inStock };


  try {
    BookItem.create(newBook);
    res.json(newBook);
  } catch (error) {
    console.log(error);
  }
};

export { getBooks, createBook };
