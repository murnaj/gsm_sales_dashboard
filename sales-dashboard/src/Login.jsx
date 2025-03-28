import React from 'react'
import {Link} from "react-router-dom";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup'



const Login = () => {

    const [email, setEmail] = useState('') // useState to store Email address of the user
      const [password, setPassword] = useState('') // useState to store Password

       const userSchema = yup.object().shape({
         
          // email can not be an empty string so we will use the required function
          email: yup.string().email().required(),
          
          // password can not be an empty string so we will use the required function. Also, we have used the `min` function to set the minimum length of the password. Yup passwords by default handle the conditions of at least one upper case, at least one lower case, and at least one special character in the password
          password: yup.string().required(),
          
          
        })

        const navigate = useNavigate();

        async function validateForm() {
            // creating a form data object
        
            let dataObject = {
              email: email,
              password: password,
             
            }
           // validating this dataObject concerning Yup userSchema

    const isValid = await userSchema.isValid(dataObject)

    if (isValid) {
      alert('Form is Valid')
      navigate('/dashboard');
    } else {
      alert('Form is Invalid')
    }
        
        }

    return (
    
    <div className='size-90 w-90 mt-15 mb-15 p-8  justify-center dark:bg-gradient-to-r
                from-blue-900 to-purple-900 border border-slate-400 rounded-md 
     flex-grow  flex-col items-center  max-w-7xl mx-auto px-4 md:px-6 lg:px-8 overscroll-y-none'>
        <div>
        <img  className=' items-center w-20 ml-25 p-2 ' src='https://flowbite.com/docs/images/logo.svg' alt='Dashboard Logo'/>
        <h1 className='text-4xl text-blue-500 font-bold text-center mb-6'>GSM-Sales</h1>
            <form action="">
            <div className='relative my-4 text-blue-400' >
            <input type='email' className='block w-72 py-2.3 px-0 text-sm text-blue-400 bg-transparent border-0 border-b-2 border-slate-500 appearance-none'
            placeholder='Email'
            onChange={(e) => setEmail(e.target.value)}
            />
         
            
            </div>
            <div className='relative my-4 text-blue-400' >
            <input type='password' className='block w-72 py-2.3 px-0 text-sm text-blue-400 bg-transparent border-0 border-b-2 border-slate-500 appearance-none' 
            placeholder='Your Password'
            onChange={(e) => setPassword(e.target.value)}
           />
            </div>
            <div className='flex justify-between items-center text-blue-400'>
                <div className='flex gap-2 items-center'>
                    <input type='checkbox' name='' id=''/>
                    <label htmlFor='Remember Me'>Remember Me</label>
                </div>
                <Link to='' className='text-blue-400 font-bold'>Forgot Password?</Link>
            </div>
            {/* <Link className='flex justify-center items-center w-full mb-4 text-[18px] mt-6 rounded text-slate-600 border-2 bg-white' to='/dashboard'>Login</Link>
            <div> */}

         <button className='flex justify-center items-center w-full mb-4 text-[18px] mt-6 rounded text-blue-500 border-2 bg-white' 
          type="submit"
          onClick={() => {
            validateForm()
          }}
         >
          Login
          </button>
              <div>
            <span className=' text-blue-300'>New Here?
              <Link className='text-blue-500 mx-1' to='/registration' >
            Create an Account</Link></span>
            </div>
            </form>
        </div>
    </div>
  )

}

export default Login