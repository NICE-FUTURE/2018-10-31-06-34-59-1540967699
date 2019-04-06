'use strict';
function rank_by_two_large_one_small(collection){
  collection = collection.sort((a,b) => a-b);
  var r = [];
  for (let i=0; i<collection.length; i+=3) {
    let sub = collection.slice(i, i+3);  // slice 已考虑到数组越界问题
    if (sub.length === 3) sub.push(sub.shift());
    r = r.concat(sub);
  }
  return r;
}

// var collection_a = [2, 8, 1, 9, 6, 4, 3, 10];
// console.log(rank_by_two_large_one_small(collection_a));

module.exports = rank_by_two_large_one_small;
