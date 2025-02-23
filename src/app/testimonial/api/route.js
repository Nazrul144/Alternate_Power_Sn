import { connectDB } from "@/lib/connectDB"

export const GET = async()=>{
    const db = await connectDB()
    const testimonialCollection = await db.collection('testimonial')

    try {
        const res = await testimonialCollection.find().toArray()
        return Response.json({message: "Testimonial data received!", res}, {status: 200})
    } catch (error) {
        return Response.json({message: "Something went wrong"}, {status: 400})
    }
}