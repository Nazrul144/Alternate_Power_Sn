'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {
    const pathName = usePathname();
    console.log(pathName);
    const links = [
        {
            title: 'Home',
            path: '/home'
        },
        {
            title: 'About',
            path: '/about'
        },
        {
            title: 'Services',
            path: '/services'
        },
        {
            title: 'Blog',
            path: '/blog'
        },
        {
            title: 'Contact',
            path: '/contact'
        },
    ]
    return (
        <div className='flex justify-between space-x-4 bg-purple-300 py-4 px-12'>
            <div>
                <h1>Car doctor</h1>
            </div>
            <div  className='flex justify-between space-x-4 text-xl font-bold'>
                {
                    links?.map((link)=> <Link key={link.path} href={link.path}>{link.title}</Link>)
                }
            </div>
            <div className='flex justify-between space-x-4'>
                <h1>Love</h1>
                <h1>Love</h1>
                <span>Appointment</span>
            </div>
        </div>
    );
}

export default Navbar;
