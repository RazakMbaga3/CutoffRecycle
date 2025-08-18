import connectDB from "../../../lib/mongodb";
import mongoose from "mongoose";
import {ActiveUserType, CartItemType, CartSubType, CartType, UserType} from '../../models'

export async function GET(req) {
  try {
    await connectDB(); // Ensure Mongoose connection

    // Fetch all documents from the 'usertypes' collection using Mongoose
    const users = await UserType.find({}).lean(); 

    return Response.json(users.length ? users : []);
  } catch (error) {
    console.error("Database error:", error);
    return Response.json(
      { error: "Internal Server Error", details: error.message },
      { status: 500 }
    );
  }
}
export async function POST(req) {
    try {
      await connectDB();
      const body = await req.json();
  
      const newUser = new UserType(body);
      const savedUser = await newUser.save();
  
      return Response.json(savedUser, { status: 201 });
    } catch (error) {
      console.error("Error creating user:", error);
      return Response.json({ error: "Failed to create user", details: error.message }, { status: 500 });
    }
  }
