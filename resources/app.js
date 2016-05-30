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
		var leftClass = $("#left").attr("class");
		var rightClass = $("#right").attr("class");
		$("#left").removeClass(leftClass).addClass(rightClass);
		$("#right").removeClass(rightClass).addClass(leftClass);
	}
});
