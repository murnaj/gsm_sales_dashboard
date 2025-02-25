import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";

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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  
    const [searchQuery, setSearchQuery] = useState("");
  
    const handleSearch = () => {
      alert(`Searching for Customer: ${searchQuery}`);
      // You can replace this alert with your actual search logic.
    }


  return (
    <>  
     
      <nav className=' w-full border-gray-200 dark:bg-blue-900 dark:border-gray-700 fixed top-0 size-15' >
      <div className='flex'>
      <div className="relative">
      
      <button onClick={toggleSidebar} className="relative">
        <img
          className=" w-10 h-10 m-2"
          src="https://flowbite.com/docs/images/logo.svg"
          alt='Dashboard Logo'
        />
      </button>

     
      {isSidebarOpen && (
        <div className="absolute top-0 left-0 w-48 h-screen bg-blue-900 text-white shadow-lg z-50">
          <button onClick={toggleSidebar}>
            <img className='m-2 p-2' src='https://flowbite.com/docs/images/logo.svg' alt='Dashboard Logo'/>
            
            
            </button>
           
          <ul className="p-4 space-y-4">
          <li>
              <a href="#" className="block hover:text-blue-400"> Dashboard</a>
            </li>
            <li>
              <a href="#" className="block hover:text-blue-400">Customers</a>
            </li>
            <li>
              <a href="#" className="block hover:text-blue-400">Sales</a>
            </li>
            <li>
              <a href="#" className="block hover:text-blue-400">Reports</a>
            </li>
            <li>
              <a href="#" className="block hover:text-blue-400">Targets</a>
            </li>
          </ul>
        </div>
      )}
    </div>
       <div className='text-white font-bold text-2xl m-3'> Dashboard
       </div>
       </div>
       <ul className='flex absolute top-0 right-160 m-3'>
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
<div className=''>
<div className="absolute top-0 right-15 w-60 bg-blue-600 m-2 p-2 ">
      <input
        type="text"
        placeholder="Search Customers"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className=" border border-slate-700 bg-slate-500 w-2/3 h-8 text-center text-white rounded-md"
      />
      <button
        onClick={handleSearch}
        className=" text-blue-600 bg-white w-15 h-6 rounded-md hover:bg-blue-950"
      >
      Search
      </button>
    </div>

 
<div className="absolute top-0 right-0 ">
        <button
          className="w-10 h-10 m-2"
          type="button"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <img  src="/src/assets/admin-img-2.png" alt="Admin Logo" />
        </button>

        {showDropdown && (
          <div className="absolute top-12 right-0 bg-white shadow-lg rounded-lg p-2">
            <Link
              className="block text-blue-500 font-bold hover:text-blue-700"
              to="/login"
            > Login
            </Link>
            <span className=' text-blue-500 font-bold hover:text-blue-700'>Settings</span>
          </div>
        )}
      </div>
      </div>
        </nav> 
        <br />

        <div className='flex w-full h-25 justify-between m-1 p-1 bg-blue-900 '>
       <div className='bg-white m-2 p-2 flex justify-end'>
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
        
        <br/>

        <div className='flex  m-2 h-80 w-full bg-white'>
          Bar charts
          <Bar clas
           
           data={{

            labels: ['A','B','C'],
            datasets:[{

              label: 'Revenue',
              data: [200,300,400],
            },

            {

              label: 'Loss',
              data: [90,80,70],
            }

          ]
           }}

          />

        </div>

        <footer className='flex absolute inset-x-0 bottom-0 h-16 m-2'>
         <div className='flex justify-between'> 
          @
          2025
          GSM Sales

         
         <div className='m-1 absolute right-0 space-x-4 '>
            <a className='hover:text-blue-500' href='#'>Terms</a>
          
            <a className='hover:text-blue-500' href='#' >About Us</a>
           
            <a className='hover:text-blue-500' href='#'>Blog</a>
           
            </div>
            </div>
         
        </footer>
               
       
    </>
  );
};

export default Dashboard;