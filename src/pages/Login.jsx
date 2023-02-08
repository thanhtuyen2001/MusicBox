import React from 'react'
import { Link } from 'react-router-dom'

import {  logo, headphoneRemovebg } from '../assets';
const Login = () => {
  return (
    <div className='gird grid-cols-1 sm:grid-cols-2 h-screen w-full p-4'>
            {/* form */}
        <div className=' flex flex-col justify-center'>
            <form action="" className='max-w-[400px] w-full mx-auto bg-gray-900 p-8 rounded-lg' autoComplete='off'>
         {/* logo */}
         <div className='mx-auto w-14 mb-4'>
                <img src={headphoneRemovebg} alt="logo"  />
            </div>
                <p className='text-4xl dark:text-white font-bold text-center '>SIGN IN</p>

                <div className='flex flex-col text-gray-400 py-2'>
                    <label htmlFor="username">Username</label>
                    <input className='rounded-lg bg-gray-700 mt-2 p-2  focus:bg-gray-800 focus:outline-none' type="text" name="username" id="username" required/>
                </div>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label htmlFor="password">Password</label>
                    <input className='rounded-lg bg-gray-700 mt-2 p-2  focus:bg-gray-800 focus:outline-none'type="password" name="password" id="password" required/>
                </div>
                <div className='flex justify-between text-gray-400 py-2'>
                    <p className='flex items-center '> <input type="checkbox" /> Remember Me</p>
                    <p><Link to="/signup">Create An Account</Link></p>
                </div>
                <button className='w-full my-5 py-2 bg-teal-500 shadow-xl hover:shadow-teal-500/50 text-white rounded-lg '><Link to="/discover" >Sign In</Link></button>
            </form>
            
        </div>
    </div>
  )
}

export default Login