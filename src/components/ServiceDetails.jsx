// 'use client'
// import Image from 'next/image';
// import Link from 'next/link'
// import React, { useEffect, useState } from 'react'

// const ServiceDetails = () => {



//     const [service, setService] = useState(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchServiceDetails = async () => {
//             try {
//                 const response = await fetch('/services.json');
//                 const data = await response.json();
                
//                 setService(data[0]);
//             } catch (error) {
//                 console.error("Error fetching service details:", error);
//             } finally {
//                 setLoading(false);
//             }
//         }
//         fetchServiceDetails();
//     }, [])

//     return (
//         <div>
//             <div>

//                 <section className="bg-gray-600 dark:bg-gray-100 text-gray-100">
//                     <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
//                         <div className="flex items-center justify-center p-6 mt-4 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
//                             <Image alt='image' className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
//                         </div>
//                         <div className="flex flex-col justify-center p-3 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
//                             <h1 className="text-4xl mb-6 font-bold text-amber-300 ">Title</h1>
//                             <p className="font-semibold text-xl mb-4">Description</p>


//                             <li className="font-semibold text-xl"> <span className="text-blue-400">Area:</span> </li>
//                             <li className="font-semibold text-xl"> <span className="text-blue-400">Price:</span> </li>
//                             <li className="font-semibold text-xl"> <span className="text-blue-400">Location:</span> </li>
//                             <li className="font-semibold text-xl"> <span className="text-blue-400">Facilities:</span> </li>

//                             <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start mt-2">
//                                 <Link href={"#"} rel="noopener noreferrer" className="px-8 py-3 text-lg font-bold rounded bg-violet-400 dark:bg-[#ff3811] text-gray-900 dark:text-gray-50  hover:bg-sky-700 hover:text-white duration-1000 ease-in-out">Back to home</Link>
//                                 <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg border rounded border-gray-100 dark:border-gray-800 text-[#ff3811] font-bold hover:bg-sky-700 hover:text-white duration-1000 ease-in-out">Buy Now</a>

//                             </div>
//                         </div>
//                     </div>
//                 </section>

//             </div>
//         </div>
//     )
// }

// export default ServiceDetails