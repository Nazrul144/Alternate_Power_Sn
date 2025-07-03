'use client'
import Image from "next/image";
import React from "react";
import { motion } from "motion/react"

const WhyChooseUs = () => {
  return (
    <div className="container mx-auto mb-28 mt-12">
      <motion.div
        initial={{ opacity: 0, y: 150 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ amount: 0.3 }}
      >
        <h1 className="border-t-2 border-b-2 border-cyan-700 text-center font-extrabold w-40 text-2xl mx-auto mt-2 mb-4 text-[#FF3811]">
          Core Features</h1>
        <h1 className="text-center font-extrabold text-4xl mb-4">Why Choose Us</h1>
        <p className="text-center text-lg">
          We offer reliable, high-quality services tailored to meet your needs, backed <br />
          by a team of skilled professionals and advanced solutions.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 150 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ amount: 0.3 }}
        className="grid grid-cols-2 lg:grid-cols-6 gap-6 mt-12">
        <div
          className="border-[1px] border-gray-300 rounded-lg flex flex-col items-center p-4 hover:transition-transform transform hover:scale-110">
          <Image className="mt-6" width={100} height={100} alt="logo" src="/assets/icons/group.svg" />
          <p className="text-center mt-2">Skilled Professionals</p>
        </div>

        <div className="border-[1px] border-gray-300 rounded-lg flex flex-col items-center p-4 hover:transition-transform transform hover:scale-110">
          <Image className="mt-6" width={100} height={100} alt="logo" src="/assets/icons/deliveryt.svg" />
          <p className="text-center mt-2">On-Time Project Completion</p>
        </div>

        <div className="border-[1px] border-gray-300 rounded-lg flex flex-col items-center p-4 hover:transition-transform transform hover:scale-110">
          <Image width={100} height={100} alt="logo" src="/assets/icons/person.svg" />
          <p className="text-center mt-2">24/7 Customer Support</p>
        </div>

        <div className="border-[1px] border-gray-300 rounded-lg flex flex-col items-center p-4 hover:transition-transform transform hover:scale-110">
          <Image className="mt-2" width={100} height={100} alt="logo" src="/assets/icons/Wrench.svg" />
          <p className="text-center mt-2">Top-Quality Equipment</p>
        </div>

        <div className="border-[1px] border-gray-300 rounded-lg flex flex-col items-center p-4 hover:transition-transform transform hover:scale-110">
          <Image width={100} height={100} alt="logo" src="/assets/icons/check.svg" />
          <p className="text-center mt-2">Satisfaction Guarantee</p>
        </div>

        <div className="border-[1px] border-gray-300 rounded-lg flex flex-col items-center p-4 hover:transition-transform transform hover:scale-110">
          <Image width={100} height={100} alt="logo" src="/assets/icons/quick.png" />
          <p className="text-center mt-8">Fast Response Time</p>
        </div>

      </motion.div>
    </div>
  );
};

export default WhyChooseUs;
