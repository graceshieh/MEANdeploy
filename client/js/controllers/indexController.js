app.controller('ordersController', ['$scope', 'customersFactory', 'productsFactory', 'ordersFactory', function($scope, customersFactory, productsFactory, ordersFactory){
	$scope.orders = []; 
	$scope.customers = [];
	$scope.products = [];
	$scope.filter = '';

	var index = function(){
		customersFactory.index(function(data){
			$scope.customers = data; 
		});
		productsFactory.index(function(data){
			$scope.products = data;
		})
		ordersFactory.index(function(data){
			$scope.orders = data;
		})
	}
	
	index();

	$scope.search = function(){
		$scope.filter = $scope.searchOrders;
	}

}])