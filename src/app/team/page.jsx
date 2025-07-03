'use client'
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaFacebook } from "react-icons/fa6";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FaInstagramSquare, FaLinkedin, FaTwitter } from "react-icons/fa";
import Image from "next/image";
import { motion } from "motion/react"

const OurTeam = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch('/teamData.json');
      const data = await res.json();
      setTeams(data);
      setLoading(false);
    };
    loadData();
  }, []);

  console.log(teams); // Check the data in console

  return (
    <motion.div
      initial={{ opacity: 0, y: 150 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ amount: 0.3 }}
      className="container mx-auto mt-12 mb-12">
      <div className="flex justify-center items-center">
        {loading && <span className="loading loading-bars loading-lg"></span>}
      </div>
      <div>
        <h1 className="border-t-2 border-b-2 border-cyan-700 text-center font-extrabold w-20 text-2xl mx-auto mt-2 mb-4 text-[#FF3811]">
          Team </h1>
        <h1 className="font-bold text-center text-4xl mb-2">Meet Our Team</h1>
        <p className="text-center text-gray-400">
          The majority have suffered alteration in some form, by injected humour, <br /> or randomised words which don't look even
          slightly believable.{" "}
        </p>
      </div>
      <Swiper
        spaceBetween={15}
        slidesPerView={3}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
          320: {
            slidesPerView: 1, // Show 1 card for mobile screens
            spaceBetween: 10, // Smaller gap for mobile
          },
          640: {
            slidesPerView: 2, // Show 2 cards for tablet screens
            spaceBetween: 10, // Smaller gap for tablet
          },
          1024: {
            slidesPerView: 3, // Show 3 cards for desktop screens
            spaceBetween: 15, // Smaller gap for desktop
          },
        }}
      >
        {teams?.map((team) => (
          <SwiperSlide key={team.id} className="flex justify-center mb-12 mt-12">
            <div className="card bg-base-100 shadow-xl">
              <figure className="px-4 pt-4">
                <Image src={team.image} alt="team" className="rounded-xl" width={400} height={400} />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{team.name}</h2>
                <p>{team.service}</p>
                <div className="card-actions">
                  <FaFacebook className="text-xl text-sky-600" />
                  <FaTwitter className="text-xl" />
                  <FaLinkedin className="text-xl text-sky-500" />
                  <FaInstagramSquare className="text-xl text-red-500" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default OurTeam;
