const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config/.env" });
const port = process.env.PORT || 5001;
app.use(cors());
app.use(express.json());

// get driver connection
//const dbo = require("./config/db/conn");

mongoose.connect(process.env.ATLAS_URI)
    .then(() => {
        // listen for requests
        app.listen(port, () => {
            console.log(`Connected to the database and server is running on port: ${port}`);
        });
    })
    .catch((error) => {
        console.log(error)
    })