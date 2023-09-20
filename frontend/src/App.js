// React library to use React Components
import React, {useEffect, useState} from 'react'
// Axios library for making HTTP requests with backend
import Axios from "axios"

const App = () => {
  // Creating state variable "data" to hold data fetched from the backend
  const [data, setData]=useState("");
  const [helloWorld, setHelloWorld] = useState("");
  const [holyGrail, setHolyGrail] = useState("");
  const [test, setTest] = useState("");

  //Functions to fetch data from backend and update the data
  const getHello=async()=>{
    //Sending GET Request to backend API endpoint
    const response=await Axios.get("http://localhost:5000/getHello");
    setData(response.data);
  }

  const getHelloWorld=async()=>{
    //Sending GET Request to backend API endpoint
    const response=await Axios.get("http://localhost:5000/getHelloWorld");
    setHelloWorld(response.data);
  }

  const getHolyGrail=async()=>{
    //Sending GET Request to backend API endpoint
    const response=await Axios.get("http://localhost:5000/getHolyGrail");
    setHolyGrail(response.data);
  }

  const getTest=async()=>{
    //Sending GET Request to backend API endpoint
    const response=await Axios.get("http://localhost:5000/getTest");
    setTest(response.data);
  }

  // UseEffect hook to run "getData" function when the component mounts
  useEffect(()=>{
    getHello()
    getHelloWorld()
    getHolyGrail()
    getTest()
  }, []);

  return (
    <div>
      <div>{data}</div>
    <div>{helloWorld}</div>
    <div>{holyGrail}</div>
    <div>{test}</div>
    </div>
  )
}

export default App