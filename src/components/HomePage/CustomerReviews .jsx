import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CustomerReviews = () => {
  return (
    <div
      className="relative rounded-sm"
      style={{
        backgroundImage: 'url(/ratting.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '500px',
        overflow: 'hidden',
      }}
    >
      {/* Heading positioned on top of the background image */}
      <h1 className="absolute top-10 left-1/2 transform -translate-x-1/2 text-3xl text-center font-bold hidden lg:block">
        CUSTOMER REVIEWS
      </h1>

      {/* Container for Cards, centered */}
      <div className="absolute top-[15%] lg:top-1/4 left-1/2 transform -translate-x-1/2 flex flex-col lg:flex-row gap-6 w-4/5 lg:w-2/3 space-y-6 lg:space-y-0 max-w-full">

        {/* First Card */}
        <div className="bg-transparent border-[0.1px] border-orange-950 p-6 rounded-lg shadow-xl w-full lg:w-1/2 h-auto lg:h-80 flex flex-col items-center justify-center">
          <h2 className="text-xl mb-2 text-center">Excellent electrician. Installed an inverter for me in under 2 days that works perfectly and subsequently did other perfect electrical work for me. Highly recommended</h2>
          <h4>Ratting</h4>
          <div className="w-24 h-24 rounded-full overflow-hidden">
            <Image className="object-cover w-full h-full" src="/ratting_p1.jpg" alt="ratting" width={100} height={100} />
          </div>
          <p className="text-gray-700 text-center">Name</p>
        </div>

        {/* Second Card */}
        <div className="bg-transparent border-[0.1px] border-orange-950 p-6 rounded-lg shadow-xl w-full lg:w-1/2 h-auto lg:h-80 flex flex-col items-center justify-center">
          <h2 className="text-xl mb-2 text-center">Excellent electrician. Installed an inverter for me in under 2 days that works perfectly and subsequently did other perfect electrical work for me. Highly recommended</h2>
          <h4>Ratting</h4>
          <div className="w-24 h-24 rounded-full overflow-hidden">
            <Image className="object-cover w-full h-full" src="/ratting_p1.jpg" alt="ratting" width={100} height={100} />
          </div>
          <p className="text-gray-700 text-center">Name</p>
        </div>
      </div>
      <div>
        <Link href={'/'} className='btn btn-primary  text-white mt-4'>Get Free Quote</Link>
      </div>
    </div>
  );
}

export default CustomerReviews;
