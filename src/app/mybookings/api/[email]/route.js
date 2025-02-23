import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const db = await connectDB();
  const bookingCollection = db.collection("newBookings");
  try {
    const myBooking = await bookingCollection.find({ email: params.email }).toArray();
    console.log(myBooking);
    return NextResponse.json(myBooking);
  } catch (error) {
    return NextResponse.json({ message: "Something Went Wrong" }, { status: 400 });
  }
};
