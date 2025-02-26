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
//  import Error from './Error';

function App() {


  
  const [Temp, setTemp] = useState(0);

  useEffect(() => {
    
    const api = async () => {

      let data = await fetch(URL);
      data.json().then((json) => {
        setTemp(json);
       
         
      })
    }

    api();

  },[])

  



  return(

    <>
    {/* <div className="App">
      <h1>Method is {Temp.method}</h1>
      <h1>Method is {Temp.status}</h1>

    </div> */}

    <div className=' h-[150vh] md:w-full flex justify-center bg-cover overflow-auto bg-amber-100' >
   


        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="registration" element={<Registration />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Routes>

        {/* <Router>
  <Error>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </Error>
</Router> */}


      </div></>
     
  )
 
}

export default App
