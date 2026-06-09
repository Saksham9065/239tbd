import { Schema, model, models, Document } from 'mongoose';

// Define the interface for TypeScript typing
export interface IInquiry extends Document {
  name: string;
  email: string;
  services: string[];
  message: string;
  createdAt: Date;
}

// Define the schema
const InquirySchema = new Schema<IInquiry>({
  name: { 
    type: String, 
    required: [true, 'Name is required'],
    trim: true 
  },
  email: { 
    type: String, 
    required: [true, 'Email is required'],
    lowercase: true,
    trim: true 
  },
  services: { 
    type: [String], 
    default: [] 
  },
  message: { 
    type: String, 
    required: [true, 'Message is required'],
    trim: true 
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
});

// Export the model
// The check 'models.Inquiry' prevents "OverwriteModelError" during HMR
const Inquiry = models.Inquiry || model<IInquiry>('Inquiry', InquirySchema);

export default Inquiry;