import { songCover } from "../../assets";

const NewSongCard = () => (
<div className="flex gap-2 items-center  w-1/3 p-1 rounded-lg  bg-[#344b6b]">
        {/* img */}
        <div className="">
            <img src={songCover} alt="" className="w-32 rounded-lg" />
        </div>
        {/* ifo */}
        <div className="flex flex-col gap-6 justify-between">
            {/* title */}
            <div className="flex flex-col">
                <div className="text-lg font-medium mt-1 w-[90%] inline-block truncate  cursor-pointer">Name of the song</div>
                <div className="text-[#8792a2] text-sm  line-clamp-2 cursor-pointer">Name of singers</div>
            </div>
            {/* subInfo */}
            <div className="flex justify-between items-center gap-8 ">
                {/* rank */}
                <div className="stroke   text-[2em]">#1</div>
                {/* date */}
                <div className="text-sm">21-02-2022</div>
            </div>
        </div>
    </div>
  );
  
  export default NewSongCard;
  