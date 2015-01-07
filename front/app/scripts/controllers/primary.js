'use strict';

/**
 * @ngdoc function
 * @name spawncampingShameApp.controller:PrimaryCtrl
 * @description
 * # PrimaryCtrl
 * Controller of the spawncampingShameApp
 */
angular.module('spawncampingShameApp')
  	.controller('PrimaryCtrl', [ '$scope', 'PrimaryResource', 'TeamResource', function($scope, Primary, Team){  	
  		$scope.add = false;

       $scope.refreshTeams = function(){
          Team.query(
          function(data){
            console.log(data);
            $scope.teams = data.teams;
          }
        );
      };

      $scope.refreshTeams();

  		Primary.get(
  			function(data){
  				$scope.primaries = data;
  			}
		  );

		  $scope.addPrimary = function(){
			 $scope.add = true;
		  };
  }]);
