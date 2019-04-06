'use strict';
var even_asc_odd_desc = function(collection){
    var odd = [], even = [];
    collection.forEach(element => {
        if (element%2 === 0) even.push(element);
        else odd.push(element);
    });
    return even.sort((a,b) => a-b).concat(odd.sort((a,b) => b-a));
};
module.exports = even_asc_odd_desc;
