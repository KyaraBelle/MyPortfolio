import express from "express";
import {
    createProject,
    getAllProjects,
    getProjectById,
    updateProject,
    deleteProject
} from "../controllers/project-controller.js";

import authMiddleware from "../middlewares/auth.js";
import adminMiddleware from "../middlewares/admin.js";

const router = express.Router();

//Read
router.get("/projects", getAllProjects);
router.get("/projects/:id", getProjectById);

//Create
router.post("/projects", authMiddleware, adminMiddleware, createProject);

//Update
router.put("/projects/:id", authMiddleware, adminMiddleware, updateProject);

//Delete
router.delete("/projects/:id", authMiddleware, adminMiddleware, deleteProject);


export default router;