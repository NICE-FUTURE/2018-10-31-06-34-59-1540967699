'use strict';

function compute_median(collection) {
  var chain = collection.sort(function(a,b){return a-b;});
  var pos = Math.floor(chain.length/2);
  console.log(chain);
  if (chain.length%2 == 0) {
    return (chain[pos]+chain[pos-1])/2;
  } else {
    return chain[pos];
  }
}

module.exports = compute_median;


