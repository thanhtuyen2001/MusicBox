import { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiCloseLine } from 'react-icons/ri'

import logo from "../assets/logo.png";
import { links } from "../assets/constants";
import { HiOutlineMenu } from "react-icons/hi";

const NavLinks = ({ handleClick }) => (
  <div>
    {
      links.map((item) => (
        <NavLink
          className="flex items-center text-2xl p-4 hover:bg-[#3f5472] dark:hover:bg-teal-300 dark:bg-white dark:shadow"
          key={item.name}
          to={item.to}
          onClick={() => handleClick && handleClick()}
        >
          <item.icon className="mr-2" />
          {item.name}
        </NavLink>
      ))
    }
  </div>
)
const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="text-white dark:text-black dark:shadow-lg z-10 ">
      <div className="sidebar w-64 ">
        <img src={logo} alt="logo " className="" />
        <NavLinks />
      </div>

      {/* mobile sidebar  */}
      <div className="absolute md:hidden block top-4 left-3 ">
        {
          !mobileMenuOpen &&
          (<HiOutlineMenu className="w-6 h-6 mr-2 " onClick={() => setMobileMenuOpen(true)} />)
        }
      </div>
      <div
        className={`absolute top-0 z-20 h-screen w-60 bg-slate-800 dark:bg-white dark:shadow backdrop-blur-lg md:hidden smooth-transition 
      ${mobileMenuOpen ? 'left-0' : '-left-full '}`}>
        <img src={logo} alt="logo " className="" />
        <NavLinks handleClick={() => setMobileMenuOpen(false)} />
        {
          mobileMenuOpen &&
          (<RiCloseLine className="absolute top-2 right-2 w-6 h-6 mr-2 text-white " onClick={() => setMobileMenuOpen(false)} />)
        }
      </div>
    </div>
  )
}

export default Sidebar;
