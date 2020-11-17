/***********************************************************************************
 * Purpose      : Connects with database
 * @file        : db.js
 * @module      : 1. mongoose  
 * @author      : Saurabh Dagwar
 * @version     : 14.14.0
 * @since       : 04/11/2020
 *************************************************************************************/

const mongoose = require("mongoose");
/**
 * @param {String} url is use for database it must be connected with database
 **/
const url = "mongodb://localhost:27017/Greeting_database";
mongoose.Promise = global.Promise;
mongoose.set("useFindAndModify", false);

/**
 * @description Following program defines database is connected or not
 * NOTES - If it is not connected then giving error and exit from process 
 **/
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch((err) => {
    console.log("Could not connect to the database. Exiting now...", err);
    process.exit();
  });