'use strict';

function amount_even(collection) {
  var r = [];
  collection.forEach(element => {
    if (element%2 == 0) r.push(element);
  });
  return r.reduce((a,b) => a+b);
}

module.exports = amount_even;
