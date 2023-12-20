import React from 'react'
import { DownloadIcon } from '../assets/icons'
import * as XLSX from "xlsx/xlsx.mjs";

const DownloadBtn = ({data = [], fileName}) => {
  return (
    <button className='download-btn'
    onClick={()=>{ 
        const datas = data?.length ? data : [];
        const worksheet = XLSX.utils.json_to_sheet(datas);
        const workbook = XLSX.utils.book_new();

        XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
        XLSX.writeFile(workbook, fileName ? `${fileName}.xlsx`:"student_data.xlsx")
    }}>
        <DownloadIcon />
        Download</button>
  )
}

export default DownloadBtn