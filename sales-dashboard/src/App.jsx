
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import './App.css'
import Login from './Login'
import Registration from './Registration'
import Dashboard from './Dashboard'
import EmployeeStatus from "./EmployeeStatus";
import { useEffect } from "react";
import { useState } from "react"
const URL = 'https://dummyjson.com/test'
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

  }, [])





  return (

    <>
      {/* <div className="App">
      <h1>Method is {Temp.method}</h1>
      <h1>Method is {Temp.status}</h1>

    </div> */}

      <div className=' h-screen w-full flex flex-col justify-center bg-cover bg-gradient-to-r
                from-blue-700 to-purple-900 overflow-auto' >





        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="registration" element={<Registration />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="/employee-status" element={<EmployeeStatus />} />
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
