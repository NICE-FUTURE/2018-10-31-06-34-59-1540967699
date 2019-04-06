'use strict';

function even_to_letter(collection) {
  var r = [];
  for (let item of collection) {
    if (item % 2 == 0) r.push(String.fromCharCode('a'.charCodeAt(0)+item-1));
  }
  return r;
}

module.exports = even_to_letter;
