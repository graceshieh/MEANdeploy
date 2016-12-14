app.controller('productsController', ['$scope', 'productsFactory', function($scope, productsFactory){
	$scope.products = []; 
	$scope.filter = '';

	var index = function(){
		productsFactory.index(function(data){
			$scope.products = data; 
		});
	}

	index();

	$scope.add = function(){
		productsFactory.create($scope.newProduct, function(data){
			$scope.newProduct='';
			index();
		})
	}

	$scope.search = function(){
		$scope.filter = $scope.searchItems;
	}

		

}])