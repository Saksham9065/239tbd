import { MongoClient } from "mongodb";
import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
  throw new Error('Invalid/Missing MONGODB_URI');
}

// 1. Define types for our global caches
interface GlobalCache {
  mongoose: {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
  };
  _mongoClientPromise?: Promise<MongoClient>;
}

const globalWithCache = global as unknown as GlobalCache;

// 2. Native MongoDB Client (Required by NextAuth)
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
  if (!globalWithCache._mongoClientPromise) {
    const client = new MongoClient(MONGODB_URI);
    globalWithCache._mongoClientPromise = client.connect();
  }
  clientPromise = globalWithCache._mongoClientPromise;
} else {
  const client = new MongoClient(MONGODB_URI);
  clientPromise = client.connect();
}

// 3. Mongoose Cache (Required by your Models)
const cached = globalWithCache.mongoose || { conn: null, promise: null };
globalWithCache.mongoose = cached;

// Export the native client for NextAuth
export default clientPromise;

// Export Mongoose connect for your existing API routes
export async function connectDB() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI).then((m) => m);
  }
  cached.conn = await cached.promise;
  return cached.conn;
}