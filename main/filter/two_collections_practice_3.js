'use strict';

function choose_divisible_integer(collection_a, collection_b) {
  return collection_a.filter(item_a => collection_b.findIndex(function(item_b){return item_a%item_b==0;}) != -1);
}

module.exports = choose_divisible_integer;
