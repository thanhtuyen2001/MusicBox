import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from "swiper";

import PlayPause from "./PlayPause";
import { songCover } from "../assets";
import { playPause, setActiveSong } from "../redux/features/playerSlice";
import { BsMusicNoteBeamed } from "react-icons/bs";
import { useGetTopChartsQuery } from "../redux/services/ShazamCore";

import 'swiper/css';
import 'swiper/css/free-mode';

import { RiDeviceRecoverFill } from "react-icons/ri";


const TopChartCard = ({ song, i, isPlaying, activeSong, handlePauseClick, handlePlayClick }) => (
  <div className="flex flex-row items-center gap-2 my-1 p-1 hover:bg-slate-400 rounded-lg hover:px-4 transition-all ">
    <BsMusicNoteBeamed/>
    <img className="w-12 h-12 rounded-xl" src={song?.images?.coverart ? song?.images?.coverart : songCover} alt={song?.title} />

    <div>
      <Link to={`songs/${song.key}`}>
        {console.log("song:<", song)}
        <p >{song?.title}</p>
      </Link>
    </div>

    <PlayPause
      isPlaying={isPlaying}
      activeSong={activeSong}
      song={song}
      handlePause={handlePauseClick}
      handlePlay={handlePlayClick}
      customeStyle="text-slate-500"
    />
  </div>
);

const TopPlay = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector(state => state.player);

  const { data } = useGetTopChartsQuery();

  const divRef = useRef(null); // use this to croll to top of the page

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: 'smooth' });
  })

  const topPlays = data?.slice(0, 5);
  console.log('topplay', topPlays);


  const handlePauseClick = () => {
    dispatch(playPause(false));
  }

  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  }


  return (
    <div ref={divRef} className="p-4">
      {/* top chart */}
      <div className="mb-6">
        <div  className="mb-3">
          <p className="text-white dark:text-black text-2xl">TOP CHART ✨</p>
          <Link to="/top-charts" className="text-[#8792a2] mb-4">
            see more
          </Link>
        </div>
        {/* song */}
        <div className="text-white dark:text-black">
          {
            topPlays?.map((song, i) => (
              <TopChartCard
                song={song}
                i={i}
                key={song.key}
                isPlaying={isPlaying}
                activeSong={activeSong}
                handlePauseClick={handlePauseClick}
                handlePlayClick={() => handlePlayClick(song, i)}
                
              />
            ))
          }
        </div>
      </div>


      {/* top ARTISTS */}
      <div>
        <div className="mb-2">
          <p className={titleStyle}>TOP ARTISTS 🎵</p>
          <Link to="/top-artists" className={sndTitle}>
            see more
          </Link>
        </div>
        {/* artists */}
        <Swiper
          className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
                      rounded-l-full "
          slidesPerView="3"
          spaceBetween={3}
        >
          {topPlays?.map((song, i) => (
            <SwiperSlide
              key={song?.key}
              className='m-1 rounded-full shadow-lg shadow-indigo-500/50'
            >
              <Link   to={song.artists ? `/artists/${song?.artists[0]?.adamid}` : '/top-artists'} >
                <img src={song?.images?.background ?  song?.images?.background : songCover } alt="name" 
                      className="w-24 rounded-full shadow-3xl" />
                {
                  console.log('link artits, ', `/artists/${song?.artists?.adamid}`)
                }
              </Link>
            </SwiperSlide>
          ))}
         
        </Swiper>
      </div>
    </div>
  
  )
};

export default TopPlay; 

const titleStyle = "text-white dark:text-black text-2xl";
const sndTitle = "text-[#8792a2] ";