import connectDB from "../../../lib/mongodb";
import mongoose from "mongoose";
import {EmployeeType, ActiveEmployeeType} from '../../models'

export async function GET(req, res) {
  try {
    await connectDB(); // Ensure Mongoose connection

    // Fetch all documents from the 'usertypes' collection using Mongoose
    const users = await EmployeeType.find({}).lean(); 

    return Response.json(users.length ? users : [], { status: 200 });
  } catch (error) {
    console.error("Database error:", error);
    res.status(500).json({ error: "Internal Server Error", details: error.message });
  }
}
  