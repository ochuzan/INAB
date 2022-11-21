// Import pgpromise library and initilize it without initialization options passed in
const pgp = require("pg-promise")();

// Import variables from dotenv file to access them
require("dotenv").config();

// Object destructing
const { PG_HOST, PG_PORT, PG_DATABASE, PG_USER } = process.env;

// Connection object to connect server to the database
const cn = {
    host: PG_HOST,
    port: PG_PORT,
    database: PG_DATABASE,
    user: PG_USER
};

// Create database object from the connection object
const db = pgp(cn);

module.exports = db;