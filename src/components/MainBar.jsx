import React from 'react';
import Sidebar from './Sidebar'; // Import your Sidebar component here
import Searchbar from './Searchbar'; // Import your Searchbar component here

const MainBar = () => {
  return (
    <div className="flex">
      <Sidebar style={{ flex: '0 0 72px' }} /> {/* Render your Sidebar component */}
      <div className="flex-1 p-4">
        <Searchbar /> {/* Render your Searchbar component */}
        {/* The rest of your content can go here */}
      </div>
    </div>
  );
};

export default MainBar;


{/* <div className='grid md:grid-cols-2 gap-4'>
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
 */}
