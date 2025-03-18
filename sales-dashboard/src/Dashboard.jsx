import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Chart as ChartJS, defaults, BarElement } from "chart.js/auto";
import { Bar, Line, Pie,Doughnut } from "react-chartjs-2";



// defaults.maintainAspectRatio = false;
// defaults.responsive = true;



const Dashboard = () => {
   const navigate = useNavigate();

  // useEffect(() => {

  //   const timeout = setTimeout(() => {
  //     alert('Session expired. You have been logged out automatically.');
  //     navigate('/login'); 
  //   }, 10000);


  //   return () => clearTimeout(timeout);
  // }, [navigate]);

  const [activeTab, setActiveTab] = useState(0);


  const tabs = ["Zone1", "Zone2", "Zone3", "Zone4"];

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

      <div className='w-full h-full' >

        <nav className="w-full dark:bg-gradient-to-r from-blue-800 to-purple-950 border-gray-700 fixed top-0 z-50 ">
          <div className="flex flex-wrap items-center justify-between px-4 py-2">
           
            {/* Sidebar Button and Logo */}
            <div className="flex items-center">
              <button onClick={toggleSidebar} className="mr-4">
                <img
                  className="w-8 h-8"
                  src="https://flowbite.com/docs/images/logo.svg"
                  alt="Dashboard Logo"
                />
              </button>
              <span className="text-white font-bold text-lg  md:block">
                Dashboard
              </span>
            </div>

            {/* Main Navigation Links */}
            <ul className=" md:flex items-center ">
              <li>
                <a className="text-blue-500 hover:text-blue-600 text-xl" href="#">
                 GSM-SALES
                </a>
              </li>
              {/* <li>
            <a className="text-blue-500 hover:text-blue-600 text-md" href="#">
              Current Rate
            </a>
          </li>
          <li>
            <a className="text-blue-500 hover:text-blue-600 text-md" href="#">
              Contact
            </a>
          </li> */}
            </ul>

            {/* Search and Profile Section */}
            <div className="flex items-center space-x-4">
              <div className="relative  md:block">
                <input
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="border border-slate-700 bg-white text-blue-900 rounded-md px-4 py-1"
                />
                <button onClick={handleSearch} className="absolute right-2 top-1">
                  <svg
                    className="w-5 h-5 text-gray-800"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeWidth="2"
                      d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </button>
              </div>

              <button
                className="w-10 h-10"
                type="button"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                <svg
                  className="w-8 h-8 text-gray-800 dark:text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 20a7.966 7.966 0 0 1-5.002-1.756l.002.001v-.683c0-1.794 1.492-3.25 3.333-3.25h3.334c1.84 0 3.333 1.456 3.333 3.25v.683A7.966 7.966 0 0 1 12 20ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 5.5-4.44 9.963-9.932 10h-.138C6.438 21.962 2 17.5 2 12Zm10-5c-1.84 0-3.333 1.455-3.333 3.25S10.159 13.5 12 13.5c1.84 0 3.333-1.455 3.333-3.25S13.841 7 12 7Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {showDropdown && (
                <div className="absolute top-12 right-0 bg-white shadow-lg rounded-lg p-4">
                  <a
                    className="block text-blue-500 font-bold hover:text-blue-700"
                    href="/login"
                  >
                    Log Out
                  </a>
                  <div className="block text-blue-500 font-bold hover:text-blue-700">
                    Settings
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            {isSidebarOpen && (
              <div className="absolute top-0 left-0 w-60 h-screen bg-gradient-to-r from-blue-800 to-purple-950 text-white shadow-lg z-50">
                <button onClick={toggleSidebar} className="flex items-center p-4">
                  <img
                    className="h-10 "
                    src="https://flowbite.com/docs/images/logo.svg"
                    alt="Dashboard Logo"
                  />
                  <span className="ml-4 font-serif text-lg">GSM-SALES</span>
                </button>

                <ul className="p-2 space-y-5 mt-4">
                  <li>
                    <a href="#" className="block hover:text-blue-400 font-serif border-b-2 pb-3">Dashboard</a>
                  </li>
                  <li>
                    <a href="#" className="block hover:text-blue-400 font-serif border-b-2 pb-3">Services</a>
                  </li>
                  <li>
  <a
    href="#"
    onClick={(e) => {
      e.preventDefault(); // Prevent default anchor behavior
      navigate('/employee-status'); // Use your navigation logic here
    }}
    className="block hover:text-blue-400 font-serif border-b-2 pb-3"
  >
    Run Sale
  </a>
</li>
                  <li>
                    <a href="#" className="block hover:text-blue-400 font-serif border-b-2 pb-3">Contact Us</a>
                  </li>
                  <li>
                    <a href="#" className="block hover:text-blue-400 font-serif border-b-2 pb-3">TP Targets</a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </nav>
        <br />

       

        <div class="relative h-auto mt-20">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 dark:text-blue-600 m-4">
            <div class="bg-white p-4 rounded-lg shadow-lg">
              <svg class="w-10 h-10 mr-1 text-gray-800 dark:text-blue-600 float-right" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24"><path stroke="currentColor" stroke-width="2" d="M4 4.5V19a1 1 0 0 0 1 1h15M7 14l4-4 4 4 5-5m0 0h-3.207M20 9v3.207"
                />
              </svg>
              <div class="flex flex-col">
                <h2 class="text-md text-purple-500">4,546,405</h2>
                <p class="text-sm mt-1">YTD TP Value</p>
              </div>
            </div>

            <div class="bg-white p-4 rounded-lg shadow-lg">
              <svg
                class="w-10 h-10 mr-1 text-gray-800 dark:text-blue-600 float-right"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 4.5V19a1 1 0 0 0 1 1h15M7 14l4-4 4 4 5-5m0 0h-3.207M20 9v3.207"
                />
              </svg>
              <div class="flex flex-col">
                <h2 class="text-md text-purple-500">56,520,352</h2>
                <p class="text-sm mt-1">YTD TP Target</p>
              </div>
            </div>

            <div class="bg-white p-4 rounded-lg shadow-lg">
              <svg
                class="w-10 h-10 mr-1 mt-1 text-gray-800 dark:text-blue-600 float-right"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
                />
              </svg>
              <div class="flex flex-col">
                <h2 class="text-md text-purple-500">35.0%</h2>
                <p class="text-sm mt-1">YTD TP Percentage</p>
              </div>
            </div>

            <div class="bg-white p-4 rounded-lg shadow-lg">
              <svg
                class="w-10 h-10 mr-1 mt-1 text-gray-800 dark:text-blue-600 float-right"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M6 2c-1.10457 0-2 .89543-2 2v4c0 .55228.44772 1 1 1s1-.44772 1-1V4h12v7h-2c-.5523 0-1 .4477-1 1v2h-1c-.5523 0-1 .4477-1 1s.4477 1 1 1h5c.5523 0 1-.4477 1-1V3.85714C20 2.98529 19.3667 2 18.268 2H6Z"
                />
                <path
                  d="M6 11.5C6 9.567 7.567 8 9.5 8S13 9.567 13 11.5 11.433 15 9.5 15 6 13.433 6 11.5ZM4 20c0-2.2091 1.79086-4 4-4h3c2.2091 0 4 1.7909 4 4 0 1.1046-.8954 2-2 2H6c-1.10457 0-2-.8954-2-2Z"
                />
              </svg>
              <div class="flex flex-col">
                <h2 class="text-md text-purple-500">496</h2>
                <p class="text-sm mt-1">YTD ACH UCC</p>
              </div>
            </div>
            <div class="bg-white p-4 rounded-lg shadow-lg">
              <svg
                class="w-10 h-10 mr-1 text-gray-800 dark:text-blue-600 float-right"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 4.5V19a1 1 0 0 0 1 1h15M7 14l4-4 4 4 5-5m0 0h-3.207M20 9v3.207"
                />
              </svg>
              <div class="flex flex-col">
                <h2 class="text-md text-purple-500">4,546,405</h2>
                <p class="text-sm mt-1">MTD TP Value</p>
              </div>
            </div>

            <div class="bg-white p-4 rounded-lg shadow-lg">
              <svg
                class="w-10 h-10 mr-1 text-gray-800 dark:text-blue-600 float-right"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 4.5V19a1 1 0 0 0 1 1h15M7 14l4-4 4 4 5-5m0 0h-3.207M20 9v3.207"
                />
              </svg>
              <div class="flex flex-col">
                <h2 class="text-md text-purple-500">56,520,352</h2>
                <p class="text-sm mt-1">MTD TP Target</p>
              </div>
            </div>

            <div class="bg-white p-4 rounded-lg shadow-lg">
              <svg
                class="w-10 h-10 mr-1 mt-1 text-gray-800 dark:text-blue-600 float-right"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
                />
              </svg>
              <div class="flex flex-col">
                <h2 class="text-md text-purple-500">35.0%</h2>
                <p class="text-sm mt-1">MTD TP Percentage</p>
              </div>
            </div>

            <div class="bg-white p-4 rounded-lg shadow-lg">
              <svg
                class="w-10 h-10 mr-1 mt-1 text-gray-800 dark:text-blue-600 float-right"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M6 2c-1.10457 0-2 .89543-2 2v4c0 .55228.44772 1 1 1s1-.44772 1-1V4h12v7h-2c-.5523 0-1 .4477-1 1v2h-1c-.5523 0-1 .4477-1 1s.4477 1 1 1h5c.5523 0 1-.4477 1-1V3.85714C20 2.98529 19.3667 2 18.268 2H6Z"
                />
                <path
                  d="M6 11.5C6 9.567 7.567 8 9.5 8S13 9.567 13 11.5 11.433 15 9.5 15 6 13.433 6 11.5ZM4 20c0-2.2091 1.79086-4 4-4h3c2.2091 0 4 1.7909 4 4 0 1.1046-.8954 2-2 2H6c-1.10457 0-2-.8954-2-2Z"
                />
              </svg>
              <div class="flex flex-col">
                <h2 class="text-md text-purple-500">496</h2>
                <p class="text-sm mt-1">MTD ACH UCC</p>
              </div>
            </div>
          </div>
        </div>




        <br />

        <div className="flex flex-row md:flex-row justify-center flex-wrap  gap-4 m-2 p-2 mt-5 ">

          <div className="flex h-80 w-full md:w-[35rem] m-1 p-3 bg-white rounded-lg shadow-lg ">
            <Bar
              data={{
                labels: ['June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb'],
                datasets: [
                  {
                    label: 'Revenue',
                    data: [200, 300, 400, 500, 600, 700, 800, 900, 500],
                    backgroundColor: ["rgb(93, 15, 210)"],
                  },
                  {
                    label: 'Loss',
                    data: [90, 80, 70, 60, 50, 40, 30, 20, 700],
                    backgroundColor: ["rgb(15, 151, 210)"],
                  },
                ],
              }}
            />
          </div>


          <div className="h-80 w-full md:w-[35rem] m-1 p-3 bg-white rounded-lg shadow-lg ">
            <Line
              data={{
                labels: ['June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb'],
                datasets: [
                  {
                    label: 'Revenue',
                    data: [200, 600, 500, 700, 600, 800, 700, 750, 600],
                    backgroundColor: ["rgba(43, 63, 229, 0.8 )"],
                    borderWidth: 4,
                    borderColor: ["rgb(43, 63, 229, 0.8)"],






                  },
                  {
                    label: 'Loss',
                    data: [190, 180, 100, 160, 500, 430, 430, 200, 500],
                    backgroundColor: ["rgba(54, 162, 235, 0.5 )"],
                    borderWidth: 4,
                    borderColor: ["rgba(54, 162, 235, 0.5 )"],

                  },
                ],
              }}
            />
          </div>
        </div>

        <br />

        <div className='flex justify-around bg-gradient-to-r from-blue-700 to-purple-900 w-full  mt-4 rounded-2xl border p-2 '>

          <div className="h-80 w-full md:w-[30rem] m-1  p-3 bg-white rounded-lg shadow-lg ">
            <Pie
              data={{
                labels: ['June', 'July', 'Aug'],
                datasets: [
                  {
                    label: 'Revenue',
                    data: [200, 800, 1200],
                    backgroundColor: ["#1C64F2", "#16BDCA", "#9061F9"],
                    borderWidth: 4,
                    borderColor: ["#1C64F2", "#16BDCA", "#9061F9"],
                  },


                ],
              }}
            />
          </div>

          <div className="h-80 w-full md:w-[30rem] m-1  p-3 bg-white rounded-lg shadow-lg ">
            <Doughnut
              data={{
                labels: ['June', 'July', 'Aug'],
                datasets: [
                  {
                    label: 'Revenue',
                    data: [200, 800, 1200],
                    backgroundColor: ["#1C64F2", "#16BDCA", "#9061F9"],
                    borderWidth: 2,
                    borderRadius:1,
                    borderColor: ["#1C64F2", "#16BDCA", "#9061F9"],
                  },


                ],
              }}
            />
          </div>


        </div>









        <div className="bg-gradient-to-r from-blue-700 to-purple-900 w-full mt-4 rounded-3xl border p-2  ">

          <div className="text-xl font-bold flex justify-center mb-4">
            Employee Status
          </div>


          <div className="flex flex-wrap justify-center mb-4">
            {tabs.map((tab, index) => (
              <button
                onClick={() => setActiveTab(index)}
                key={`tab_${index}`}
                className={`px-6 py-2 m-2 rounded-md ${activeTab === index
                  ? "bg-blue-700 text-white"
                  : "bg-gray-400 hover:bg-blue-800 hover:text-white"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>


          <div className="overflow-x-auto">
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

        <footer className="flex flex-col md:flex-row justify-between items-center h-10 p-2 m-1">

          <div className="text-sm md:text-base">
            &copy; 2025 GSM Sales
          </div>


          <div className="flex space-x-6 mt-2 md:mt-0">
            <a className="hover:text-blue-500 focus:outline-none focus:ring" href="#">
              Terms
            </a>
            <a className="hover:text-blue-500 focus:outline-none focus:ring" href="#">
              About Us
            </a>
            <a className="hover:text-blue-500 focus:outline-none focus:ring" href="#">
              Blog
            </a>
          </div>
        </footer>

      </div>
    </>
  );
};

export default Dashboard;