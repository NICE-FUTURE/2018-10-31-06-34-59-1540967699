'use strict';

var r = [];
function flat(item) {
  if (typeof(item) == 'number') {
    if (r.indexOf(item) == -1) r.push(item);
    return;
  };
  item.forEach(element => {
    flat(element);
  });
}

function double_to_one(collection) {
  flat(collection);
  return r;
}

module.exports = double_to_one;
