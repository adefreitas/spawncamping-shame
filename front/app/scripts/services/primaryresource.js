'use strict';

angular.module('spawncampingShameApp')
  .factory('PrimaryResource', [ '$resource', 'API',
      function($resource, API){
          return $resource(API.primaries, {}, {
          	query: {
          		method: 'GET',
          	},
            get:{
              method: 'GET',
              params: {id: '@id'},
              url: API.primary
            },
          	delete:{
              method: 'DELETE',
          		params: {id: '@id'},
              url: API.primary
          	},
            update: {
              method: 'PUT',
              params: {id: '@id'},
              url: API.primary
            }
          });
      }
]);
