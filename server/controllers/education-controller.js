import EducationModel from "../models/education-model.js";

export const getAllEducation = async (req, res) => {
    try {
        const education = await EducationModel.find();
        res.status(200).json(education);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }       
};

export const getEducationById = async (req, res) => {
    try {
        const education = await EducationModel.findById(req.params.id);
        if (!education) {
            return res.status(404).json({
                message: "Education not found"
            });
        }
        res.status(200).json(education);
    } catch (error) {
        res.status(400).json({ 
            message: "Invalid Education ID"
        });
    }
};

export const createEducation = async (req, res) => {
    try {
        const newEducation = new EducationModel(req.body);
        const savedEducation = await newEducation.save();
        res.status(201).json(savedEducation);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateEducation = async (req, res) => {
    try {
        const updatedEducation = await EducationModel.findByIdAndUpdate(
            req.params.id, 
            req.body,
            { new: true }
        );

        if (!updatedEducation) {
            return res.status(404).json({ message: "Education not found" });
        }

        res.status(200).json(updatedEducation);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}

export const deleteEducation = async (req, res) => {
    try {
        const deletedEducation = await EducationModel.findByIdAndDelete(req.params.id);
        if (!deletedEducation) {
            return res.status(404).json({ message: "Education not found" });
        }

        res.status(200).json({ message: "Education deleted successfully" });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

    