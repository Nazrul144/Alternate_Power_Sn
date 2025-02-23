import { connectDB } from "@/lib/connectDB";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const newUser = await request.json();
  console.log(newUser);
  try {
    const db = await connectDB();
    const userCollection = await db.collection("user");
    const exist = await userCollection.findOne({ email: newUser.email });
    if (exist) {
      return NextResponse.json({ message: "User Already exist" }, { status: 400 }); //400 already belong something.
    }
    const hashPassword = bcrypt.hashSync(newUser.password, 14);
    const res = await userCollection.insertOne({ ...newUser, password: hashPassword });
    return NextResponse.json({ message: "User Create successfully" }, { status: 201 }); //201 successfully resource creation
  } catch (error) {
    return NextResponse.json({ message: "Something went wrong" }, { status: 500 }); //500 for server side error
  }
};
