import express from "express";
import {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
} from "../controllers/user-controller.js";

const router = express.Router();

//Read
router.get("/users", getAllUsers);
router.get("/users/:id", getUserById);

//Create
router.post("/users", createUser);

//Update
router.put("/users/:id", updateUser);

//Delete
router.delete("/users/:id", deleteUser);


export default router;