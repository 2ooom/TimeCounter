angular.module('countdown')
.controller('taskListCtrl', ['$scope', 'taskService', function($scope, taskService) {
    $scope.tasks = taskService.getAll();

    function getPercentage(task) {
        var fulltime = new Date(task.endDate).getTime() - new Date(task.startDate).getTime();
        var passedTime = new Date(task.endDate).getTime() - new Date().getTime();
        return passedTime / fulltime * 100;

    }

    $scope.labels = [
          'done', 'not done'
    ];
    $scope.getChartModel = function (task) {
        var percentage = getPercentage(task);
        return [percentage, 100 - percentage];
    }
}]);