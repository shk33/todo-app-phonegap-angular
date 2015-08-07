angular.module('todoApp.controllers', [])
.controller('ListCtrl', function ($scope,$rootScope ,$http, Todos) {
  Todos.getAll().success(function (data) {
    $rootScope.todos = data.todos;
  });

  $scope.remaining = function () {
    var count = 0;
    angular.forEach($scope.todos, function (todo) {
      count += todo.done? 0:1;
    });
    return count;
  };
})
.controller('CreateCtrl', function ($scope, $rootScope, $location, $timeout, Todos) {
  $scope.todoText = "";
  $scope.todoDetails = "";
  $scope.save = function () {
    var todo = {
      text: $scope.todoText,
      done: false,
      details: $scope.todoDetails
    };
    console.log($rootScope.todos);
    $rootScope.todos.push(todo);

    Todos.save(todo);
    $location.path('/');
  };
})
.controller('EditCtrl', function($scope,  $location,  $routeParams, Todos)  {
  //$scope.todos  = Todos;
  console.log($routeParams.todoID);
  var id  = $routeParams.todoID;
  var result  = Todos.getTodo(id).success(function(data)  {
    console.log(" and the returned  data  is  ");
    console.log(data);
    $scope.todoText = data.text;
    $scope.todoDetails  = data.details;
    return  data;
  });
  $scope.save = function()  {
    var todo  = {
      id:      $routeParams.todoID,
      text:    $scope.todoText,
      details: $scope.todoDetails,
      done:    true
    };
    Todos.edit(id, todo);
    $location.path('/');
  };
});