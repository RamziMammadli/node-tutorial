import mongoose from "mongoose";
import JurnalItem from "../models/JurnalModel.js";

const getJurnals = async (req, res) => {
  const jurnals = await JurnalItem.find();
  res.json(jurnals);
};

const createJurnal = async (req, res) => {
  const { name, author, publishedDate, inStock } = req.body;

  let newJurnal = { name, author, publishedDate, inStock };


  try {
    JurnalItem.create(newJurnal);
    res.json(newJurnal);
  } catch (error) {
    console.log(error);
  }
};

export { getJurnals, createJurnal };
