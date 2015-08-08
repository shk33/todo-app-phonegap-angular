angular.module('todoApp', [
    'ngRoute',
    'todoApp.controllers',
    'todoApp.userController',
    'todoApp.services'
])
.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        controller: 'ListCtrl',
        templateUrl: 'partials/list.html'
    })
    .when('/edit/:todoID', {
        controller: 'EditCtrl',
        templateUrl: 'partials/details.html'
    })
    .when('/new',{
        controller: 'CreateCtrl',
        templateUrl: 'partials/new.html'
    })
    .when('/login',{
        controller: 'UserLoginCtrl',
        templateUrl: 'partials/login.html'
    })
    .otherwise({
        redirectTo: '/'        
    });
});