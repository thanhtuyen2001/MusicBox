import React , { useState, useEffect }from "react";
import { useDispatch, useSelector } from "react-redux";

import { useGetTopChartsQuery } from "../redux/services/ShazamCore";

import {
  BsCloudHaze2Fill,
  BsThreeDotsVertical,
  BsFillClockFill,
  BsFillPlayCircleFill
} from "react-icons/bs";
import { Error, Loader, MusicPlayer, SongCard, TopPlay } from "../components";
import { LoveBtn } from "../components";
import { songCover } from "../assets";


const TopCharts = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  const { data, isFetching, error } = useGetTopChartsQuery();
  const [ showMore, setShowMore]  = useState(false);
  // const currentData = data.slice(0, 10);

  if (isFetching) {
    return <Loader title="Loading songs..." />;
  }
  if (error) {
    return <Error />;
  }
  

  return (
    <div className="p-12">
      <div className="flex gap-2 items-center font-AndikaTitle text-4xl ">#TopChart <BsFillPlayCircleFill className="text-pink-400"/></div>
      {/* list songs */}
      <div>
        {data.map((song, i) => (
          <div key={i} className="flex items-center justify-between  gap-4 hover:bg-[#344b6b] m-4 p-2 rounded-md">
            <div className="flex justify-center items-center gap-2 ">
            <div className={`font-Roboto stroke text-[3em]  ${i===0 ? 'strokeTop1' : i === 1 ? 'strokeTop2' : i === 2 ? 'strokeTop3' : ''} `} 
              > {i + 1} - </div>
              <div className="max-w-[80px] max-h-[80px] rounded-full overflow-hidden">
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

            <div className="flex gap-2 items-center">
              <LoveBtn />
                <div>04:12</div>
              <BsThreeDotsVertical />
            </div>
          </div>
        ))}
      </div>
      {/* see more button */}
      <div className=" text-center">
        <button className="border-2 py-2 px-4 rounded-full hover:bg-[#344b6b]" >{ showMore ?   'Show Less' : 'Show More'}</button>
      </div>
    </div>
  );
};

export default TopCharts;