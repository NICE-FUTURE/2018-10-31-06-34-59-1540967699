'use strict';

function get_letter_interval(number_a, number_b) {
  var r = [];

  if (number_a <= number_b) {
    for (let i=number_a; i<=number_b; i++) r.push(String.fromCharCode(i-1+'a'.charCodeAt(0)));
  } else {
    for (let i=number_a; i>=number_b; i--) r.push(String.fromCharCode(i-1+'a'.charCodeAt(0)));
  }

  return r;
}

module.exports = get_letter_interval;
