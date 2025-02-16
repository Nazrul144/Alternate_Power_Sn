import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Page = () => {
    return (
        <div className='container mx-auto'>
            <h1>Details page</h1>
            {/*Banner Section*/}
            <div className='bg-red-400 rounded-lg h-60'>
                <h1 className='pt-24 px-24 font-bold text-white text-2xl lg:text-4xl'>Service Details</h1>
                <div className='flex justify-center mt-20  bg-[#FF3811] rounded-t-full font-bold text-xl text-white w-56 mx-auto '>
                <Link href={"#"}>Home/</Link>
                <Link href={"#"}>Service Details</Link>
                </div>
            </div>
            {/**Service Section */}
            <div className='flex flex-col md:flex-row justify-between border-2 border-e-green-500'>
                <div className='w-[1300px] border-2 border-red-500'>
                    <Image className='rounded-lg' src='/assets/images/banner/4.jpg' alt='Image' width={1200} height={800}/>
                </div>
                <div className='w-[500px] border-2 border-orange-500'>
                    <h1 className='font-bold text-xl ml-6'>Services</h1>
                    <div className='flex flex-col gap-4 px-6'>
                        <Link className='bg-gray-200 w-full px-4 py-2 rounded-lg' href={"#"}>Full Car Repair </Link>
                        <Link className='bg-gray-200 w-full px-4 py-2 rounded-lg' href={"#"}>Engine Repair</Link>
                        <Link className='bg-gray-200 w-full px-4 py-2 rounded-lg' href={"#"}>Automatic Services</Link>
                        <Link className='bg-gray-200 w-full px-4 py-2 rounded-lg' href={"#"}>Engine Oil Change</Link>
                        <Link className='bg-gray-200 w-full px-4 py-2 rounded-lg' href={"#"}>Battery Charge</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;
