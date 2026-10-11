import ContactModel from "../models/project.js";

export const getAllContacts = async (req, res) => {
    try {
        const contacts = await ContactModel.find();
        res.status(200).json(contacts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }       
};

export const getContactById = async (req, res) => {
    try {
        const contact = await ContactModel.findById(req.params.id);
        res.status(200).json(contact);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const createContact = async (req, res) => {
    try {
        const newContact = new ContactModel(req.body);
        const savedContact = await newContact.save();
        res.status(201).json(savedContact);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateContact = async (req, res) => {
    try {
        const updatedContact = await ContactModel.findByIdAndUpdate(
            req.params.id, 
            req.body,
            { new: true }
        );

        if (!updatedContact) {
            return res.status(404).json({ message: "Contact not found" });
        }

        res.status(200).json(updatedContact);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}

export const deleteContact = async (req, res) => {
    try {
        const deletedContact = await ContactModel.findByIdAndDelete(req.params.id);
        if (!deletedContact) {
            return res.status(404).json({ message: "Contact not found" });
        }

        res.status(200).json({ message: "Contact deleted successfully" });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

    