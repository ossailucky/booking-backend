import express from "express"
import { createRoom, deleteRoom, getAllRoom, getRoom, updateRoom } from "../controllers/roomController.js";
import { verifyAdmin } from "../utils/verifyToken.js";


const router = express.Router();

//CREATE
router.post("/:hotelid", verifyAdmin, createRoom);

//DELETE
router.delete("/:id",verifyAdmin, deleteRoom)
//UPDATE
router.put("/:id",verifyAdmin, updateRoom)
//GET
router.get("/:id", getRoom)
//GET ALL
router.get("/", getAllRoom)

export default router