angular.module("TodoApp",[]).controller('TodoController',['$scope','$http',function($scope,$http){
	$scope.todos=[];
	$http.get('/todos').success(function(data){
		$scope.todos=data;
	}).error(function(data){
		console.log('Error: '+data);
	});
	$scope.addTodo=function(){
		$http.post('todos/add',{text:$scope.todoText,done:false})
		.success(function(data){
			$scope.todoText='';
			$scope.todos=data;
		});
	}
	$scope.archive=function(id){
		$http.delete('todos/'+id).success(function(data){
			$scope.todos=data;
		}).error(function(data){
			console.log('Error: '+data);
		});
	}
}]);