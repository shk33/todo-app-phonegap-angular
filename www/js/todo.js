function todoCtrl ($scope) {
  $scope.todos  = [
        {text:'here is  my  first to  do',  done:true,  details:''},
        {text:'continue writing chapter 1 for this  book', done:false, details:''},
        {text:'work on  chapter 2 examples',  done:false, details:''}
    ];
  $scope.currentDetails = '';
  $scope.currentText = '';

  $scope.addTodo = function () {
    $scope.todos.push({text:$scope.todoText, 
      details: '',
      done: false
    });
    $scope.todoText = '';
  };

  $scope.getRemaining = function () {
    var count = 0;
    angular.forEach($scope.todos, function(todo){
      count += todo.done? 0 : 1;
    });
    return count;
  };

  $scope.archive = function () {
    var oldTodos = $scope.todos;
    $scope.todos = [];

    angular.forEach(oldTodos, function(todo){
      if(!todo.done){
        $scope.todos.push(todo);
      }
    });
  };

  $scope.showDetail = function (text) {
    var result = $scope.todos.filter(function(obj) {
      return obj.text == text;
    });
    $scope.currentText = result[0].text;
    $scope.currentDetails = result[0].details;
    document.getElementById('todoDetails').style.visibility = 'visible';
  };

  $scope.closeThis = function () {
    $scope.currentText = '';
    $scope.currentDetails = '';
    document.getElementById('todoDetails').style.visibility = 'hidden';
  };

  $scope.addDetails = function (text) {
    angular.forEach($scope.todos, function(todo){
      if (todo.text == text) {
        todo.details = $scope.currentDetails;
      }
    });
    document.getElementById('todoDetails').style.visibility = 'hidden';
  };
}