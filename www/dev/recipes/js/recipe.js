angular.module('recipes', [])
	.directive('recipe', function() {
		return {
			restrict : 'E',
			controller : function($scope, $element) {
				$scope.ingredients = [
					{amount: 1, name:"peach"},
					{amount: 1, name:"pear"},
					{amount: 1, name:"plum"}
				];
			},
			template :
				'<h2>{{name}}</h2>' +
				'<div ng-repeat="ingredient in ingredients">' + 
					'<ingredient></ingredient>' +
			    '</div>'
		};
	})
	.directive('ingredient', function() {
		return {
			restrict : 'E',
			template : 
				'<div><span>{{amount}}</span><span>{{ingredient}}</span></div>'
		};
	});