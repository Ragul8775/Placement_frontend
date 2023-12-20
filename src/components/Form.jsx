import React, { useState } from 'react'
import Logo from "../assets/logo.png";

const Form = () => {
    const[signUp, setSignUp] = useState(false)
  return (
     <div className='bg-white px-10 py-20 rounded-3xl border-gray-200 flex gap-4 relative'>
    {/* Right side */}
    <div className='my-auto'>
    <div className='flex gap-1 items-center justify-start'>
      <img src={Logo} className='w-12'/>
      <h1 className='text-5xl font-bold text-blue-800 '>
       SRM
    </h1>
    </div>
    <p className='font-semibold opacity-50'>Placement Management Portal </p>
    <p className=' font-medium text-lg text-gray-500 mt-4'> Welcome back! Please enter your details.</p>
    <div className='mt-8'>
        <div>
            <label className='text-lg font-medium'>Email</label>
            <input
            className='w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent'
            placeholder='Enter your email'
            type='email'/>
        </div>
        <div>
            <label  className='text-lg font-medium'>Password</label>
            <input
            className='w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent'
            placeholder='Enter your password'
            type='password'/>
        </div>
        <div className='mt-8 '>
            <button className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all w-full py-3 rounded-xl bg-blue-800 text-white font-bold text-lg'>Sign in</button>
        </div>
        
    </div>
    </div>
    
  
    <div>
       
    </div>
     {/* left side */}
    <div className='ml-4'>
    <div className='flex gap-1 items-center justify-start'>
      <img src={Logo} className='w-12'/>
      <h1 className='text-5xl font-bold text-blue-800 '>
       SRM
    </h1>
    </div>
    <p className='font-semibold opacity-50'>Placement Management Portal </p>
    
    <div className='mt-2'>
        <div>
            <label  className='text-lg font-medium'>Name</label>
            <input
            className='w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent'
            placeholder='Enter your Full Name'
            type='password'/>
        </div>
        <div>
            <label className='text-lg font-medium'>Email</label>
            <input
            className='w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent'
            placeholder='Enter your email'
            type='email'/>
        </div>
        <div>
            <label  className='text-lg font-medium'>Password</label>
            <input
            className='w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent'
            placeholder='Enter your password'
            type='password'/>
        </div>
        <div>
            <label  className='text-lg font-medium'>Reference-key</label>
            <input
            className='w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent'
            placeholder='Enter your key'
            type='password'/>
        </div>
        <div className='mt-8 '>
       
            <button className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all w-full py-3 rounded-xl bg-blue-800 text-white font-bold text-lg'>
                Sign Up</button>
        </div>
       
    </div>
    </div>
    
   
    <div>
       
    </div>
    <div className= {signUp ? 'absolute w-[420px] h-full bg-gray-800 top-0 left-0 rounded-3xl flex justify-center  ' : 'absolute w-[420px] h-full bg-gray-800 top-0 right-0 rounded-3xl flex justify-center '}>
     {signUp ?<div className='flex flex-col items-center justify-center gap-2'>
          <h1 className='  text-white text-3xl font-semibold'>Welcom Back !! </h1> 
          <button className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all 
          w-1/2 py-3 rounded-xl bg-blue-800 text-white font-bold text-lg'
          onClick={()=>setSignUp(!signUp)}>
                Log-In</button>
          
     </div>: 
     <div className='flex flex-col items-center justify-center gap-2'>
          <h1 className='  text-white text-3xl font-semibold'>New to website ?</h1> 
          <button className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all 
          w-1/2 py-3 rounded-xl bg-blue-800 text-white font-bold text-lg'
          onClick={()=>setSignUp(!signUp)}>
                Sign Up</button>
          
     </div>}
    </div>
</div>
  )
}

export default Form