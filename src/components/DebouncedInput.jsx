import React, { useEffect, useState } from 'react'

const DebouncedInput = ({value : initValue, debounce = 500,onChange, ...props}) => {
    const[value,setValue] = useState(initValue);
    useEffect(()=>{
      setValue(initValue)
    },[initValue])
    // * 0.5s after set value
    useEffect(()=>{
     const timeout = setTimeout(()=>{
       onChange(value);
     },debounce);
     return ()=> clearTimeout(timeout);
    },[value])
  return (
    <input 
    {...props}
    value = {value} 
    id='search'
    onChange={(e)=> setValue(e.target.value)}/>
  )
}

export default DebouncedInput