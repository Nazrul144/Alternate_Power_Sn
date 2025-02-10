"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoSearchOutline } from "react-icons/io5";
import { SlHandbag } from "react-icons/sl";
const Navbar = () => {
  const pathName = usePathname();
  const links = [
    {
      title: "Home",
      path: "/home",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Services",
      path: "/services",
    },
    {
      title: "Blog",
      path: "/blog",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];
  return (
    <div className="navbar bg-gray-200">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {links?.map((link) => (
              <Link key={link.path} href={link.path}>
                {link.title}
              </Link>
            ))}
          </ul>
        </div>
        <Image src="/Group.svg" alt="Logo" width={100} height={100} />
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1 flex gap-4 text-xl font-bold">
          {links?.map((link) => (
            <Link className={`${pathName == link.path ? "text-sky-400" : ""}`} key={link.path} href={link.path}>
              {link.title}
            </Link>
          ))}
        </ul>
      </div>
      <div className="navbar-end space-x-6">
        <SlHandbag className="text-xl" />
        <IoSearchOutline className="text-xl" />
        <a className="btn text-primary border border-primary rounded-lg">Appointment</a>
      </div>
    </div>
  );
};

export default Navbar;
