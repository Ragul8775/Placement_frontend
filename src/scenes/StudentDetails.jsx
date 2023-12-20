import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { createColumnHelper, flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, useReactTable } from '@tanstack/react-table';
import DownloadBtn from '../components/DownloadBtn';
import DebouncedInput from '../components/DebouncedInput';
import { EditIcon, SearchIcon ,DownloadIcon} from '../assets/icons';
import * as XLSX from "xlsx/xlsx.mjs";
const StudentDetails = () => {

  const [isEditMode, setIsEditMode] = useState(false);
  const { year, section } = useParams();
  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8000/student-details/${year}/${section}`)
      .then((response) => {
        setStudents(response.data.students);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching the Student Details:', error);
        setError(error);
        setIsLoading(false);
      });
  }, [year, section]);

  // Define columns after the `students` state is declared
  const columnHelper = createColumnHelper();
  const columns = [
    columnHelper.accessor("",{
      id: "S.No",
      cell : (info)=> <span>{info.row.index+1}</span>,
      header : ()=> <span>S.No</span>
    }),
    columnHelper.accessor(row => row["reg_no"], {
      id: 'reg.no', // Giving a custom ID
      cell: info => <span>{info.getValue()}</span>,
      header: () => <span>Registration Number</span>,
    }),
    columnHelper.accessor('full_name', {
      cell: info => <span>{info.getValue()}</span>,
      header: () => <span>Full Name</span>,
    }),
    columnHelper.accessor('gender', {
      cell: info => <span>{info.getValue()}</span>,
      header: () => <span>Gender</span>,
    }),
    columnHelper.accessor('nri', {
      cell: info => <span>{info.getValue()}</span>,
      header: () => <span>NRI</span>,
    }),
    columnHelper.accessor('dob', {
      cell: info => <span>{info.getValue()}</span>,
      header: () => <span>DOB</span>,
    }),
    columnHelper.accessor('specialization', {
      cell: info => <span>{info.getValue()}</span>,
      header: () => <span>Specialization</span>,
    }),
    columnHelper.accessor('section', {
      cell: info => <span>{info.getValue()}</span>,
      header: () => <span>Section</span>,
    }),
    columnHelper.accessor('srm_mail', {
      cell: info => <span>{info.getValue()}</span>,
      header: () => <span>SRM mail-ID</span>,
    }),
    columnHelper.accessor('personal_mail', {
      cell: info => <span>{info.getValue()}</span>,
      header: () => <span>Personal Mail</span>,
    }),
    columnHelper.accessor('mobile_no', {
      cell: info => <span>{info.getValue()}</span>,
      header: () => <span>Mobile</span>,
    }),
    columnHelper.accessor('alternative_no', {
      cell: info => <span>{info.getValue()}</span>,
      header: () => <span>Alt.No</span>,
    }),
    columnHelper.accessor('father_no', {
      cell: info => <span>{info.getValue()}</span>,
      header: () => <span>Father Number</span>,
    }),
    columnHelper.accessor('father_mail', {
      cell: info => <span>{info.getValue()}</span>,
      header: () => <span>Father Mail</span>,
    }),
    columnHelper.accessor('mother_no', {
      cell: info => <span>{info.getValue()}</span>,
      header: () => <span>Mother No</span>,
    }),
    columnHelper.accessor('mother_mail', {
      cell: info => <span>{info.getValue()}</span>,
      header: () => <span>Mother Mail</span>,
    }),
    columnHelper.accessor('guardian_no', {
      cell: info => <span>{info.getValue()}</span>,
      header: () => <span>Guardian No</span>,
    }),
    columnHelper.accessor('fa', {
      cell: info => <span>{info.getValue()}</span>,
      header: () => <span>Faculty Advisor</span>,
    }),
    columnHelper.accessor('languages', {
      cell: info => <span>{info.getValue()}</span>,
      header: () => <span>Languages</span>,
    }),
    columnHelper.accessor('status', {
      cell: info => isEditMode ? (
        <select 
  defaultValue={info.getValue()} 
  onChange={(e) => {
    console.log("Row data:", info.row.original);
    handleStatusChange(info.row.original.reg_no, e.target.value)}}
>
          <option value="Placed">Placed</option>
          <option value="HigherStudies">Higher Studies</option>
          <option value="Entrepreneur">Entrepreneur</option>
          <option value="Unplaced">Unplaced</option>
        </select>
      ) : (
        <span>{info.getValue()}</span>
      ),
      header: () => <span>Status</span>
    })
  ];
  const handleStatusChange = (studentId, newStatus) => {
    console.log("Changing status for:", studentId, "to:", newStatus);
    setStudents(prevStudents => prevStudents.map(student => {
      if (student.reg_no === studentId) {
        return { ...student, status: newStatus };
      }
      return student;
    }));
  };

  const saveAllChanges = () => {
    
    axios.post(`http://localhost:8000/update-student-statuses/${year}`, { students })
      .then(response => {
        console.log('All statuses updated successfully');
        // Handle success - e.g., show a success message, refresh data
      })
      .catch(error => {
        console.error('Error updating statuses:', error);
        // Handle error - e.g., show an error message
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  
 
  //Creating the random color for the table
  const tailwindColorMap = {
    gray: { 500: '#6B7280', 200: '#E5E7EB', 300: '#D1D5DB' },
    zinc: { 500: '#71717A', 200: '#E4E4E7', 300: '#D4D4D8' },
    stone: { 500: '#78716C', 200: '#F3F4F6', 300: '#E7E5E4' },
    red: { 500: '#EF4444', 200: '#FECACA', 300: '#FCA5A5' },
    orange: { 500: '#F97316', 200: '#FFEDD5', 300: '#FED7AA' },
    lime: { 500: '#84CC16', 200: '#ECFCCB', 300: '#D9F99D' },
    cyan: { 500: '#22D3EE', 200: '#CFFAFE', 300: '#BAE6FD' },
    sky: { 500: '#0EA5E9', 200: '#E0F2FE', 300: '#BAE6FD' },
    indigo: { 500: '#6366F1', 200: '#E0E7FF', 300: '#C7D2FE' },
    violet: { 500: '#8B5CF6', 200: '#EDE9FE', 300: '#DDD6FE' },
    purple: { 500: '#A855F7', 200: '#FAE8FF', 300: '#FBCFE8' },
    rose: { 500: '#F43F5E', 200: '#FFE4E6', 300: '#FECDD3' },
  };

  const getRandomColorShades = () => {
    const colors = Object.keys(tailwindColorMap);
    const randomColorKey = colors[Math.floor(Math.random() * colors.length)];
    const colorShades = tailwindColorMap[randomColorKey];
    return {
      color500: colorShades[500],
      color200: colorShades[200],
      color300: colorShades[300]
    };
  };

  const { color500, color200, color300 } = getRandomColorShades();

  const [globalFilter,setGlobalFilter] =  useState("");
  const table = useReactTable({
    data: students,
    columns,
    state :{
      globalFilter,
    },
    getFilteredRowModel : getFilteredRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel : getPaginationRowModel()
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const rows = table.getRowModel().rows;
  if (rows.length === 0) return null;
  const hasData = rows.length > 0;


return(
  <div>
    <h1 className="text-center Capitalize text-3xl underline p-4"
    style={{backgroundColor:color500}}>Student Details:<span >{section}-{year} </span></h1>
    <div className=" min-h-screen">
      <div className="p-2  mx-auto fill-slate-100">
        <div className="flex justify-between mb-2">
          <div className='w-full flex items-center gap-1'>
            <SearchIcon/>
            <DebouncedInput value={globalFilter ?? ""}
          onChange={(value)=> setGlobalFilter(String(value))}
          className="p-2 bg-transparent outline-none border-b-2 w-1/5 focus:w-1/3 duration-300  "
          style={{borderColor:color500}}
          placeholder="search...."/>
          </div>
        {/* Download Button */}
        <div className='flex gap-2'>
        <button className='px-4 flex items-center gap-2 rounded font-semibold'
        style={{backgroundColor:color500}}
        onClick={()=>{ 
        const datas = students?.length ? students : [];
        const worksheet = XLSX.utils.json_to_sheet(datas);
        const workbook = XLSX.utils.book_new();
        const fileName = `${section}_${year}`

        XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
        XLSX.writeFile(workbook, fileName ? `${fileName}.xlsx`:"student_data.xlsx")
    }}>
        <DownloadIcon style={{backgroundColor:color500}}/>
        Download</button>
        <button onClick={() => setIsEditMode(prev => !prev)}
        className='border px-4 rounded flex gap-1 justify-between items-center font-semibold '
        style={{backgroundColor: color500,}}><EditIcon/>Edit</button>
       {isEditMode ?<button onClick={saveAllChanges}
  className='border px-4 rounded flex gap-1 justify-between items-center font-semibold'
  style={{backgroundColor: color500}}>
  Save Changes
</button> : null} 
        </div>
        </div>
        <div className="overflow-x-auto"> 
        <table className='border border-gray-700 w-full text-left'>
         <thead style={{backgroundColor :color500}}>
         {
            table.getHeaderGroups().map((headerGroup)=>(
              <tr key={headerGroup.id}>
                {
                  headerGroup.headers.map(header=>(
                    <th key={header.id}
                    className='capitalize px-3.5 py-2'>
                      {
                        flexRender(header.column.columnDef.header, header.getContext())
                      }    
                    </th>
                  ))
                }
              </tr>
            ))
          }
         </thead>
         <tbody>
         {
  hasData ? (
    table.getRowModel().rows.map((row,i) => (
      <tr key={row.id}
      style={i %2 === 0 ? {backgroundColor :color200}: {backgroundColor : color300}}>
        {row.getVisibleCells().map(cell => (
          <td key={cell.id}
          className='px-3.5 py-2'>
            {flexRender(cell.column.columnDef.cell, cell.getContext())}
          </td>
        ))}
      </tr>
    ))
  ) :  (
    <tr>
      <td colSpan={columns.length} className="text-center py-2">
        No data available
      </td>
    </tr>
  )
}

         </tbody>
        </table>
        </div>
        {/* pagination */}
        <div className='flex items-center justify-start mt-2 gap-2'>
          <button
          onClick= {()=>{
            table.previousPage()
          }}
          disabled = {!table.getCanPreviousPage()}
          className='p-1 border px-2 disabled:opacity-30' style={{borderColor:color300}}>
             {"<"}
          </button>
          <button
          onClick= {()=>{
            table.nextPage()
          }}
          disabled= {!table.getCanNextPage()}
          className='p-1 border px-2 disabled:opacity-30' style={{borderColor:color300}}>
             {">"}
          </button>
          <span className='flex items-center gap-1'>
            <div>Page</div>
            <strong>{table.getState().pagination.pageIndex + 1} of {" "}{table.getPageCount()}</strong>
          </span>
          <span className='flex items-center gap-1'>
          | Go to page :
          <input type='number'
          defaultValue={table.getState().pagination.pageIndex + 1}
          onChange={(e)=>{
            const page = e.target.value ? Number(e.target.value)-1 : 0 ;
            table.setPageIndex(page);
          }}
          className='border p-1 rounded w-16 bg-transparent'/>
          
          </span>
          <select value={table.getState().pagination.pageSize}
          onChange={(e)=>{
            table.setPageSize(Number(e.target.value));
          }}
          className='p-2 bg-transparent'>
            {
              [10,20,30,50].map((pageSize)=>(
                <option key={pageSize} value={pageSize}>
                 Show {pageSize}
                </option>
              ))
            }

          </select>
        </div>
      </div>

    </div> 
  </div>
)
}
export default StudentDetails;
       