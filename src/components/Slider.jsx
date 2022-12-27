import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'
import  { Pagination, Autoplay, Navigation } from 'swiper'

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { useGetTopChartsQuery } from '../redux/services/ShazamCore';

import { Loader } from "../components";

const imgSrc = [
    "https://images.unsplash.com/photo-1513297887119-d46091b24bfa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hyaXN0bWFzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1513297887119-d46091b24bfa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hyaXN0bWFzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1513297887119-d46091b24bfa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hyaXN0bWFzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
]


const Slider = () => {
    const { data, isFetching } = useGetTopChartsQuery();
    if(isFetching){
        return <Loader title="Loading songs..." />;
    }

    const topPlay = data?.slice(5, 9);
    console.log('toppaly', topPlay)
   

    return (
        <div className=' hidden max-w-[550px]  md:block items-center self-center'>
            <Swiper className="mySwiper" spaceBetween={1}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                onSlideChange={() => console.log('slide change')}
                modules={[Autoplay, Pagination]}>

                {
                    topPlay.map((song, i) =>
                        <SwiperSlide className='rounded-xl bg-cyan-900  overflow-hidden' key={i} >
                            <img src={song?.images?.coverart} alt={"images slide" + `${i + 1}`}
                                className="rounded-5xl opacity-50 mx-auto " />
                            <div className='absolute top-8 left-4 text-gray-50 shadow-2xl'>
                                <p className='text-3xl text-slate-300'>{song.title}</p>
                                <p className='text-2xl'>{song.subtitle}</p>
                                <div>
                                    <button className='text-lg bg-cyan-800 p-2 mt-8 rounded-full'>Listen Now</button>
                                </div>
                            </div>
                        </SwiperSlide>)
                }
                <div className='hidden md:block bg-[#344b6bba] shadow-blue-900  mx-auto  md:min-h-[18px] w-[80%] rounded-b-xl'></div>
                <div className='hidden md:block bg-[#344b6b] md:min-h-[15px] w-[70%] mx-auto rounded-b-xl'></div>
            </Swiper>
        </div>
    )
}

export default Slider