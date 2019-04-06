'use strict';

function convert(num) {
  var r = [];
  while (num != 0) {
    let mod = num % 26;
    if (mod == 0) {
      mod = 26;  // z
      num -= 1;
    }
    r.unshift(String.fromCharCode(mod-1+'a'.charCodeAt(0)));
    num = Math.floor(num/26);
  }
  return r.join('');
}

function median_to_letter(collection) {
  var median;
  var pos = Math.floor(collection.length/2);
  if (collection.length%2 == 0) {
    median = (collection[pos]+collection[pos-1])/2;
  } else {
    median = collection[pos];
  }
  return convert(Math.ceil(median));
}

module.exports = median_to_letter;
