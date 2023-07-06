import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useGetTopChartsQuery } from '../redux/services/ShazamCore';

import { SongCard, Loader, Error } from '../components';
import { genres } from '../assets/constants';

const Songs = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  const { data, isFetching, error } = useGetTopChartsQuery();
  console.log(data);

  if (isFetching) {
    return <Loader title="Loading songs..." />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <div className="p-8">
      {/* genres  */}
      <div className="flex items-center gap-4 px-4 py-2">
        <p className="text-2xl font-bold ">Genres </p>
        <select
          className="text-gray-700 block px-4 py-1 text-sm rounded-md"
          onChange={() => { }}
          value=""
        >
          {genres.map((genre) => (
            <option key={genre.value} value={genre.value}>
              {genre.title}
            </option>
          ))}
        </select>
      </div>

      {/* songs  */}
      <div className="flex flex-wrap sm:justify-start gap-6 px-8 ">
        {data?.map((song, i) => (
          <SongCard
            key={song.key}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            i={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Songs;
