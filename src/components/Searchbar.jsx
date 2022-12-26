import {
  BiSearch,
  BiRightArrowAlt,
  BiLeftArrowAlt,
  BiBell,
  BiMoon,
  BiSun,
} from "react-icons/bi";
import { songCover } from "../assets";


const Searchbar = () => (
  <div className="flex  justify-between items-center bg-[#1d375a] h-14 p-6 border-b border-[#172c48]">
    <div className="flex gap-1 items-center">
      {/* arrow */}
      <BiLeftArrowAlt className={styleIcon}   />
      <BiRightArrowAlt className={styleIcon}  />


      {/* search bar */}
      <div className="flex justify-center items-center px-4  mx-4 gap-1  rounded-full h-10 
                       bg-[#344b6b] ">
        <input
          type="text"
          placeholder="Search for song or artist "
          className="outline-transparent w-64 bg-transparent  focus:outline-none text-white "
        />
        <BiSearch className="text-2xl text-[#8792a2] "/>
      </div>
    </div>

    <div className="flex justify-center items-center gap-2">
      <BiSun className={styleIcon} />
      <BiMoon className={styleIcon} />
      <BiBell className={styleIcon} />
      <div className="text-center justify-center h-12 w-12 rounded-full bg-amber-400 overflow-hidden ">
        <img src={songCover} alt="" className="w-screen"/>
      </div>
      {/* <div>username</div> */}
    </div>
  </div>
);

export default Searchbar;

// style 
const styleIcon = "text-3xl text-[#8792a2] hover:bg-[#344b6b] m-2 rounded-full";
