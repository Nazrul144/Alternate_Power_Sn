"use client";
import React, { useEffect, useState } from "react";
import { getServicesDetails } from "@/services/getServicesAll";
import Link from "next/link";
import { useSession } from "next-auth/react";

const Checkout =  ({ params }) => {
    const {data} = useSession()
    const [item, setItem] = useState({})

 const loadService = async()=>{
  const details = await getServicesDetails(params.id);
  setItem(details)
    }
    const { title, price, img } = item.service || {};
    

   useEffect(()=>{
    loadService();
   },[])


  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
        name : event.target.name.value,
        data : event.target.date.value,
        email : event.target.email.value,
        address : event.target.address.value,
        amount : event.target.amount.value,
    }
    console.log(formData);
  };

  return (
    <div className="container mx-auto">
      <div>
        <div className="bg-red-400 rounded-lg h-60 bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${img})` }}>
          <h1 className="pt-24 px-24 font-bold text-white text-2xl lg:text-4xl">Checkout {title} </h1>
          <div className="flex justify-center mt-[55px] lg:mt-[85px] p-1  bg-[#FF3811] rounded-t-full font-bold text-xl text-white w-56 mx-auto ">
            <Link href={"/"}>Home/</Link>
            <Link href={"#"}>Checkout</Link>
          </div>
        </div>
      </div>
      {/*Form*/}
      <div className="bg-[#F3F3F3] p-12 my-12 rounded-lg lg:px-32 ">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-5 w-full">
            <input className="px-4 py-2 rounded-lg outline-none" type="text" name="name" defaultValue={data?.user?.name} placeholder="Your Name" />
            <input className="px-4 py-2 rounded-lg outline-none" type="date" defaultValue={new Date().getDate()} name="date" placeholder="Date" />
            <input className="px-4 py-2 rounded-lg outline-none" type="text" defaultValue={data?.user?.email}  name="email" placeholder="Your Email" />
            <input className="px-4 py-2 rounded-lg outline-none" type="text" name="number" placeholder="Your Phone" />
            <input className="px-4 py-2 rounded-lg outline-none" type="text" name="address" placeholder="Present Address" />
            <input className="px-4 py-2 rounded-lg outline-none" type="text" defaultValue={price}  name="amount" placeholder="Due Amount" />
          </div>
          <textarea className="w-full rounded-lg mt-6 text-stone-500 pl-2 pt-2 h-44" name="Message" id="" defaultValue="Message"></textarea>
          <input className="btn btn-primary text-white w-full" type="submit" value="Order Confirm" />
        </form>
      </div>
    </div>
  );
};

export default Checkout;
