'use strict';

function compute_average(collection) {
  return collection.reduce(function(acc,cur,idx,src){return acc+cur})/collection.length;
}

module.exports = compute_average;

