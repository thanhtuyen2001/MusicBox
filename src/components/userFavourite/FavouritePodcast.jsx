import React from 'react'
import { podcasts } from '../../assets/constants'
import { BsPlay, BsThreeDotsVertical, BsFillHeartFill } from 'react-icons/bs';
import { songCover } from '../../assets';

const FavouritePodcast = () => {
    const favouraitePodcasts = podcasts.slice(0,5);

  return (
    <div>
        {favouraitePodcasts.map((podcast, i) => (
          <div key={i} className="flex items-center justify-between  gap-4 hover:bg-[#344b6b] dark:hover:bg-slate-300  m-4 p-2 rounded-md">
            <div className="flex justify-center items-center gap-2 ">
              <div><BsPlay size="25px"/></div>
              <div className="max-w-[70px] max-h-[70px] rounded-lg overflow-hidden ml-2">
                <img
                  src={
                    podcast?.img ?  podcast.img : songCover
                  }
                  alt=""
                />
              </div>

              <div className="ml-4">
                <p className="text-white dark:text-black text-xl font-semibold ">{podcast.title + " | " + podcast.topic }</p>
                <div className="text-[#8792a2]">{podcast.description}</div>
              </div>
            </div>

            <div className="group flex gap-4 items-center">
              <BsFillHeartFill />
              <BsThreeDotsVertical />
            </div>
          </div>
        ))}
    </div>
  )
}

export default FavouritePodcast;