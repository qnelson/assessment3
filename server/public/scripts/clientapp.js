var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/entry', {
            templateUrl: '/views/entry.html',
            controller: "EntryController"
        })
        .when('/list', {
            templateUrl: '/views/list.html',
            controller: "ListController"
        })
        .otherwise({
            redirectTo: 'entry'
        })
}]);
