function Ingredient($scope) {
	
	$scope.ingredients = [];
	
	$scope.add = function() {
		$scope.ingredients.push({amount:$scope.amount, name:$scope.name});
		$scope.amount = '';
		$scope.name = '';
	};
	
	$scope.remove = function() {
		$scope.ingredients.splice($scope.$index, 1);
	};
}