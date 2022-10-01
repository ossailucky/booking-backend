import express from "express"
import Hotel from "../models/Hotel.js";
import { createHotel,updateHotel, deleteHotel, getAllHotel,getHotel } from "../controllers/hotelController.js";
import { createError } from "../utils/error.js";

const router = express.Router();

//CREATE
router.post("/", createHotel);

//DELETE
router.delete("/:id", deleteHotel)
//UPDATE
router.put("/:id", updateHotel)
//GET
router.get("/:id", getHotel)
//GET ALL
router.get("/", getAllHotel)


export default router