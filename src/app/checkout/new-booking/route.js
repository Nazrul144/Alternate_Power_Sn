import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const newBooking = await request.json();

  const db = await connectDB();
  const newBookingsCollection = db.collection("newBookings");
  try {
    const res = await newBookingsCollection.insertOne(newBooking);
    return NextResponse.json({ message: "booking successful" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Something went wrong" }, { status: 400 });
  }
};
