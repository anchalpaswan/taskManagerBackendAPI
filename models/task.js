import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: true,
    },
    description: {
        type: String, 
        unique: true,
        required: true,
    },
    isCompleted: {
        type: Boolean,
        default: false,
    },
    //! here each task will have a user so we assign a userid to that task 
    //! the ref here is the collection name which it will look the id 
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    }
})

export const Task = mongoose.model('Task', taskSchema);
