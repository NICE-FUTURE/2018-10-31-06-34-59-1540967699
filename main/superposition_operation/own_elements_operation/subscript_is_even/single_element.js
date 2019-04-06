'use strict';
var single_element = function(collection){
    var even = [];
    for (let i=1; i<collection.length; i+=2) {
        even.push(collection[i]);
    }
    var r = [];
    even.forEach(element => {
        if (even.indexOf(element) === even.lastIndexOf(element)) r.push(element);
    });
    return r;
};
module.exports = single_element;
