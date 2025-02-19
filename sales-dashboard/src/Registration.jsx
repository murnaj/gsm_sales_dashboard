import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup'


export const Registration = () => {

  const [fullName, setFullName] = useState('') // useState to store First Name
  const [email, setEmail] = useState('') // useState to store Email address of the user
  const [password, setPassword] = useState('') // useState to store Password
  const [confirmPassword, setConfirmPassword] = useState('') // useState to store Password
 

  const userSchema = yup.object().shape({
    // name can not be an empty string so we will use the required function
    fullName: yup.string().required(),
    
    // email can not be an empty string so we will use the required function
    email: yup.string().email().required(),
    
    // password can not be an empty string so we will use the required function. Also, we have used the `min` function to set the minimum length of the password. Yup passwords by default handle the conditions of at least one upper case, at least one lower case, and at least one special character in the password
    password: yup.string().min(8).required(),
    
    // Confirm Password can not be an empty string so we will use the required function. Also, we have used the `min` function to set the minimum length of the password. Yup passwords by default handle the conditions of at least one upper case, at least one lower case, and at least one special character in the password
    confirmPassword: yup.string().min(8).required(),
  })

  const navigate = useNavigate();

  async function validateForm() {
    // creating a form data object

    let dataObject = {
      fullName: fullName,
      email: email,
      password: password,
      confirmPassword: confirmPassword
    }

    // validating this dataObject concerning Yup userSchema

    const isValid = await userSchema.isValid(dataObject)

    if (isValid) {
      alert('Form is Valid')
      navigate('/login');
    } else {
      alert('Form is Invalid')
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = { fullName, email, password};

    fetch('https://dummyjson.com/test',{

      method:'POST',
      headers: {"Content-Type": "form/json"},
      body: JSON.stringify(form)
    }).then(() => {
      console.log('new form added')
    })

  }




  

  return (
    <div className='bg-blue-950 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative  overflow-auto'>
       
        <div>
        <h1 className='text-4xl text-blue-500 font-bold text-center mb-6'>GSM-Sales</h1>
            <form action="" >
            <div className='relative my-4 text-blue-500' >
            <input type='text' className='block w-72 py-2.3 px-0 text-sm text-blue-400 bg-transparent border-0 border-b-2 border-slate-500 appearance-none'
              placeholder="Full Name"
              onChange={(e) => setFullName(e.target.value)}
            />
            </div>
           
            <div className='relative my-4 text-blue-500' >
            <input type='email' className='block w-72 py-2.3 px-0 text-sm text-blue-400 bg-transparent border-0 border-b-2 border-slate-500 appearance-none'  
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            
            </div>
            <div className='relative my-4 text-blue-500' >
            <input type='password' className='block w-72 py-2.3 px-0 text-sm text-blue-400 bg-transparent border-0 border-b-2 border-slate-500 appearance-none'
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            
            </div>
            <div className='relative my-4 text-blue-500' >
            <input type='password' className='block w-72 py-2.3 px-0 text-sm text-blue-400 bg-transparent border-0 border-b-2 border-slate-500 appearance-none'
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            
            </div>
        
            {/* <Link className='flex justify-center items-center w-full mb-4 text-[18px] mt-6 rounded text-indigo-500 border-2 bg-white' to='/login' 
              onClick={() => {
                validateForm()
              }}
            >Register</Link> */}

<button className='flex justify-center items-center w-full mb-4 text-[18px] mt-6 rounded text-blue-600 border-2 bg-white' to='/login'
          type="submit"
          onClick={() => {
          
            validateForm(),
            handleSubmit()
          
            
          }}
        >
          Submit
        </button>
            <div>

            <span className=' tracking-wide text-blue-400'>Already Have an account?<Link className='  text-blue-500 ' to='/login' >Login</Link></span>
            </div>
            </form>
        </div>
    </div>
  )
}

export default Registration
