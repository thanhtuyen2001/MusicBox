import React from 'react'

import { useGetTopChartsQuery } from '../../redux/services/ShazamCore';

import { BsMusicNote, BsThreeDotsVertical, BsFillHeartFill } from 'react-icons/bs';
import { songCover } from '../../assets';


const Songs = () => {
    const { data } = useGetTopChartsQuery();

    const songsData = data.slice(0,10);
    // console.log({songsData});

  return (
    <div>
       {songsData.map((song, i) => (
          <div key={i} className="flex items-center justify-between  gap-4 hover:bg-[#344b6b] m-4 p-2 rounded-md">
            <div className="flex justify-center items-center gap-2 ">
             <div>
                < BsMusicNote size="20px"/>
             </div>
              <div className="max-w-[50px] max-h-[50px] rounded-lg overflow-hidden ml-2">
                <img
                  src={
                    song?.images?.coverart ? song?.images?.coverart : songCover
                  }
                  alt=""
                />
              </div>

              <div className="ml-4">
                <p className="text-white text-xl font-semibold ">{song.title}</p>
                <div className="text-[#8792a2]">{song.subtitle}</div>
              </div>
            </div>

            <div className="group flex gap-4 items-center">
              <BsFillHeartFill />
              <div>04:12</div>
              <BsThreeDotsVertical />
            </div>
          </div>
        ))}
    </div>
  )
}

export default Songs