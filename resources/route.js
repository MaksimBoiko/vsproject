var app = angular.module('visualApp', ["ngRoute"])
    .config(function($routeProvider){
        $routeProvider.
            when('/search',{
                templateUrl:'search.html'
            })
            .when('/addparty',{
                templateUrl:'addparty.html'
            })
            .when('/search/party',{
                templateUrl:'search/party.html'
            })
            .when('/reg',{
                templateUrl:'reg.html'
            }).
            otherwise({
            redirectTo: '/search'
        });


});