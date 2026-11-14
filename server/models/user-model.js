import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date, default: Date.now },
   
    isAdmin: {
        type: Boolean,
        default: false
    }
});

userSchema.pre("save", async function(){
    if(this.isModified("password") || this.isNew){
        this.password = await bcrypt.hash(this.password, 10);
    }
});

userSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password, this.password);
};

export default mongoose.model('User', userSchema);