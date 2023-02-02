import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useGetTopChartsQuery } from '../redux/services/ShazamCore';

import { playlists } from '../assets/constants';
import { songCover } from '../assets/index'
import { BsFillPlusSquareFill } from 'react-icons/bs';
import { FavouriteSongs, FavouriteAlbum, FavouritePodcast } from '../components';

const User = () => {
  const { data } = useGetTopChartsQuery();
  const favouriteArtist = data.slice(0, 3);

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  
  return (
    <div className='px-6 py-4'>
      {/* favorite artist */}
      <div>
        <p className="flex gap-8 mt-6 mb-4 font-AndikaTitle text-2xl " >YOUR FAVORITE ARTIST</p>

        <div className="flex flex-wrap gap-4 justify-start">
          {favouriteArtist?.map((artist, i) => (
            <div className='flex flex-col text-center'>
              <div key={i}>
                <img
                  src={
                    artist?.images?.background
                      ? artist?.images?.background
                      : songCover
                  }
                  alt="artist image"
                  className="w-40 rounded-full shadow-xl "
                />
              </div>
              <div className='w-40 overflow-hidden mt-2 hover:underline'>
                <Link
                  to="/top-artists">
                  {artist.subtitle
                  }
                </Link></div>
            </div>
          ))}
        </div>
      </div>

      {/* playlist */}
      <div>
        <div className={headerStyle}>YOUR FAVOURITE PLAYLIST </div>
        <div className='flex gap-6'>
          {playlists[0].playlist?.map((playlist, i) => (
            <div className='flex flex-col text-center'>
              <div key={i}>
                <img
                  src={playlist.src}
                  alt="artist playlist"
                  className="w-40 h-40 rounded-lg shadow-xl "
                />
              </div>
              <div className='w-40 overflow-hidden text-lg py-2'>{
                playlist.title
              }</div>
            </div>
          ))}
          <div className='text-center'>
            <div className='w-40 h-40 bg-white/50 rounded-lg border border-white flex items-center justify-center'>
              {< BsFillPlusSquareFill size="50px" className='text-xl' />}
            </div>
            <div className='text-lg py-2'>Create New Playlist</div>
          </div>
        </div>
      </div>

      {/* song, podcast, album, mv */}
      <div>
        <div className='flex gap-8 mt-12  p-2 relative'>
          <div className=' border-solid hover:text-teal-500 px-3 relative rounded-lg'>
            <p onClick={() => toggleTab(1)} className="cursor-pointer transition-all duration-150">SONGS</p>
            {(toggleState === 1) ? <hr className='absolute transition-all duration-300 rounded-lg border border-solid border-b-4 border-teal-400 w-full bottom-[-0.5rem] z-10 left-0' /> : <></>}
          </div>
          <div className=' border-solid  px-3 hover:text-teal-500 relative'  >
            <p onClick={() => toggleTab(2)}  className="cursor-pointer">PODCAST</p>
            {(toggleState === 2) ? <hr className='absolute border border-solid border-b-4 border-teal-400 w-full bottom-[-0.5rem] z-10 left-0' /> : <></>}
          </div>
          <div className=' border-solid hover:text-teal-500 px-3 relative'>
            <p onClick={() => toggleTab(3)} className="cursor-pointer">ALBUM</p>
            {(toggleState === 3) ? <hr className='absolute border border-solid border-b-4 border-teal-400 w-full bottom-[-0.5rem] z-10 left-0' /> : <></>}
          </div>
          <div className=' border-solid hover:text-teal-500 px-3 relative'>
            <p onClick={() => toggleTab(4)} className="cursor-pointer">MV</p>
            {(toggleState === 4) ? <hr className='absolute border border-solid border-b-4 border-teal-400 w-full bottom-[-0.5rem] z-10 left-0' /> : <></>}
          </div>
          <hr className='border border-white w-full absolute bottom-0 rounded-lg' />
        </div>
      </div>

      <div>
        {toggleState === 1 ? <FavouriteSongs /> : <></>}
        {toggleState === 2 ? <FavouritePodcast /> : <></>}
        {toggleState === 3 ? <FavouriteAlbum /> : <></>}

      </div>
    </div>
  );
};

export default User;

const headerStyle = "flex gap-8 mt-12 mb-6 font-AndikaTitle text-2xl ";