import React,{useState, useEffect} from 'react'
import SideBar from "../components/Sidebar"
import Searchbar from "../components/Searchbar"
import YearBar from '../components/YearBar'



const Category = () => {

  return (
    <div className="flex">
        <SideBar className="basis-[72px]"/>
        <div className="flex-1 ">
            <Searchbar/>
            <div className='  mt-12  '>
              {/* Drop Down */}
              <div className='flex  '>
              <YearBar />
              </div>
              
            </div>
       </div>
    </div>
  )
}

export default Category