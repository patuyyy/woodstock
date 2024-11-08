const express = require("express");
const bodyParser = require("body-parser");
const { Client } = require("pg");
const { Pool } = require("pg");
const dotenv = require("dotenv");
const { db } = require("./config/db.config");

// Express
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Dotenv
dotenv.config();

// Connect to dataase
db.connect((err) => {
  if (err) {
    console.error(err.message);
    return;
  }
  console.log("Connected to database");
});

/* API Endpoints */
const UsersRouter = require("./routes/users.route");


app.use("/api/users", UsersRouter);

module.exports = app;