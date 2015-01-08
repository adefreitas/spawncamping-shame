'use strict';

/**
 * @ngdoc overview
 * @name spawncampingShameApp
 * @description
 * # spawncampingShameApp
 *
 * Main module of the application.
 */
angular
	.module('spawncampingShameApp', [
	    'ngAnimate',
	    'ngCookies',
	    'ngResource',
	    'ngSanitize',
	    'ngTouch',
		'ui.router'
  	])
    .constant('API', (function () {
        var toUrl=function(url){
            return 'http://localhost:3000'+url;
        };
        return {
            primaries: toUrl('/api/primaries'),
            primary: toUrl('/api/primaries/:id'),
            teams: toUrl('/api/teams'),
            team: toUrl('/api/teams/:id')
        };
    }()))
  	.config([ '$stateProvider', '$urlRouterProvider', '$httpProvider',
    	function ($stateProvider, $urlRouterProvider, $httpProvider) {

            $httpProvider.defaults.useXDomain = true;

    		$stateProvider
                .state('anon', {
                    abstract: true,
                    template: '<div ui-view/>',
                    data: {
                        access: '*'
                    }
                })
                .state('landing', {
                    url: '/landing',
                    templateUrl: 'views/landing.html',
                    controller: 'LandingCtrl'
                })
                .state('teams', {
                    url:'/teams',
                    templateUrl: 'views/teams.html',
                    controller: 'TeamsCtrl'
                })
                .state('primaries', {
                    url: '/primaries',
                    templateUrl: 'views/primaries.html',
                    controller: 'PrimaryCtrl'
                })
                ;
            $urlRouterProvider.otherwise('/landing', 'views/landing');
		}
	]);
