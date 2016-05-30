var app = angular.module('visualApp');

app.filter('catFilter', function(){
  
  return function(input, cats){
    return input.filter(function(item){
      // clear array
      var clear = (cats || []).filter(function(catId){
        return !(!catId || isNaN(parseInt(catId, 10))); 
      });
      
      // nothing selected
      if(clear.length === 0){
        return true;
      }
      
      // category in array
      return clear.indexOf(item.category) !== -1;
    });
  }
});