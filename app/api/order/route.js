import connectDB from "../../../lib/mongodb";
import mongoose from "mongoose";
import {ActiveUserType, CartItemType, CartSubType, CartType, OrderType, SubType, OtherOrderType,UserType,NewBarberOrderType} from '../../models'

export async function GET(req, res) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);
    const id = searchParams.get("_id");

    if (!id) {
      return res.status(400).json({ error: "Missing 'id' query parameter" });
    }

    const user = await UserType.findById(id).select("newBarber").lean();

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    return res.status(200).json(user.newBarber || {});
  } catch (error) {
    console.error("Database error:", error);
    return res.status(500).json({ error: "Internal Server Error", details: error.message });
  }
}

export async function POST(req) {
    try {
      await connectDB();
      const body = await req.json();
  
      const newOrder = new NewBarberOrderType(body);
      const savedUser = await newOrder.save();
  
      return Response.json(savedUser, { status: 201 });
    } catch (error) {
      console.error("Error creating user:", error);
      return Response.json({ error: "Failed to create user", details: error.message }, { status: 500 });
    }
  }
