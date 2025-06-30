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
    <div className='container mx-auto mt-[75px]'>
      <div className='grid grid-cols-3 gap-6'>
        {
          services?.map((service) => (
            <div key={service.id} className="card bg-base-100 shadow-sm">
              <figure className="px-10 pt-10">
                <Image
                  src={service.image || ""} 
                  alt="Services_image"
                  width={500}
                  height={500}
                  className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{service.name}</h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="card-actions">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Services