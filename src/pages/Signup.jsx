import React from 'react'

const Signup = () => {
    return (
        <div className=''>
            <form action="" className='max-w-[400px] w-full mx-auto bg-gray-900 p-8 rounded-lg'>
                <p className='text-4xl dark:text-white font-bold text-center '>Create New Account</p>
                <div className='flex my-8 text-gray-400 '>
                    <p> Already A Member? </p><a className='text-cyan-500 ml-2 cursor-pointer hover:text-cyan-300'> Log In</a>
                </div>

                <div className='flex flex-col text-gray-400 py-2'>
                    <label htmlFor="username">Username</label>
                    <input className='rounded-lg bg-gray-700 mt-2 p-2  focus:bg-gray-800 focus:outline-none' type="text" name="username" id="username" required />
                </div>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label htmlFor="email">Email</label>
                    <input className='rounded-lg bg-gray-700 mt-2 p-2  focus:bg-gray-800 focus:outline-none' type="email" name="email" id="email" required />
                </div>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label htmlFor="password">Password</label>
                    <input className='rounded-lg bg-gray-700 mt-2 p-2  focus:bg-gray-800 focus:outline-none' type="password" name="password" id="password" required />
                </div>

                <button className='w-full my-5 py-2 bg-teal-500 shadow-xl hover:shadow-teal-500/50 text-white rounded-lg'>Create Account</button>
            </form>
        </div>
    )
}

export default Signup