'use strict';


/**
 * sample api get operation
 * sample api get: operation
 *
 * returns String
 **/
exports.messageGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "hello world!";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

