import { Schema, model, models, Document } from 'mongoose';

// Define the interface for TypeScript typing
export interface IUser extends Document {
  email: string;
  password: string;
  role: 'user' | 'admin';
  createdAt: Date;
}

// Define the User schema
const UserSchema = new Schema<IUser>({
  email: { 
    type: String, 
    required: [true, 'Email is required'], 
    unique: true, 
    lowercase: true,
    trim: true 
  },
  password: { 
    type: String, 
    required: [true, 'Password is required'] 
  },
  role: { 
    type: String, 
    enum: ['user', 'admin'], 
    default: 'user' 
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
});

// Export the model, using existing one if it exists to avoid overwriting errors
const User = models.User || model<IUser>('User', UserSchema);

export default User;