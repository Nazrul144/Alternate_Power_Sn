'use client'
import Image from 'next/image';
import Link from 'next/link'
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const ServiceDetails = () => {

    const [service, setService] = useState(null);
    const [loading, setLoading] = useState(true);

    const params = useParams();
    const serviceId = params.id;


    useEffect(() => {
        const fetchServiceDetails = async () => {
            try {
                const response = await fetch('/services.json');
                const data = await response.json();
                
                setService(data);
            } catch (error) {
                console.error("Error fetching service details:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchServiceDetails();
    }, [])

    const serviceDetails = service?.find((item)=> item.id === serviceId);
    console.log(serviceDetails);

    if (loading) {
        return <div className="text-center mt-10">Loading...</div>;
    }

    return (
        <div>
            
            <div>

                <section className="bg-gray-600 dark:bg-gray-100 text-gray-100">
                    <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                        <div className="flex items-center justify-center p-6 mt-4 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                            <Image src={serviceDetails.image}  alt={serviceDetails.name} width={600} height={400} className='rounded-lg mt-16' />
                        </div>
                        <div className="flex flex-col justify-center p-3 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                            <h1 className=" text-2xl mt-4 lg:text-4xl mb-6 font-bold text-amber-300 ">{serviceDetails.name}</h1>
                            <p className=" text-xl mb-4">{serviceDetails.description}</p>

                            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start mt-2">
                                <Link href='/services' rel="noopener noreferrer" className="px-8 py-3 text-lg font-bold rounded bg-violet-400 dark:bg-[#ff3811] text-gray-900 dark:text-gray-50  hover:bg-sky-700 hover:text-white duration-1000 ease-in-out">Back to services</Link>
                                <Link rel="noopener noreferrer" href="/contact" className="px-8 py-3 text-lg border rounded border-gray-100 dark:border-gray-800 text-white font-bold hover:bg-sky-700 hover:text-white duration-1000 ease-in-out">Contact Us</Link>

                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    )
}

export default ServiceDetails