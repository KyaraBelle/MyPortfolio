import express from "express";
import {
    createContact,
    getAllContacts,
    getContactById,
    updateContact,
    deleteContact
} from "../controllers/contact-controller.js";

const router = express.Router();

//Read
router.get("/contacts", getAllContacts);
router.get("/contacts/:id", getContactById);

//Create
router.post("/contacts", createContact);

//Update
router.put("/contacts/:id", updateContact);

//Delete
router.delete("/contacts/:id", deleteContact);


export default router;