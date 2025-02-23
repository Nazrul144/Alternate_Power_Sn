import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const PATCH = async (request, { params }) => {
  const db = await connectDB();
  const updatedDoc = await request.json();
  const bookingCollection = db.collection("newBookings");

  console.log("Params ID:", params.id);

  try {
    const res = await bookingCollection.updateOne(
      { _id: new ObjectId(params.id) },
      {
        $set: {
          ...updatedDoc,
        },
      },
      {
        upsert: true,
      }
    );
    return NextResponse.json({ message: "Updated Booking", NextResponse: res }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Somethings went wrong" }, { status: 400 });
  }
};

export const GET = async (request, { params }) => {
  const db = await connectDB();
  const bookingCollection = db.collection("newBookings");

  try {
    const res = await bookingCollection.findOne({ _id: new ObjectId(params.id) });
    return NextResponse.json({ message: "Booking found", NextResponse: res });
  } catch (error) {
    return NextResponse.json({ message: "Somethings Went Wrong" }, { status: 400 });
  }
};
