'use strict';

function median(collection) {
    collection = collection.sort(function(a,b){return a-b;});
    var pos = Math.floor(collection.length/2);
    if (collection.length%2 == 0) {
        return (collection[pos]+collection[pos-1])/2;
    } else {
        return collection[pos];
    }
}

var calculate_median = function(collection){
    var r = [];
    for (let i=1; i<collection.length; i+=2) {
        r.push(collection[i]);
    }
    return median(r);
};
module.exports = calculate_median;
