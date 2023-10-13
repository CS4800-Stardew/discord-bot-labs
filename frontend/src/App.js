import React, {useEffect, useState} from 'react' // library to use React Components
import Axios from "axios" // library for making HTTP requests with backend
import { Route, Routes } from 'react-router-dom' // library for dynamic routing

//imports from own components
import NavBar from './pages/components/navBar'
import StickyFooter from './pages/components/stickyFooter';
import Home from './pages/home'
import BotBuilder from './pages/botBuilder'
import LoginForm from './pages/loginForm'
import RegisterForm from './pages/registerForm'

const App = () => {
  // Creating state variable "data" to hold data fetched from the backend
  const [holyGrail, setHolyGrail] = useState("");

  //Functions to fetch data from backend and update the data
  const getHolyGrail=async()=>{
    //Sending GET Request to backend API endpoint
    const response=await Axios.get("http://localhost:5000/getHolyGrail");
    setHolyGrail(response.data);
  }

  // UseEffect hook to run "getData" function when the component mounts
  useEffect(()=>{
    getHolyGrail()
  }, []);

  return (
    // React.Fragment to group multiple elements without adding a new parent element to the DOM
    // Rendering Navbar at the top and then the main container
    // Main container contains Routes for the different pages of the website
    <React.Fragment>
      <NavBar/>
      <main className='container'>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/bot-builder" element={<BotBuilder />}/>
          <Route path='/login' element={<LoginForm/>}/>
          <Route path='/register' element={<RegisterForm/>}/>
        </Routes>
      </main>
      <StickyFooter/>
    </React.Fragment>
  )
}

export default App