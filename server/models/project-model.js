import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    role: { type: String, required: true },
    outcome: { type: String, required: true },
    
});

export default mongoose.model('Project', projectSchema);