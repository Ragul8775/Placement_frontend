import React from 'react'
import Search from '../assets/Search.png'

const Searchbar = () => {
  return (
    <div className='max-w-md mx-auto mt-5 shadow-lg rounded'>
    <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
        <div className="grid place-items-center h-full w-12 text-gray-300">
           <img src={Search} alt="searchbar" />
            
        </div>

        <input
        className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
        type="text"
        id="search"
        placeholder="Search...." /> 
    </div>
</div>
  )
}

export default Searchbar