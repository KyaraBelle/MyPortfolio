import express from "express";
import {
    createEducation,
    getAllEducation,
    getEducationById,
    updateEducation,
    deleteEducation
} from "../controllers/education-controller.js";

import authMiddleware from "../middlewares/auth.js";
import adminMiddleware from "../middlewares/admin.js";

const router = express.Router();

//Read
router.get("/education", getAllEducation);
router.get("/education/:id", getEducationById);
    router.get("/qualifications", getAllEducation);
    router.get("/qualifications/:id", getEducationById);

//Create
router.post("/education", authMiddleware, adminMiddleware, createEducation);
    router.post("/qualifications", authMiddleware, adminMiddleware, createEducation);

//Update
router.put("/education/:id", authMiddleware, adminMiddleware, updateEducation);
    router.put("/qualifications/:id", authMiddleware, adminMiddleware, updateEducation);

//Delete
router.delete("/education/:id", authMiddleware, adminMiddleware, deleteEducation);
    router.delete("/qualifications/:id", authMiddleware, adminMiddleware, deleteEducation);

export default router;