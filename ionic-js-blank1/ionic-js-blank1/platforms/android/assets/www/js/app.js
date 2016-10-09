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
        .state('tab', {
            url: '/tab',
            abstract: true,
            templateURL: 'tabs/tab.html'
        })

        .state('tab.main', {
            url: '/main',
            views: {
                'tab-main': {
                    templateUrl: 'tabs/tab-main.html',
                    controller: 'MainCtrl'
                }
            }
        })

        .state('test', {
            url: '/test',
            templateUrl: 'tabs/tab-main.html'
        })

    $urlRouterProvider.otherwise('/test');
})


