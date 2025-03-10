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

  const [activeTab, setActiveTab] = useState(0);
  
 
  const tabs = ["Zone1","Zone2", "Zone3","Zone4"];
  
  const contents = [
    
    [
      { name: "Ahmed", total: 12, customers: 8, coverage: "80%" },
      { name: "Haris", total: 14, customers: 9, coverage: "85%" },
      { name: "Ali", total: 10, customers: 15, coverage: "95%" },
    ],
    [
      { name: "Kumail", total: 15, customers: 12, coverage: "90%" },
      { name: "Murtaza", total: 10, customers: 7, coverage: "70%" },
      { name: "Ahmed", total: 8, customers: 10, coverage: "75%" },
    ],
    [
      { name: "Alyan", total: 10, customers: 7, coverage: "70%" },
      { name: "Sarah", total: 16, customers: 13, coverage: "95%" },
      { name: "Bilal", total: 7, customers: 14, coverage: "85%" },
    ],
    [
      { name: "Bilal", total: 18, customers: 15, coverage: "85%" },
      { name: "Mustafa", total: 11, customers: 8, coverage: "75%" },
      { name: "Ali", total: 10, customers: 15, coverage: "95%" },
    ],

   

  ]





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

    <div className='w-full h-full ' >
     
      <nav className='w-full dark:bg-gradient-to-r
       from-blue-800 to-purple-950 border-gray-700 absolute top-0 right-0 size-13 ' >
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
        <div className="absolute top-0 left-0 w-50 h-screen bg-gradient-to-r
                from-blue-800 to-purple-950 text-white shadow-lg z-50">
          <button onClick={toggleSidebar}>
            <img className='mx-4 py-4 h-18' src='https://flowbite.com/docs/images/logo.svg' alt='Dashboard Logo'/>
            <span className="mx-4 font-serif" >GSM-SALES</span>
            
            </button>
           
          <ul className="p-3 space-y-8">
          <li>
              <a href="#" className="block hover:text-blue-400 font-serif border-b-2 m-1">Dashboard</a>
            </li>
            <li>
              <a href="#" className="block hover:text-blue-400 font-serif border-b-2 m-1">Customers</a>
            </li>
            <li>
              <a href="#" className="block hover:text-blue-400 font-serif border-b-2 m-1">Sales</a>
            </li>
            <li>
              <a href="#" className="block hover:text-blue-400 font-serif border-b-2 m-1">Reports</a>
            </li>
            <li>
              <a href="#" className="block hover:text-blue-400 font-serif border-b-2 m-1">Targets</a>
            </li>
          </ul>
        </div>
      )}
    </div>
       <div className='text-white font-bold text-2xl m-2'>Dashboard
       </div>
       </div>
       <ul className='flex absolute top-0 right-145 m-2 '>
  <li className=' text-2xl mr-6'>
    <a className="text-blue-500 hover:text-blue-600" href="#">Services</a>
  </li>
  <li className="text-2xl mr-7">
    <a className="text-blue-500 hover:text-blue-600" href="#">Current Rate</a>
  </li>
  <li className="text-2xl mr-7">
    <a className="text-blue-500 hover:text-blue-600" href="#">Contact</a>
  </li> 
  <details className='dropdown'>
  <summary className="text-blue-500 hover:text-blue-600  m-0 text-2xl btn">Sales</summary>
  <ul className="menu dropdown-content text-blue-500 font-bold bg-blue-900">
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
        className=" border border-slate-700 bg-white w-35 h-8 text-center mr-4 text-blue-900 rounded-md"
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
            > Log Out
            </Link>
            <span className=' text-blue-500 font-bold hover:text-blue-700'>Settings</span>
          </div>
        )}
      </div>
      </div>
        </nav> 
        <br />

        {/* <div className= "flex  w-full h-20 ml-2 mt-15 p-2 dark:bg-blue-800 absolute inset-0  z-10 ">
       <div className='bg-white m-1 p-1 w-30 absolute inset-0 z-20'>
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

        </div> */}



      <div class="relative h-30 mt-20 grid-cols-2 xl:grid-cols-4 ">
        
        <div class="absolute inset-0  opacity-50 ">
        </div>
        <div class="absolute inset-0  flex flex-row items-center justify-around xl:grid-cols-4    dark:text-blue-600   m-4">
            <div class="bg-white p-2  rounded-lg shadow-lg w-40 h-20">
   <svg class="w-10 h-10 mr-1 text-gray-800 dark:text-blue-600 float-right" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4.5V19a1 1 0 0 0 1 1h15M7 14l4-4 4 4 5-5m0 0h-3.207M20 9v3.207"/>
