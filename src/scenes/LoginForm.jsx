import React,{useState} from 'react'
import Logo from '../assets/logo.png'
/* import { auth } from '../firebase'; */
/* import { signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { createUserWithEmailAndPassword } from 'firebase/auth'; */
import { useAuth } from '../context/AuthContext';
import LoadingScreen from '../components/LoadingScreen';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const[loginEmail, setLoginInEmail] = useState('');
  const [loginPassword, setLoginPassword] =useState('')
  const[signupEmail, setSignupInEmail] = useState('');
  const [signupPassword, setSignupPassword] =useState('')
  const [name, setName] =useState('')
  const [loading,setLoading] = useState(false)
  const[signUp, setSignUp] = useState(false)
  const {signup, login} =useAuth()
  const [error,setError] = useState('')
  const navigate = useNavigate()
  //Login authentication
  async function handleLoginSubmit (event)  {
    event.preventDefault();
    try{
      setError('')
      setLoading(true)
      await login(loginEmail,loginPassword)
      navigate('/dashboard')
    }
    catch{
      setError("Failed to sign In")
    }
    setLoading(false)
    
      
  };
  
//sigup registration
async function handleSignupSubmit (event)  {
  event.preventDefault();
  try{
    setError('')
    setLoading(true)
    await signup(signupEmail,signupPassword)
    setSignUp(false)}
    catch (error) {
      console.error(error); // Log the error
      setError("Failed to create an Account");
    }
  setLoading(false)
    
};



  return (
    <div className="flex w-full h-screen bg-gradient-to-tr from-gray-400 to-blue-500">
        <div className='w-full flex items-center justify-center '>
     
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
     <form  onSubmit={handleLoginSubmit}>
     {error && <div className='p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 '>{error}</div>}
         <div>
           
             <label className='text-lg font-medium'>Email</label>
             <input
             className='w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent'
             placeholder='Enter your email'
             type='email'
             value={loginEmail}
             onChange={(e)=>setLoginInEmail(e.target.value)}/>
         </div>
         <div>
             <label  className='text-lg font-medium'>Password</label>
             <input
             className='w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent'
             placeholder='Enter your password'
             type='password'
             value={loginPassword}
             onChange={(e)=>setLoginPassword(e.target.value)}/>
         </div>
         <div className='mt-8 '>
             <button type="submit" className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all w-full py-3 rounded-xl bg-blue-800 text-white font-bold text-lg'>Sign in</button>
         </div>
       </form>
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
       <form  onSubmit={handleSignupSubmit}>
        {error && <div className='p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 '>{error}</div>}
         <div>
             <label  className='text-lg font-medium'>Name</label>
             <input
             className='w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent'
             placeholder='Enter your Full Name'
             type='name'
             value={name}
             onChange={(e)=>setName(e.target.value)}/>
         </div>
         <div>
             <label className='text-lg font-medium'>Email</label>
             <input
             className='w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent'
             placeholder='Enter your email'
             type='email'
             value={signupEmail}
             onChange={(e)=>setSignupInEmail(e.target.value)}
             />
         </div>
         <div>
             <label  className='text-lg font-medium'>Password</label>
             <input
             className='w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent'
             placeholder='Enter your password'
             type='password'
             value={signupPassword}
             onChange={(e)=>setSignupPassword(e.target.value)}/>
         </div>
         
         <div className='mt-8 '>
        
             <button type="submit"   className='active:scale-[.98] active:duration-75 hover:scale-[1.01]
              ease-in-out transition-all w-full py-3 rounded-xl bg-blue-800 text-white font-bold text-lg'>
                 Sign Up</button>
         </div>
         </form>
        
     </div>
     </div>
     
    
     <div>
        
     </div>
     <div className= {signUp ? 'absolute w-[410px] h-full bg-gray-800 top-0 left-0 rounded-3xl flex justify-center  ' : 'absolute w-[410px] h-full bg-gray-800 top-0 right-0 rounded-3xl flex justify-center '}>
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
           disabled={loading}
           onClick={()=>setSignUp(!signUp)}>
                 Sign Up</button>
           
      </div>}
     </div>
 </div>
   
  
     

         </div>
    </div>

  )
}

export default LoginForm