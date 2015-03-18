angular.module('myApp', [])

.controller('myController', function($scope) {

	$scope.price='';
	$scope.tax='';
	$scope.tip='';

	$scope.tipTotal = 0;
	$scope.titleMealCount = 1;
	$scope.mealCount = 0;
	$scope.tipAvg = 0; 

	$scope.currentSubtotal = 0;
	$scope.currentTip = 0;
	$scope.currentTotal = 0;


	$scope.addTransaction = function(){

		$scope.currentSubtotal = 0;
		$scope.currentTip = 0;
		$scope.currentTotal = 0;

		var price = parseFloat($scope.price);
		var tax = parseFloat($scope.tax);
		var tip = parseFloat($scope.tip);


		$scope.currentSubtotal = price + (price*(tax/100));
		$scope.currentTip = $scope.currentSubtotal*(tip/100);
		$scope.currentTotal = $scope.currentSubtotal + $scope.currentTip;

		$scope.mealCount += 1;
		$scope.titleMealCount +=1;
		$scope.tipTotal += $scope.currentTip;
		$scope.tipAvg = $scope.tipTotal/$scope.mealCount;

		/*resetting form*/
		$scope.price='';
		$scope.tax='';
		$scope.tip='';
	};

	$scope.cancelForm = function(){
		$scope.price='';
		$scope.tax='';
		$scope.tip='';
	};

	$scope.resetAll = function(){
		$scope.tipTotal = 0;
		$scope.titleMealCount = 1;
		$scope.mealCount = 0;
		$scope.tipAvg = 0; 

		$scope.currentSubtotal = 0;
		$scope.currentTip = 0;
		$scope.currentTotal = 0;

		$scope.cancelForm();
	}
});