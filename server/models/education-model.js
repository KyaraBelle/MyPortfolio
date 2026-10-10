import mongoose from 'mongoose';

const educationSchema = new mongoose.Schema({
    title: { type: String, required: true },
    completionDate: { type: Date, required: true },
    description: { type: String, required: true }
});

export default mongoose.model('Education', educationSchema);