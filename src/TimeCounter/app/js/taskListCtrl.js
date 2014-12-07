angular.module('countdown')
.controller('taskListCtrl', ['$scope', 'taskService', function($scope, taskService) {
	$scope.tasks = taskService.getAll();
}]);