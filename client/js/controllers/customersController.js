app.controller('customersController', ['$scope', 'customersFactory', function($scope, customersFactory){
	$scope.customers = []; 
	
	var index = function(){
		customersFactory.index(function(data){
			$scope.customers = data; 
		});
	}
	
	index();

	$scope.add = function(){
		customersFactory.create($scope.newCustomer, function(data){
			index(); 
			$scope.newCustomer.name = ''; 
		})
	}

	$scope.remove = function(id){
		customersFactory.delete(id, function(data){
			index();
		})
	}

}])