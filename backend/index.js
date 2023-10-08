import config from 'config';
import express from 'express';
import * as startup from "./startup.js"; // Import all functions from the 'startup' module
const app=express(); // Creating instance of Express application

startup.enableCors(app);
startup.setRoutes(app);
startup.validateConfig();
startup.extendJoiValidation();

app.get("/getHolyGrail", (req, res)=>{
    //Sending "Hello" reponse when a GET request is made to "/getHolyGrail"
   res.send("MontyPython");
});


// Start Express server on port 5000
app.listen(5000,()=>console.log("app is running"));