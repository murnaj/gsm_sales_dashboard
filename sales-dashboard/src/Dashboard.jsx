import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Dashboard = () => {
  // const navigate = useNavigate();

  // useEffect(() => {
    
  //   const timeout = setTimeout(() => {
  //     alert('Session expired. You have been logged out automatically.');
  //     navigate('/login'); 
  //   }, 10000);

    
  //   return () => clearTimeout(timeout);
  // }, [navigate]);

  return (
    <>
      <nav className=' flex  w-full border-gray-200 dark:bg-blue-950 dark:border-gray-700 fixed top-0 size-20' >
      <img className='w-10 h-10  m-2 ' src="https://flowbite.com/docs/images/logo.svg" alt="Dashboard Logo" />
       <div className='text-white font-bold text-2xl m-3'> Dashboard
       </div>
       <ul className=' flex top-0 m-3'>
  <li className='text-2xl mr-7'>
    <a className="text-blue-500 hover:text-blue-800" href="#">Services</a>
  </li>
  <li className="text-2xl mr-7">
    <a className="text-blue-500 hover:text-blue-800" href="#">Current Rate</a>
  </li>
  <li className="text-2xl mr-7">
    <a className="text-blue-500 hover:text-blue-800" href="#">Contact</a>
  </li> 
  <details className='dropdown'>
  <summary className="text-blue-500 hover:text-blue-800  m-0 text-2xl btn">Sales</summary>
  <ul className="menu dropdown-content text-blue-500 font-bold bg-blue-950">
    <li><a className='p-2 m-2 hover:text-blue-800'>Monthly</a></li>
    <li><a className='p-2 m-2 hover:text-blue-800'>Yearly</a></li>
  </ul>
</details>
 
  {/* <li className="text-2xl mr-7">
    <button  data-dropdown-toggle="dropdownDelay" data-dropdown-delay="500" data-dropdown-trigger="hover" className="text-blue-500 hover:text-blue-800" type='button' >Sales</button>

  </li>  */}
</ul>
 
<button class="absolute top-0 right-0 w-10 h-10  m-2 bg-blue-950  focus:bg-blue-900 " type="button">
  <img src="\src\assets\admin-img-2.png" alt="Admin Logo" />
</button>


<div>        
        <Link
          className="absolute top-0 right-0 size-15 font-bold p-4 m-5 text-blue-500  "
          to="/login"
        >
          Logout
        </Link>
        </div>
        </nav> 

        <div className='flex w-full justify-between m-2 p-4 '>
        <img  src='\src\assets\dashboard-img.png' alt='bg-img'></img>
         
        <img src='\src\assets\dashboard-img2.png' alt='bg-img'></img>

        </div>

       
    </>
  );
};

export default Dashboard;