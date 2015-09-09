'use strict';

var strain = {
  keep: function(array, f){
    var newArray = [];
    array.forEach(function(e){
      f(e) ? newArray.push(e) : 'undefined';
    })
    return newArray;
  },
  discard: function(array, f){
    var newArray = [];
    array.forEach(function(e){
      !f(e) ? newArray.push(e) : 'undefined';
    })
    return newArray;
  }
};
