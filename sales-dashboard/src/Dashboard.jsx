import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";

// defaults.maintainAspectRatio = false;
// defaults.responsive = true;



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

    <div className='flex-auto overflow-auto w-full  ' >
     
      <nav className=' w-full border-gray-200 dark:bg-blue-900 dark:border-gray-700 fixed top-0 size-13' >
      <div className='flex'>
      <div className="relative">
      
      <button onClick={toggleSidebar} className="relative">
        <img
          className=" w-8 h-8 m-2"
          src="https://flowbite.com/docs/images/logo.svg"
          alt='Dashboard Logo'
        />
      </button>

     
      {isSidebarOpen && (
        <div className="absolute top-0 left-0 w-48 h-screen bg-blue-900 text-white shadow-lg z-50">
          <button onClick={toggleSidebar}>
            <img className='mx-5 py-4 h-20' src='https://flowbite.com/docs/images/logo.svg' alt='Dashboard Logo'/>
            <span className="mx-4" >GSM-SALES</span>
            
            </button>
           
          <ul className="p-3 space-y-8">
          <li>
              <a href="#" className="block hover:text-blue-400 font-serif border-2  "> Dashboard</a>
            </li>
            <li>
              <a href="#" className="block hover:text-blue-400 font-serif border-2">Customers</a>
            </li>
            <li>
              <a href="#" className="block hover:text-blue-400 font-serif border-2">Sales</a>
            </li>
            <li>
              <a href="#" className="block hover:text-blue-400 font-serif border-2">Reports</a>
            </li>
            <li>
              <a href="#" className="block hover:text-blue-400 font-serif border-2">Targets</a>
            </li>
          </ul>
        </div>
      )}
    </div>
       <div className='text-white font-bold text-2xl m-2  '>Dashboard
       </div>
       </div>
       <ul className='flex absolute top-0 right-150 m-2'>
  <li className='text-2xl mr-6'>
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
<div className="absolute top-0 right-15 w-55 bg-blue-600 mb-2 mt-1.5 p-1 rounded-md ">
      <input
        type="text"
        placeholder="Search Customers"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className=" border border-slate-700 bg-slate-500 w-2/3 h-8 text-center mr-2 text-white rounded-md"
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

        <div className= "flex justify-between w-full h-20 m-2 mt-15 p-2 bg-blue-900 ">
       <div className='bg-white m-1 p-1 w-30'>
        <span className=' text-slate-700 font-bold ml-2 '>TRAFFIC</span>
        
        <span className='float-left mt-0.5 m-2'>350,897</span>
        <img className=' float-right mr-3' src='/src/assets/icon-img1.png'></img>

       </div>
       <div className='bg-white m-1 p-1 text-slate-700 w-32'>
        <span className=' text-slate-700 font-bold m-2 mb-2 '>New Users</span>
        <br /> 
        <span className=' ml-2 mb-2'>2,356</span>
        <img className=' mx-2 float-right' src='/src/assets/icon-img2.png'></img>

       </div>
       <div className='bg-white m-1 p-1 text-slate-700 w-25'>
       <span className=' text-slate-700 font-bold m-1'>Sales</span>
       <br /> 
       <span className='float-left mx-1'>924</span>
       <img className='float-right ml-4 ' src='/src/assets/icon-img3.png'></img>

       </div>
       <div className='bg-white m-1 p-1 text-slate-700 w-45'>
       <span className=' text-slate-700 font-bold mx-2'>PERFORMANCE</span>
        <br /> 
        <span className='float-left mx-2'>49,65%</span> 
        <img className='float-right ml-2 ' src='/src/assets/icon-img4.png'></img>

       </div>

        </div>
        
        <br/>

         <div className='flex justify-between'>
           
        <div className='flex  h-80 w-160 m-2 p-4  bg-white'>
          
          <Bar 
           
           data={{

            labels: ['June','July','Aug','Sept','Oct','Nov','Dec','Jan','Feb'],
            datasets:[{

              label: 'Revenue',
              data: [200,300,400,500,600,700,800,900,1000],
            },

            {

              label: 'Loss',
              data: [90,80,70,60,50,40,30,20,80],
            }
            

          ]
           }}

          />

        </div>

        <div className='Line Chart m-2 p-4 h-80 w-160 bg-white'>
          <Line 
          
          data={{

            labels: ['A','B','C'],
            datasets:[{

              label: 'Revenue',
              data: [200,300,400],
            },

            {

              label: 'Loss',
              data: [90,80,70],
            },

            {

            

            }
          ]
           }}
          
          />

        </div>

        




        </div>

        <div className= 'flex justify-evenly mx-15 m-2 p-2 w-300 bg-blue-100  rounded-md border-2 border-blue-800 '>

         <div>
          <span className="mx-2 font-bold">Name</span>
         <ul className="p-2 space-y-2">
          <li>
              <a href="#" className="block hover:text-blue-400">KHI01 - ASM - Waqas Uddin</a>
            </li>
            <li>
              <a href="#" className="block hover:text-blue-400">KHI01 - SPO - Waqar Abdul Rasheed</a>
            </li>
            <li>
              <a href="#" className="block hover:text-blue-400">KHI01 - SPO - Sardar Shahroz Khan</a>
            </li>
            <li>
              <a href="#" className="block hover:text-blue-400">KHI01 - SPO - Vacant KHI-05</a>
            </li>
            <li>
              <a href="#" className="block hover:text-blue-400">KHI01 - SPO - Athar Khan</a>
            </li>
          </ul>
          </div> 
         <div>
          <span className="mx-2 font-bold">Total</span>
         <ul className="p-2 space-y-2">
          <li>
              <a  className="block ">5,163</a>
            </li>
            <li>
              <a  className="block ">1,708</a>
            </li>
            <li>
              <a  className="block ">1,385</a>
            </li>
            <li>
              <a  className="block ">812</a>
            </li>
            <li>
              <a  className="block ">746</a>
            </li>
          </ul>
         </div>
         <div>
          <span className="mx-1 font-bold">Customers</span>
         <ul className="p-2 space-y-2">
          <li>
              <a  className="block ">874</a>
            </li>
            <li>
              <a  className="block ">193</a>
            </li>
            <li>
              <a  className="block ">26</a>
            </li>
            <li>
              <a  className="block ">213</a>
            </li>
            <li>
              <a  className="block ">203</a>
            </li>
          </ul>
         </div>
          <div>
          <span className="mx-1 font-bold">Coverage
          </span>
         <ul className="p-2 space-y-2">
          <li>
              <a  className="block ">16.93%</a>
            </li>
            <li>
              <a  className="block ">11.30%</a>
            </li>
            <li>
              <a  className="block ">1.88%</a>
            </li>
            <li>
              <a  className="block ">26.23%</a>
            </li>
            <li>
              <a  className="block ">27.21%</a>
            </li>
          </ul>
         </div>


        </div>

        <footer className='flex  h-16 m-2 '>
         <div className='flex justify-between mt-10'> 
          @
          2025
          GSM Sales

         
         <div className='m-1 absolute right-0 space-x-6 '>
            <a className='hover:text-blue-500 focus:outline-none focus:ring' href='#'>Terms</a>
          
            <a className='hover:text-blue-500 focus:outline-none focus:ring' href='#' >About Us</a>
           
            <a className='hover:text-blue-500 focus:outline-none focus:ring' href='#'>Blog</a>
           
            </div>
            </div>
         
        </footer>
               
       </div>
    </>
  );
};

export default Dashboard;