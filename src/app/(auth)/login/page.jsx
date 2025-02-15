'use client'
import { redirect } from "next/dist/server/api-utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import {signIn} from 'next-auth/react'
import { useRouter } from "next/navigation";


const Page = () => {
  const router = useRouter()
    const handleLogin = async(event)=>{
      event.preventDefault()
      const email = event.target.email.value
      const password = event.target.password.value
      const res = await signIn('credentials', {
        email, 
        password,
        redirect: false
      })
      if(res.status === 200){
        router.push('/')
      }
    }
  return (
    <div className="container mx-auto py-24 lg:px-24 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <Image src="/assets/images/login/login.svg" alt="Login image" height={540} width={540} />
        </div>
        <div className="border-2 p-12 rounded-lg">
          <h1 className="font-bold text-2xl text-center">Login</h1>
          <form onSubmit={handleLogin} action="">
            <label htmlFor="email">Email</label> <br />
            <input type="text" name="email" placeholder="Enter your email" required className="input input-bordered w-full  mt-2" />
            <br />
            <br />
            <label htmlFor="email">Password</label> <br />
            <input
              type="text"
              name="password"
              required
              placeholder="Enter your password"
              className="input input-bordered w-full mt-2"
            />{" "}
            <br /> <br />
            <button type="submit" className="btn btn-primary w-full text-white">Login</button>
            <h1 className="mt-4 text-center">Or Sign with</h1>
            <div className="flex gap-4 justify-center mt-4">
              <button>
                <FaGoogle className="text-xl" />
              </button>
              <button>
                <FaFacebook className="text-xl" />
              </button>
              <button>
                <FaGithub className="text-xl" />
              </button>
              <button>
                <FaLinkedinIn className="text-xl" />
              </button>
            </div>
            <p className="text-center mt-4 text-sm">
              Don't have an account?
              <Link href={"/signup"} className="text-primary font-bold">
                {" "}
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
