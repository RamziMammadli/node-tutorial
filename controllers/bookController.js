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
    await BookItem.create(newBook);
    res.json(newBook);
  } catch (error) {
    console.log(error);
  }
};

const deleteBook =  async (req,res) => {
  const {id} = req.params

  const item = await BookItem.findByIdAndDelete(id)

  res.json(`data silindi`)

}

const updateBook = async(req,res) => {
  const {id} = req.params

  const {name, author, publishedDate, inStock} = req.body

  const book = {name,author,publishedDate,inStock}

  const updatedBook = await BookItem.findByIdAndUpdate(id, book )

  res.json('data updated')
}

export { getBooks, createBook,deleteBook, updateBook };
