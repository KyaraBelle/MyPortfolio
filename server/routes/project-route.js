import express from "express";
import {
    createProject,
    getAllProjects,
    getProjectById,
    updateProject,
    deleteProject
} from "../controllers/project-controller.js";

const router = express.Router();

//Read
router.get("/projects", getAllProjects);
router.get("/projects/:id", getProjectById);

//Create
router.post("/projects", createProject);

//Update
router.put("/projects/:id", updateProject);

//Delete
router.delete("/projects/:id", deleteProject);


export default router;