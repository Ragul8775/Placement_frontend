import React from 'react';
import Sidebar from '../components/Sidebar';
import Searchbar from '../components/Searchbar';
import Chart1 from "../assets/chart_1.png";
import Chart2 from "../assets/char_2.png";
import Chart3 from "../assets/chart_4.jpg";
import '../App.css'

const Dashboard = () => {
  return (
    <div className='flex'>
      <Sidebar style={{ flex: '0 0 72px' }} /> 
      <div className='flex-1 p-4'>
        <Searchbar/>
        <h1 className='text-3xl font-bold mt-10 mb-4'>Dashboard</h1> 
        <div className='border-b border-gray-300 mb-4'></div> 
        <div className='grid md:grid-cols-2 gap-4'>
          <div className='grid-item flex justify-center items-center flex-col'>
            <img src={Chart1} className='grid-image w-52 h-52' />
            <h2>2023</h2>
          </div>
          <div className='grid-item flex justify-center items-center flex-col'>
            <img src={Chart2} className='grid-image w-56 h-52' />
            <h2>2022</h2>
          </div>
          <div className='grid-item flex justify-center items-center flex-col'>
            <img src={Chart3} className='grid-image w-64 h-52' />
            <h2>2021</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;