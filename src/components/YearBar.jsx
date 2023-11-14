import React, { useEffect, useState } from "react";
import { BiChevronDown, BiChevronUp,BiPlus,BiX } from "react-icons/bi";
import axios from "axios";
import SectionCards from "./SectionCards";

const YearBar = () => {
  const [availableYears, setAvailableYears]= useState([]);
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [showModal,setShowModal]= useState(false);
  const [year, setYear]= useState("");
  const [sections, setSections] = useState();
  
  const fetchSections = (year) => {
    axios
      .get(`http://localhost:8000/getSections/${year}`)
      .then((response) => {
        console.log('Backend Response:', response.data); // Add this line for additional logging
        setSections(response.data.sectionData);
        console.log(sections)
      })
      .catch((error) => {
        console.error("Error fetching sections:", error);
      });
  };
 
  //fetching Years
  useEffect(()=>{
    axios
    .get("http://localhost:8000/availableYears")
    .then((response)=>{
      setAvailableYears(response.data.availableYears);
      
    })
    .catch((error)=>{
      console.error("error fetching available yeras:",error)
    })
  },[]);
  //adding an year
  const handleYearSubmit = (e)=>{
    e.preventDefault();
    if(!year){
      alert('Please enter a year');
      return;
    }else{
      axios.post("http://localhost:8000/createTable",{year})
      .then((response)=>{
        console.log(response.data);
        setShowModal(false)
        window.location.reload();
      })
      .catch((error)=>{
        console.error("Error creating table:", error)
      })
    }
  }

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };
  
 const handleFormSubmit = (e) => {
  e.preventDefault();

  if (!file) {
    alert("Please select a file to upload.");
    return;
  }

  const formData = new FormData();
  formData.append("file", file);

  axios
    .post(`http://localhost:8000/upload?year=${selected}`, formData)
    .then((response) => {
      console.log("Data uploaded successfully:", response.data);
    })
    .catch((error) => {
      console.error("Error uploading data:", error);
    });
};



  return (
    <div className="w-auto">
    <div className="flex justify-between w-full">
      <div className="flex gap-2">
      <div className="w-68 font-medium h-30 ml-4 ">
        <div
          className="bg-gray-900 text-snow-white w-full p-2 flex items-center justify-center gap-2 rounded"
          onClick={() => setOpen(!open)}
        >
          {selected ? selected : <h1>Select Year</h1>}
          {open ? <BiChevronUp size={20} /> : <BiChevronDown size={20} />}
        </div>
        <ul
          className={`bg-gray-800 text-snow-white mt-2 overflow-y-auto ${
            open ? "max-h-40" : "max-h-0"
          }`}
        >
          {availableYears?.map((year) => (
            <li
              className={`p-2 text-sm hover-bg-gray-600 cursor-pointer ${
                selected === year ? "bg-gray-600" : ""
              }`}
              key={year}
              onClick={() => {
                setSelected(year);
                setOpen(false);
                fetchSections(year);
              }}
            >
              {year}
            </li>
            
          ))} </ul>
        </div>
        <button  onClick={() => setShowModal(true)}  className="h-10 flex p-2 items-center justify-center rounded w-ful bg-gray-800 text-snow-white"><BiPlus/><span>Add Year</span></button>
        {/* modal */}
        {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-center gap-6 justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl font=semibold">Enter the Year</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                <BiX className="w-[25px] h-[25px]  bg-gray-800 rounded text-white"/>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <form onSubmit={handleYearSubmit}  className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full flex flex-col gap-2">
                  
                    <input 
                    onChange={(e)=>setYear(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-1 text-black text-xl" />
                    <button type="submit"  className="w-full rounded p-2 bg-slate-500"><span className="text-bold text-snow-white">Submit</span></button>
                    
                  </form>
                </div>
              {/*   <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  
                  <button
                    className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="submit"
                    onClick={() => setShowModal(false)}
                  >
                    Submit
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        </>
      ) : null}
        </div>
        
      
      <div className="mr-2">
        
        <form onSubmit={handleFormSubmit} className="cursor-pointer rounded">
         <div> 
         <div> <input
            type="file"
            id="fileInput"
            onChange={handleFileChange}
            className="hidden"
          />
          <label
            htmlFor="fileInput"
            className="bg-blue-500 text-white cursor-pointer py-1 px-4 rounded hover:bg-blue-700"
          >
            Choose File
          </label>
         
          <button
            type="submit"
            className="bg-green-500 text-white py-1 px-4 ml-2 rounded hover:bg-green-700"
          >
            Upload
          </button>
          </div>
          {file && (
            <span className="text-sm text-gray-500 ">{file.name}</span>
          )}
          </div>
        </form>
      </div>
      
               
               
    </div >
    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-16 lg:gap-28  border p-2 border-black rounded m-2 '>
    <SectionCards sectionData={sections}/></div>
    </div>

  );
};


export default YearBar;
