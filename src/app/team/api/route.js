import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const GET = async () => {
  const db = await connectDB();
  const teamCollection = await db.collection("team");

  try {
    const data = await teamCollection.find().toArray();
    return NextResponse.json({ message: "Data received", data }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Something went wrong" }, { status: 400 });
  }
};
