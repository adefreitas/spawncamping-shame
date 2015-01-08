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
      $scope.edit = false;
      $scope.primaryToEdit = {};

      $scope.refreshPrimaries = function(){
        Primary.query(
          function(data){
            $scope.primaries = data.primarys;
          }
        );
      };

       $scope.refreshTeams = function(){
          Team.query(
          function(data){
            $scope.teams = data.teams;
          }
        );
      };

      $scope.refreshTeams();
      $scope.refreshPrimaries();
  		

		  $scope.addPrimary = function(){
			 $scope.add = true;
       $scope.refreshTeams();
		  };

      $scope.savePrimary = function(){
        console.log($scope.primary);
        var teams = [];
        console.log($scope.primary.team.length);
        for(var i = 0; i < $scope.primary.team.length; i++){
          teams.push($scope.primary.team[i]._id);
        }
        console.log(teams);
        $scope.primary.team = teams;
        var primary = new Primary($scope);
        primary.$save(function(){
          console.log('SUCCESS!!');
          $scope.primary = {
            name: ''
          };
          $scope.add = false;
          $scope.refreshPrimaries();
        },
        function(err){
          console.log('Error :(');
          console.log(err);
        });
      };

      $scope.deletePrimary = function(id){
        console.log(id);
        Primary.delete({id: id},
          function(data){
            console.log('Deleted!');
            $scope.refreshPrimaries();
            console.log(data);
          },
          function(err){
            console.log('Error');
            console.log(err);
          }
        );
      };

      $scope.editPrimary = function(id){
        $scope.edit = true;
        Primary.get({id: id},
          function(data){
            $scope.primaryToEdit = data.primary;
            console.log(data);
          },
          function(err){
            console.log('Error');
            console.log(err);
          }
        );
      };

      $scope.updatePrimary = function(id){
        $scope.primary = $scope.primaryToEdit;

        var primary = new Primary($scope);
        
        primary.$update({id: id},
          function(data){
            console.log('SUCCESS');
            $scope.refreshPrimaries();
            $scope.edit = false;
          },
          function(err){
            console.log(err);
          }
        );
      };

  }]);
