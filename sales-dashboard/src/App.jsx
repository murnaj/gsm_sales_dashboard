// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import './App.css'
import Login from './Login'
import  Registration  from './Registration'
import  Dashboard  from './Dashboard'
import { useEffect } from "react";
import { useState } from "react"
 const URL ='https://dummyjson.com/test'


function App() {


  
  const [Temp, setTemp] = useState(0);

  useEffect(() => {
    
    const api = async () => {

      let data = await fetch(URL);
      data.json().then((json) => {
        setTemp(json);
        document.body.style.overflow = 'hidden';
         
      })
    }

    api();

  },[])

  useEffect(() => {
    const timer = setTimeout(() => console.log("Time Out"), 3000);
    return () => clearTimeout(timer);
  }, []);

  let timer = null;
  

 

  return(

    <>
    {/* <div className="App">
      <h1>Method is {Temp.method}</h1>
      <h1>Method is {Temp.status}</h1>

    </div> */}

    <div className=' h-[120vh] flex justify-center items-center bg-cover overflow-auto' 
    style={{ "backgroundImage": "url('../src/assets/bg-img1.jpg" }}>


        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="registration" element={<Registration />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Routes>


      </div></>
     
  )
 
}

export default App
