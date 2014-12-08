angular.module('countdown', ['ui.router', 'ngStorage', 'angular-datepicker', 'timer', 'chart.js'])
    .run(function () {
        $('#menu').mmenu();
    })


.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('tasks', {
      url: "/tasks",
      templateUrl: "templates/tasks.html",
      controller: 'taskListCtrl'
    })

    .state('newtask', {
      url: "/newtask",
      templateUrl: "templates/newTask.html",
      controller: 'newTaskCtrl as vm'
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tasks');
});

