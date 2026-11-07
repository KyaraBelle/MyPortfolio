import express from "express";
import {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
    loginUser
} from "../controllers/user-controller.js";
import authMiddleware from "../middlewares/auth.js";

const router = express.Router();

//No token required for signup and login
//Create 
router.post("/signup", createUser);
    router.post("/users", createUser);
router.post("/signin", loginUser);


//Token Required for the following routes
//Read
router.get("/users", authMiddleware, getAllUsers);
router.get("/users/:id", authMiddleware, getUserById);

//Update
router.put("/users/:id", authMiddleware, updateUser);

//Delete
router.delete("/users/:id", authMiddleware,  deleteUser);


export default router;