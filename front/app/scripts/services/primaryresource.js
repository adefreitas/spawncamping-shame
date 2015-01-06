'use strict';

angular.module('spawncampingShameApp')
  .factory('PrimaryResource', [ '$resource', 'API',
      function($resource, API){
          return $resource(API.primaries, {}, {});
      }
]);
