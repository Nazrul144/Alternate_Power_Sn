import Image from "next/image";
import React from "react";
import { SlCalender } from "react-icons/sl";
import { MdAttachEmail } from "react-icons/md";
const Address = () => {
  return (
    <div className="container mx-auto mt-12 mb-12">
      <div className="grid lg:grid-cols-3 space-y-2 bg-black rounded-lg text-white lg:py-20 lg:px-12">
        <div className="flex items-center gap-2">
          <div>
            <SlCalender className="text-4xl text-red-400" />
          </div>
          <div>
            <h1 className="font-bold">We are open</h1>
            <h1 className="font-bold">Open 24/7, 365!</h1>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div>
            <Image src="/assets/images/address/Group 34.svg" alt="logo" width={40} height={30} />
             <MdAttachEmail className="text-4xl mt-4" />
          </div>
          <div>
            <h1>Have a question?</h1>
            <h1 className="font-bold text-white">068 319 3323</h1>
              <h1 className="font-bold text-white">info@alter-power.co.za</h1>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div>
            <Image src="/assets/images/address/Group 35.svg" alt="logo" width={40} height={30} />
          </div>
          <div>
            <h1>Need a repair? our address</h1>
            <h1 className="font-bold text-white">Cape Town Office</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
