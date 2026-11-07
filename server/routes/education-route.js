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
    router.get("/qualifications", getAllEducation);
    router.get("/qualifications/:id", getEducationById);

//Create
router.post("/education", createEducation);
    router.post("/qualifications", createEducation);

//Update
router.put("/education/:id", updateEducation);
    router.put("/qualifications/:id", updateEducation);

//Delete
router.delete("/education/:id", deleteEducation);
    router.delete("/qualifications/:id", deleteEducation);

export default router;