/***********************************************************************************
 * Purpose      : Service should contains business logic 
 * @file        : service.js
 * @author      : Saurabh Dagwar
 * @since       : 06/11/2020
 *************************************************************************************/

const model = require("../models/model.js");
class service {

//Create function which pass data towards model 
  create = (data, fun) => {
    model.pushData(data, function (err, data) {
      if (err) {
        fun(err, null);
      } else {
        fun(null, data);
      }
    });
  };

//Receive function which pass data towards model 
  receive = (fun) => {
    model.getData(function (err, data) {
      if (err) {
        fun(err, null);
      } else {
        fun(null, data);
      }
    });
  };

  //Update function which pass data towards model 
  update = (greetingIdfun, greeting, callback) => {
    model.putData(greetingIdfun, greeting, function (err, greeting) {
      if (err) {
        callback(err, null);
      } else {
        callback(null, greeting);
      }
    });
  };

  //Remove function which pass data towards model 
  remove = (greetingId, callback) => {
    model.deleteData(greetingId, function (err) {
      if (err) {
        callback(err);
      } else {
        callback(null);
      }
    });
  };
}

module.exports = new service();