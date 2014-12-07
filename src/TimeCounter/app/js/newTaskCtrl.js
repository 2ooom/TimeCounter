angular.module('countdown')
.controller('newTaskCtrl',['$scope', '$location', 'taskService', function($scope, $location, taskService)  {
    $scope.task = { immidiate: true, type: 1, deadlineType: 1 };
    $scope.datepickerOptions = {
        format: 'dd mmm yyyy',
    };
	this.save = function() {
		var taskId = taskService.save($scope.task);
		$location.url('/task/' + taskId);
	}
}])