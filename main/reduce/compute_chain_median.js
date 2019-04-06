'use strict';

function compute_chain_median(collection) {
  var chain = collection.split('->').map(function(ele){return parseInt(ele, 10);}).sort(function(a,b){return a-b;});
  var pos = Math.floor(chain.length/2);
  console.log(chain);
  if (chain.length%2 == 0) {
    return (chain[pos]+chain[pos-1])/2;
  } else {
    return chain[pos];
  }
}

// console.log(compute_chain_median('1->4->6->2->3->10->9->8->11->20->19->30'));

module.exports = compute_chain_median;
