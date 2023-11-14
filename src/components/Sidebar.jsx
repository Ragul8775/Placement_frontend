import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from "../assets/logo.png";
import Control from '../assets/control.png';
import ChartFill from '../assets/Chart_fill.png'; // Import the image statically
import Calendar from '../assets/Calendar.png'; // Import the image statically
import User from '../assets/User.png'; // Import the image statically
import Logout from "../assets/logout.png"

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const menuList = [
    { title: 'Dashboard', src: ChartFill, gap: true, to:'/' },
    { title: 'Category', src: Calendar, to:'/category' },
    { title: 'User', src: User, gap: true, to:'/users' },
  ];

  return (
    <div className='flex'>
      <div className={`${open ? 'w-72' : 'w-20'} h-screen relative p-4 transition-all flex flex-col duration-500 bg-gray-900`}>
        <img
          src={Control}
          onClick={() => setOpen(!open)}
          className={`w-[25px] absolute -right-3 border-2 border-gray-900 rounded-full transition-all duration-500 ${open ? 'rotate-0' : 'rotate-180'}`}
        />
        <div className='flex items-center  gap-2 '>
          <img src={Logo} className='w-[60px]' />
          {open ? <h3 className='text-snow-white font-bold text-[50px]'>SRM</h3> : null}
        </div>
        <ul className='mt-10'>
          {menuList.map((item) => (
            <li key={item.title} className={`flex gap-4 p-2 cursor-pointer ${!open && "justify-center"}
          group hover:bg-gray-700 rounded-md transition-all duration-300 ${item.gap ? 'mt-12' : 'mt-2'}`}>
              <Link to={item.to} className='flex gap-4'>
              <img src={item.src} className='group-hover:scale-110' />
              {open ? <span className='text-snow-white group-hover:font-bold'>{item.title}</span> : null}
            </Link>
            </li>
          ))}
        </ul>
        <div className={`mt-auto flex items-center gap-2 cursor-pointer ${!open && "justify-center"} group hover:bg-gray-600 rounded-md transition-all duration-300`}> {/* Use the mt-auto class to push the logout button to the bottom */}
         <Link to="/login " className='flex gap-4 items-center'> <img src={Logout} className='w-[35px] group-hover:scale-110' />
          {open?<span className='text-snow-white group-hover:font-bold'>Logout</span>:null}</Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
