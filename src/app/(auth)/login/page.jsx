import Image from 'next/image';
import React from 'react';
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Page = () => {
    return (
        <div className='container mx-auto py-24 lg:px-24 '>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
                <div>
                    <Image src='/assets/images/login/login.svg' alt='Login image' height={540} width={540}/>
                </div>
                <div className='border-2 p-12 rounded-lg'>
                    <h1 className='font-bold text-2xl text-center'>Login</h1>
                    <form action="">
                    <label htmlFor='email'>Email</label> <br />
                    <input type="text" name='email' placeholder="Enter your email" className="input input-bordered w-full  mt-2" /><br /><br />
                    <label htmlFor='email'>Password</label> <br />
                    <input type="text" name='password' placeholder="Enter your password" className="input input-bordered w-full mt-2" /> <br /> <br />
                    <button className='btn btn-primary w-full text-white'>Login</button>
                    <h1 className='mt-4 text-center'>Or Sign with</h1>
                    <div className='flex gap-4 justify-center mt-4'>
                    <FaGoogle className='text-xl' />
                    <FaFacebook className='text-xl'/>
                    <FaLinkedinIn className='text-xl'/>
                  
                    </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Page;
