// Import Express.js and CORS libraries
import express from "express";
import cors from "cors";

// Creating instance of Express application
const app=express();
// Enabling CORS to allow cross-origin requests
app.use(cors());

// Defining GET routes at the specified endpoints
app.get("/getHello", (req, res)=>{
    //Sending "Hello" reponse when a GET request is made to "/getHello"
   res.send("Hello");
});

app.get("/getHelloWorld", (req, res)=>{
    //Sending "Hello" reponse when a GET request is made to "/getHelloWorld"
   res.send("HelloWorld");
});

app.get("/getHolyGrail", (req, res)=>{
    //Sending "Hello" reponse when a GET request is made to "/getHolyGrail"
   res.send("MontyPython");
});


// Start Express server on port 5000
app.listen(5000,()=>console.log("app is running"));