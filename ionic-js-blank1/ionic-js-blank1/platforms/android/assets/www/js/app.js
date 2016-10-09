// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('WOTO', ['ionic', 'WOTO.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (cordova.platformId === "ios" && window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        //the state for any tabbed view
        .state('tabs', {
            url: '/tabs',
            abstract: true,
            templateUrl:'tabs/tabs.html'
        })

        .state('tabs.main1', {
            url: '/main1',
            templateUrl: 'tabs/tab-main1.html'
        })

        .state('tabs.main2', {
            url: '/main2',
            templateUrl: 'tabs/tab-main2.html'
        })

        .state('sign-in', {
             url: '/sign',
             templateUrl: 'tabs/sign-in.html',
             controller: 'signCtrl'
         })

        .state('sign-up', {
            url: '/signup',
            templateUrl: 'tabs/sign-up.html',
            controller: 'supCtrl'
        })


    $urlRouterProvider.otherwise('/tabs/main1');
})


