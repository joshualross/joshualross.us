function Direction($scope) {
	
	$scope.directions = [];
	
	$scope.add = function() {
		$scope.directions.push({text: $scope.direction});
		$scope.direction = '';
	};
	
	$scope.remove = function() {
		$scope.directions.slice($scope.$index, 1);
	};
}