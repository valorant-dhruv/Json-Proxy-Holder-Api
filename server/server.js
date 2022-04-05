//This is the backend server
//Our react frontend sends the request to our backend server
//But actually it gets the information from the jsonplaceholder api
//Hence our server acts as a proxy server which serves the request of our application by fetching the data from another api
// const fetch = require("node-fetch");
import express from "express";
import cors from "cors";
import fetch from "node-fetch";
//Making an object of the express package
const app = new express();

//app.use basically incorporates a middleware function
//Cors basically means cross origin resource sharing
app.use(cors());

//As intially the frontend has by default the /posts we are returning the following on get request

// app.get("/", (req, res) => {
//   res.json("Hello world");
// });

//Here we are accepting the requests and giving response to all the routes
app.get("*", (req, res) => {
  console.log(req.path);
  fetch(`https://jsonplaceholder.typicode.com${req.path}`)
    .then((response) => response.json())
    .then((data) => res.json(JSON.stringify(data)));
});

//Our server is listening to the following port in the localhost
//It has two paramaters 1) The port number
//2)The callback function which is called every time the server starts running
app.listen(7000, () => {
  console.log("The server is running on port 7000");
});
