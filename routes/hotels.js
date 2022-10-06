import express from "express"
import Hotel from "../models/Hotel.js";
import { createHotel,updateHotel, deleteHotel, getAllHotel,getHotel, countByCity, countByType } from "../controllers/hotelController.js";
import { createError } from "../utils/error.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createHotel);

//DELETE
router.delete("/:id",verifyAdmin, deleteHotel)
//UPDATE
router.put("/:id",verifyAdmin, updateHotel)
//GET
router.get("/find/:id", getHotel)
//GET ALL
router.get("/", getAllHotel)
router.get("/countByCity", countByCity)
router.get("/countByType", countByType)


export default router