'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.messageGET = function messageGET (req, res, next) {
  Default.messageGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
