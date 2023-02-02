import React from 'react';
import { useEffect, useRef } from "react";

import { BsCloudHaze2Fill, BsThreeDotsVertical, BsFillClockFill } from "react-icons/bs";
import { podcasts } from '../assets/constants';
import { LoveBtn } from '../components';

const Podcast = () => {
    

    return (
        <div   className='pageTheme p-8 animate-slideup'>
            {/* title */}
            <div>
                <p className='text-5xl'>Play all your favofite <span className='text-pink-600'>Podcast</span>  <BsCloudHaze2Fill /></p>
                <p className='my-2 text-xl text-slate-500'>Listen Now, Enjoy Every Day</p>
                <p className='text-2xl font-bold mb-4 mt-10'>Popular Podcast</p>
            </div>
            {/* popular podcast */}
            <div className='flex gap-4 justify-between mb-2 '>
                {
                    podcasts.slice(0,4).map((item) => (
                        <div className='relative bg-transparent items-center max-w-[250px] overflow-hidden '>
                            <div className=' rounded-t-[125px] rounded-b-xl overflow-hidden shadow-inner shadow-blue-400 '>
                                <img src={item.img} className="opacity-95 " alt="podcast image" />
                            </div>
                            <div className={`absolute bottom-0 right-[5%] w-[90%] p-2 mb-4 bg-white opacity-70 rounded-xl`}>
                                <p className='text-black '>{item.topic}</p>
                                <p className='font-bold text-lg text-slate-900 shadow-xl'>{item.title}</p>
                                <div className='flex justify-between text-slate-700 '>
                                    <p>{item.speaker}</p>
                                    <p className='flex items-center gap-1'><BsFillClockFill/> {item.time}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            {/* line */}
            <div className='w-full rounded-full p-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 '></div>
            
            {/* list podcasts */}
            <div>
                <div className='flex justify-between  font-bold ' >
                    <div className='text-2xl mb-4 mt-10 '>Trending Podcast</div>
                </div>

                <div >
                    {
                        podcasts.map((item, i) => (
                            <div className='group flex items-center justify-between mb-8 text-slate-500 text-xl hover:bg-slate-300 p-2 hover:pl-8 transition-all rounded-lg' >
                                <div className='flex items-center gap-4 font-bold '>
                                    <div className='text-4xl'>

                                    {i + 1}.
                                    </div>
                                    <div className='max-w-[80px] max-h-[80px] rounded-full overflow-hidden'>
                                        <img src={item.img} alt="" />
                                    </div>
                                    <div>
                                        <p className='group-hover:text-slate-700 text-white dark:text-black'>{item.title}</p>
                                        <p>{item.speaker}</p>
                                    </div>
                                </div>
                                <div>{item.topic}</div>
                                <div>{item.time}</div>
                                <div className='flex gap-2'>

                                <LoveBtn />
                                < BsThreeDotsVertical />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Podcast