import { songCover } from "../../assets";


const NewSongCard = ( {item} ) =>{
    console.log('item receive:', item);
    return (
    
  <div className="flex gap-2 items-center  w-1/3 p-1 rounded-lg  bg-[#344b6b] dark:bg-slate-200">
    {/* img */}
    <div className="">
      <img src={item.src ? item.src : songCover} alt="" className="w-32 rounded-lg" />
    </div>
    {/* ifo */}
    <div className="flex flex-col gap-6 justify-between">
      {/* title */}
      <div className="flex flex-col">
        <div className="text-lg font-medium mt-1 w-[90%] inline-block truncate  cursor-pointer">
         {item.name}
        </div>
        <div className="text-[#8792a2] text-sm  line-clamp-2 cursor-pointer">
          {item.singer}
        </div>
      </div>
      {/* subInfo */}
      <div className="flex justify-between items-center gap-8 ">
        {/* rank */}
        <div className="stroke   text-[2em]">#{item.rank}</div>
        {/* date */}
        <div className="text-sm">{item.time}</div>
      </div>
    </div>
  </div>
)};

export default NewSongCard;
