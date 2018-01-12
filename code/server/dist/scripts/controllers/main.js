'use strict';

/**
 * @ngdoc function
 * @name archeTradesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the archeTradesApp
 */
 
angular.module('archeTradesApp')
  .factory('States', function(){
  var states = ['Furniture_1', 'Furniture_2', 'Furniture_3', 'Furniture_4', 'Furniture_5', 'Furniture_6', 'Furniture_7', 'Furniture_8', 'Furniture_9', 'Furniture_10', 'Tiles_1', 'Tiles_2', 'Tiles_3', 'Tiles_4', 'Tiles_5', 'Tiles_6', 'Sandol Box_1', 'Sandol Box_2', 'Sandol Box_3', 'Bolts_1', 'Bolts_2', 'Bolts_3', 'Dining table_1', 'Dining table_2', 'Dining table_3', 'Dining table_4', 'Dining table_5', 'Dining table_6', 'Dining table_7', 'Dining table_8', 'Dining table_9', 'Car_plot1', 'Car_plot2', 'Car_plot2', 'Car_plot3', 'Car_plot4', 'ceiling_fan1', 'ceiling_fan2', 'ceiling_fan4', 'ceiling_fan5', 'ceiling_fan6', 'ceiling_fan7', 'ceiling_fan8', 'ceiling_fan9', 'ceiling_fan10', 'table fan_1', 'table fan_2', 'table fan_3', 'table fan_4', 'table fan_5'];
  
  return states;
  
}); 
angular.module('archeTradesApp')
  .controller('MainCtrl', ['$scope', '$window', 'States', function ($scope,$window,States) {
    
    $scope.selected = undefined;
	$scope.states = States;
	$scope.s = 'vsv';
	function basedOnSearch(arr) {
		return arr.indexOf($scope.searchItems) > -1;
	}

	$scope.redirectState = function(page){
    	$window.location.href = '/#!/'+page;
    };

	$scope.$watch('searchItems', function(newVal,oldVal){
		if(newVal!==oldVal){
			$scope.states = States.filter(basedOnSearch);
			$scope.showTypeAhead = ($scope.searchItems.split.length > 1) ?  true : false;
		}
		
	});

  }]);

angular.module('archeTradesApp')
  .controller('signInCtrl', ['$scope', '$window','$http', function ($scope, $window, $http) {
    	$scope.cname = '';
    	$scope.password ='';
    	$scope.showmsg = false;
    	$scope.errorArray = [];
    	function checkForPassword(arr){
    		console.log(arr+''+$window);
    		var response = {
				username : 'Meenakshisundaram',
				companyname : 'SOME',
				phoneNo : '9965924121',
				password : '123'
			};
    		if(response.companyname === $scope.cname && response.password===$scope.password){
    			return true;
    		}
    		else{
    			$scope.errorArray = [];
    			$scope.showMsg = true;
    			$scope.errorArray.push('Wrong Password, Please Click in Forgot Password / Sign In');
    			return false;
    		}
    	}

	    $scope.forgotPassword = function(){
	    	$scope.errorArray = [];
	    	$scope.showMsg = true;
	    	$scope.errorArray.push('We have Mailed you the temporary Password');
	    };
    	$scope.logIn = function(){
    		$http.get('../json/getLoggedInCredentials.json')
            .then(function(data) { 
               if(checkForPassword(data)){
					$window.location.href = '/#!/products';
               }
            }, function(response){
            	 console.log('Error occured'+response);
            });
    	};
  }]);


