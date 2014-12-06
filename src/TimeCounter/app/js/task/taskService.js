angular.module('countdown.task')
.service('taskService', ['$localStorage', function($localStorage) {
	return {
	  getAll : function() {
	  	return $localStorage.Tasks;
	  },
	  get : function(taskId) {
	  	if($localStorage.Tasks) {
	  		return $localStorage.Tasks[taskId];
	  	}
	  	return null;
	  },
	  save : function(task) {
	  	if(!$localStorage.Tasks) {
	  		$localStorage.Tasks = {};
	  	}
	  	var taskId = (new Date()).getTime();
	  	task.id = taskId;
	  	$localStorage.Tasks[taskId] = task;
	  	return task;
	  },
	  update : function (task) {
	  	if(!task.id) return null;
	  	var existingTask = get(task.id);
	  	if(!existingTask) return null;
	  	$localStorage.Tasks[task.id] = task;
	  	return task;
	  }
	};
}]);