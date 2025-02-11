import Image from 'next/image';
import React from 'react';

const Page = () => {
    return (
        <div className='container mx-auto'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
                <div>
                    <Image src='/assets/images/login/login.svg'/>
                </div>
                <div>
                    Form
                </div>
            </div>
        </div>
    );
}

export default Page;
