// Import app
const app = require('./app');

// Import and use environmental variables from .env file
require('dotenv').config();

// Use PORT variable from .env file
const PORT = process.env.PORT;

// Listens for requests on specific port
app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});