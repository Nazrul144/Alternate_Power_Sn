import { connectDB } from "@/lib/connectDB"
import { ObjectId } from "mongodb";

export const PATCH = async(request, {params})=>{
    const db = await connectDB();
    const updatedDoc = await request.json();
    const {date, address, phone} = updatedDoc;
    const bookingCollection = db.collection("newBookings")

    console.log("Params ID:", params.id);

    try {
        const res = await bookingCollection.updateOne({_id: new ObjectId(params.id)},{
            $set:{
                date,
                address,
                phone
            },
        },
    {
        upsert: true
    })
    return Response.json({message: "Updated Booking", response: res})
    } catch (error) {
        return Response.json({message: "Somethings went wrong"}, {status: 400})
    }
}


export const GET = async(request, {params})=>{
    const db = await connectDB();
    const bookingCollection = db.collection("newBookings")

    try {
        const res = await bookingCollection.findOne({_id: new ObjectId(params.id)})
        return Response.json({message: "Booking found", response: res})
    } catch (error) {
        return Response.json({message: "Somethings Went Wrong"}, {status: 400})
    }
}