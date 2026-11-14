import express from "express";
import {
    createContact,
    getAllContacts,
    getContactById,
    updateContact,
    deleteContact
} from "../controllers/contact-controller.js";

import authMiddleware from "../middlewares/auth.js";
import adminMiddleware from "../middlewares/admin.js";

const router = express.Router();

//Read
router.get("/contacts", getAllContacts);
router.get("/contacts/:id", getContactById);

//Create
router.post("/contacts", createContact);

//Update
router.put("/contacts/:id", authMiddleware, adminMiddleware, updateContact);

//Delete
router.delete("/contacts/:id", authMiddleware, adminMiddleware, deleteContact);


export default router;