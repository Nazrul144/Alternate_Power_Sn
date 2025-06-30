'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const Services = () => {

  const [services, setServices] = useState([])

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch('/services.json')
      const data = await res.json()
      setServices(data);
    }
    loadData()
  }, [])

  console.log(services)

  return (
    <div className='container mx-auto mt-[100px] mb-16 '>
       <h1 className="border-t-2 border-b-2 border-cyan-700 text-center font-extrabold w-48 text-2xl mx-auto mt-2 mb-8 ">
          OUR SERVICES </h1>
      <div className='grid grid-cols-3 gap-6 '>
        {
          services?.map((service) => (
            <div key={service.id} className="card bg-base-100 shadow-sm border-[1px] border-orange-600">
              <figure className="px-10 pt-10">
                <Image
                  src={service.image} 
                  alt="Services_image"
                  width={500}
                  height={500}
                  className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-2xl">{service.name}</h2>
                <p className='text-justify'>{service.description}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Services