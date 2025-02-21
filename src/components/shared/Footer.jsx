import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaGoogle, FaInstagramSquare, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer bg-purple-950 text-white p-10">
        <aside>
          <Link href="/">
            <Image className="hidden lg:block" src="/Group.svg" alt="Logo" width={100} height={60} />
          </Link>
          <p>
            Edwin Diaz is a software and web <br />
            technologies engineer, a life coach <br />
            trainer who is also a serial.
          </p>
          {/*Social Link*/}
          <div className="flex space-x-4 mt-4">
            <Link href={"https://www.google.com"}>
              <FaGoogle className="text-xl text-blue-500" />
            </Link>
            <Link href={"https://www.facebook.com/profile.php?id=100007196595674"}>
              <FaFacebook className="text-xl text-sky-400" />
            </Link>
            <Link href={"https://x.com/Nazrul211002144"}>
              <FaTwitter className="text-xl" />
            </Link>
            <Link href={"https://www.instagram.com/mdnazrulmarine/?igsh=MmVlYXcwNXl0enI5#"}>
              <FaInstagramSquare className="text-xl text-red-600" />
            </Link>
            <Link href={"https://www.linkedin.com/in/nazrul-islam-a6080730b"}>
              <FaLinkedin className="text-xl text-sky-500" />
            </Link>
          </div>
        </aside>
        <nav>
          <h6 className="footer-title text-xl font-bold">About</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title text-xl font-bold">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title text-xl font-bold">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
