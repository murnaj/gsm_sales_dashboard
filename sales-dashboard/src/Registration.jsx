import React from 'react'
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup'

const URL = '/api/test';


export const Registration = () => {

  const [fullName, setFullName] = useState('') 
  const [email, setEmail] = useState('') 
  const [password, setPassword] = useState('') 
  const [confirmPassword, setConfirmPassword] = useState('') 
 

  
  const userSchema = yup.object().shape({
    
    fullName: yup.string().required(),

    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
    confirmPassword: yup.string().min(8).required(),
  })

  const navigate = useNavigate();

  async function validateForm() {
   

    let dataObject = {
      fullName: fullName,
      email: email,
      password: password,
      confirmPassword: confirmPassword
    }

  

    const isValid = await userSchema.isValid(dataObject)

    if (isValid) {
      alert('Form is Valid')
      navigate('/login');
    } else {
      alert('Form is Invalid')
    }
  }

  // const form = { fullName, email, password};

  // fetch('https://dummyjson.com/test', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'Accept': 'application/json' // Ensures the server knows what response format to return
  //   },
  //   body: JSON.stringify(form),
  //   credentials: 'include' // Include cookies (e.g., accessToken) in the request
  // })
  //   .then(async (res) => {
  //     if (!res.ok) {
  //       const errorText = await res.text();
  //       throw new Error(`HTTP error! Status: ${res.status}, Response: ${errorText}`);
  //     }
  //     return res.json();
  //   })
  //   .then((data) => {
  //     console.log('Response Data:', data);
  //   })
  //   .catch((error) => {
  //     console.error('Error:', error.message);
  //   });

 

  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const api = async () => {
      try {
        const res = await fetch(URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          // body: JSON.stringify({
          //   username: 'emilys',
          //   password: 'emilyspass',
          //   expiresInMins: 30,
          // }),
          // credentials: 'include',
        });

        if (!res.ok) {
          const errorText = await res.text();
          throw new Error(`HTTP error! Status: ${res.status}, Response: ${errorText}`);
        }

        const json = await res.json();
        setResponse(json);
      } catch (err) {
        setError(err.message);
        console.error('Error:', err);
      }
    };

    api();
  }, []);


  

  return (
   
     <> 
     {/* <div>
       <h1>API Response</h1>
       {response ? (
         <pre>{JSON.stringify(response, null, 2)}</pre>
       ) : error ? (
         <p>Error: {error}</p>
       ) : (
         <p>Loading...</p>
       )}
     </div> */}
    <div className='h-full w-ful justify-center p-8 mt-17 mb-15 dark:bg-gradient-to-r  from-blue-900 to-purple-900 border border-slate-400 rounded-md  
    flex-grow  flex-col items-center  max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
    <img  className='object-top w-20 ml-25 p-2 ' src='https://flowbite.com/docs/images/logo.svg' alt='Dashboard Logo'/>

        <div>
          <h1 className='text-4xl text-blue-500 font-bold text-center mb-6'>GSM-Sales</h1>
          <form action="">
            <div className='relative my-4 text-blue-500'>
              <input type='text' className='block w-72 py-2.3 px-0 text-sm text-blue-400 bg-transparent border-0 border-b-2 border-slate-500 appearance-none'
                placeholder="Full Name"
                onChange={(e) => setFullName(e.target.value)} />
            </div>

            <div className='relative my-4 text-blue-500'>
              <input type='email' className='block w-72 py-2.3 px-0 text-sm text-blue-400 bg-transparent border-0 border-b-2 border-slate-500 appearance-none'
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)} />

            </div>
            <div className='relative my-4 text-blue-500'>
              <input type='password' className='block w-72 py-2.3 px-0 text-sm text-blue-400 bg-transparent border-0 border-b-2 border-slate-500 appearance-none'
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)} />

            </div>
            <div className='relative my-4 text-blue-500'>
              <input type='password' className='block w-72 py-2.3 px-0 text-sm text-blue-400 bg-transparent border-0 border-b-2 border-slate-500 appearance-none'
                placeholder="Confirm Password"
                onChange={(e) => setConfirmPassword(e.target.value)} />

            </div>

            {/* <Link className='flex justify-center items-center w-full mb-4 text-[18px] mt-6 rounded text-indigo-500 border-2 bg-white' to='/login'
      onClick={() => {
        validateForm()
      }}
    >Register</Link> */}

            <button className='flex justify-center items-center w-full mb-4 text-[18px] mt-6 rounded text-blue-600 border-2 bg-white' to='/login'
              type="submit"
              onClick={() => {

                validateForm();

              } }
            >
              Submit
            </button>
            <div>

              <span className=' tracking-wide text-blue-400'>Already Have an account?<Link className='  text-blue-500 ' to='/login'>Login</Link></span>
            </div>
          </form>
        </div>
      </div></>
  )
}

export default Registration
