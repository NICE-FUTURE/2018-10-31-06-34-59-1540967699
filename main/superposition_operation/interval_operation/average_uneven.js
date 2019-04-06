'use strict';

function average_uneven(collection) {
  var r = [];
  collection.forEach(element => {
    if (element%2 != 0) r.push(element);
  });
  return r.reduce((a,b) => a+b)/r.length;
}

module.exports = average_uneven;
