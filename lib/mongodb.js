import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;
const options = { useNewUrlParser: true, useUnifiedTopology: true };
let isConnected = false; // Track connection status

async function connectDB() {
  if (!MONGODB_URI) {
    throw new Error('Missing MONGODB_URI environment variable');
  }

  if (isConnected) {
    console.log("⚡ Using existing Mongoose connection");
    return mongoose.connection;
  }

  try {
    await mongoose.connect(MONGODB_URI, options);
    isConnected = true;
    console.log("✅ Mongoose connected to MongoDB");
    return mongoose.connection;
  } catch (error) {
    console.error("❌ Mongoose connection error:", error);
    throw error;
  }
}

export default connectDB;
