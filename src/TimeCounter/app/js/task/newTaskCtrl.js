angular.module('countdown.task')
.controller('newTaskCtrl',['$scope', '$location', 'taskService', function($scope, $location, taskService)  {
	$scope.task = {immidiate: true};
	this.save = function() {
		var taskId = taskService.save($scope.task);
		$location.url('/app/task/' + taskId);
	}
}])