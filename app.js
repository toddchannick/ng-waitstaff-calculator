angular.module('myApp', [])

.controller('myController', function($scope) {

	/*MEAL DETAILS FOR CURRENT MEAL FORM*/
	$scope.price='';
	$scope.tax='';
	$scope.tip='';

	/*MEAL NUMBER DISPLAYED IN MEAL DETAILS/CUSTOMER CHARGES TITLE BAR*/
	$scope.titleMealCount = 1;

	/*INFO DISPLAYED IN CUSTOMER CHARGES DIV*/
	$scope.currentSubtotal = 0;
	$scope.currentTip = 0;
	$scope.currentTotal = 0;

	/*INFO DISPLAYED IN CUMULATIVE EARNINGS DIV*/
	$scope.tipTotal = 0;
	$scope.mealCount = 0;
	$scope.tipAvg = 0; 


	/*SUBTOTAL, TIP, AND TOTAL FROM MEAL WILL BE PUSHED INTO THIS ARRAY IF SUBMITTED*/
	$scope.meals = [];

	/*CLEARS FORM FOR NEXT MEAL*/
	$scope.cancelForm = function(){
		$scope.price='';
		$scope.tax='';
		$scope.tip='';
	};



	/*ADDS THE MEAL WHEN 'ADD MEAL' IS CLICKED*/
	$scope.addTransaction = function(){


		var price = parseFloat($scope.price);
		var tax = parseFloat($scope.tax);
		var tip = parseFloat($scope.tip);

		$scope.currentSubtotal = price + (price*(tax/100));
		$scope.currentTip = $scope.currentSubtotal*(tip/100);
		$scope.currentTotal = $scope.currentSubtotal + $scope.currentTip;

		$scope.mealCount ++;
		$scope.titleMealCount = $scope.mealCount;
		

		$scope.tipTotal += $scope.currentTip;
		$scope.tipAvg = $scope.tipTotal/$scope.mealCount;

		/*SENDING CURRENT MEAL TO ARRAY OF OBJECTS*/
		var meal = {subtotal:$scope.currentSubtotal, tip:$scope.currentTip, total:$scope.currentTotal};
		$scope.meals.push(meal);

		/*CLEARING FIELDS FOR NEXT MEAL INPUT*/
		$scope.cancelForm();
	};

	/*SETTING APP TO INITIAL CONDITIONS*/
	$scope.resetAll = function(){
		$scope.tipTotal = 0;
		$scope.titleMealCount = 1;
		$scope.mealCount = 0;
		$scope.tipAvg = 0; 

		$scope.meals=[];

		$scope.cancelForm();
	};


	/*-BACK BUTTON FUNCTIONALITY ON CLICK - navigates all meals added-*/
	$scope.back = function(){
		console.log($scope.titleMealCount);
		if ($scope.titleMealCount>1){
			$scope.titleMealCount--
		}
	};

	/*-BACK BUTTON FUNCTIONALITY ON CLICK - navigates all meals added-*/
	$scope.forward = function(){ 
		console.log($scope.titleMealCount);
		if ($scope.titleMealCount < $scope.meals.length){
			$scope.titleMealCount++
		}
	};

});