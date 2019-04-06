'use strict';
function one_add_next_multiply_three(collection){
  var r = [];
  for (let i=0; i<collection.length-1; i++) {
    r.push((collection[i]+collection[i+1])*3);
  }
  return r;
}
module.exports = one_add_next_multiply_three;
