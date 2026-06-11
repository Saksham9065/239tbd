import { Schema, model, models, Document } from 'mongoose';

// Define the interface for TypeScript typing
export interface ITask extends Document {
  title: string;
  completed: boolean;
  createdAt: Date;
}

// Define the schema
const TaskSchema = new Schema<ITask>({
  title: { 
    type: String, 
    required: [true, 'Title is required'],
    trim: true 
  },
  completed: { 
    type: Boolean, 
    default: false 
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
});

// Export the model
// Using models.Task prevents "OverwriteModelError" during development HMR
const Task = models.Task || model<ITask>('Task', TaskSchema);

export default Task;