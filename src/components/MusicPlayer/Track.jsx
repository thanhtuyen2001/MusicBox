import React from 'react';

const Track = ({ isPlaying, isActive, activeSong }) => (
  <div className="flex items-center justify-start">
    {/* spin coverart */}
    <div className={`${isPlaying && isActive ? 'animate-[spin_6s_linear_infinite]' : ''} hidden sm:block h-16 w-16 mr-4`}>
      <img src={activeSong?.images?.coverart} alt="cover art" className="rounded-full" />
    </div>

    <div className="md:w-[400px] sm:mr-8 ">
    {/* title + singer */}
      <p className="truncate text-white font-bold text-lg">
        {activeSong?.title ? activeSong?.title : 'No active Song'}
      </p>
      <p className="truncate text-gray-300">
        {activeSong?.subtitle ? activeSong?.subtitle : 'No active Song'}
      </p>
    </div>
  </div>
);

export default Track;
