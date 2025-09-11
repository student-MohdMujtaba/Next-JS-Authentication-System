"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

const page = () => {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(false);

  const onSignup = async () => {
    try {
      const response = await axios.post("/api/users/signup", user);
      console.log("Signup success", response.data);
      toast.success("Signup successful!");
      router.push("/login");
    } catch (error: any) {
      toast.error(error.message);
      console.log("signup failed", error.message);
    }
  };

  // useEffect(()=>{
  //   if (user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
  //     setButtonDisabled(false);
  //   } else {
  //     setButtonDisabled(true);
  //   }
  // }, [user]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      {/* <h1 className='text-white text-2xl text-center'>SignUp</h1>
      <hr />
      <label htmlFor='username' className='mt-5'>username</label>
      <input className='p-2 border-gray-200 mb-4 bg-gray-500 rounded-lg text-black' type="text" id='username' value={user.username} onChange={(e) => setUser({...user, username: e.target.value})} placeholder='username' />

      <label htmlFor='email' className='mt-5'>email</label>
      <input className='p-2 border-gray-200 mb-4 bg-gray-500 rounded-lg text-black' type="email" id='email' value={user.email} onChange={(e) => setUser({...user, email: e.target.value})} placeholder='email' />

      <label htmlFor='password' className='mt-5'>password</label>
      <input className='p-2 border-gray-200 mb-4 bg-gray-500 rounded-lg text-black' type="password" id='password' value={user.password} onChange={(e) => setUser({...user, password: e.target.value})} placeholder='password' />

      <button onClick={onSignup} className='px-4 py-2 border border-gray-200 rounded-lg mb-4 focus:outline-none focus:border-gray-600 cursor-pointer'>SignUp</button>
      <Link href="/login" className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-10 sm:w-auto">Login Page</Link> */}

      <div className="bg-white p-6 rounded-2xl shadow-md w-80">
        <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>

        <input
          type="text"
          placeholder="Name"
          required
          className="w-full px-3 py-2 mb-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          id='username' value={user.username} onChange={(e) => setUser({...user, username: e.target.value})}
        />

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

        <button onClick={onSignup}
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition cursor-pointer">
          Sign Up
        </button>

        <div className="flex mt-4">
          <p>Already have an account.</p>
          <Link
            href="/login"
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background font-medium text-sm sm:w-auto ml-2"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
