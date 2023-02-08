import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";

import { songCover } from "../assets";

const SongCard = ({ song, i, activeSong, isPlaying, data }) => {
  const dispatch = useDispatch();

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };
  console.log(song);

  return (
    <div className="song-card  group">
      <div className="overflow-hidden rounded-2xl relative">
        <img
          alt="song_img"
          src={song.images?.coverart ? song.images?.coverart : songCover}
          className=" group-hover:scale-[170%] transition-all duration-200 ease-in"
        />

        <div
          className={`absolute inset-0 justify-center items-center bg-opacity-50 bg-black z-[5] w-full 
        group-hover:flex 
      ${
        activeSong?.title === song.title ? "flex bg-back opacity-70" : "hidden"
      }`}
        >
          <PlayPause
            className="flex "
            isPlaying={isPlaying}
            activeSong={activeSong}
            song={song}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
            customeStyle="text-white text-5xl "
          />
        </div>
      </div>

      <div className="m-1 ">
        <h1>
          <Link to={`/songs/${song?.key}`}>{song.title}</Link>
        </h1>
        <h2>
          <Link
            to={
              song.artists
                ? `/artists/${song?.artists[0]?.adamid}`
                : "/top-artists"
            }
          >
            {song.subtitle}
          </Link>
        </h2>
      </div>
    </div>
  );
};

export default SongCard;
