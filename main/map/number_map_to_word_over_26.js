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

var number_map_to_word_over_26 = function(collection){
  return collection.map(convert);
};

module.exports = number_map_to_word_over_26;
