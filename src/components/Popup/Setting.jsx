import { Link } from "react-router-dom";
import React from 'react'

const Setting = () => {
  return (
    <div className='w-full overflow-hidden  font-Roboto text-lg text-center rounded-md bg-[#344b6b] cursor-pointer group'>
      <div className='hover:bg-[#44689b] p-1'> <Link to='/user'>Profile</Link></div>
      <div className={style}>Setting</div>
      <div className={style}>Upgrade to Premium</div>
      <div className={style}><Link to='/signin'>Log out</Link></div>
    </div>
  )
}

export default Setting

const style = 'hover:bg-[#44689b] p-1'