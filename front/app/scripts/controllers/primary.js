'use strict';

/**
 * @ngdoc function
 * @name spawncampingShameApp.controller:PrimaryCtrl
 * @description
 * # PrimaryCtrl
 * Controller of the spawncampingShameApp
 */
angular.module('spawncampingShameApp')
  	.controller('PrimaryCtrl', [ '$scope', 'PrimaryResource', function($scope, Primary){  	
  		$scope.add = false;
  		Primary.get(
  			function(data){
  				$scope.primaries = data;
  			}
		);

		$scope.addPrimary = function(){
			$scope.add = true;
		}
  }]);