</svg>
                
                <h2 className='float-left text-md text-purple-500 ml-1'>56520,352</h2>
                <p class="text-sm float-left ml-1 mt-1">
                    YTD TP Value
                </p>
            </div>
            <div class="bg-white p-2   rounded-lg shadow-lg w-40 h-20 ">
    <svg class="w-10 h-10 mr-1 text-gray-800 dark:text-blue-600 float-right" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4.5V19a1 1 0 0 0 1 1h15M7 14l4-4 4 4 5-5m0 0h-3.207M20 9v3.207"/>
</svg>

                
                <h2 className='float-left text-md text-purple-500 ml-1'>56520,352</h2>
                <p class="text-sm float-left ml-1 mt-1">
                    YTD TP Target
                </p>
            </div>
            <div class="bg-white p-2 
                        rounded-lg shadow-lg w-40 h-20">
                          <svg className="w-10 h-10 mr-1 mt-1 text-gray-800 dark:text-blue-600 float-right" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"/>
</svg>

               
                <h2 className='float-left text-md text-purple-500'>56520,352</h2>
                <p class="text-sm float-left mt-2 ml-2">
                    YTD TP Percentage
                </p>
            </div>
            <div class="bg-white p-2 rounded-lg shadow-lg w-40 h-20">
                          <svg className="w-10 h-10 mr-1 mt-1 text-gray-800 dark:text-blue-600 float-right " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path d="M6 2c-1.10457 0-2 .89543-2 2v4c0 .55228.44772 1 1 1s1-.44772 1-1V4h12v7h-2c-.5523 0-1 .4477-1 1v2h-1c-.5523 0-1 .4477-1 1s.4477 1 1 1h5c.5523 0 1-.4477 1-1V3.85714C20 2.98529 19.3667 2 18.268 2H6Z"/>
  <path d="M6 11.5C6 9.567 7.567 8 9.5 8S13 9.567 13 11.5 11.433 15 9.5 15 6 13.433 6 11.5ZM4 20c0-2.2091 1.79086-4 4-4h3c2.2091 0 4 1.7909 4 4 0 1.1046-.8954 2-2 2H6c-1.10457 0-2-.8954-2-2Z"/>
</svg>

                
                <h2 className='float-left text-md text-purple-500'>56520,352</h2>
                <p class="text-sm float-left ml-2 mt-2">
                    YTD ACH UCC 
                </p>
            </div>
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
              data: [200,300,400,500,600,700,800,900,500],
              backgroundColor: [
                "rgba(43, 63, 229, 0.8 )"
              ]

              
            },

            {

              label: 'Loss',
              data: [90,80,70,60,50,40,30,20,700],
              backgroundColor: [
                "rgba(250, 192, 19, 0.8 )"
              ]

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
              data: [200,600,500,700,600,800,700,750,200],

                backgroundColor: [
                  "rgba(43, 63, 229, 0.8 )"
                ]

            },

            {

              label: 'Loss',
              data: [190,180,100,160,500,430,430,200,700],

               backgroundColor: [
                  "rgba(54, 162, 235, 0.5 )"
               ]
              
            },
             
           
          ]
           }}
          
          />

          

        </div>

       



        </div>

        


       <div className="bg-gradient-to-r
                from-blue-700 to-purple-900 w-[600px] ml-82 mt-5 rounded-3xl border p-4  ">
      <div className="text-md font-medium flex justify-center mb-4">
        Employee Status
      </div>
      <div className="flex justify-center mb-4">
        {tabs.map((tab, index) => (
          <button
            onClick={() => setActiveTab(index)}
            key={`tab_${index}`}
            className={`px-4 py-2 mx-2 rounded-md ${
              activeTab === index
                ? "bg-blue-700 text-white"
                : "bg-gray-400 hover:bg-blue-800 hover:text-white"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

     
      <div className="flex justify-center mt-4">
        <table className="w-full text-sm text-left text-black">
          <thead className="text-xs text-gray-700 uppercase bg-gray-200">
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Total</th>
              <th className="px-4 py-2">Customers</th>
              <th className="px-4 py-2">Coverage</th>
            </tr>
          </thead>
          <tbody>
          {contents[activeTab].map((item, index) => (
              <tr
                key={`row_${index}`}
                className="bg-gray-400 border-b hover:bg-gray-50"
              >
                <td className="px-4 py-2">{item.name}</td>
                <td className="px-4 py-2">{item.total}</td>
                <td className="px-4 py-2">{item.customers}</td>
                <td className="px-4 py-2">{item.coverage}</td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>

        <footer className='flex h-16 m-1'>
         <div className='flex justify-between mt-10'> 
         <span className='absolute'> 
          @
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