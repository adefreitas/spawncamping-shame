'use strict';

angular.module('spawncampingShameApp')
  .factory('TeamResource', [ '$resource', 'API',
      function($resource, API){
          return $resource(API.team, {}, {
          	query:{
                method:'GET',
                url: API.teams
          	},
          	get:{
          		params: {id: '@id'},
          		method:'GET',
            },	
          	delete:{
          		params: {id: '@id'},
          		url: API.teamID,
          		method: 'DELETE'
          	}
          });
      }
]);
