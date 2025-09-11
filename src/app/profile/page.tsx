"use client"
import React, { useState } from 'react'
import axios from 'axios';
import Link from 'next/link';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const page = () => {
  const router = useRouter();
  const [data, setData] = useState("nothing");
  const logout = async () => {
    try {
      await axios.get('/api/users/logout')
      toast.success("Logout Successfully!")
      router.push('/');
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  }

  const getUserDetails = async () => {
    const res = await axios.get('/api/users/me')
    console.log(res.data);
    setData(res.data.data._id);
  }

  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <h1>Profile</h1>
      <hr />
      <p>Profile Page</p> 
      {/* <h2 className='px-4 py-1 mt-3 rounded bg-green-500'>{data === 'nothing' ? "Nothing": <Link href={`/profile/${data}`}>{data}</Link>}</h2> */}
      <hr />
    <button onClick={logout} className='bg-red-500 hover:bg-red-600 mt-5 rounded font-bold py-2 px-4 cursor-pointer'>Logout</button>

    {/* <button onClick={getUserDetails} className='bg-blue-500 hover:bg-blue-600 mt-5 rounded font-bold py-2 px-4 cursor-pointer'>GetUser Details</button> */}
    </div>

  )
}

export default page
