angular.module('todoApp', [
    'ngRoute',
    'todoApp.controllers',
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
    .otherwise({
        redirectTo: '/'        
    });
});