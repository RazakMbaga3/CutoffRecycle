import connectDB from "../../../lib/mongodb";
import mongoose from "mongoose";
import {EmployeeType, ActiveEmployeeType} from '../../models'

export async function GET(req) {
  try {
    await connectDB(); // Ensure Mongoose connection

    // Fetch all documents from the 'usertypes' collection using Mongoose
    const users = await EmployeeType.find({}).lean(); 

    return Response.json(users.length ? users : []);
  } catch (error) {
    console.error("Database error:", error);
    return Response.json(
      { error: "Internal Server Error", details: error.message },
      { status: 500 }
    );
  }
}

export async function PUT(req) {
    try {
      await connectDB();
      const body = await req.json();
  
      if (!body || !body.user) {
        return Response.json({ error: "Missing 'user' in request body" }, { status: 400 });
      }
  
      // Replace existing active user (we assume only one)
      let updated;
  
      const existing = await ActiveEmployeeType.findOne();
      if (existing) {
        existing.employee = body.user;
        updated = await existing.save();
      } else {
        const newActive = new ActiveEmployeeType({ user: body.user });
        updated = await newActive.save();
      }
  
      return Response.json(updated, { status: 200 });
    } catch (error) {
      console.error("Error updating active user:", error);
      return Response.json({ error: "Failed to update active user", details: error.message }, { status: 500 });
    }
  }
  