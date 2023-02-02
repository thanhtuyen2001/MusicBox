import { Link } from "react-router-dom";
import React from 'react'

const Setting = () => {
  return (
    <div className='w-full overflow-hidden  font-Roboto text-lg text-center dark:border-[2px] rounded-md bg-[#344b6b] dark:bg-white  cursor-pointer group'>
      <div className='hover:bg-[#44689b] dark:hover:bg-slate-400 p-1'> <Link to='/user/favourite-songs'>Profile</Link></div>
      <div className={style}>Setting</div>
      <div className={style}>Upgrade to Premium</div>
      <div className={style}><Link to='/signin'>Log out</Link></div>
    </div>
  )
}

export default Setting

const style = 'hover:bg-[#44689b] dark:hover:bg-slate-400 p-1'