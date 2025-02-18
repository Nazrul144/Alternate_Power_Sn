'use client'
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";


const Page = () => {

    const session = useSession()
   const [bookings, setBookings] = useState([])
    
    const loadData = async()=>{
        const res = await fetch(`http://localhost:3000/mybookings/api/${session?.data?.user?.email}`)
        const data = await res.json()
        setBookings(data)
    }

    console.log(bookings);
 
    useEffect(()=>{
        loadData();
    },[session])

  return (
    <div className="container mx-auto">
      <h1>My bookings</h1>
      <div className="bg-red-400 rounded-lg h-60 bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url('/assets/images/about_us/parts.jpg')` }}>
        <h1 className="pt-24 px-24 font-bold text-white text-2xl lg:text-4xl">My Bookings</h1>
        <div className="flex justify-center mt-[55px] lg:mt-[85px] p-1  bg-[#FF3811] rounded-t-full font-bold text-xl text-white w-56 mx-auto ">
          <Link href={"/"}>Home/</Link>
          <Link href={"#"}>Service Details</Link>
        </div>
      </div>
      {/*Table*/}
      <div className="mt-6 mb-12">
      <div className="overflow-x-auto">
      <div className="flex flex-col items-center justify-center mb-4 font-semibold ">
    <Image 
        src={""} 
        alt="User Profile"
        className="w-16 h-16 rounded-full border-2 border-gray-300 shadow-lg"
    />
    <h1>Email: {session.data?.user?.email}</h1>
    <h1>User: {session.data?.user?.name}</h1>
</div>

  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Service Name</th>
        <th>Price</th>
        <th>Booking Date</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        bookings?.map((booking)=>(
        <tr key={booking._id} className="bg-base-200">
        <th>1</th>
        <td>{booking.service.title}</td>
        <td>{booking.service.price}</td>
        <td>{booking.data}</td>
        <td><button className=""><MdDelete className="text-2xl ml-2 text-red-600" /></button></td>
      </tr>
        ))
      }
    </tbody>
  </table>
</div>
      </div>
    </div>
  );
};

export default Page;
