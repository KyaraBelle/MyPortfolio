import mongoose from 'mongoose';

const educationSchema = new mongoose.Schema({
    program: { type: String, required: true },
    school: { type: String, required: true },
    years: { type: String, required: true },
    credential: { type: String, required: true }
});

export default mongoose.model('Education', educationSchema);