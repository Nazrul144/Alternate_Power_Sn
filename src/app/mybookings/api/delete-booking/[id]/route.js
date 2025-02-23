import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const DELETE = async (request, { params }) => {
  const db = await connectDB();
  const deleteBookingCollection = db.collection("newBookings");

  try {
    const res = await deleteBookingCollection.deleteOne({ _id: new ObjectId(params.id) });
    return NextResponse.json({ message: "Booking has been deleted", NextResponse: res });
  } catch (error) {
    return NextResponse.json({ message: "Somethings went wrong" }, { status: 400 });
  }
};
