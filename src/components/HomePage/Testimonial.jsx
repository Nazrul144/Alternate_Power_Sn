'use client'
import Image from "next/image";
import { useEffect, useState } from "react";
import { IoIosStarOutline } from "react-icons/io";
import { motion } from "motion/react"

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([])

  useEffect(() => {
    // Fetch the data inside the useEffect and handle async logic properly
    const fetchData = async () => {
      const res = await fetch('/testimonial.json');
      const data = await res.json();
      setTestimonials(data);
    }

    fetchData();  // Call the async function
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 150 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ amount: 0.3 }}
      className="container mx-auto">
      <div className="mt-16">
        <h1 className="border-t-2 border-b-2 border-cyan-700 text-center font-extrabold w-40 text-2xl mx-auto mt-2 mb-16 text-[#FF3811]">Testimonial</h1>
        <h1 className="text-center font-bold text-4xl mb-4">What Customer Says</h1>
        <p className="text-center">
          Our customers love our services! Here's what they have to say about us.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12 mb-12">
        {testimonials.map((item) => (
          <div key={item.id} className="card bg-base-100 w-full border-[1px] border-gray-200 rounded-lg h-96 p-12 mx-auto ">
            <div className="flex items-center justify-between ">
              <div className="flex items-center gap-4">
                <div className="rounded-full overflow-hidden w-[50px] h-[50px] relative">
                  <Image
                    className="object-cover"
                    src={item.image}
                    alt="Image"
                    width={50}
                    height={50}
                    style={{ aspectRatio: "1 / 1" }}
                  />
                </div>

                <div>
                  <h1 className="text-xl font-bold">{item.name}</h1>
                  <h1>{item.designation}</h1>
                </div>
              </div>
              <div className="text-red-500">
                <Image className="brightness-80 invert" src="/assets/icons/quote.png" alt="quote" width={50} height={50} />
              </div>
            </div>
            <p className="text-justify mt-4 mb-12">{item.description}</p>
            <div className="flex gap-2">
              <IoIosStarOutline className="text-xl text-orange-600 font-extrabold" />
              <IoIosStarOutline className="text-xl text-orange-600 font-extrabold" />
              <IoIosStarOutline className="text-xl text-orange-600 font-extrabold" />
              <IoIosStarOutline className="text-xl text-orange-600 font-extrabold" />
              <IoIosStarOutline className="text-xl text-orange-600 font-extrabold" />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Testimonial;
