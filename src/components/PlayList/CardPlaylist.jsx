import {BrowserRouter as Router, Link} from 'react-router-dom';

import { BsFillPlayCircleFill } from "react-icons/bs";
import { songCover } from "../../assets";

const CardPlaylist = ({ item }) => (
  <div className=" p-4 w-52 rounded-md">
    {/* img */}
    <div className="rounded-md overflow-hidden group relative ">
      <img
        src={item.src ? item.src : songCover}
        alt="playlist"
        className="group-hover:scale-125 h-44 w-44 group-hover:opacity-70 transition-all"
      />
      <BsFillPlayCircleFill className="hidden group-hover:inline-block transition-all absolute top-2/4 left-2/4 translate-x-[-50%] shadow-lg shadow-cyan-200 rounded-full  translate-y-[-50%] self-center text-4xl  " />
    </div>
    {/* title */}
    <div>
      <div
        className="text-lg font-medium mt-1 w-[90%] inline-block truncate  cursor-pointer hover:underline"
        title={item.title}
      >
         <Link to="/songs">{item.title}</Link>
        
      </div>
    </div>
    {/* desc */}
    <div>
      <div
        className="text-[#8792a2] text-sm  line-clamp-2 cursor-pointer"
        title={item.desc}
      >
        {item.desc}
      </div>
    </div>
  </div>
);

export default CardPlaylist;
