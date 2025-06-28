import SocialSignin from '@/components/shared/SocialSignin'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Page = () => {
  return (
    <div>
      <div className="container mx-auto py-24 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Image src="/assets/images/login/login.svg" alt="Login image" height={540} width={540} />
          </div>
          <div className="border-2 p-12 rounded-lg">
            <h1 className="font-bold text-2xl text-center">Sign Up</h1>
            <form >
              <label htmlFor="email">Username</label> <br />
              <input
                type="text"
                name="username"
                placeholder="Type your username"
                required
                className="input input-bordered w-full mt-2"
              />
              <br />
              <br />
              <label htmlFor="email">Email</label> <br />
              <input
                type="text"
                name="email"
                placeholder="Enter your email"
                required
                className="input input-bordered w-full mt-2"
              />
              <br />
              <br />
              <label htmlFor="password">Password</label> <br />
              <input
                type="password"
                name="password"
                required
                placeholder="Enter your password"
                className="input input-bordered w-full mt-2"
              />
              <br />
              <br />
              <button type="submit" className="btn btn-primary w-full text-white">
                Login
              </button>
              <h1 className="mt-4 text-center">Or Sign with</h1>
              <SocialSignin />
              <p className="text-center mt-4 text-sm">
                Already have an account?
                <Link href={"/login"} className="text-primary font-bold text-sky-500">
                  {" "}
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page