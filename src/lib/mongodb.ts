import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://saksham884073:Saksham%402026@cluster0.ibj2zx9.mongodb.net/239db?retryWrites=true&w=majority&appName=Cluster0";

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

// Interface to define the structure of our cached connection
interface GlobalWithMongoose {
  mongoose?: {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
  };
}

const globalWithMongoose = global as GlobalWithMongoose;

// Initialize the cache if it doesn't exist
const cached = globalWithMongoose.mongoose || { conn: null, promise: null };

export async function connectDB() {
  // Return the existing connection if available
  if (cached.conn) return cached.conn;

  // Create a new promise if one doesn't exist
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI).then((mongooseInstance) => {
      return mongooseInstance;
    });
  }
  
  // Await the promise and store the connection
  cached.conn = await cached.promise;
  globalWithMongoose.mongoose = cached; // Persist the cache
  
  return cached.conn;
}