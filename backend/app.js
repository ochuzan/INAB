// Import express using require
const express = require('express');
// Import cors middleware 
const cors = require('cors');

// Initialize app with express
const app = express();


// Enable Middleware 
app.use(express.json()); // Parses incoming requests with JSON payloads
app.use(cors()); //Allows any app to make requests to the API

// Root route
app.get("/", (req, res) => {
    res.send("<h1>Hello World!</h1>");
});

module.exports = app;