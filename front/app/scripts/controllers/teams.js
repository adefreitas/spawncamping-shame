'use strict';

/**
 * @ngdoc function
 * @name spawncampingShameApp.controller:TeamsCtrl
 * @description
 * # TeamsCtrl
 * Controller of the spawncampingShameApp
 */
angular.module('spawncampingShameApp')
  	.controller('TeamsCtrl', [ '$scope', 'TeamResource', function($scope, Team){  	
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

  		$scope.addTeam = function(){
  			$scope.add = true;
  		};

      $scope.saveTeam = function(){
        var team = new Team($scope);
        team.$save(function(){
          console.log('SUCCESS!!');
          $scope.team = {
            name: ''
          };
          $scope.add = false;
          $scope.refreshTeams();
        },function(err){
          console.log('Error :(');
          console.log(err);
        });
      };

      $scope.deleteTeam = function(id){
        console.log(id);
        Team.delete({id: id},
          function(data){
            console.log('Deleted!');
            $scope.refreshTeams();
            console.log(data);
          },
          function(err){
            console.log('Error');
            console.log(err);
          }
        );
      };
  }]);