angular.module('archeTradesApp')
  .controller('productsCtrl', ['$scope', '$window', function ($scope, $window) {
    	console.log($window);
    	$scope.userName = 'Meenakshisundaram';
    	$scope.category = 'Furniture';
    	$scope.filterproducts=function(){
    		$scope.searchResults = true;
    	};
    	$scope.items = [
    		{'name' : 'Furniture', 'qunatityAvailable': '15', 'src': 'images/f1.jpg'},
    		{'name' : 'Lightings', 'qunatityAvailable': '12', 'src': 'images/f2.jpg'},
    		{'name' : 'Paintings', 'qunatityAvailable': '11', 'src': 'images/f3.jpg'},
    		{'name' : 'Wooden Articles', 'qunatityAvailable': '33', 'src': 'images/f4.jpg'},
    		{'name' : 'Dining Table', 'qunatityAvailable': '43', 'src': 'images/f5.jpg'},
    		{'name' : 'Table Fan', 'qunatityAvailable': '22', 'src': 'images/f6.jpg'},
    	];

    	$scope.redirectState = function(page){
    		$window.location.href= '/#!/'+page;
    	};

  }]);

  angular.module('archeTradesApp')
  .controller('furnitureCtrl', ['$scope', '$window', function ($scope, $window) {
    	console.log($window);

    	$scope.filterproducts=function(){
    		$scope.searchResults = true;
    	};
    	$scope.items = [
    		{'name' : 'Furniture - 1', 'qunatityAvailable': '15', 'src': 'images/f1.jpg'},
    		{'name' : 'Furniture - 2', 'qunatityAvailable': '12', 'src': 'images/f2.jpg'},
    		{'name' : 'Furniture - 3', 'qunatityAvailable': '11', 'src': 'images/f3.jpg'},
    		{'name' : 'Furniture - 4', 'qunatityAvailable': '33', 'src': 'images/f4.jpg'},
    		{'name' : 'Furniture - 5', 'qunatityAvailable': '43', 'src': 'images/f5.jpg'},
    		{'name' : 'Furniture - 6', 'qunatityAvailable': '22', 'src': 'images/f6.jpg'},
    	];

    	$scope.redirectState = function(page){
    		$window.location.href= '/#!/'+page;
    	};
		$scope.showExpandAll= true;
    	$scope.changeValue = function(){
    		$scope.showExpandAll = !$scope.showExpandAll;
    	};


    	//try With Object

    	$scope.mainObj = {
    		furniture : [
    			{	Seating : ['Chairs', 'Stools', 'CounterStools', 'Lean Stools', 'Benches', 'Arm Chairs', 'Sofas', 'Sofa Beds', 'Modular Seating Elements', 'Modular Sofa Elements', 'Poufs','UpHolstered Benches','Bean Bags', 'Cushions']		},
    			{	Relaxing: ['Recliners', 'Recliner Sofa', 'Day Beds', 'Chaise Longues', 'Recamiers', 'Lounge chairs with footstools', 'Wing Chairs', 'Rocking Chairs' ]		},
    			{	Tables: ['Dining Tables', 'Trestles', 'Console Tables', 'Coffee Tables', 'Side Tables', 'Nesting Tables', 'Game Tables', 'Tables and Benches']		},
    			{	'Storage/Shelving' : ['Shelves', 'Dvd Shelve', 'Iluminated Shelve', 'Library Shelve','Magazine Shelve','Shelving Module','Wall Shelves', 'CD Racks', 'Cabinets', 'Built in cupboards','Shoe Cabinets', 'Storage Systems', 'Wardrobes', 'Walk in Wardrobes' ]	},
    			{ 	'Multimedia Furniture': ['Sideboards', 'Cabinets', 'Stands', 'Trolleys', 'Speakers']},
    			{	'Bedroom Furniture' : ['Double beds', 'Single Beds', 'Divan Beds', 'Adjustable beds', 'Four poster beds', 'Stacking', 'Sliding', 'Children', 'Sofa']},
    			{	'Complementary': ['Screen Cabinets', 'Magazine Cabinets', 'Drinks Cabinets', 'Tea Cabinets', 'Library Leaders']},
    			{	'Office' : ['Desks', 'Bureaus', 'Computer Desks']},
    			{	'Hallway': ['Hooks', 'Racks', 'Coat Hangers', 'Console Tables', 'Mirros', 'Umbrella Desks']},
    			{	'Kids Furniture' : ['Chairs', 'Stools', 'Benches', 'Arm Chairs']},
    			{	'Laundry Room' : ['Desks', 'Dryers', 'Baskets']},
    			{	'Fiteness Room' :  ['Treadmills', 'Multi gyms', 'wellness tools', 'Elliptical tools']}
    		]
    	};
    	$scope.keyName = Object.keys($scope.mainObj.furniture);
    	$scope.firstRootObjNames = [];
    	$scope.secondRootObjNames = [];
    	for(var i=0;i<$scope.keyName.length.length;i++){
    		$scope.firstRootObj[i] = false;
    	}
    	$scope.secondObj=[];
    	
    	$scope.SelectAll = function(rootObj){
    		for(var i=0;i<$scope.mainObj.furniture.length;i++){
    			if(Object.keys($scope.mainObj.furniture[i].toString()===rootObj)){
    				console.log($scope.mainObj.furniture[i][rootObj]);
    				for(var j=0;j<1;j++){
    					$scope.secondObj[j] = true;
    				}			
    			}	
    		}
    		
    	};
    	$scope.filterproducts=function(){
    		$scope.searchResults = true;
    	};
  }]);