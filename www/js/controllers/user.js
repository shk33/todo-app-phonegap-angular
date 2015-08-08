angular.module('todosApp.userControllers', [])
.controller('UserLoginCtrl', function ($scope, $rootScope, $http,
  $location, Todos) {
  $scope.login = function () {
    //  so  this  is  for desktop testing
    FB.login(function(response) {
      if  (response.authResponse) {
        console.log('Welcome!   Fetching  your  information.... ');
        FB.api('/me', function(response)  {
          console.log('Good to  see you,  ' + response.name + '.');
          $location.path('/');
          if(!$scope.$$phase) $scope.$apply();
        });
      } else  {
        console.log('User cancelled login or  did not fully authorize.');
      }
    }); 
  };
});