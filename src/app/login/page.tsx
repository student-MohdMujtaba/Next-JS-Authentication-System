"use client";
import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import axios from "axios";
import toast from 'react-hot-toast';


const page = () => {
  const router = useRouter();
  const [user, setUser] = React.useState({
      email:"",
      password:"",
    })
  
    const onLogin = async () => {
      try {
        const response = await axios.post("/api/users/login", user);
        console.log("Login success", response.data);
        toast.success("Login Success");
        router.push("/profile");
      } catch (error: any) {
        console.log("Login failed User not found", error.message);
        toast.error("User Not Found Sign Up Again!");
      }
    }

  return (
     <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      {/* <h1 className='text-white text-2xl text-center'>Login</h1>
      <hr />

      <label htmlFor='email' className='mt-5'>email</label>
      <input className='p-2 border-gray-200 mb-4 bg-gray-500 rounded-lg text-black' type="email" id='email' value={user.email} onChange={(e) => setUser({...user, email: e.target.value})} placeholder='email' required />

      <label htmlFor='password' className='mt-5'>password</label>
      <input className='p-2 border-gray-200 mb-4 bg-gray-500 rounded-lg text-black' type="password" id='password' value={user.password} onChange={(e) => setUser({...user, password: e.target.value})} placeholder='password' required />

      <button onClick={onLogin} type='submit' className='px-6 py-2 mt-2 border border-gray-200 rounded-lg mb-4 focus:outline-none focus:border-gray-600 cursor-pointer'>Login</button>
      <Link href="/signup" className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]">Sign Up</Link> */}

      <div className="bg-white p-6 rounded-2xl shadow-md w-80">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

        <input
          type="email"
          placeholder="Email"
          required
          className="w-full px-3 py-2 mb-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          id='email' value={user.email} onChange={(e) => setUser({...user, email: e.target.value})}
        />

        <input
          type="password"
          placeholder="Password"
          required
          className="w-full px-3 py-2 mb-4 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          id='password' value={user.password} onChange={(e) => setUser({...user, password: e.target.value})}
        />

        <button onClick={onLogin}  type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition cursor-pointer">
          Login
        </button>

        <div className="flex mt-4">
          <p>Don't have an account.</p>
          <Link
            href="/signup"
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background font-medium text-sm sm:w-auto ml-2"
          >
            SignUp
          </Link>
        </div>
      </div>

    </div>
  )
}

export default page
