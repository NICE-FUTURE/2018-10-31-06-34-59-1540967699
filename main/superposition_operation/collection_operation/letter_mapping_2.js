'use strict';

function average_to_letter(collection) {
  var mean = collection.reduce(function(acc,cur){return acc+=cur;})/collection.length;
  return String.fromCharCode('a'.charCodeAt(0)+Math.ceil(mean)-1);
}

module.exports = average_to_letter;

