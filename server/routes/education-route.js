import express from "express";
import {
    createEducation,
    getAllEducation,
    getEducationById,
    updateEducation,
    deleteEducation
} from "../controllers/education-controller.js";

const router = express.Router();

//Read
router.get("/education", getAllEducation);
router.get("/education/:id", getEducationById);

//Create
router.post("/education", createEducation);

//Update
router.put("/education/:id", updateEducation);

//Delete
router.delete("/education/:id", deleteEducation);


export default router;