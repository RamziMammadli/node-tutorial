import express from "express";
import { createJurnal, getJurnals } from "../controllers/jurnalController.js";

const router = express.Router();

router
.route("/")
.get(getJurnals)
.post(createJurnal);

export default router;
