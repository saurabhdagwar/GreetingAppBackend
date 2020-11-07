/***********************************************************************************
 * Purpose      : Service should contains business logic
 * @file        : service.js
 * @module      : model.js
 * @author      : Saurabh Dagwar
 * @since       : 06/11/2020
 *************************************************************************************/

const model = require("../models/model.js");
class service {

  /** 
   * @function createGreeting function which pass data towards model method
   * @method pushData calls model according with function
   **/
  createGreeting = (data, callback) => {
    model.pushData(data, function (err, data) {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    });
  };

  /**
   * @function ReceiveGreeting which pass data towards model
   * @method getData call model method according with callback
   **/
  receiveGreeting = (callback) => {
    model.getData(function (err, data) {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    });
  };

  /**
   * @function updateGreeting  which pass data towards model
   * @method putData call model method according with callback
   **/
  updateGreeting = (greetingIdfun, greeting, callback) => {
    model.putData(greetingIdfun, greeting, function (err, greeting) {
      if (err) {
        callback(err, null);
      } else {
        callback(null, greeting);
      }
    });
  };

  /**
   * @function deleteGreeting which pass data towards model
   * @method deleteData call model method according with callback
   **/
  deleteGreeting = (greetingId, callback) => {
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
