// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var isLoggedIn = false;
var app_start = angular.module('WOTO', ['ionic', 'WOTO.controllers'])

.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        if (cordova.platformId === "ios" && window.cordova && window.cordova.plugins.Keyboard) {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

            // Don't remove this line unless you know what you are doing. It stops the viewport
            // from snapping when text inputs are focused. Ionic handles this internally for
            // a much nicer keyboard experience.
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });

    hideBackButton = true;
})

.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        //the state for any tabbed view
        .state('mainTabs', {
            url: '/main',
            abstract: true,
            templateUrl: 'tabs/main/tabs.html'
        })

        .state('mainTabs.yourJobs', {
            url: '/yourJobs',
            templateUrl: 'tabs/main/tab-your-jobs.html',
            controller: 'MainCtrl'
        })

        .state('mainTabs.allJobs', {
            url: '/allJobs',
            templateUrl: 'tabs/main/tab-all-jobs.html'
        })

        .state('start', {
            url: '/start',
            templateUrl: 'tabs/start.html',
            controller: 'startCtrl'
        })

    $urlRouterProvider.otherwise('/start');
});


