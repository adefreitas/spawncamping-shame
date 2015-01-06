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
  	Primary.get(
  		function(data){
  			$scope.primaries = data;
  		}
	);
  }]);
