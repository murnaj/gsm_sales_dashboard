import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Chart as ChartJS, defaults, BarElement } from "chart.js/auto";
import { Bar, Line } from "react-chartjs-2";

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

    <div className='flex-auto w-full h-full' >
     
      <nav className=' w-full border-gray-200 dark:bg-blue-900 dark:border-gray-700 absolute top-0 right-0 size-13' >
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
              <a href="#" className="block hover:text-blue-400 font-serif border-2  ">Dashboard</a>
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
       <ul className='flex absolute top-0 right-145 m-2'>
  <li className=' text-2xl mr-6'>
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
<div className='search bar'>
<div className="absolute top-0 right-15 w-52   mt-1.5 p-1 rounded-md ">
      <input
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className=" border border-slate-700 bg-slate-500 w-35 h-8 text-center mr-4 text-white rounded-md"
      />
      <button
        onClick={handleSearch}
         className="  w-8 h-6 ml-1  rounded-md " 
      >
     <svg class="w-8 h-6 mt-1  text-gray-800"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
</svg>
      </button>
    </div>

 
<div className="absolute top-0 right-0 ">
        <button
          className="w-10 h-10 m-2"
          type="button"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <svg class="w-8 h-8 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M12 20a7.966 7.966 0 0 1-5.002-1.756l.002.001v-.683c0-1.794 1.492-3.25 3.333-3.25h3.334c1.84 0 3.333 1.456 3.333 3.25v.683A7.966 7.966 0 0 1 12 20ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 5.5-4.44 9.963-9.932 10h-.138C6.438 21.962 2 17.5 2 12Zm10-5c-1.84 0-3.333 1.455-3.333 3.25S10.159 13.5 12 13.5c1.84 0 3.333-1.455 3.333-3.25S13.841 7 12 7Z" clip-rule="evenodd"/>
</svg>

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

        <div className= "flex  justify-between w-full h-20 ml-2 mt-15 p-2 bg-blue-900 ">
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
              data: [200,300,400,500,600,700,800,900,1500],
            },

            {

              label: 'Loss',
              data: [90,80,70,60,50,40,30,20,1700],
            }
            

          ]
           }}

          />

        </div>

        <div className='Line Chart m-2 p-4 h-80 w-160 bg-white'>
          <Line 
          
          data={{

            labels: ['June','July','Aug','Sept','Oct','Nov','Dec','Jan','Feb'],
            datasets:[{

              label: 'Revenue',
              data: [200,300,400,500,600,700,800,900,1500],
            },

            {

              label: 'Loss',
              data: [90,80,70,60,50,40,30,20,1700],
            },
             
           
          ]
           }}
          
          />

          

        </div>

       



        </div>

        {/* <div className= 'flex justify-evenly mx-20 m-2 p-2 w-280 bg-blue-100  rounded-md border-2 border-blue-800 '>

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


        </div> */}


        <div className='bg-blue-400'>
          <div className='text-sm font-medium flex justify-center'>
            Employee Status
            </div>
          
        <div class=" flex justify-center text-sm font-medium  text-blue-600 border-b border-gray-200 dark:text-blue-600 dark:border-blue-700">
    <ul class="flex flex-wrap -mb-px">
        <li class="me-2">
            <a href="#" class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-blue-600 hover:border-gray-300 dark:hover:text-gray-300">Zone 1</a>
        </li>
        <li class="me-2">
            <a href="#" class="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500" aria-current="page">Zone 2</a>
        </li>
        <li class="me-2">
            <a href="#" class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Zone 3</a>
        </li>
        <li class="me-2">
            <a href="#" class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Zone 4</a>
        </li>
        
    </ul>
</div>



        </div>

        <footer className='flex h-16 m-1'>
         <div className='flex justify-between mt-10'> 
         <span className='absolute '> @
          2025
          GSM Sales
          </span>

         
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