import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const booking = await request.json();
  const db = await connectDB();
  try {
    const bookingCollection = await db.collection("bookings");
    const newBooking = await bookingCollection.insertOne(booking);
    return NextResponse.json({ message: "Booked successful", NextResponse: newBooking });
  } catch (error) {
    return NextResponse.json({ message: "Something went wrong" }, { status: 400 });
  }
};
