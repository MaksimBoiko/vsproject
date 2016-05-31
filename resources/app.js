var app = angular.module('visualApp', []);

/*
app.factory('places', ['$resource',
  function($resource) {
    return $resource('api/search/:result.json', {}, {
    query: {method: 'GET', params:{events:'result'}, isArray:true}
  });
}]);

app.controller('MainCtrl', ["$scope", "$log", 'places',
  function ($scope, $log, places) {
    $scope.products = places.query();
  }
]);
*/

app.controller('MainCtrl', function ($scope, $http) {
  $http.get('api/search/result.json').success(function(data) {
    $scope.products = data;
    $scope.favorites = [];
    $scope.cats = [];
  });
  $http.get('api/categories/categories.json').success(function(data) {
    $scope.categories = data;
  });
});

app.controller('ChangeSizeCtrl', function($scope, $log){
	$scope.changeSize = function(){
		/*var leftClass = $("#left").attr("class");
		var rightClass = $("#right").attr("class");
		$("#left").removeClass(leftClass).addClass(rightClass);
		$("#right").removeClass(rightClass).addClass(leftClass);*/
    var leftContent = document.getElementById("list").innerHTML;
    var rightContent = document.getElementById("sidebar").innerHTML;
    //$log.info(leftContent);
    document.getElementById("list").innerHTML = rightContent;
    //left.innerHTML = "<h1>lalal</h1>";
    document.getElementById("sidebar").innerHTML = leftContent;
    var leftClass = $("#list").attr("class");
    var rightClass = $("#sidebar").attr("class");
    var i = leftClass.indexOf("col-sm-")+7;
    var size = parseInt(leftClass.substring(i));
    //$log.info(size);
    if(size!=12) size = 12;
    else size = 9;
    var res = leftClass.substring(0, i);
    res+=size;
    //$log.info(res);
    res += leftClass.substring(i+2);
    //$log.info(res);
    $("#sidebar").removeClass(leftClass).addClass(res);
    i = rightClass.indexOf("col-sm-")+7;
    size = parseInt(rightClass.substring(i));
    //$log.info(size);
    if(size!=12) size = 12;
    else size = 3;
    var res = rightClass.substring(0, i);
    res+=size;
    $log.info(res);
    res += rightClass.substring(i+2);
    $log.info(res);
    $("#sidebar").removeClass(rightClass).addClass(res);
    /*$("#left").removeClass(leftClass).addClass(rightClass);
    $("#right").removeClass(rightClass).addClass(leftClass);*/
	}
});

function changeClass(){
  if ( document.getElementById("divmap").className.match(/(?:^|\s)divmaps-vis(?!\S)/) ) {
    document.getElementById("divmap").className = "divmaps-non";
  }

  if ( document.getElementById("divmap").className.match(/(?:^|\s)divmaps-non(?!\S)/) ) {
    document.getElementById("divmap").className = "divmaps-vis";
  }
}
