angular.module('countdown.task')
.controller('taskListCtrl', ['$scope', 'taskService', function($scope, taskService) {
	$scope.tasks = taskService.getAll();
}]);