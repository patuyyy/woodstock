const connectDB = require("./connector");
const express = require('express');
const app = express();
const PORT = process.env.PORT;
const routes = require('./routes/_routes');
const cors = require('cors');

app.use(cors()); // Enable CORS for all routes

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
connectDB.connectDB();
app.use(routes);

app.listen(PORT, () => {
  console.info("Server is running on port", PORT);
});