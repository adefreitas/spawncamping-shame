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
  	.config([ '$stateProvider', '$urlRouterProvider', '$httpProvider',
    	function ($stateProvider, $urlRouterProvider, $httpProvider) {
    		$stateProvider
                .state('anon', {
                    abstract: true,
                    template: '<div ui-view/>',
                    data: {
                        access: '*'
                    }
                })
                .state('anon.register', {
                    url: '/landing',
                    templateUrl: 'views/landing.html',
                    controller: 'LandingCtrl'
                });
            $urlRouterProvider.otherwise('/landing', 'views/landing');
		}
	]);
