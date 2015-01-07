'use strict';

angular.module('spawncampingShameApp')
  .factory('PrimaryResource', [ '$resource', 'API',
      function($resource, API){
          return $resource(API.primary, {}, {
          	query: {
          		method: 'GET',
          		url: API.primaries
          	},
          	delete:{
          		params: {id: '@id'},
          		url: API.primaryID,
          		method: 'DELETE'
          	}
          });
      }
]);
