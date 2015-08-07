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
    .when('/edit/:todoText', {
        controller: 'EditCtrl',
        templateUrl: 'partials/details.html'

    })
    .when('/new',{
        controller: 'CreateCtrl',
        templateUrl: 'partials/details.html'

    })
    .otherwise({
        redirectTo: '/'        
    });
});