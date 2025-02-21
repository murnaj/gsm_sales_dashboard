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

  const [showDropdown, setShowDropdown] = useState(false);


  return (
    <>
      <nav className=' flex  w-full border-gray-200 dark:bg-blue-900 dark:border-gray-700 fixed top-0 size-20' >
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
</ul>
 
  {/* <li className="text-2xl mr-7">
    <button  data-dropdown-toggle="dropdownDelay" data-dropdown-delay="500" data-dropdown-trigger="hover" className="text-blue-500 hover:text-blue-800" type='button' >Sales</button>

  </li>  */}

<div className='search justify-between bg-blue-400 m-1'>
  <span className='border-slate-700 bg-slate-500 float-left w-80 h-10 m-4 text-center'>search employees</span>
  <span className='mu-4 w-70 flex-end p-2'>Search</span>

</div>

 
<div className="absolute top-0 right-0 ">
        <button
          className="w-10 h-10 m-3"
          type="button"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <img src="/src/assets/admin-img-2.png" alt="Admin Logo" />
        </button>

        {showDropdown && (
          <div className="absolute top-12 right-0 bg-white shadow-lg rounded-lg p-2">
            <Link
              className="block text-blue-500 font-bold hover:text-blue-700"
              to="/login"
            >
              Logout
            </Link>
            Settings
          </div>
        )}
      </div>
        </nav> 

        <div className='flex w-full h-30 justify-between m-1 p-4 bg-blue-500 '>
       <div className='bg-white m-2 p-2 flex justify-between'>
        <span className=' text-slate-700 font-bold'>TRAFFIC</span>
        <br /> 
        <span className='float-left'>350,897</span>
        <img className='float-right m-1 p-1' src='/src/assets/icon-img1.png'></img>

       </div>
       <div className='bg-white m-2 p-2 text-slate-700'>
        <span className=' text-slate-700 font-bold'>New Users</span>
        <br /> 
        <span className='float-left'>2,356</span>
        <img className='float-right m-1 p-1' src='/src/assets/icon-img2.png'></img>

       </div>
       <div className='bg-white m-2 p-2 text-slate-700'>
       <span className=' text-slate-700 font-bold'>Sales</span>
       <br /> 
       <span className='float-left'>924</span>
       <img className='float-right m-0.5 p-0.5' src='/src/assets/icon-img3.png'></img>

       </div>
       <div className='bg-white m-2 p-2 text-slate-700'>
       <span className=' text-slate-700 font-bold'>PERFORMANCE</span>
        <br /> 
        <span className='float-left'>49,65%</span> 
        <img className='float-right m-0.5 p-0.5' src='/src/assets/icon-img4.png'></img>

       </div>

        </div>

        <footer className='flex absolute inset-x-0 bottom-0 h-16'>
          @
          2025
          GSM Sales
          <div className='content'>
            <a ></a>
          </div>
        </footer>

       
    </>
  );
};

export default Dashboard;