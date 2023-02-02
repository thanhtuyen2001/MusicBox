import React, { useState } from "react";

import {
  BiSearch,
  BiRightArrowAlt,
  BiLeftArrowAlt,
  BiBell,
  BiMoon,
  BiSun,
} from "react-icons/bi";
import { songCover } from "../assets";
import { Notification, Setting } from "./Popup";

const Searchbar = () => {
  const [isOpenNoti, setOpenNoti] = useState(false);
  const [isOpenUserSetting, setOpenUserSetting] = useState(true);

  const togglePopup = () => {
    console.log("open popup");
    setOpenNoti(!isOpenNoti);
  };
  const togglePopupSetting = () => {
    console.log("open popup");
    setOpenUserSetting(!isOpenUserSetting);
  };

  return (
    <div className="flex  justify-between items-center bg-[#1d375a] h-14 p-6 border-b border-[#172c48]">
      <div className="flex gap-1 items-center">
        {/* arrow */}
        <BiLeftArrowAlt className={styleIcon} />
        <BiRightArrowAlt className={styleIcon} />

        {/* search bar */}
        <div
          className="flex justify-center items-center px-4  mx-4 gap-1  rounded-full h-10 
                       bg-[#344b6b] "
        >
          <input
            type="text"
            placeholder="Search for song or artist "
            className="outline-transparent w-64 bg-transparent  focus:outline-none text-white "
          />
          <BiSearch className="text-2xl text-[#8792a2] " />
        </div>
      </div>

      <div className="flex justify-center items-center gap-2 relative">
        <BiSun className={styleIcon} />
        <BiMoon className={styleIcon} />
        <BiBell className={styleIcon} onClick={togglePopup} />
        {/* popup */}
        {isOpenNoti && (
          <div className="absolute w-80 right-16 top-16 z-10 ">
            <Notification />
          </div>
        )}
        {/* { isOpenUserSetting && <div className="absolute w-52 right-2 top-16 z-10 ">
          <Setting />
        </div>} */}
        <div className="group">
          <div className="text-center justify-center h-12 w-12 rounded-full bg-amber-400 overflow-hidden "
            onClick={togglePopupSetting} >
            <img src="https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YW5pbWV8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" className="w-screen" />
          </div>
          {/* popup */}
          <div className="hidden group-hover:block absolute w-52 right-0 p-2 z-10 ">
            <Setting />
          </div></div>
        {/* <div>username</div> */}
      </div>
    </div>
  );
};

export default Searchbar;

// style
const styleIcon = "text-3xl text-[#8792a2] hover:bg-[#344b6b] m-2 rounded-full";
