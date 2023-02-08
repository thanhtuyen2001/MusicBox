import React, { useState, useEffect } from 'react';

import CardPlaylist from './CardPlaylist';

const Playlist = ({ playlist }) => (
  <div className="w-full mt-4">
    {/* title */}
    <div className="flex justify-between items-center ">
      <div className="text-2xl font-bold">{playlist.theme}</div>
      <div className="text-[#8792a2] text-lg cursor-pointer hover:underline">
        show all
      </div>
    </div>
    {/* card */}
    <div className="flex justify-between gap-2 flex-wrap overflow-hidden">
      {playlist.playlist.map((item) => (
        <CardPlaylist item={item} />
      ))}
    </div>
  </div>
);

export default Playlist;
