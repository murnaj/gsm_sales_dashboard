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
      <nav className='w-full border-gray-200 dark:bg-blue-950 dark:border-gray-700 absolute top-0 left-0 size-20' >
      <div className=' w-full  mx-auto p-3 '>
      
       
        <span className='flex m-1  justify-items-end  text-3xl font-semibold whitespace-nowrap dark:text-white'>
        <img src="https://flowbite.com/docs/images/logo.svg" alt="Dashboard Logo" />
        Dashboard
        <ul className='flex'>
  <li className='mr-7'>
    <a class="text-blue-500 hover:text-blue-800" href="#">Services</a>
  </li>
  <li class="mr-7">
    <a class="text-blue-500 hover:text-blue-800" href="#">Current Rate</a>
  </li>
  <li class="mr-7">
    <a class="text-blue-500 hover:text-blue-800" href="#">Contact</a>
  </li>
  
</ul>
         
          </span> 
   
       
      
         </div>
        </nav> 

        <div>        
        <Link
          className=" absolute top-0 right-10 size-10 p-1 m-2  text-blue-500  "
          to="/login"
        >
          Logout
        </Link>
        </div>
    </>
  );
};

export default Dashboard;