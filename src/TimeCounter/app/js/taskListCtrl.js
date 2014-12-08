angular.module('countdown')
.controller('taskListCtrl', ['$scope', 'taskService', function($scope, taskService) {
    $scope.tasks = taskService.getAll();

    function getPercentage(task) {
        var fulltime = new Date(task.endDate).getTime() - new Date(task.startDate).getTime();
        var passedTime = new Date(task.endDate).getTime() - new Date().getTime();
        return passedTime / fulltime * 100;

    }
    $scope.data = [
          300, 500
    ];
    $scope.getChartModel = function (task) {
        var percentage = getPercentage(task);
        return [
            { value: percentage, color: '#F7464A' },
        ];
    }
}]);